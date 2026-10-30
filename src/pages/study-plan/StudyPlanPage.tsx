import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  RotateCcw, 
  AlertCircle,
  Code2, 
  Bookmark, 
  Lock, 
  Sliders,
  Check,
  ChevronRight,
  TrendingUp,
  Brain
} from 'lucide-react';
import { useUserStore } from '../../stores/useUserStore';
import { 
  generatePlanRevisionProposal, 
  applyPlanRevision 
} from '../../lib/plannerEngine';
import { 
  archivePostgresStudyPlan, 
  savePostgresStudyPlan, 
  recordPostgresPlanRevision, 
  upsertPostgresProfile 
} from '../../lib/db';
import { getOverdueReviewItems, getDueReviewItems } from '../../lib/spacedRepetition';
import { 
  getLocalDateString, 
  formatDateDisplay, 
  DEFAULT_TIMEZONE 
} from '../../lib/dateUtils';
import { Button } from '../../components/common/Button';
import { TrackBadge } from '../../components/common/Badge';

export const StudyPlanPage: React.FC = () => {
  const { 
    user, 
    updateProfile,
    studyPlan, 
    setStudyPlan, 
    toggleTaskCompletion, 
    spacedReviewItems,
    topicMastery,
    addPlanRevision
  } = useUserStore();

  const userTimezone = user?.timezone || DEFAULT_TIMEZONE;
  const todayStr = getLocalDateString(new Date(), userTimezone);

  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [showAdaptiveModal, setShowAdaptiveModal] = useState(false);
  const [isApplyingRevision, setIsApplyingRevision] = useState(false);

  // Form states for adaptive plan revision modal
  const [revisionExamDate, setRevisionExamDate] = useState<string>(user?.examDate || '');
  const [revisionDailyMinutes, setRevisionDailyMinutes] = useState<number>(user?.dailyAvailableMinutes || 90);
  const [revisionAvailableDays, setRevisionAvailableDays] = useState<number>(user?.availablePreparationDays || 21);

  const days = studyPlan?.days || [];
  const currentDay = days[selectedDayIndex] || days[0];

  const totalTasks = days.reduce((acc, d) => acc + d.tasks.length, 0);
  const completedTasks = days.reduce((acc, d) => acc + d.tasks.filter(t => t.completed).length, 0);
  const progressPct = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  // Spaced revision items status
  const reviewItemsList = Object.values(spacedReviewItems || {});
  const overdueReviews = getOverdueReviewItems(reviewItemsList);
  const dueReviews = getDueReviewItems(reviewItemsList);

  // Real-time proposal computation for the modal
  const revisionProposal = useMemo(() => {
    if (!studyPlan || !user) return null;

    return generatePlanRevisionProposal(
      studyPlan,
      {
        userId: user.uid,
        targetTrack: user.targetTrack,
        availablePreparationDays: revisionAvailableDays,
        dailyAvailableMinutes: revisionDailyMinutes,
        proficiency: user.proficiency,
        weakTopics: user.weakTopics,
        examDate: revisionExamDate || undefined,
      },
      userTimezone,
      Object.values(topicMastery || {})
    );
  }, [studyPlan, user, revisionExamDate, revisionDailyMinutes, revisionAvailableDays, userTimezone, topicMastery]);

  const handleApplyRevision = async () => {
    if (!revisionProposal || !studyPlan || !user) return;
    setIsApplyingRevision(true);

    try {
      const { newPlan, archivedPlan, revisionRecord } = applyPlanRevision(
        revisionProposal,
        studyPlan,
        {
          userId: user.uid,
          targetTrack: user.targetTrack,
          availablePreparationDays: revisionAvailableDays,
          dailyAvailableMinutes: revisionDailyMinutes,
          proficiency: user.proficiency,
          weakTopics: user.weakTopics,
          examDate: revisionExamDate || undefined,
        },
        user.uid
      );

      // Persist to PostgreSQL authoritative tables
      await archivePostgresStudyPlan(archivedPlan.id, user.uid);
      await savePostgresStudyPlan(newPlan);
      await recordPostgresPlanRevision(revisionRecord);

      // If exam date or daily minutes changed, update user profile as well
      if (revisionExamDate !== user.examDate || revisionDailyMinutes !== user.dailyAvailableMinutes) {
        updateProfile({
          examDate: revisionExamDate || undefined,
          dailyAvailableMinutes: revisionDailyMinutes,
          availablePreparationDays: newPlan.days.length,
        });
      }

      // Update in-memory user store
      setStudyPlan(newPlan);
      addPlanRevision(revisionRecord);
      setSelectedDayIndex(revisionProposal.completedDaysPreserved);
      setShowAdaptiveModal(false);
    } catch (err) {
      console.error('Failed to apply adaptive plan revision:', err);
    } finally {
      setIsApplyingRevision(false);
    }
  };

  const getStageBadge = (stage?: string) => {
    switch (stage) {
      case 'STAGE_A_MCQ':
        return (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200">
            Stage A • MCQ Practice
          </span>
        );
      case 'STAGE_B_EASY_CODING':
        return (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
            Stage B • Easy Coding
          </span>
        );
      case 'STAGE_C_MEDIUM_CODING':
        return (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
            Stage C • Medium Coding
          </span>
        );
      case 'STAGE_D_REVIEW':
        return (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">
            Stage D • Spaced Review
          </span>
        );
      case 'MOCK_ASSESSMENT':
        return (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200">
            Full Timed Assessment
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              TCS NQT Date-Based Preparation Engine
            </h1>
            {user?.targetTrack && <TrackBadge track={user.targetTrack} />}
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Authoritative syllabus schedule (v{studyPlan?.version || 1}) • Stage A (MCQs) → Stage B (Easy Coding) → Stage C (Medium Coding) → Stage D (Spaced Review).
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <Lock className="w-3.5 h-3.5" />
            Active Plan (v{studyPlan?.version || 1})
          </div>

          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              setRevisionExamDate(user?.examDate || '');
              setRevisionDailyMinutes(user?.dailyAvailableMinutes || 90);
              setRevisionAvailableDays(user?.availablePreparationDays || 21);
              setShowAdaptiveModal(true);
            }}
            leftIcon={<Sliders className="w-4 h-4" />}
          >
            Adjust Schedule & Exam Date
          </Button>
        </div>
      </div>

      {/* Overdue Spaced Reviews Alert Banner */}
      {overdueReviews.length > 0 && (
        <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-amber-950">
                {overdueReviews.length} Overdue Spaced Repetition {overdueReviews.length === 1 ? 'Item' : 'Items'}
              </h4>
              <p className="text-xs text-amber-800">
                Spaced recall intervals have elapsed. Re-attempt these problems today to lock concepts into long-term memory.
              </p>
            </div>
          </div>
          <Link to="/practice">
            <Button variant="primary" size="sm" className="text-xs shrink-0">
              Practice Overdue Items →
            </Button>
          </Link>
        </div>
      )}

      {/* Progress & Plan Overview Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold text-primary uppercase tracking-wider">
              Preparation Progress
            </span>
            <h3 className="text-lg font-bold text-slate-900 mt-0.5">
              {completedTasks} of {totalTasks} Tasks Finished ({progressPct}%)
            </h3>
          </div>
          <div className="text-xs text-slate-500">
            {days.length} Total Days Scheduled • Daily Budget: {studyPlan?.dailyAvailableMinutes || 90}m
          </div>
        </div>

        <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
          <div
            className="bg-primary h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      {/* Main Calendar View: Day List + Selected Day Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Days Selector */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-4 shadow-sm space-y-2 max-h-[700px] overflow-y-auto">
          <div className="px-2 py-1 text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
            <span>Scheduled Days ({days.length})</span>
            <span>Status</span>
          </div>

          <div className="space-y-1">
            {days.map((day, idx) => {
              const isSelected = idx === selectedDayIndex;
              const isToday = day.date === todayStr;
              const doneCount = day.tasks.filter(t => t.completed).length;
              const isDayDone = day.isCompleted || (day.tasks.length > 0 && doneCount === day.tasks.length);

              return (
                <button
                  key={day.dayNumber}
                  onClick={() => setSelectedDayIndex(idx)}
                  className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between gap-2 ${
                    isSelected
                      ? 'border-primary bg-indigo-50/60 shadow-xs'
                      : isDayDone
                      ? 'border-emerald-200 bg-emerald-50/30 hover:border-emerald-300'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-bold ${isSelected ? 'text-primary' : 'text-slate-800'}`}>
                        Day {day.dayNumber}
                      </span>
                      {isToday && (
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-indigo-100 text-indigo-700 font-semibold">
                          Today
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 truncate max-w-[190px]">
                      {day.topic}
                    </p>
                    <span className="text-[10px] text-slate-400">
                      {formatDateDisplay(day.date, userTimezone)}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="text-[10px] text-slate-400">
                      {doneCount}/{day.tasks.length}
                    </span>
                    {isDayDone && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Selected Day Detail View */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
          {currentDay ? (
            <>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                      Day {currentDay.dayNumber}
                    </span>
                    <span>•</span>
                    <span className="text-xs text-slate-500">
                      {formatDateDisplay(currentDay.date, userTimezone)}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mt-1">
                    {currentDay.topic}
                  </h2>
                </div>

                <div className="text-right">
                  <span className="text-xs font-semibold text-slate-700">
                    {currentDay.totalPlannedMinutes} mins session budget
                  </span>
                  <p className="text-[11px] text-slate-400">
                    {currentDay.tasks.filter(t => t.completed).length} of {currentDay.tasks.length} tasks completed
                  </p>
                </div>
              </div>

              {/* Tasks List */}
              <div className="space-y-3.5">
                {currentDay.tasks.map((task) => (
                  <div
                    key={task.id}
                    className={`p-4 rounded-xl border transition-all flex items-start justify-between gap-4 ${
                      task.completed
                        ? 'border-emerald-200 bg-emerald-50/30'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <button
                        onClick={() => toggleTaskCompletion(currentDay.dayNumber, task.id)}
                        className={`mt-1 w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                          task.completed
                            ? 'bg-emerald-500 border-emerald-500 text-white'
                            : 'border-slate-300 hover:border-emerald-500 bg-white'
                        }`}
                        aria-label="Toggle task completion"
                      >
                        {task.completed && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </button>

                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          {getStageBadge(task.stage)}
                          <span className={`text-sm font-semibold ${task.completed ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                            {task.title}
                          </span>
                          <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono">
                            {task.estimatedMinutes}m
                          </span>
                        </div>
                        <p className="text-xs text-slate-500">
                          {task.description}
                        </p>
                        {task.budgetReason && (
                          <p className="text-[11px] text-indigo-600 font-medium italic">
                            {task.budgetReason}
                          </p>
                        )}
                      </div>
                    </div>

                    {task.problemId && (
                      <Link to={`/problems/${task.problemId}`}>
                        <Button variant="outline" size="sm" className="text-xs shrink-0">
                          Solve Problem →
                        </Button>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="p-8 text-center text-slate-400">
              No day selected.
            </div>
          )}
        </div>
      </div>

      {/* ADAPTIVE SCHEDULE REVISION MODAL (Confirmed 2-Step Workflow) */}
      {showAdaptiveModal && revisionProposal && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95">
            <div>
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                <Sliders className="w-4 h-4" />
                Adaptive Plan Revision
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                Recalibrate Schedule & Exam Timeline
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Adjust your examination date or daily study budget. Completed days and history are strictly preserved.
              </p>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Target Exam Date
                </label>
                <input
                  type="date"
                  value={revisionExamDate}
                  onChange={(e) => setRevisionExamDate(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Daily Available Study Time (Minutes)
                </label>
                <input
                  type="number"
                  min={15}
                  max={480}
                  value={revisionDailyMinutes}
                  onChange={(e) => setRevisionDailyMinutes(Number(e.target.value))}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Proposed Plan Comparison Breakdown */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Proposed Revision Preview
              </span>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                  <div className="text-xs text-emerald-700 font-semibold">Preserved History</div>
                  <div className="text-lg font-bold text-emerald-900 mt-0.5">
                    {revisionProposal.completedDaysPreserved} Days
                  </div>
                  <div className="text-[10px] text-emerald-600">
                    {revisionProposal.completedTasksPreserved} tasks preserved
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200">
                  <div className="text-xs text-indigo-700 font-semibold">Remaining Days</div>
                  <div className="text-lg font-bold text-indigo-900 mt-0.5">
                    {revisionProposal.newRemainingDays} Days
                  </div>
                  <div className="text-[10px] text-indigo-600">
                    Previous: {revisionProposal.previousRemainingDays} days
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-purple-50 border border-purple-200">
                  <div className="text-xs text-purple-700 font-semibold">Plan Version</div>
                  <div className="text-lg font-bold text-purple-900 mt-0.5">
                    v{revisionProposal.newPlanVersion}
                  </div>
                  <div className="text-[10px] text-purple-600">
                    from v{revisionProposal.currentPlanVersion}
                  </div>
                </div>
              </div>

              {/* Rationale Message */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                <span className="font-semibold text-slate-800">Adaptive Rationale: </span>
                {revisionProposal.summaryMessage}
              </div>

              {/* Deferred Topics Warning (if time constrained) */}
              {revisionProposal.isTimeConstrained && revisionProposal.deferredTopics.length > 0 && (
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
                  <div className="font-bold flex items-center gap-1.5 text-amber-950">
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                    Preparation Time Constraint Detected
                  </div>
                  <p>
                    Remaining time is insufficient for the full exhaustive syllabus. Essential foundations and weak topics have been prioritized; secondary topics have been deferred:
                  </p>
                  <ul className="list-disc list-inside font-medium text-amber-800">
                    {revisionProposal.deferredTopics.map((top, i) => (
                      <li key={i}>{top}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <Button
                variant="outline"
                size="md"
                onClick={() => setShowAdaptiveModal(false)}
                disabled={isApplyingRevision}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={handleApplyRevision}
                isLoading={isApplyingRevision}
                leftIcon={<Check className="w-4 h-4" />}
              >
                Confirm & Apply Version {revisionProposal.newPlanVersion}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
