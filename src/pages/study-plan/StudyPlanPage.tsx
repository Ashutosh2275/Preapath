import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  RotateCcw, 
  ArrowRight, 
  RefreshCw, 
  AlertCircle,
  Sparkles,
  BookOpen,
  Award,
  HelpCircle,
  Check,
  Brain,
  Code2,
  Bookmark
} from 'lucide-react';
import { useUserStore } from '../../stores/useUserStore';
import { generateStudyPlan } from '../../lib/plannerEngine';
import { getOverdueReviewItems, getDueReviewItems } from '../../lib/spacedRepetition';
import { Button } from '../../components/common/Button';
import { TrackBadge } from '../../components/common/Badge';

export const StudyPlanPage: React.FC = () => {
  const { 
    user, 
    studyPlan, 
    setStudyPlan, 
    toggleTaskCompletion, 
    rescheduleIncompleteTasks,
    spacedReviewItems 
  } = useUserStore();

  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [showRescheduleModal, setShowRescheduleModal] = useState(false);
  const [targetRescheduleDay, setTargetRescheduleDay] = useState(2);

  const days = studyPlan?.days || [];
  const currentDay = days[selectedDayIndex] || days[0];

  const totalTasks = days.reduce((acc, d) => acc + d.tasks.length, 0);
  const completedTasks = days.reduce((acc, d) => acc + d.tasks.filter(t => t.completed).length, 0);
  const progressPct = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  // Spaced revision items status
  const reviewItemsList = Object.values(spacedReviewItems || {});
  const overdueReviews = getOverdueReviewItems(reviewItemsList);
  const dueReviews = getDueReviewItems(reviewItemsList);

  const handleRegenerate = () => {
    if (!user) return;
    const newPlan = generateStudyPlan({
      userId: user.uid,
      targetTrack: user.targetTrack,
      availablePreparationDays: user.availablePreparationDays,
      dailyAvailableMinutes: user.dailyAvailableMinutes,
      proficiency: user.proficiency,
      weakTopics: user.weakTopics,
      examDate: user.examDate,
      existingSpacedReviews: reviewItemsList,
    });
    setStudyPlan(newPlan);
    setSelectedDayIndex(0);
  };

  const handleReschedule = () => {
    if (!currentDay) return;
    rescheduleIncompleteTasks(currentDay.dayNumber, targetRescheduleDay);
    setShowRescheduleModal(false);
  };

  const getStageBadge = (stage?: string) => {
    switch (stage) {
      case 'STAGE_A_MCQ':
        return (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
            Stage A • MCQ Practice
          </span>
        );
      case 'STAGE_B_EASY_CODING':
        return (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            Stage B • Easy Coding
          </span>
        );
      case 'STAGE_C_MEDIUM_CODING':
        return (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
            Stage C • Medium Coding
          </span>
        );
      case 'STAGE_D_REVIEW':
        return (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
            Stage D • Spaced Review
          </span>
        );
      case 'MOCK_ASSESSMENT':
        return (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
            Full Mock Exam
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              TCS NQT Daily Preparation Engine
            </h1>
            {user?.targetTrack && <TrackBadge track={user.targetTrack} />}
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Structured daily learning sequence: Stage A (MCQs) → Stage B (Easy Coding) → Stage C (Medium Coding) → Stage D (Spaced Review).
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link to="/bookmarks">
            <Button
              variant="outline"
              size="sm"
              leftIcon={<Bookmark className="w-4 h-4 text-amber-500" />}
            >
              Review Queue {dueReviews.length > 0 && `(${dueReviews.length})`}
            </Button>
          </Link>

          <Button
            variant="outline"
            size="sm"
            onClick={handleRegenerate}
            leftIcon={<RefreshCw className="w-4 h-4" />}
          >
            Regenerate Future Tasks
          </Button>
        </div>
      </div>

      {/* Overdue Spaced Reviews Alert Banner */}
      {overdueReviews.length > 0 && (
        <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-amber-950 dark:text-amber-200">
                {overdueReviews.length} Overdue Spaced Repetition {overdueReviews.length === 1 ? 'Item' : 'Items'}
              </h4>
              <p className="text-xs text-amber-800 dark:text-amber-300">
                Spaced recall intervals have elapsed. Re-attempt these problems today to lock concepts into long-term memory.
              </p>
            </div>
          </div>
          <Link to="/bookmarks">
            <Button variant="primary" size="sm" className="text-xs shrink-0">
              Practice Overdue Items →
            </Button>
          </Link>
        </div>
      )}

      {/* Progress & Plan Overview Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
              Structured Learning Progression • TCS NQT Syllabus
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
              Overall Syllabus Progress: {progressPct}%
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {completedTasks} completed tasks out of {totalTasks} scheduled practice sessions
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs font-semibold">
            <div className="text-right">
              <span className="text-slate-400 block text-[10px]">TOTAL DURATION</span>
              <span className="text-slate-900 dark:text-white">{days.length} Days</span>
            </div>
            <div className="text-right">
              <span className="text-slate-400 block text-[10px]">DAILY TARGET</span>
              <span className="text-slate-900 dark:text-white">{studyPlan?.dailyAvailableMinutes || 90} mins</span>
            </div>
            <div className="text-right">
              <span className="text-slate-400 block text-[10px]">REVIEWS DUE</span>
              <span className="text-amber-600 dark:text-amber-400 font-bold">{dueReviews.length} Items</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300 rounded-full"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      {/* Day Selector & Detailed Schedule */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Col: Day Navigator Timeline */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Preparation Timeline
          </h4>
          <div className="space-y-1.5 max-h-[600px] overflow-y-auto pr-1">
            {days.map((day, idx) => {
              const isSelected = selectedDayIndex === idx;
              const completedTasksCount = day.tasks.filter(t => t.completed).length;
              const isAllDone = day.tasks.length > 0 && completedTasksCount === day.tasks.length;

              return (
                <button
                  key={day.dayNumber}
                  onClick={() => setSelectedDayIndex(idx)}
                  className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between ${
                    isSelected
                      ? 'border-primary ring-2 ring-primary/20 bg-indigo-50/50 dark:bg-indigo-950/40 text-slate-900 dark:text-white font-semibold'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      isAllDone
                        ? 'bg-emerald-500 text-white'
                        : isSelected
                          ? 'bg-primary text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}>
                      {isAllDone ? '✓' : day.dayNumber}
                    </span>
                    <span className="truncate">{day.topic}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 shrink-0 font-mono">
                    {completedTasksCount}/{day.tasks.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right 3 Cols: Active Day Detailed Tasks */}
        <div className="lg:col-span-3 space-y-6">
          {currentDay ? (
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-primary bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-0.5 rounded-full">
                      Day {currentDay.dayNumber}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {currentDay.date}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      • {currentDay.totalPlannedMinutes}m planned
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                    {currentDay.topic}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowRescheduleModal(true)}
                    className="text-xs"
                    leftIcon={<RotateCcw className="w-3.5 h-3.5" />}
                  >
                    Reschedule Incomplete
                  </Button>
                </div>
              </div>

              {/* Tasks List for Selected Day following Stage A -> B -> C -> D */}
              <div className="space-y-4">
                {currentDay.tasks.map((task, taskIdx) => (
                  <div
                    key={task.id}
                    className={`p-4 rounded-xl border transition-all ${
                      task.completed
                        ? 'border-emerald-200 dark:border-emerald-900/40 bg-emerald-50/20 dark:bg-emerald-950/10'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <button
                          onClick={() => toggleTaskCompletion(currentDay.dayNumber, task.id)}
                          className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center transition-colors shrink-0 ${
                            task.completed
                              ? 'bg-emerald-500 border-emerald-500 text-white'
                              : 'border-slate-300 dark:border-slate-700 hover:border-emerald-500'
                          }`}
                          title={task.completed ? "Mark incomplete" : "Mark completed"}
                        >
                          {task.completed && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </button>
                        <div className="space-y-1.5">
                          <div className="flex flex-wrap items-center gap-2">
                            {getStageBadge(task.stage)}
                            <span className={`text-sm font-semibold ${task.completed ? 'line-through text-slate-400' : 'text-slate-900 dark:text-white'}`}>
                              {task.title}
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono">
                              {task.estimatedMinutes} mins
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                            {task.description}
                          </p>
                          {task.budgetReason && (
                            <p className="text-[11px] text-amber-600 dark:text-amber-400 font-medium">
                              Note: {task.budgetReason}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="shrink-0 flex items-center gap-2 self-end sm:self-center">
                        {task.problemId ? (
                          <Link to={`/problems/${task.catalogNumber || task.problemId}`}>
                            <Button variant="primary" size="sm" className="text-xs">
                              {task.stage === 'STAGE_A_MCQ' ? 'Practice MCQs' : 'Solve Problem'}
                            </Button>
                          </Link>
                        ) : task.stage === 'STAGE_D_REVIEW' ? (
                          <Link to="/bookmarks">
                            <Button variant="outline" size="sm" className="text-xs">
                              Review Queue
                            </Button>
                          </Link>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-xs text-slate-500 border border-dashed rounded-2xl">
              No day selected. Select a day from the left timeline to view its tasks.
            </div>
          )}
        </div>
      </div>

      {/* Reschedule Modal */}
      {showRescheduleModal && currentDay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 max-w-md w-full space-y-4 shadow-xl">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Reschedule Incomplete Tasks
            </h3>
            <p className="text-xs text-slate-500">
              Move all incomplete tasks from Day {currentDay.dayNumber} ({currentDay.topic}) to another upcoming day.
            </p>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Move to Day:
              </label>
              <select
                value={targetRescheduleDay}
                onChange={(e) => setTargetRescheduleDay(Number(e.target.value))}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
              >
                {days.filter(d => d.dayNumber !== currentDay.dayNumber).map(d => (
                  <option key={d.dayNumber} value={d.dayNumber}>
                    Day {d.dayNumber} — {d.topic}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <Button variant="ghost" size="sm" onClick={() => setShowRescheduleModal(false)}>
                Cancel
              </Button>
              <Button variant="primary" size="sm" onClick={handleReschedule}>
                Confirm Reschedule
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
