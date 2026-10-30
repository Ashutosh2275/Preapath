import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import { 
  Play, 
  Send, 
  RotateCcw, 
  Bookmark, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  History, 
  BookOpen, 
  Plus, 
  Trash2, 
  Sparkles,
  FileCode,
  Check,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  XCircle,
  ArrowRight,
  Code2
} from 'lucide-react';
import { useQuestionsStore } from '../../stores/useQuestionsStore';
import { useUserStore } from '../../stores/useUserStore';
import { runCodeGateway, submitCodeGateway } from '../../lib/executionGateway';
import { ProgrammingLanguage, TestCase, Submission, ExecutionVerdict } from '../../types';
import { DifficultyBadge, TrackBadge, SourceBadge, VerdictBadge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { Modal } from '../../components/common/Modal';

export const ProblemDetailPage: React.FC = () => {
  const { problemId } = useParams<{ problemId: string }>();
  const navigate = useNavigate();

  const { questions } = useQuestionsStore();
  const { 
    user, 
    saveDraft, 
    getDraft, 
    lastSelectedLanguage, 
    setProblemLanguage,
    customTestCases,
    addCustomTestCase,
    deleteCustomTestCase,
    problemProgress,
    recordSubmissionResult,
    toggleBookmark,
    toggleNeedsRevision,
    revealNextHint,
    saveProblemNote,
    submissions,
    addSubmission
  } = useUserStore();

  const question = questions.find(
    q => q.id === problemId || 
         q.slug === problemId || 
         (q.catalogNumber !== undefined && String(q.catalogNumber) === problemId)
  );

  // Fallback if question not found
  if (!question) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Problem Not Found</h2>
        <p className="text-xs text-slate-500">The requested problem could not be found or has not been published yet.</p>
        <Link to="/problems">
          <Button variant="primary" size="sm">Back to Question Bank</Button>
        </Link>
      </div>
    );
  }

  const isMCQ = question.problemFormat === 'MULTIPLE_CHOICE';

  // Neighboring questions for navigation
  const prevQuestion = question.catalogNumber 
    ? questions.find(q => q.catalogNumber === question.catalogNumber! - 1)
    : null;
  const nextQuestion = question.catalogNumber
    ? questions.find(q => q.catalogNumber === question.catalogNumber! + 1)
    : null;

  // Active language
  const defaultLang: ProgrammingLanguage = 
    lastSelectedLanguage[question.id] || 
    user?.preferredLanguage || 
    'python';
  const [language, setLanguage] = useState<ProgrammingLanguage>(defaultLang);

  // Editor code state
  const initialCode = getDraft(question.id, language) || question.starterCodeByLanguage?.[language] || '';
  const [code, setCode] = useState<string>(initialCode);
  const [isSavingDraft, setIsSavingDraft] = useState(false);
  const [draftSavedAt, setDraftSavedAt] = useState<string | null>(null);

  // Left Panel Tab
  const [leftTab, setLeftTab] = useState<'problem' | 'hints' | 'solutions' | 'notes' | 'history'>('problem');

  // Mobile Top Tab: 'problem' | 'editor' | 'cases' | 'output' | 'solve' | 'hints'
  const [mobileTab, setMobileTab] = useState<'problem' | 'editor' | 'cases' | 'output' | 'solve' | 'hints'>('problem');

  // Bottom Panel Tab
  const [bottomTab, setBottomTab] = useState<'sample' | 'custom' | 'output'>('sample');

  // Execution states
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [runOutputs, setRunOutputs] = useState<any[] | null>(null);
  const [latestSubmission, setLatestSubmission] = useState<Submission | null>(null);

  // MCQ interactive state
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isMcqSubmitted, setIsMcqSubmitted] = useState<boolean>(false);
  const [mcqFeedback, setMcqFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);

  // Custom Test Case input states
  const [customInput, setCustomInput] = useState('');
  const [customExpected, setCustomExpected] = useState('');
  const [customCaseName, setCustomCaseName] = useState('');
  const [isAddingCustom, setIsAddingCustom] = useState(false);

  // Reset confirmation modal
  const [showResetModal, setShowResetModal] = useState(false);
  const [showRestoreModal, setShowRestoreModal] = useState(false);
  const [selectedHistoricalCode, setSelectedHistoricalCode] = useState<string | null>(null);

  // Notes state
  const [noteContent, setNoteContent] = useState(problemProgress[question.id]?.notes || '');

  // Progress metrics
  const progress = problemProgress[question.id];
  const maxHintCount = question.hintStages?.length || question.hints?.length || 0;
  const revealedHints = progress?.revealedHintsCount || 0;
  const isBookmarked = progress?.bookmarked || false;
  const isRevision = progress?.needsRevision || false;

  // Question submissions
  const questionSubmissions = submissions.filter(s => s.problemId === question.id);

  // Debounced autosave effect for code
  const autosaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (isMCQ) return;
    if (autosaveTimeoutRef.current) clearTimeout(autosaveTimeoutRef.current);
    setIsSavingDraft(true);

    autosaveTimeoutRef.current = setTimeout(() => {
      saveDraft(question.id, language, code);
      setIsSavingDraft(false);
      setDraftSavedAt(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 600);

    return () => {
      if (autosaveTimeoutRef.current) clearTimeout(autosaveTimeoutRef.current);
    };
  }, [code, language, question.id, saveDraft, isMCQ]);

  // Handle language switch
  const handleLanguageChange = (newLang: ProgrammingLanguage) => {
    setLanguage(newLang);
    setProblemLanguage(question.id, newLang);
    const existingDraft = getDraft(question.id, newLang);
    if (existingDraft) {
      setCode(existingDraft);
    } else {
      setCode(question.starterCodeByLanguage?.[newLang] || '');
    }
  };

  // Reset to starter code
  const handleResetStarter = () => {
    const starter = question.starterCodeByLanguage?.[language] || '';
    setCode(starter);
    saveDraft(question.id, language, starter);
    setShowResetModal(false);
  };

  // Restore historical submission
  const handleRestoreSnapshot = () => {
    if (selectedHistoricalCode !== null) {
      setCode(selectedHistoricalCode);
      saveDraft(question.id, language, selectedHistoricalCode);
      setShowRestoreModal(false);
      setSelectedHistoricalCode(null);
    }
  };

  // Run Code
  const handleRunCode = async () => {
    setIsRunning(true);
    setBottomTab('output');
    setMobileTab('output');

    try {
      const activeCases: TestCase[] = bottomTab === 'custom' && customTestCases.length > 0
        ? customTestCases.filter(c => c.problemId === question.id).map(c => ({
            id: c.id,
            name: c.name,
            input: c.input,
            expectedOutput: c.expectedOutput || '',
          }))
        : question.publicTestCases;

      const results = await runCodeGateway(question.id, language, code, activeCases);
      setRunOutputs(results);
    } catch (err: any) {
      console.error('Run failed:', err);
    } finally {
      setIsRunning(false);
    }
  };

  // Submit Code
  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    setBottomTab('output');
    setMobileTab('output');

    try {
      const uid = user?.uid || 'guest-user';
      const result = await submitCodeGateway(uid, question.id, language, code);
      
      // Authoritative state update
      addSubmission(result.submission);
      recordSubmissionResult(question.id, result.submission.verdict, language, result.submission.executionTimeMs);
      setLatestSubmission(result.submission);
    } catch (err: any) {
      console.error('Submit failed:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Submit MCQ Answer
  const handleMcqSubmit = () => {
    if (!selectedOptionId) return;
    const isCorrect = selectedOptionId.toUpperCase() === (question.correctOptionId || '').toUpperCase();
    setIsMcqSubmitted(true);
    setMcqFeedback({
      isCorrect,
      message: isCorrect 
        ? `Correct! Option (${selectedOptionId}) is the exact verified answer.` 
        : `Incorrect. You chose (${selectedOptionId}), but the correct option is (${question.correctOptionId}).`
    });

    const uid = user?.uid || 'guest-user';
    const subRecord: Submission = {
      id: `mcq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      userId: uid,
      problemId: question.id,
      language: 'python',
      sourceCodeSnapshot: `Option Selected: ${selectedOptionId}\nCorrect Option: ${question.correctOptionId}`,
      verdict: isCorrect ? 'Accepted' : 'Wrong Answer',
      executionTimeMs: 15,
      memoryUsedKb: 256,
      passedTests: isCorrect ? 1 : 0,
      totalTests: 1,
      submittedAt: new Date().toISOString(),
    };

    addSubmission(subRecord);
    recordSubmissionResult(question.id, isCorrect ? 'Accepted' : 'Wrong Answer', 'python', 15);
  };

  // Reset MCQ Answer
  const handleMcqReset = () => {
    setSelectedOptionId(null);
    setIsMcqSubmitted(false);
    setMcqFeedback(null);
  };

  // Add custom test case
  const handleSaveCustomCase = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    addCustomTestCase({
      userId: user?.uid || 'guest',
      problemId: question.id,
      name: customCaseName.trim() || `Custom Case ${customTestCases.filter(c => c.problemId === question.id).length + 1}`,
      input: customInput.trim(),
      expectedOutput: customExpected.trim() || undefined,
    });

    setCustomInput('');
    setCustomExpected('');
    setCustomCaseName('');
    setIsAddingCustom(false);
  };

  return (
    <div className="flex-1 flex flex-col min-h-[calc(100vh-5rem)] bg-slate-50">
      {/* Top Problem Navigation & Action Bar */}
      <div className="bg-white border-b border-slate-200 px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            to="/problems"
            className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 font-medium"
          >
            ← Problem Bank
          </Link>
          <span className="text-slate-300">|</span>
          <div className="flex items-center gap-1.5">
            {prevQuestion && (
              <Link
                to={`/problems/${prevQuestion.catalogNumber || prevQuestion.slug || prevQuestion.id}`}
                className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                title={`Previous: #${prevQuestion.catalogNumber} ${prevQuestion.title}`}
              >
                <ChevronLeft className="w-4 h-4" />
              </Link>
            )}
            <h1 className="font-bold text-sm text-slate-900 truncate max-w-[180px] sm:max-w-xs md:max-w-md">
              {question.catalogNumber ? `${question.catalogNumber}. ${question.title}` : question.title}
            </h1>
            {nextQuestion && (
              <Link
                to={`/problems/${nextQuestion.catalogNumber || nextQuestion.slug || nextQuestion.id}`}
                className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                title={`Next: #${nextQuestion.catalogNumber} ${nextQuestion.title}`}
              >
                <ChevronRight className="w-4 h-4" />
              </Link>
            )}
          </div>
          <DifficultyBadge difficulty={question.difficulty} />
          {isMCQ ? (
            <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200">
              MCQ Practice
            </span>
          ) : (
            <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
              Coding
            </span>
          )}
          {question.externalUrl && (
            <a
              href={question.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1 text-[11px] font-medium text-amber-600 hover:underline"
              title="View on LeetCode"
            >
              LeetCode #{question.externalProblemId || ''}
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Bookmark Button */}
          <button
            onClick={() => toggleBookmark(question.id)}
            className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 transition-colors ${
              isBookmarked
                ? 'border-indigo-300 bg-indigo-50 text-indigo-600'
                : 'border-slate-200 text-slate-400 hover:text-slate-600'
            }`}
            title="Bookmark this problem"
          >
            <Bookmark className="w-3.5 h-3.5 fill-current" />
            <span className="hidden sm:inline text-[11px] font-medium">Bookmark</span>
          </button>

          {/* Revision Flag Button */}
          <button
            onClick={() => toggleNeedsRevision(question.id)}
            className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 transition-colors ${
              isRevision
                ? 'border-amber-300 bg-amber-50 text-amber-600'
                : 'border-slate-200 text-slate-400 hover:text-slate-600'
            }`}
            title="Flag for later revision"
          >
            <History className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[11px] font-medium">Flag Revision</span>
          </button>
        </div>
      </div>

      {/* Mobile Tab Switcher */}
      <div className="md:hidden flex border-b border-slate-200 bg-white text-xs font-semibold">
        {(isMCQ ? ['problem', 'solve', 'hints'] : ['problem', 'editor', 'cases', 'output']).map((tab) => (
          <button
            key={tab}
            onClick={() => setMobileTab(tab as any)}
            className={`flex-1 py-2 text-center capitalize border-b-2 transition-colors ${
              mobileTab === tab
                ? 'border-primary text-primary'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Workspace Layout (Two Columns) */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-0 overflow-hidden">
        {/* Left Column: Problem Details, Progressive Hints, Reference Solutions, Notes, History */}
        <div className={`lg:col-span-5 border-r border-slate-200 bg-white flex flex-col h-full overflow-hidden ${
          mobileTab !== 'problem' ? 'hidden md:flex' : 'flex'
        }`}>
          {/* Subtabs Header */}
          <div className="flex items-center border-b border-slate-200 bg-slate-50 px-3 text-xs font-medium overflow-x-auto">
            <button
              onClick={() => setLeftTab('problem')}
              className={`py-2.5 px-3 border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
                leftTab === 'problem'
                  ? 'border-primary text-primary font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Description
            </button>
            <button
              onClick={() => setLeftTab('hints')}
              className={`py-2.5 px-3 border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
                leftTab === 'hints'
                  ? 'border-primary text-primary font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              {question.hintStages && question.hintStages.length > 0 ? (
                <>12-Stage Hints {revealedHints > 0 && `(${revealedHints}/12)`}</>
              ) : (
                <>Hints {revealedHints > 0 && `(${revealedHints}/${maxHintCount})`}</>
              )}
            </button>
            {question.solutions && question.solutions.length > 0 && (
              <button
                onClick={() => setLeftTab('solutions')}
                className={`py-2.5 px-3 border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
                  leftTab === 'solutions'
                    ? 'border-primary text-primary font-bold'
                    : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                Solutions ({question.solutions.length})
              </button>
            )}
            <button
              onClick={() => setLeftTab('notes')}
              className={`py-2.5 px-3 border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
                leftTab === 'notes'
                  ? 'border-primary text-primary font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              Notes
            </button>
            <button
              onClick={() => setLeftTab('history')}
              className={`py-2.5 px-3 border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
                leftTab === 'history'
                  ? 'border-primary text-primary font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <History className="w-3.5 h-3.5" />
              History {questionSubmissions.length > 0 && `(${questionSubmissions.length})`}
            </button>
          </div>

          {/* Left Panel Body */}
          <div className="flex-1 p-5 overflow-y-auto space-y-6 text-sm text-slate-700">
            {leftTab === 'problem' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-2">
                    {question.catalogNumber ? `${question.catalogNumber}. ${question.title}` : question.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-2">
                    <DifficultyBadge difficulty={question.difficulty} />
                    <SourceBadge sourceType={question.sourceType} />
                    {question.targetTracks.map(t => (
                      <TrackBadge key={t} track={t} />
                    ))}
                    {question.topics?.slice(0, 3).map(topic => (
                      <span key={topic} className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Problem Statement */}
                <div className="space-y-3 leading-relaxed whitespace-pre-line font-sans text-xs sm:text-sm">
                  {question.problemStatement}
                </div>

                {/* Input & Output Format (For Coding / Standard IO) */}
                {!isMCQ && (
                  <div className="space-y-3 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <div>
                      <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[10px] mb-1">
                        Input Format
                      </h4>
                      <p className="text-slate-600">{question.inputFormat}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[10px] mb-1">
                        Output Format
                      </h4>
                      <p className="text-slate-600">{question.outputFormat}</p>
                    </div>
                  </div>
                )}

                {/* Constraints */}
                {question.constraints && question.constraints.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[10px]">
                      Constraints & Bounds
                    </h4>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-slate-600 font-mono">
                      {question.constraints.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Examples */}
                {question.examples && question.examples.length > 0 && !isMCQ && (
                  <div className="space-y-4">
                    <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[10px]">
                      Examples
                    </h4>
                    {question.examples.map((ex, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 space-y-2 text-xs"
                      >
                        <span className="font-semibold text-slate-700">
                          Example {idx + 1}:
                        </span>
                        <div>
                          <span className="text-[10px] text-slate-400 block font-mono uppercase">Input:</span>
                          <pre className="p-2 bg-white rounded border border-slate-200 font-mono text-slate-800 overflow-x-auto">
                            {ex.input}
                          </pre>
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-400 block font-mono uppercase">Output:</span>
                          <pre className="p-2 bg-white rounded border border-slate-200 font-mono text-slate-800 overflow-x-auto">
                            {ex.output}
                          </pre>
                        </div>
                        {ex.explanation && (
                          <p className="text-[11px] text-slate-500 italic">
                            <strong>Explanation:</strong> {ex.explanation}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Provenance note */}
                {question.sourceReferences?.notes && (
                  <div className="p-3 bg-amber-50/50 rounded-lg border border-amber-200 text-[11px] text-amber-800">
                    <strong>TCS Pattern Note:</strong> {question.sourceReferences.notes}
                  </div>
                )}
              </div>
            )}

            {/* Progressive Hint System (12 Stages or Standard Hints) */}
            {leftTab === 'hints' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    {question.hintStages && question.hintStages.length > 0 
                      ? '12-Stage Progressive Hint System' 
                      : 'Progressive Problem Hints'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Guidance designed after real TCS technical interviewers. Unlocks layer by layer to protect your independent reasoning.
                  </p>
                </div>

                {/* Progress bar */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Progress: {revealedHints} of {maxHintCount} stages unlocked</span>
                    <span>{Math.round((revealedHints / Math.max(maxHintCount, 1)) * 100)}%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-primary h-full transition-all duration-300 rounded-full" 
                      style={{ width: `${Math.min(100, (revealedHints / Math.max(maxHintCount, 1)) * 100)}%` }} 
                    />
                  </div>
                </div>

                {/* If question has 12 hint stages */}
                {question.hintStages && question.hintStages.length > 0 ? (
                  <div className="space-y-3">
                    {question.hintStages.slice(0, revealedHints).map((stage) => (
                      <div
                        key={stage.stage}
                        className="p-4 rounded-xl border border-primary/20 bg-primary/5 text-xs text-slate-800 space-y-2 animate-in fade-in"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-primary block uppercase text-[11px] tracking-wide">
                            Stage {stage.stage}: {stage.title}
                          </span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <p className="leading-relaxed whitespace-pre-line text-slate-700">
                          {stage.content}
                        </p>
                      </div>
                    ))}

                    {revealedHints === 0 && (
                      <div className="p-6 text-center rounded-xl border border-dashed border-slate-300 bg-slate-50/50 space-y-2">
                        <HelpCircle className="w-8 h-8 text-slate-400 mx-auto" />
                        <h4 className="font-semibold text-slate-800 text-xs">No Hints Revealed Yet</h4>
                        <p className="text-[11px] text-slate-500 max-w-xs mx-auto">
                          Try thinking through the algorithm first. When you are stuck, unlock Stage 1 to clarify the core goal.
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  /* Fallback to simple hints array */
                  <div className="space-y-3">
                    {question.hints.slice(0, revealedHints).map((hint, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl border border-teal-200 bg-teal-50/40 text-xs text-slate-800 space-y-1.5 animate-in fade-in"
                      >
                        <span className="font-bold text-teal-700 block uppercase text-[10px]">
                          Hint {idx + 1}
                        </span>
                        <p className="leading-relaxed">{hint}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Action to reveal next hint */}
                {revealedHints < maxHintCount ? (
                  <div className="pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => revealNextHint(question.id, maxHintCount)}
                      leftIcon={<Sparkles className="w-4 h-4 text-primary" />}
                      className="w-full text-xs"
                    >
                      {question.hintStages && question.hintStages[revealedHints]
                        ? `Reveal Stage ${revealedHints + 1}: ${question.hintStages[revealedHints].title}`
                        : `Reveal Next Hint (${revealedHints + 1} of ${maxHintCount})`}
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4 pt-4 border-t border-slate-200">
                    <div className="p-4 rounded-xl border border-indigo-200 bg-indigo-50/50 text-xs space-y-3">
                      <span className="font-bold text-indigo-700 uppercase text-[10px]">
                        Full Concept Explanation & Complexity
                      </span>
                      <div className="whitespace-pre-line text-slate-800 leading-relaxed">
                        {question.explanation}
                      </div>
                      <div className="pt-2 border-t border-indigo-100 flex items-center justify-between text-[11px] font-mono text-indigo-700">
                        <span>Time: {question.timeComplexity || 'O(N)'}</span>
                        <span>Space: {question.spaceComplexity || 'O(1)'}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Reference Solutions Tab */}
            {leftTab === 'solutions' && question.solutions && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-primary" />
                    Validated Reference Solutions
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Multi-language optimal solutions verified against all edge cases and constraints.
                  </p>
                </div>

                <div className="space-y-5">
                  {question.solutions.map((sol, idx) => (
                    <div key={idx} className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-slate-900">
                          {sol.approachName}
                        </span>
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                          {sol.language.toUpperCase()}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {sol.explanation}
                      </p>

                      <pre className="p-3 bg-slate-900 text-slate-200 rounded-lg font-mono text-[11px] overflow-x-auto">
                        {sol.code}
                      </pre>

                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-1 border-t border-slate-200">
                        <span>Time: {sol.timeComplexity}</span>
                        <span>Space: {sol.spaceComplexity}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Notes Tab */}
            {leftTab === 'notes' && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-base text-slate-900">
                    Private Problem Notes
                  </h3>
                  <p className="text-xs text-slate-500">
                    Your notes are automatically saved to your profile and persist across devices.
                  </p>
                </div>
                <textarea
                  rows={10}
                  value={noteContent}
                  onChange={(e) => {
                    setNoteContent(e.target.value);
                    saveProblemNote(question.id, e.target.value);
                  }}
                  placeholder="Record edge cases you noticed, time complexity tradeoffs, or key syntax shortcuts..."
                  className="w-full p-3 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary font-mono"
                />
              </div>
            )}

            {/* Attempt History Tab */}
            {leftTab === 'history' && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-base text-slate-900">
                    Judged Submission History
                  </h3>
                  <p className="text-xs text-slate-500">
                    Inspect previous code snapshots or restore them into the editor.
                  </p>
                </div>

                {questionSubmissions.length > 0 ? (
                  <div className="space-y-3">
                    {questionSubmissions.map((sub) => (
                      <div
                        key={sub.id}
                        className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-xs space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <VerdictBadge verdict={sub.verdict} />
                          <span className="text-[11px] text-slate-400">
                            {new Date(sub.submittedAt).toLocaleTimeString()} • {new Date(sub.submittedAt).toLocaleDateString()}
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-slate-500 text-[11px] font-mono">
                          <span>{sub.language.toUpperCase()} • {sub.passedTests}/{sub.totalTests} tests passed</span>
                          <span>{sub.executionTimeMs}ms • {sub.memoryUsedKb}KB</span>
                        </div>

                        {!isMCQ && (
                          <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-[11px] py-1"
                              onClick={() => {
                                setSelectedHistoricalCode(sub.sourceCodeSnapshot);
                                setShowRestoreModal(true);
                              }}
                            >
                              Restore This Code
                            </Button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center text-xs text-slate-500 border border-dashed rounded-xl">
                    No submissions recorded yet. {isMCQ ? 'Choose an option to submit your answer.' : 'Click Submit to run your code against public and evaluation cases.'}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Multiple Choice Practice Workspace OR Monaco Code Editor */}
        {isMCQ ? (
          /* MCQ Practice Interface */
          <div className={`lg:col-span-7 flex flex-col h-full bg-slate-50 overflow-y-auto p-6 md:p-8 ${
            mobileTab !== 'solve' && mobileTab !== 'editor' ? 'hidden md:flex' : 'flex'
          }`}>
            <div className="max-w-2xl w-full mx-auto space-y-6">
              {/* Card Header */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    Aptitude & Concept Question
                  </span>
                  {progress?.currentStatus === 'SOLVED' && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Solved
                    </span>
                  )}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {question.problemStatement}
                </h3>
              </div>

              {/* Options Selection List */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Select the correct answer:
                </h4>

                <div className="space-y-2.5">
                  {(question.options || []).map((opt) => {
                    const isSelected = selectedOptionId === opt.id;
                    const isCorrect = isMcqSubmitted && opt.id.toUpperCase() === (question.correctOptionId || '').toUpperCase();
                    const isWrongSelection = isMcqSubmitted && isSelected && !isCorrect;

                    let cardClass = "border-slate-200 bg-white text-slate-800 hover:border-primary/50 hover:bg-slate-50/50";
                    if (isSelected && !isMcqSubmitted) {
                      cardClass = "border-primary bg-primary/5 text-primary font-medium ring-1 ring-primary";
                    } else if (isCorrect) {
                      cardClass = "border-emerald-500 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-500";
                    } else if (isWrongSelection) {
                      cardClass = "border-rose-500 bg-rose-50 text-rose-900 ring-1 ring-rose-500";
                    }

                    return (
                      <button
                        key={opt.id}
                        type="button"
                        disabled={isMcqSubmitted}
                        onClick={() => setSelectedOptionId(opt.id)}
                        className={`w-full p-4 rounded-xl border text-left flex items-start gap-3 transition-all ${cardClass}`}
                      >
                        <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                          isCorrect 
                            ? 'bg-emerald-500 text-white' 
                            : isWrongSelection 
                            ? 'bg-rose-500 text-white' 
                            : isSelected 
                            ? 'bg-primary text-white' 
                            : 'bg-slate-100 text-slate-700'
                        }`}>
                          {isCorrect ? '✓' : isWrongSelection ? '✗' : opt.id}
                        </span>
                        <div className="flex-1 text-sm pt-0.5 leading-relaxed">
                          {opt.text}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Feedback Alert */}
              {mcqFeedback && (
                <div className={`p-4 rounded-xl border flex items-start gap-3 animate-in fade-in ${
                  mcqFeedback.isCorrect 
                    ? 'border-emerald-300 bg-emerald-50 text-emerald-800' 
                    : 'border-rose-300 bg-rose-50 text-rose-800'
                }`}>
                  {mcqFeedback.isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-1">
                    <h5 className="font-bold text-sm">
                      {mcqFeedback.isCorrect ? 'Correct Answer!' : 'Incorrect Answer'}
                    </h5>
                    <p className="text-xs leading-relaxed">
                      {mcqFeedback.message}
                    </p>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-2">
                  {!isMcqSubmitted ? (
                    <Button
                      variant="primary"
                      size="md"
                      disabled={!selectedOptionId}
                      onClick={handleMcqSubmit}
                      leftIcon={<Send className="w-4 h-4" />}
                    >
                      Submit Answer
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="md"
                      onClick={handleMcqReset}
                      leftIcon={<RotateCcw className="w-4 h-4" />}
                    >
                      Try Again
                    </Button>
                  )}
                </div>

                {nextQuestion && (
                  <Link to={`/problems/${nextQuestion.catalogNumber || nextQuestion.slug || nextQuestion.id}`}>
                    <Button
                      variant="secondary"
                      size="md"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Next Problem ({nextQuestion.catalogNumber})
                    </Button>
                  </Link>
                )}
              </div>

              {/* Detailed Explanation / Derivation (Visible when submitted) */}
              {isMcqSubmitted && (
                <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 animate-in fade-in">
                  <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Step-by-Step Derivation & Solution
                  </h4>
                  <div className="text-xs text-slate-700 leading-relaxed whitespace-pre-line bg-slate-50 p-4 rounded-xl border border-slate-200 font-sans">
                    {question.explanation}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Coding Monaco Editor + Test Cases (Desktop: 7 cols) */
          <div className={`lg:col-span-7 flex flex-col h-full bg-slate-900 overflow-hidden ${
            mobileTab !== 'editor' && mobileTab !== 'cases' && mobileTab !== 'output' ? 'hidden md:flex' : 'flex'
          }`}>
            {/* Editor Header Toolbar */}
            <div className="bg-slate-900 border-b border-slate-800 px-4 py-2 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                {/* Language Selector */}
                <select
                  value={language}
                  onChange={(e) => handleLanguageChange(e.target.value as ProgrammingLanguage)}
                  className="bg-slate-800 text-slate-200 font-mono text-xs px-2.5 py-1 rounded border border-slate-700 focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="python">Python 3</option>
                  <option value="cpp">C++ (GCC 9.2)</option>
                  <option value="java">Java (OpenJDK 17)</option>
                  <option value="c">C (GCC 9.2)</option>
                </select>

                {/* Autosave Status */}
                <span className="text-[11px] text-slate-500 flex items-center gap-1 font-mono">
                  {isSavingDraft ? (
                    <span>Saving draft...</span>
                  ) : draftSavedAt ? (
                    <span className="text-emerald-600">✓ Saved draft ({draftSavedAt})</span>
                  ) : (
                    <span>Draft saved</span>
                  )}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowResetModal(true)}
                  className="p-1 rounded text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  title="Reset to Starter Code"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Monaco Editor Container - Light Theme vs */}
            <div className="flex-1 min-h-[320px] bg-white border-b border-slate-200">
              <Editor
                height="100%"
                language={language === 'c' ? 'c' : language === 'cpp' ? 'cpp' : language === 'java' ? 'java' : 'python'}
                theme="vs"
                value={code}
                onChange={(newVal) => setCode(newVal || '')}
                options={{
                  fontSize: 13,
                  fontFamily: "'Fira Code', 'JetBrains Mono', Consolas, monospace",
                  fontLigatures: true,
                  minimap: { enabled: false },
                  scrollBeyondLastLine: false,
                  lineNumbers: 'on',
                  automaticLayout: true,
                  tabSize: 4,
                  lineDecorationsWidth: 10,
                  renderLineHighlight: 'all',
                }}
              />
            </div>

            {/* Bottom Test Cases & Output Panel - Clean Light Mode */}
            <div className="border-t border-slate-200 bg-white flex flex-col max-h-[320px]">
              {/* Panel Tabs & Action Buttons */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-slate-200 bg-slate-50 text-xs">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setBottomTab('sample')}
                    className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                      bottomTab === 'sample'
                        ? 'bg-white text-primary font-bold border border-slate-200 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Sample Cases ({question.publicTestCases?.length || 0})
                  </button>

                  <button
                    onClick={() => setBottomTab('custom')}
                    className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                      bottomTab === 'custom'
                        ? 'bg-white text-primary font-bold border border-slate-200 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Custom Cases ({customTestCases.filter(c => c.problemId === question.id).length})
                  </button>

                  <button
                    onClick={() => setBottomTab('output')}
                    className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                      bottomTab === 'output'
                        ? 'bg-white text-primary font-bold border border-slate-200 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Execution Output {runOutputs && `(Result)`}
                  </button>
                </div>

                {/* Action Buttons: Run vs Submit */}
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleRunCode}
                    isLoading={isRunning}
                    leftIcon={<Play className="w-3.5 h-3.5" />}
                    className="bg-white text-slate-700 border-slate-300 hover:bg-slate-50 text-xs py-1"
                  >
                    Run Code
                  </Button>

                  <Button
                    variant="primary"
                    size="sm"
                    onClick={handleFinalSubmit}
                    isLoading={isSubmitting}
                    leftIcon={<Send className="w-3.5 h-3.5" />}
                    className="text-xs py-1"
                  >
                    Submit Code
                  </Button>
                </div>
              </div>

              {/* Panel Content */}
              <div className="p-4 overflow-y-auto text-xs font-mono text-slate-800 min-h-[140px] max-h-[220px]">
                {bottomTab === 'sample' && (
                  <div className="space-y-3">
                    {(question.publicTestCases || []).map((tc, idx) => (
                      <div key={tc.id || idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                        <div className="flex items-center justify-between text-slate-500 text-[11px] font-sans">
                          <span className="font-semibold text-slate-700">Case {idx + 1} ({tc.name || 'Sample'})</span>
                        </div>
                        <div>
                          <span className="text-slate-500 text-[10px] block font-sans mb-1">Input (stdin):</span>
                          <div className="text-slate-900 bg-white border border-slate-200 p-2 rounded">{tc.input}</div>
                        </div>
                        <div>
                          <span className="text-slate-500 text-[10px] block font-sans mb-1">Expected Output:</span>
                          <div className="text-emerald-700 bg-emerald-50/70 border border-emerald-200 p-2 rounded">{tc.expectedOutput}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {bottomTab === 'custom' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 text-xs font-sans font-medium">Your Private Test Cases:</span>
                      {!isAddingCustom && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setIsAddingCustom(true)}
                          leftIcon={<Plus className="w-3 h-3" />}
                          className="text-[11px] py-0.5 bg-white border-slate-300 text-slate-700"
                        >
                          Add Custom Case
                        </Button>
                      )}
                    </div>

                    {isAddingCustom && (
                      <form onSubmit={handleSaveCustomCase} className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-2.5">
                        <input
                          type="text"
                          placeholder="Test case name (optional)"
                          value={customCaseName}
                          onChange={(e) => setCustomCaseName(e.target.value)}
                          className="w-full p-2 text-xs bg-white border border-slate-300 rounded text-slate-900"
                        />
                        <div>
                          <label className="text-[10px] text-slate-500 block mb-1 font-sans">Input (stdin):</label>
                          <textarea
                            rows={2}
                            required
                            value={customInput}
                            onChange={(e) => setCustomInput(e.target.value)}
                            placeholder="e.g. 15"
                            className="w-full p-2 text-xs bg-white border border-slate-300 rounded text-slate-900 font-mono"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] text-slate-500 block mb-1 font-sans">Expected Output (optional):</label>
                          <input
                            type="text"
                            value={customExpected}
                            onChange={(e) => setCustomExpected(e.target.value)}
                            placeholder="e.g. 45"
                            className="w-full p-2 text-xs bg-white border border-slate-300 rounded text-slate-900 font-mono"
                          />
                        </div>
                        <div className="flex justify-end gap-2 pt-1 font-sans">
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsAddingCustom(false)}
                            className="text-[11px]"
                          >
                            Cancel
                          </Button>
                          <Button type="submit" variant="primary" size="sm" className="text-[11px]">
                            Save Case
                          </Button>
                        </div>
                      </form>
                    )}

                    {customTestCases.filter(c => c.problemId === question.id).map((tc) => (
                      <div key={tc.id} className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-2 relative group">
                        <div className="flex items-center justify-between text-slate-500 text-[11px] font-sans">
                          <span className="font-semibold text-slate-700">{tc.name}</span>
                          <button
                            onClick={() => deleteCustomTestCase(tc.id)}
                            className="text-slate-400 hover:text-rose-600 transition-colors"
                            title="Delete custom case"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div>
                          <span className="text-slate-500 text-[10px] block font-sans mb-1">Input:</span>
                          <div className="text-slate-900 bg-white border border-slate-200 p-2 rounded">{tc.input}</div>
                        </div>
                        {tc.expectedOutput && (
                          <div>
                            <span className="text-slate-500 text-[10px] block font-sans mb-1">Expected Output:</span>
                            <div className="text-emerald-700 bg-emerald-50 border border-emerald-200 p-2 rounded">{tc.expectedOutput}</div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {bottomTab === 'output' && (
                  <div className="space-y-3 font-sans">
                    {latestSubmission ? (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-slate-600 font-medium">Judged Verdict:</span>
                            <VerdictBadge verdict={latestSubmission.verdict} />
                          </div>
                          <span className="text-[11px] text-slate-500 font-mono">
                            {latestSubmission.passedTests}/{latestSubmission.totalTests} Passed • {latestSubmission.executionTimeMs}ms • {latestSubmission.memoryUsedKb} KB
                          </span>
                        </div>

                        {latestSubmission.publicCaseResults && (
                          <div className="space-y-2 font-mono">
                            {latestSubmission.publicCaseResults.map((pcr) => (
                              <div key={pcr.caseIndex} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs space-y-1">
                                <div className="flex items-center justify-between">
                                  <span className="font-semibold text-slate-700">Test Case #{pcr.caseIndex}</span>
                                  <span className={pcr.passed ? 'text-emerald-600 font-bold' : 'text-rose-600 font-bold'}>
                                    {pcr.passed ? 'Passed ✓' : 'Failed ✗'}
                                  </span>
                                </div>
                                <div className="text-slate-600 text-[11px]">
                                  Actual Output: <span className="text-slate-900 bg-white px-1.5 py-0.5 rounded border border-slate-200">{pcr.actualOutput}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : runOutputs ? (
                      <div className="space-y-2 font-mono">
                        {runOutputs.map((out, idx) => (
                          <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-2 text-xs">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-slate-700">{out.name}</span>
                              <span className={out.isPassed ? 'text-emerald-600 font-bold' : out.verdict === 'Passed' ? 'text-emerald-600' : 'text-amber-600 font-bold'}>
                                {out.verdict} {out.timeMs > 0 && `(${out.timeMs}ms)`}
                              </span>
                            </div>
                            <div>
                              <span className="text-slate-500 text-[10px] block font-sans mb-1">Output:</span>
                              <div className="text-slate-900 bg-white border border-slate-200 p-2 rounded">{out.actualOutput || '(no stdout output)'}</div>
                            </div>
                            {out.stderr && (
                              <div>
                                <span className="text-rose-600 text-[10px] block font-sans mb-1">Standard Error:</span>
                                <div className="text-rose-700 bg-rose-50 border border-rose-200 p-2 rounded">{out.stderr}</div>
                              </div>
                            )}
                            {out.compileOutput && (
                              <div>
                                <span className="text-rose-600 text-[10px] block font-sans mb-1">Compiler Message:</span>
                                <div className="text-rose-700 bg-rose-50 border border-rose-200 p-2 rounded">{out.compileOutput}</div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center text-slate-500 py-6 text-xs">
                        Click "Run Code" to test against visible sample/custom cases, or "Submit Code" for judged evaluation.
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Reset Confirmation Modal */}
      <Modal
        isOpen={showResetModal}
        onClose={() => setShowResetModal(false)}
        title="Reset to Starter Code?"
        description="Are you sure you want to reset your editor? Your current unsaved edits will be replaced with the default problem template."
      >
        <div className="flex items-center justify-end gap-2 pt-4">
          <Button variant="ghost" size="sm" onClick={() => setShowResetModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" size="sm" onClick={handleResetStarter}>
            Reset Code
          </Button>
        </div>
      </Modal>

      {/* Restore Historical Code Modal */}
      <Modal
        isOpen={showRestoreModal}
        onClose={() => setShowRestoreModal(false)}
        title="Restore Historical Code Snapshot?"
        description="Restoring this snapshot will load the selected submitted code into your current editor. Your previous history records remain safely preserved."
      >
        <div className="flex items-center justify-end gap-2 pt-4">
          <Button variant="ghost" size="sm" onClick={() => setShowRestoreModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" size="sm" onClick={handleRestoreSnapshot}>
            Confirm Restore
          </Button>
        </div>
      </Modal>
    </div>
  );
};
