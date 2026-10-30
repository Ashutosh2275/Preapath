import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Code2, 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw, 
  Award,
  User,
  Settings,
  HelpCircle,
  Brain,
  ChevronRight,
  Sparkles,
  Clock,
  Target,
  Check
} from 'lucide-react';
import { useUserStore } from '../../stores/useUserStore';
import { useQuestionsStore } from '../../stores/useQuestionsStore';
import { Button } from '../../components/common/Button';
import { DifficultyBadge, TrackBadge, VerdictBadge } from '../../components/common/Badge';
import { 
  getLocalDateString, 
  formatDateDisplay, 
  calculateRemainingPreparationDays,
  DEFAULT_TIMEZONE 
} from '../../lib/dateUtils';
import { getDueReviewItems, getOverdueReviewItems } from '../../lib/spacedRepetition';

export const DashboardPage: React.FC = () => {
  const { 
    user, 
    studyPlan, 
    toggleTaskCompletion, 
    problemProgress, 
    submissions, 
    spacedReviewItems,
    topicMastery,
    getOrCreateTodaySession,
    mcqAttempts
  } = useUserStore();
  const { questions } = useQuestionsStore();

  const userTimezone = user?.timezone || DEFAULT_TIMEZONE;
  const todayStr = getLocalDateString(new Date(), userTimezone);
  const todaySession = getOrCreateTodaySession();

  // Default selected date to today, or the first day of the plan
  const [selectedDateStr, setSelectedDateStr] = useState<string>(() => {
    if (studyPlan && studyPlan.days.length > 0) {
      const match = studyPlan.days.find(d => d.date === todayStr);
      return match ? match.date : studyPlan.days[0].date;
    }
    return todayStr;
  });

  // Calculate remaining preparation days
  const remainingDays = user?.examDate 
    ? calculateRemainingPreparationDays(user.examDate, todayStr)
    : (user?.availablePreparationDays || 14);

  // Authoritative progress metrics
  const progressEntries = Object.values(problemProgress);
  const attemptedCount = progressEntries.filter(p => p.currentStatus === 'ATTEMPTED' || p.currentStatus === 'SOLVED').length;
  const solvedCount = progressEntries.filter(p => p.currentStatus === 'SOLVED').length;
  const revisionCount = progressEntries.filter(p => p.needsRevision).length;

  const totalSubmissionsCount = submissions.length;
  const acceptedSubmissionsCount = submissions.filter(s => s.verdict === 'Accepted').length;

  // Study plan tasks statistics
  const totalPlanTasks = studyPlan ? studyPlan.days.reduce((acc, d) => acc + d.tasks.length, 0) : 0;
  const completedPlanTasks = studyPlan ? studyPlan.days.reduce((acc, d) => acc + d.tasks.filter(t => t.completed).length, 0) : 0;
  const planCompletionPct = totalPlanTasks > 0 ? Math.round((completedPlanTasks / totalPlanTasks) * 100) : 0;

  // Topic mastery summary
  const masteryEntries = Object.values(topicMastery || {});
  const masteredTopicsCount = masteryEntries.filter(
    m => m.masteryState === 'MASTERED' || m.masteryState === 'PROVISIONALLY_MASTERED'
  ).length;

  // Spaced revision queue items
  const reviewList = Object.values(spacedReviewItems || {});
  const overdueReviews = getOverdueReviewItems(reviewList);
  const dueReviews = getDueReviewItems(reviewList);
  const combinedUpcomingReviews = [...overdueReviews, ...dueReviews.filter(d => !overdueReviews.some(o => o.problemId === d.problemId))].slice(0, 4);

  // Weekly 7-day navigator window
  const days = studyPlan?.days || [];
  const currentDayIndex = days.findIndex(d => d.date === selectedDateStr);
  const activeDay = currentDayIndex >= 0 ? days[currentDayIndex] : days[0];

  // 7-day navigation window centered or leading
  const windowStartIndex = Math.max(0, Math.min(days.length - 7, currentDayIndex >= 0 ? Math.max(0, currentDayIndex - 2) : 0));
  const weekWindowDays = days.slice(windowStartIndex, windowStartIndex + 7);

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
            Timed Assessment
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* 1. Header Greeting & Quick Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Hello, {user?.displayName || 'Student'}
            </h1>
            {user?.targetTrack && <TrackBadge track={user.targetTrack} />}
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-500 mt-1.5">
            <span className="font-medium text-slate-700">
              {formatDateDisplay(todayStr, userTimezone)}
            </span>
            <span>•</span>
            <span className="font-semibold text-primary">
              {remainingDays} {remainingDays === 1 ? 'day' : 'days'} remaining
            </span>
            {user?.examDate && (
              <>
                <span>•</span>
                <span>Target Exam: {formatDateDisplay(user.examDate, userTimezone)}</span>
              </>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link to="/profile">
            <Button variant="outline" size="sm" leftIcon={<User className="w-4 h-4 text-slate-500" />}>
              Profile & Goals
            </Button>
          </Link>
          <Link to="/settings">
            <Button variant="outline" size="sm" leftIcon={<Settings className="w-4 h-4 text-slate-500" />}>
              Settings
            </Button>
          </Link>
          <Link to="/practice">
            <Button variant="primary" size="sm" leftIcon={<Code2 className="w-4 h-4" />}>
              Practice Code
            </Button>
          </Link>
        </div>
      </div>

      {/* 2. Progress Summary Metrics (Genuine Data Only) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="rounded-xl bg-white border border-slate-200 p-4 space-y-1 shadow-xs">
          <span className="text-xs font-semibold text-slate-500 flex items-center justify-between">
            Unique Solved
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </span>
          <div className="text-2xl font-bold text-slate-900">
            {solvedCount}
          </div>
          <p className="text-[11px] text-slate-400">
            {attemptedCount} attempted • {acceptedSubmissionsCount} submissions accepted
          </p>
        </div>

        <div className="rounded-xl bg-white border border-slate-200 p-4 space-y-1 shadow-xs">
          <span className="text-xs font-semibold text-slate-500 flex items-center justify-between">
            Tasks Completed
            <Calendar className="w-4 h-4 text-indigo-500" />
          </span>
          <div className="text-2xl font-bold text-slate-900">
            {completedPlanTasks} <span className="text-xs font-normal text-slate-400">/ {totalPlanTasks}</span>
          </div>
          <p className="text-[11px] text-slate-400">
            {planCompletionPct}% syllabus schedule progress
          </p>
        </div>

        <div className="rounded-xl bg-white border border-slate-200 p-4 space-y-1 shadow-xs">
          <span className="text-xs font-semibold text-slate-500 flex items-center justify-between">
            Topic Mastery
            <Brain className="w-4 h-4 text-purple-500" />
          </span>
          <div className="text-2xl font-bold text-slate-900">
            {masteredTopicsCount}
          </div>
          <p className="text-[11px] text-slate-400">
            {masteryEntries.length} topics evaluated with 0-hint recall
          </p>
        </div>

        <div className="rounded-xl bg-white border border-slate-200 p-4 space-y-1 shadow-xs">
          <span className="text-xs font-semibold text-slate-500 flex items-center justify-between">
            Due For Revision
            <RotateCcw className="w-4 h-4 text-amber-500" />
          </span>
          <div className="text-2xl font-bold text-slate-900">
            {overdueReviews.length + dueReviews.length}
          </div>
          <p className="text-[11px] text-slate-400">
            {overdueReviews.length} overdue spaced review items
          </p>
        </div>
      </div>

      {/* 2.5. Today's Adaptive Sequence (TCS NQT Preparation Engine) */}
      {todaySession && todaySession.items.length > 0 && (
        <div className="bg-white rounded-2xl border border-indigo-100 p-6 shadow-sm space-y-5 bg-gradient-to-br from-white via-indigo-50/20 to-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-indigo-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-primary/10 text-primary">
                  <Sparkles className="w-4 h-4" />
                </span>
                <h2 className="text-lg font-bold text-slate-900">
                  Today's Adaptive Sequence
                </h2>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700">
                  {user?.targetTrack ? `${user.targetTrack.charAt(0) + user.targetTrack.slice(1).toLowerCase()} Track` : 'Ninja Track'}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Dynamically curated {todaySession.timeBudgetMinutes}-minute session: targeted MCQs, verified coding, and spaced retrieval.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{todaySession.timeBudgetMinutes}m budget</span>
              </div>
              <div className="text-xs font-bold text-primary bg-primary/5 px-3 py-1.5 rounded-lg border border-primary/20">
                {todaySession.items.filter((it: any) => {
                  const prog = problemProgress[it.questionId];
                  return it.status === 'COMPLETED' || (prog && prog.currentStatus !== 'NOT_ATTEMPTED');
                }).length} / {todaySession.items.length} Completed
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {todaySession.items.map((item: any) => {
              const q = questions.find(question => question.id === item.questionId);
              const prog = problemProgress[item.questionId];
              const isCompleted = item.status === 'COMPLETED' || (prog && prog.currentStatus !== 'NOT_ATTEMPTED');
              const isSolved = prog?.currentStatus === 'SOLVED';

              let typeBadgeClass = 'bg-slate-100 text-slate-700';
              let typeLabel = 'MCQ';
              if (item.itemType === 'EASY_CODING') {
                typeBadgeClass = 'bg-emerald-50 text-emerald-700 border-emerald-200';
                typeLabel = 'Easy Coding';
              } else if (item.itemType === 'MEDIUM_CODING') {
                typeBadgeClass = 'bg-amber-50 text-amber-700 border-amber-200';
                typeLabel = 'Medium Coding';
              } else if (item.itemType === 'SPACED_REVIEW') {
                typeBadgeClass = 'bg-purple-50 text-purple-700 border-purple-200';
                typeLabel = 'Spaced Review';
              }

              return (
                <div
                  key={item.id}
                  className={`p-4 rounded-xl border transition-all flex flex-col justify-between gap-3 ${
                    isCompleted
                      ? 'border-emerald-200 bg-emerald-50/20'
                      : 'border-slate-200 hover:border-primary/40 bg-white shadow-2xs'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-5 h-5 rounded-md bg-slate-100 text-[11px] font-bold text-slate-600 flex items-center justify-center">
                          {item.orderIndex}
                        </span>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${typeBadgeClass}`}>
                          {typeLabel}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">
                        {item.estimatedMinutes}m
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-slate-900 line-clamp-2 leading-snug">
                      {q?.title || item.topic}
                    </h4>

                    <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                      <span className="truncate max-w-[120px] font-medium">{item.topic}</span>
                      <span>•</span>
                      <DifficultyBadge difficulty={item.difficulty} />
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    {isCompleted ? (
                      <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        {isSolved ? 'Solved' : 'Attempted'}
                      </span>
                    ) : (
                      <span className="text-xs text-slate-400">Pending</span>
                    )}

                    <Link to={`/problems/${q?.catalogNumber || q?.slug || item.questionId}`}>
                      <Button
                        variant={isCompleted ? 'outline' : 'primary'}
                        size="sm"
                        className="text-xs py-1 px-2.5 h-auto"
                      >
                        {isCompleted ? 'Review' : 'Solve →'}
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. Weekly Overview & Inline Daily Activities */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Preparation Schedule & Daily Workload
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Select any date to view and complete its assigned activities inline.
              </p>
            </div>
            <Link to="/study-plan" className="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
              Full Calendar & Rescheduling <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 7-Day Date Navigator */}
          {weekWindowDays.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 mt-4 pt-4 border-t border-slate-100">
              {weekWindowDays.map((day) => {
                const isSelected = day.date === selectedDateStr;
                const isToday = day.date === todayStr;
                const dayTasksDone = day.tasks.filter(t => t.completed).length;
                const isDayComplete = day.isCompleted || (day.tasks.length > 0 && dayTasksDone === day.tasks.length);

                return (
                  <button
                    key={day.dayNumber}
                    onClick={() => setSelectedDateStr(day.date)}
                    className={`p-3 rounded-xl border text-left transition-all relative ${
                      isSelected
                        ? 'border-primary bg-indigo-50/50 shadow-xs ring-1 ring-primary'
                        : isDayComplete
                        ? 'border-emerald-200 bg-emerald-50/20 hover:border-emerald-300'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    {isToday && (
                      <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary" />
                    )}
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Day {day.dayNumber}
                    </div>
                    <div className="text-sm font-semibold text-slate-900 mt-0.5">
                      {formatDateDisplay(day.date, userTimezone).split(',')[0]}
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2">
                      <span>{dayTasksDone}/{day.tasks.length} done</span>
                      {isDayComplete && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Selected Date Activities */}
        {activeDay ? (
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-[11px] font-semibold text-indigo-600 uppercase tracking-wider">
                  Day {activeDay.dayNumber} • {formatDateDisplay(activeDay.date, userTimezone)}
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-0.5">
                  {activeDay.topic}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold text-slate-700">
                  {activeDay.totalPlannedMinutes} mins planned
                </span>
                <p className="text-[11px] text-slate-400">
                  {activeDay.tasks.filter(t => t.completed).length} of {activeDay.tasks.length} completed
                </p>
              </div>
            </div>

            {/* Ordered Tasks */}
            <div className="space-y-3">
              {activeDay.tasks.map((task) => (
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
                      onClick={() => toggleTaskCompletion(activeDay.dayNumber, task.id)}
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
                    </div>
                  </div>

                  {task.problemId && (
                    <Link to={`/problems/${task.problemId}`}>
                      <Button variant="outline" size="sm" className="text-xs shrink-0">
                        Open Question →
                      </Button>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-8 text-center text-slate-400 border border-dashed rounded-xl">
            No study plan active. Go to Study Plan to initialize your preparation schedule.
          </div>
        )}
      </div>

      {/* 4. Upcoming Spaced Revision & High-Priority Problem Practice */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Spaced Repetition Queue */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-amber-500" />
                Upcoming Spaced Revision Queue
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Questions scheduled for delayed recall to lock concepts into long-term memory.
              </p>
            </div>
            <Link to="/study-plan" className="text-xs font-semibold text-primary hover:underline">
              View All
            </Link>
          </div>

          <div className="space-y-2.5">
            {combinedUpcomingReviews.length > 0 ? (
              combinedUpcomingReviews.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors bg-white flex items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <DifficultyBadge difficulty={item.difficulty} />
                      <span className="text-xs font-bold text-slate-900 truncate max-w-[200px]">
                        {item.problemTitle}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span>{item.section}</span>
                      <span>•</span>
                      <span>Interval: {item.intervalDays}d</span>
                      <span>•</span>
                      <span className="text-amber-600 font-medium">Due: {item.nextReviewDate}</span>
                    </div>
                  </div>

                  <Link to={`/problems/${item.problemId}`}>
                    <Button variant="outline" size="sm" className="text-xs shrink-0">
                      Re-solve
                    </Button>
                  </Link>
                </div>
              ))
            ) : (
              <div className="py-8 text-center text-xs text-slate-400 border border-dashed rounded-xl">
                No questions currently due for spaced review. Complete practice problems to build your spaced recall queue!
              </div>
            )}
          </div>
        </div>

        {/* Recent Judged Submissions Feed */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-primary" />
                Recent Coding Submissions
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Compiler execution logs and evaluation results.
              </p>
            </div>
            <Link to="/progress" className="text-xs font-semibold text-primary hover:underline">
              Analytics
            </Link>
          </div>

          <div className="space-y-2.5">
            {submissions.slice(0, 4).length > 0 ? (
              submissions.slice(0, 4).map((sub) => {
                const prob = questions.find(q => q.id === sub.problemId);
                return (
                  <div
                    key={sub.id}
                    className="p-3 rounded-xl border border-slate-100 bg-slate-50/60 flex items-center justify-between gap-3"
                  >
                    <div className="space-y-0.5">
                      <Link
                        to={`/problems/${sub.problemId}`}
                        className="text-xs font-bold text-slate-900 hover:text-primary transition-colors block truncate max-w-[220px]"
                      >
                        {prob?.title || sub.problemId}
                      </Link>
                      <div className="text-[11px] text-slate-400 font-mono flex items-center gap-2">
                        <span className="capitalize">{sub.language}</span>
                        <span>•</span>
                        <span>{sub.passedTests}/{sub.totalTests} passed</span>
                        <span>•</span>
                        <span>{new Date(sub.submittedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      </div>
                    </div>

                    <VerdictBadge verdict={sub.verdict} />
                  </div>
                );
              })
            ) : (
              <div className="py-8 text-center text-xs text-slate-400 border border-dashed rounded-xl">
                No submissions recorded yet. Submit your solutions to see judged outcomes here.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
