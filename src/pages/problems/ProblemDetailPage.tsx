import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import { 
  Play, 
  Send, 
  RotateCcw, 
  Bookmark, 
  Clock, 
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
  ChevronRight,
  Maximize2,
  Minimize2
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

  const question = questions.find(q => q.id === problemId || q.slug === problemId);

  // Fallback if question not found
  if (!question) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Problem Not Found</h2>
        <p className="text-xs text-slate-500">The requested problem could not be found or has not been published yet.</p>
        <Link to="/problems">
          <Button variant="primary" size="sm">Back to Question Bank</Button>
        </Link>
      </div>
    );
  }

  // Active language
  const defaultLang: ProgrammingLanguage = 
    lastSelectedLanguage[question.id] || 
    user?.preferredLanguage || 
    'python';
  const [language, setLanguage] = useState<ProgrammingLanguage>(defaultLang);

  // Editor code state
  const initialCode = getDraft(question.id, language) || question.starterCodeByLanguage[language] || '';
  const [code, setCode] = useState<string>(initialCode);
  const [isSavingDraft, setIsSavingDraft] = useState(false);
  const [draftSavedAt, setDraftSavedAt] = useState<string | null>(null);

  // Left Panel Tab
  const [leftTab, setLeftTab] = useState<'problem' | 'hints' | 'notes' | 'history'>('problem');

  // Mobile Top Tab: 'problem' | 'editor' | 'cases' | 'output'
  const [mobileTab, setMobileTab] = useState<'problem' | 'editor' | 'cases' | 'output'>('problem');

  // Bottom Panel Tab
  const [bottomTab, setBottomTab] = useState<'sample' | 'custom' | 'output'>('sample');

  // Execution states
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [runOutputs, setRunOutputs] = useState<any[] | null>(null);
  const [latestSubmission, setLatestSubmission] = useState<Submission | null>(null);

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
  const revealedHints = progress?.revealedHintsCount || 0;
  const isBookmarked = progress?.bookmarked || false;
  const isRevision = progress?.needsRevision || false;

  // Question submissions
  const questionSubmissions = submissions.filter(s => s.problemId === question.id);

  // Debounced autosave effect
  const autosaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
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
  }, [code, language, question.id, saveDraft]);

  // Handle language switch
  const handleLanguageChange = (newLang: ProgrammingLanguage) => {
    setLanguage(newLang);
    setProblemLanguage(question.id, newLang);
    const existingDraft = getDraft(question.id, newLang);
    if (existingDraft) {
      setCode(existingDraft);
    } else {
      setCode(question.starterCodeByLanguage[newLang] || '');
    }
  };

  // Reset to starter code
  const handleResetStarter = () => {
    const starter = question.starterCodeByLanguage[language] || '';
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
    <div className="flex-1 flex flex-col min-h-[calc(100vh-5rem)] bg-slate-50 dark:bg-slate-950">
      {/* Top Problem Navigation & Action Bar */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            to="/problems"
            className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 flex items-center gap-1 font-medium"
          >
            ← Problem Bank
          </Link>
          <span className="text-slate-300 dark:text-slate-700">|</span>
          <h1 className="font-bold text-sm text-slate-900 dark:text-white truncate max-w-[200px] sm:max-w-md">
            {question.title}
          </h1>
          <DifficultyBadge difficulty={question.difficulty} />
        </div>

        <div className="flex items-center gap-2">
          {/* Bookmark Button */}
          <button
            onClick={() => toggleBookmark(question.id)}
            className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 transition-colors ${
              isBookmarked
                ? 'border-indigo-300 bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400'
                : 'border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600'
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
                ? 'border-amber-300 bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400'
                : 'border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600'
            }`}
            title="Flag for later revision"
          >
            <History className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[11px] font-medium">Flag Revision</span>
          </button>
        </div>
      </div>

      {/* Mobile Tab Switcher */}
      <div className="md:hidden flex border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold">
        {(['problem', 'editor', 'cases', 'output'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setMobileTab(tab)}
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

      {/* Main Workspace Layout (Two Resizable/Flex Columns on Desktop) */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-0 overflow-hidden">
        {/* Left Column: Problem Details, Hints, Notes, History (Desktop: 5 cols) */}
        <div className={`lg:col-span-5 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col h-full overflow-hidden ${
          mobileTab !== 'problem' ? 'hidden md:flex' : 'flex'
        }`}>
          {/* Subtabs Header */}
          <div className="flex items-center border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 text-xs font-medium">
            <button
              onClick={() => setLeftTab('problem')}
              className={`py-2.5 px-3 border-b-2 flex items-center gap-1.5 ${
                leftTab === 'problem'
                  ? 'border-primary text-primary font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Description
            </button>
            <button
              onClick={() => setLeftTab('hints')}
              className={`py-2.5 px-3 border-b-2 flex items-center gap-1.5 ${
                leftTab === 'hints'
                  ? 'border-primary text-primary font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              Hints {revealedHints > 0 && `(${revealedHints}/${question.hints.length})`}
            </button>
            <button
              onClick={() => setLeftTab('notes')}
              className={`py-2.5 px-3 border-b-2 flex items-center gap-1.5 ${
                leftTab === 'notes'
                  ? 'border-primary text-primary font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              Notes
            </button>
            <button
              onClick={() => setLeftTab('history')}
              className={`py-2.5 px-3 border-b-2 flex items-center gap-1.5 ${
                leftTab === 'history'
                  ? 'border-primary text-primary font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <History className="w-3.5 h-3.5" />
              History {questionSubmissions.length > 0 && `(${questionSubmissions.length})`}
            </button>
          </div>

          {/* Left Panel Body */}
          <div className="flex-1 p-5 overflow-y-auto space-y-6 text-sm text-slate-700 dark:text-slate-300">
            {leftTab === 'problem' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {question.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-2">
                    <DifficultyBadge difficulty={question.difficulty} />
                    <SourceBadge sourceType={question.sourceType} />
                    {question.targetTracks.map(t => (
                      <TrackBadge key={t} track={t} />
                    ))}
                  </div>
                </div>

                {/* Problem Statement */}
                <div className="space-y-3 leading-relaxed whitespace-pre-line font-sans text-xs sm:text-sm">
                  {question.problemStatement}
                </div>

                {/* Input & Output Format */}
                <div className="space-y-3 text-xs bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[10px] mb-1">
                      Input Format
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">{question.inputFormat}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[10px] mb-1">
                      Output Format
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">{question.outputFormat}</p>
                  </div>
                </div>

                {/* Constraints */}
                {question.constraints.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[10px]">
                      Constraints & Bounds
                    </h4>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-slate-600 dark:text-slate-400 font-mono">
                      {question.constraints.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Examples */}
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[10px]">
                    Examples
                  </h4>
                  {question.examples.map((ex, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3.5 space-y-2 text-xs"
                    >
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        Example {idx + 1}:
                      </span>
                      <div>
                        <span className="text-[10px] text-slate-400 block font-mono uppercase">Input:</span>
                        <pre className="p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 font-mono text-slate-800 dark:text-slate-200 overflow-x-auto">
                          {ex.input}
                        </pre>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block font-mono uppercase">Output:</span>
                        <pre className="p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 font-mono text-slate-800 dark:text-slate-200 overflow-x-auto">
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
              </div>
            )}

            {/* Progressive Hint & Solution System */}
            {leftTab === 'hints' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-teal-600" />
                    Layered Progressive Hint System
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Reveals guidance step-by-step to preserve your learning and problem-solving experience.
                  </p>
                </div>

                {/* Revealed Hints */}
                <div className="space-y-3">
                  {question.hints.slice(0, revealedHints).map((hint, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-teal-200 dark:border-teal-900/50 bg-teal-50/40 dark:bg-teal-950/20 text-xs text-slate-800 dark:text-slate-200 space-y-1.5 animate-in fade-in"
                    >
                      <span className="font-bold text-teal-700 dark:text-teal-400 block uppercase text-[10px]">
                        Hint {idx + 1}
                      </span>
                      <p className="leading-relaxed">{hint}</p>
                    </div>
                  ))}
                </div>

                {/* Action to reveal next hint */}
                {revealedHints < question.hints.length ? (
                  <div className="pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => revealNextHint(question.id, question.hints.length)}
                      leftIcon={<Sparkles className="w-4 h-4 text-teal-600" />}
                      className="w-full text-xs"
                    >
                      Reveal Next Hint ({revealedHints + 1} of {question.hints.length})
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-900 bg-indigo-50/50 dark:bg-indigo-950/30 text-xs space-y-3">
                      <span className="font-bold text-indigo-700 dark:text-indigo-400 uppercase text-[10px]">
                        Full Concept Explanation & Complexity
                      </span>
                      <div className="whitespace-pre-line text-slate-800 dark:text-slate-200">
                        {question.explanation}
                      </div>
                      <div className="pt-2 border-t border-indigo-100 dark:border-indigo-900/60 flex items-center justify-between text-[11px] font-mono text-indigo-700 dark:text-indigo-300">
                        <span>Time: {question.timeComplexity || 'O(N)'}</span>
                        <span>Space: {question.spaceComplexity || 'O(1)'}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Notes Tab */}
            {leftTab === 'notes' && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
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
                  className="w-full p-3 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary font-mono"
                />
              </div>
            )}

            {/* Attempt History Tab */}
            {leftTab === 'history' && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
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
                        className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 text-xs space-y-2"
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

                        <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100 dark:border-slate-800">
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
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center text-xs text-slate-500 border border-dashed rounded-xl">
                    No judged submissions recorded yet. Click Submit to run your code against public and evaluation cases.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Monaco Code Editor + Test Cases (Desktop: 7 cols) */}
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
              <span className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                {isSavingDraft ? (
                  <span>Saving draft...</span>
                ) : draftSavedAt ? (
                  <span className="text-emerald-400">✓ Saved draft ({draftSavedAt})</span>
                ) : (
                  <span>Draft saved</span>
                )}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowResetModal(true)}
                className="p-1 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
                title="Reset to Starter Code"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Monaco Editor Container */}
          <div className="flex-1 min-h-[300px] bg-slate-950">
            <Editor
              height="100%"
              language={language === 'c' ? 'c' : language === 'cpp' ? 'cpp' : language === 'java' ? 'java' : 'python'}
              theme="vs-dark"
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
              }}
            />
          </div>

          {/* Bottom Test Cases & Output Panel */}
          <div className="border-t border-slate-800 bg-slate-900 flex flex-col max-h-[320px]">
            {/* Panel Tabs & Action Buttons */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-slate-900/90 text-xs">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setBottomTab('sample')}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                    bottomTab === 'sample'
                      ? 'bg-slate-800 text-white font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Sample Cases ({question.publicTestCases.length})
                </button>

                <button
                  onClick={() => setBottomTab('custom')}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                    bottomTab === 'custom'
                      ? 'bg-slate-800 text-white font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Custom Cases ({customTestCases.filter(c => c.problemId === question.id).length})
                </button>

                <button
                  onClick={() => setBottomTab('output')}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                    bottomTab === 'output'
                      ? 'bg-slate-800 text-white font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Output {runOutputs && `(Result)`}
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
                  className="bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700 text-xs py-1"
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
            <div className="p-4 overflow-y-auto text-xs font-mono text-slate-300 min-h-[140px] max-h-[220px]">
              {bottomTab === 'sample' && (
                <div className="space-y-3">
                  {question.publicTestCases.map((tc, idx) => (
                    <div key={tc.id} className="p-2.5 rounded bg-slate-950 border border-slate-800 space-y-1.5">
                      <div className="flex items-center justify-between text-slate-400 text-[10px]">
                        <span>Case {idx + 1} ({tc.name || 'Sample'})</span>
                      </div>
                      <div>
                        <span className="text-slate-500 text-[10px] block">Input:</span>
                        <div className="text-slate-200 bg-slate-900 p-1.5 rounded">{tc.input}</div>
                      </div>
                      <div>
                        <span className="text-slate-500 text-[10px] block">Expected Output:</span>
                        <div className="text-emerald-400 bg-slate-900 p-1.5 rounded">{tc.expectedOutput}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {bottomTab === 'custom' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-xs">Your Private Test Cases:</span>
                    {!isAddingCustom && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsAddingCustom(true)}
                        leftIcon={<Plus className="w-3 h-3" />}
                        className="text-[11px] py-0.5 bg-slate-800 border-slate-700 text-slate-200"
                      >
                        Add Custom Case
                      </Button>
                    )}
                  </div>

                  {isAddingCustom && (
                    <form onSubmit={handleSaveCustomCase} className="p-3 rounded bg-slate-950 border border-slate-800 space-y-2">
                      <input
                        type="text"
                        placeholder="Test case name (optional)"
                        value={customCaseName}
                        onChange={(e) => setCustomCaseName(e.target.value)}
                        className="w-full p-1.5 text-xs bg-slate-900 border border-slate-700 rounded text-slate-200"
                      />
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-0.5">Input (stdin):</label>
                        <textarea
                          rows={2}
                          required
                          value={customInput}
                          onChange={(e) => setCustomInput(e.target.value)}
                          placeholder="e.g. 15"
                          className="w-full p-1.5 text-xs bg-slate-900 border border-slate-700 rounded text-slate-200 font-mono"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-0.5">Expected Output (optional):</label>
                        <input
                          type="text"
                          value={customExpected}
                          onChange={(e) => setCustomExpected(e.target.value)}
                          placeholder="e.g. 45"
                          className="w-full p-1.5 text-xs bg-slate-900 border border-slate-700 rounded text-slate-200 font-mono"
                        />
                      </div>
                      <div className="flex justify-end gap-2 pt-1">
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
                    <div key={tc.id} className="p-2.5 rounded bg-slate-950 border border-slate-800 space-y-1.5 relative group">
                      <div className="flex items-center justify-between text-slate-400 text-[10px]">
                        <span>{tc.name}</span>
                        <button
                          onClick={() => deleteCustomTestCase(tc.id)}
                          className="text-slate-500 hover:text-rose-400"
                          title="Delete custom case"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div>
                        <span className="text-slate-500 text-[10px] block">Input:</span>
                        <div className="text-slate-200 bg-slate-900 p-1.5 rounded">{tc.input}</div>
                      </div>
                      {tc.expectedOutput && (
                        <div>
                          <span className="text-slate-500 text-[10px] block">Expected Output:</span>
                          <div className="text-emerald-400 bg-slate-900 p-1.5 rounded">{tc.expectedOutput}</div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {bottomTab === 'output' && (
                <div className="space-y-3">
                  {latestSubmission ? (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate-400">Submission Result:</span>
                          <VerdictBadge verdict={latestSubmission.verdict} />
                        </div>
                        <span className="text-[11px] text-slate-400">
                          {latestSubmission.passedTests}/{latestSubmission.totalTests} Test Cases Passed
                        </span>
                      </div>

                      {latestSubmission.publicCaseResults && (
                        <div className="space-y-2">
                          {latestSubmission.publicCaseResults.map((pcr) => (
                            <div key={pcr.caseIndex} className="p-2 rounded bg-slate-950 border border-slate-800 text-[11px] space-y-1">
                              <div className="flex items-center justify-between">
                                <span className="font-semibold text-slate-300">Test #{pcr.caseIndex}</span>
                                <span className={pcr.passed ? 'text-emerald-400' : 'text-rose-400'}>
                                  {pcr.passed ? 'Passed ✓' : 'Failed ✗'}
                                </span>
                              </div>
                              <div className="text-slate-400">Actual Output: <span className="text-slate-200">{pcr.actualOutput}</span></div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : runOutputs ? (
                    <div className="space-y-2">
                      {runOutputs.map((out, idx) => (
                        <div key={idx} className="p-2.5 rounded bg-slate-950 border border-slate-800 space-y-1">
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="font-bold text-slate-300">{out.name}</span>
                            <span className={out.isPassed ? 'text-emerald-400' : 'text-amber-400'}>
                              {out.verdict}
                            </span>
                          </div>
                          <div>
                            <span className="text-slate-500 text-[10px] block">Actual Output:</span>
                            <div className="text-slate-200 bg-slate-900 p-1.5 rounded">{out.actualOutput || '(no stdout)'}</div>
                          </div>
                          {out.stderr && (
                            <div>
                              <span className="text-rose-400 text-[10px] block">Error (stderr):</span>
                              <div className="text-rose-300 bg-slate-900 p-1.5 rounded">{out.stderr}</div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center text-slate-500 py-6">
                      Click "Run Code" to test against visible sample/custom cases, or "Submit Code" for judged evaluation.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
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
