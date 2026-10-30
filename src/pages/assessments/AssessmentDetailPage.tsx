import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  ArrowLeft, 
  Bookmark, 
  Award, 
  RotateCcw,
  Sparkles,
  BarChart2,
  Check,
  X
} from 'lucide-react';
import { STARTER_MOCK_ASSESSMENTS } from '../../data/mockAssessments';
import { useUserStore } from '../../stores/useUserStore';
import { AssessmentAttempt, AssessmentQuestion } from '../../types';
import { Button } from '../../components/common/Button';
import { Modal } from '../../components/common/Modal';

export const AssessmentDetailPage: React.FC = () => {
  const { assessmentId } = useParams<{ assessmentId: string }>();
  const navigate = useNavigate();
  const { user, assessmentAttempts, recordAssessmentAttempt } = useUserStore();

  const assessment = STARTER_MOCK_ASSESSMENTS.find(a => a.id === assessmentId);

  // Check if there is an existing completed attempt to show in review mode
  const existingAttempt = assessmentAttempts.find(a => a.assessmentId === assessmentId);

  const [mode, setMode] = useState<'intro' | 'test' | 'review'>(
    existingAttempt ? 'review' : 'intro'
  );

  // Active Test State
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>(existingAttempt?.answers || {});
  const [markedForReview, setMarkedForReview] = useState<string[]>(existingAttempt?.markedForReview || []);
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState(
    assessment ? assessment.totalDurationMinutes * 60 : 3600
  );
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [activeAttempt, setActiveAttempt] = useState<AssessmentAttempt | null>(existingAttempt || null);

  if (!assessment) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Assessment Not Found</h2>
        <Link to="/assessments">
          <Button variant="primary" size="sm">Back to Assessments</Button>
        </Link>
      </div>
    );
  }

  const currentSection = assessment.sections[activeSectionIndex];
  const sectionQuestions = assessment.questions.filter(q => q.sectionId === currentSection?.id);
  const currentQuestion = sectionQuestions[activeQuestionIndex];

  // Countdown timer effect during active test
  useEffect(() => {
    if (mode !== 'test') return;

    const timer = setInterval(() => {
      setTimeRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinalSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [mode]);

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (questionId: string, optionId: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const handleToggleMarkReview = (questionId: string) => {
    setMarkedForReview(prev => 
      prev.includes(questionId) 
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  const handleFinalSubmit = () => {
    setShowSubmitModal(false);

    // Compute detailed scores
    let totalScore = 0;
    let totalPossible = 0;
    const sectionScores: Record<string, { correct: number; total: number; marks: number }> = {};

    assessment.sections.forEach(sec => {
      sectionScores[sec.id] = { correct: 0, total: 0, marks: 0 };
    });

    assessment.questions.forEach(q => {
      totalPossible += q.marks;
      const isCorrect = q.type === 'MCQ' && answers[q.id] === q.correctOptionId;

      if (sectionScores[q.sectionId]) {
        sectionScores[q.sectionId].total += 1;
        if (isCorrect) {
          sectionScores[q.sectionId].correct += 1;
          sectionScores[q.sectionId].marks += q.marks;
          totalScore += q.marks;
        } else if (answers[q.id] && q.negativeMarks) {
          totalScore -= q.negativeMarks;
          sectionScores[q.sectionId].marks -= q.negativeMarks;
        }
      }
    });

    const newAttempt: AssessmentAttempt = {
      id: `attempt-${Date.now()}`,
      assessmentId: assessment.id,
      userId: user?.uid || 'guest',
      startedAt: new Date(Date.now() - (assessment.totalDurationMinutes * 60 - timeRemainingSeconds) * 1000).toISOString(),
      completedAt: new Date().toISOString(),
      score: Math.max(0, totalScore),
      totalPossibleScore: totalPossible,
      sectionScores,
      answers,
      markedForReview,
      status: 'COMPLETED',
    };

    recordAssessmentAttempt(newAttempt);
    setActiveAttempt(newAttempt);
    setMode('review');
  };

  const handleRetake = () => {
    setAnswers({});
    setMarkedForReview([]);
    setTimeRemainingSeconds(assessment.totalDurationMinutes * 60);
    setActiveSectionIndex(0);
    setActiveQuestionIndex(0);
    setMode('test');
  };

  // Review Mode Render
  if (mode === 'review' && activeAttempt) {
    const scorePct = Math.round((activeAttempt.score / activeAttempt.totalPossibleScore) * 100);

    return (
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              Assessment Analysis & Mistake Review
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              {assessment.title}
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Completed on {new Date(activeAttempt.completedAt || activeAttempt.startedAt).toLocaleString()}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleRetake} leftIcon={<RotateCcw className="w-4 h-4" />}>
              Retake Assessment
            </Button>
            <Link to="/assessments">
              <Button variant="primary" size="sm">
                All Assessments
              </Button>
            </Link>
          </div>
        </div>

        {/* Score Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 shadow-sm">
          <div className="space-y-1">
            <span className="text-xs text-slate-400 font-semibold block">TOTAL SCORE</span>
            <div className="text-3xl font-extrabold text-slate-900">
              {activeAttempt.score} <span className="text-sm text-slate-400 font-normal">/ {activeAttempt.totalPossibleScore}</span>
            </div>
            <p className="text-xs font-semibold text-emerald-600">
              {scorePct}% Overall Accuracy
            </p>
          </div>

          <div className="sm:col-span-2 space-y-2">
            <span className="text-xs text-slate-400 font-semibold block">SECTION BREAKDOWN</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {assessment.sections.map(sec => {
                const sc = activeAttempt.sectionScores[sec.id];
                return (
                  <div key={sec.id} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs">
                    <span className="font-semibold block truncate">{sec.title}</span>
                    <span className="text-slate-500 font-mono text-[11px]">
                      {sc ? `${sc.correct}/${sc.total} correct` : '—'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Detailed Question Review & Explanations */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900">
            Mistake Analysis & Solutions
          </h3>

          <div className="space-y-4">
            {assessment.questions.map((q, idx) => {
              const userAnswer = activeAttempt.answers[q.id];
              const isCorrect = q.type === 'MCQ' && userAnswer === q.correctOptionId;
              const isAnswered = Boolean(userAnswer);

              return (
                <div
                  key={q.id}
                  className={`p-5 rounded-2xl border bg-white space-y-4 ${
                    isCorrect
                      ? 'border-emerald-200'
                      : isAnswered
                        ? 'border-rose-200'
                        : 'border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold font-mono">
                        {idx + 1}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        {assessment.sections.find(s => s.id === q.sectionId)?.title}
                      </span>
                    </div>

                    <span className={`text-xs font-bold flex items-center gap-1 ${
                      isCorrect
                        ? 'text-emerald-600'
                        : isAnswered
                          ? 'text-rose-600'
                          : 'text-slate-400'
                    }`}>
                      {isCorrect ? (
                        <>
                          <Check className="w-4 h-4" /> Correct (+{q.marks} marks)
                        </>
                      ) : isAnswered ? (
                        <>
                          <X className="w-4 h-4" /> Incorrect
                        </>
                      ) : (
                        'Unattempted'
                      )}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-slate-900 leading-relaxed whitespace-pre-line">
                    {q.prompt}
                  </p>

                  {/* Options */}
                  {q.options && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {q.options.map(opt => {
                        const isChosen = userAnswer === opt.id;
                        const isRight = q.correctOptionId === opt.id;

                        return (
                          <div
                            key={opt.id}
                            className={`p-3 rounded-xl border flex items-center justify-between ${
                              isRight
                                ? 'border-emerald-400 bg-emerald-50 font-semibold text-emerald-900'
                                : isChosen
                                  ? 'border-rose-400 bg-rose-50 text-rose-900'
                                  : 'border-slate-200 text-slate-700'
                            }`}
                          >
                            <span>{opt.text}</span>
                            {isRight && <span className="text-[10px] bg-emerald-600 text-white px-1.5 py-0.5 rounded font-mono">Correct</span>}
                            {isChosen && !isRight && <span className="text-[10px] bg-rose-600 text-white px-1.5 py-0.5 rounded font-mono">Your Choice</span>}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Explanation Card */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                    <span className="font-bold text-slate-900 text-[10px] uppercase block">
                      Explanation & Solution Step
                    </span>
                    <p className="leading-relaxed">{q.explanation}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Introduction Mode Render
  if (mode === 'intro') {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              Practice Assessment Brief
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {assessment.title}
            </h1>
            <p className="text-xs text-slate-500">
              {assessment.hiringCycle} • {assessment.totalDurationMinutes} Minutes Duration
            </p>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            {assessment.description}
          </p>

          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Assessment Instructions:
            </h4>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
              {assessment.instructions.map((ins, i) => (
                <li key={i}>{ins}</li>
              ))}
            </ul>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <Link to="/assessments">
              <Button variant="ghost" size="sm">
                Cancel
              </Button>
            </Link>
            <Button
              variant="primary"
              size="md"
              onClick={() => {
                setTimeRemainingSeconds(assessment.totalDurationMinutes * 60);
                setMode('test');
              }}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Start Timed Test
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Active Test Mode Render
  return (
    <div className="flex-1 flex flex-col min-h-[calc(100vh-5rem)] bg-slate-50">
      {/* Test Header Bar with Live Countdown */}
      <div className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between sticky top-16 z-30 shadow-xs">
        <div>
          <h2 className="font-bold text-sm text-slate-900 truncate max-w-sm sm:max-w-md">
            {assessment.title}
          </h2>
          <span className="text-xs text-slate-400">
            Section: {currentSection?.title}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 font-mono font-bold text-sm">
            <Clock className="w-4 h-4 text-amber-600 animate-pulse" />
            {formatTimer(timeRemainingSeconds)}
          </div>

          <Button
            variant="danger"
            size="sm"
            onClick={() => setShowSubmitModal(true)}
            className="text-xs"
          >
            End Test & Submit
          </Button>
        </div>
      </div>

      {/* Main Test Area: Section Tabs + Question Palette + Active Question */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left 3 Cols: Active Question Area */}
        <div className="lg:col-span-3 space-y-6">
          {/* Section Navigation Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-slate-200 text-xs">
            {assessment.sections.map((sec, idx) => (
              <button
                key={sec.id}
                onClick={() => {
                  setActiveSectionIndex(idx);
                  setActiveQuestionIndex(0);
                }}
                className={`py-2 px-3 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  activeSectionIndex === idx
                    ? 'bg-primary text-white font-bold'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {sec.title} ({sec.durationMinutes}m)
              </button>
            ))}
          </div>

          {currentQuestion && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="font-bold text-xs text-primary font-mono">
                  Question {activeQuestionIndex + 1} of {sectionQuestions.length}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 font-mono">
                    +{currentQuestion.marks} marks {currentQuestion.negativeMarks ? `/ -${currentQuestion.negativeMarks}` : ''}
                  </span>
                  <button
                    onClick={() => handleToggleMarkReview(currentQuestion.id)}
                    className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 transition-colors ${
                      markedForReview.includes(currentQuestion.id)
                        ? 'border-amber-400 bg-amber-50 text-amber-700 font-semibold'
                        : 'border-slate-200 text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                    <span className="text-[11px]">Mark for Review</span>
                  </button>
                </div>
              </div>

              {/* Prompt */}
              <div className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed whitespace-pre-line">
                {currentQuestion.prompt}
              </div>

              {/* Options */}
              {currentQuestion.options && (
                <div className="space-y-2.5 pt-2">
                  {currentQuestion.options.map(opt => {
                    const isSelected = answers[currentQuestion.id] === opt.id;
                    return (
                      <div
                        key={opt.id}
                        onClick={() => handleSelectOption(currentQuestion.id, opt.id)}
                        className={`p-3.5 rounded-xl border cursor-pointer text-xs sm:text-sm transition-all flex items-center gap-3 ${
                          isSelected
                            ? 'border-primary ring-2 ring-primary/20 bg-indigo-50/50 text-primary font-bold'
                            : 'border-slate-200 hover:border-slate-300 text-slate-800'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs font-mono font-bold ${
                          isSelected
                            ? 'border-primary bg-primary text-white'
                            : 'border-slate-300'
                        }`}>
                          {opt.id.toUpperCase()}
                        </div>
                        <span>{opt.text}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Coding Question Reference if coding type */}
              {currentQuestion.type === 'CODING' && currentQuestion.codingProblemId && (
                <div className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-200 text-xs space-y-2">
                  <span className="font-bold text-indigo-700 block">
                    Hands-on Coding Assessment Module
                  </span>
                  <p className="text-slate-600">
                    This coding problem is linked to our interactive code editor. You can implement, run, and test with your preferred language.
                  </p>
                  <Link to={`/problems/${currentQuestion.codingProblemId}`} target="_blank">
                    <Button variant="primary" size="sm" className="text-xs">
                      Open Dedicated Coding Workspace ↗
                    </Button>
                  </Link>
                </div>
              )}

              {/* Next/Previous Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={activeQuestionIndex === 0}
                  onClick={() => setActiveQuestionIndex(prev => prev - 1)}
                  leftIcon={<ArrowLeft className="w-3.5 h-3.5" />}
                  className="text-xs"
                >
                  Previous
                </Button>

                <div className="flex items-center gap-2">
                  {activeQuestionIndex < sectionQuestions.length - 1 ? (
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => setActiveQuestionIndex(prev => prev + 1)}
                      rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                      className="text-xs"
                    >
                      Save & Next
                    </Button>
                  ) : activeSectionIndex < assessment.sections.length - 1 ? (
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => {
                        setActiveSectionIndex(prev => prev + 1);
                        setActiveQuestionIndex(0);
                      }}
                      rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                      className="text-xs"
                    >
                      Next Section
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => setShowSubmitModal(true)}
                      className="text-xs bg-emerald-600 hover:bg-emerald-700"
                    >
                      Review & Submit
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Col: Question Palette */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Question Palette ({currentSection?.title})
            </h4>

            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
              {sectionQuestions.map((q, idx) => {
                const isAnswered = Boolean(answers[q.id]);
                const isReview = markedForReview.includes(q.id);
                const isCurrent = activeQuestionIndex === idx;

                return (
                  <button
                    key={q.id}
                    onClick={() => setActiveQuestionIndex(idx)}
                    className={`h-9 rounded-lg text-xs font-bold font-mono transition-all border flex items-center justify-center ${
                      isCurrent
                        ? 'ring-2 ring-primary border-primary'
                        : ''
                    } ${
                      isReview
                        ? 'bg-amber-100 text-amber-900 border-amber-300'
                        : isAnswered
                          ? 'bg-emerald-500 text-white border-emerald-500'
                          : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="space-y-2 pt-4 border-t border-slate-100 text-[11px] text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-emerald-500 shrink-0" />
                <span>Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-amber-200 border border-amber-400 shrink-0" />
                <span>Marked for Review</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-slate-100 border shrink-0" />
                <span>Unattempted</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal before Final Submit */}
      <Modal
        isOpen={showSubmitModal}
        onClose={() => setShowSubmitModal(false)}
        title="Submit Assessment?"
        description="Are you sure you want to finish your test? You will immediately receive a score breakdown, mistake analysis, and solution explanations."
      >
        <div className="flex items-center justify-end gap-2 pt-4">
          <Button variant="ghost" size="sm" onClick={() => setShowSubmitModal(false)}>
            Resume Test
          </Button>
          <Button variant="primary" size="sm" onClick={handleFinalSubmit}>
            Yes, Submit Now
          </Button>
        </div>
      </Modal>
    </div>
  );
};
