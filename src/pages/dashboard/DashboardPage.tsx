import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Calendar, 
  Code2, 
  CheckCircle2, 
  ArrowRight, 
  Bookmark, 
  TrendingUp,
  RotateCcw
} from 'lucide-react';
import { useUserStore } from '../../stores/useUserStore';
import { useQuestionsStore } from '../../stores/useQuestionsStore';
import { Button } from '../../components/common/Button';
import { DifficultyBadge, TrackBadge, VerdictBadge } from '../../components/common/Badge';

export const DashboardPage: React.FC = () => {
  const { user, studyPlan, toggleTaskCompletion, problemProgress, submissions } = useUserStore();
  const { questions } = useQuestionsStore();

  // Metrics from authoritative user progress
  const progressEntries = Object.values(problemProgress);
  const attemptedCount = progressEntries.filter(p => p.currentStatus === 'ATTEMPTED' || p.currentStatus === 'SOLVED').length;
  const solvedCount = progressEntries.filter(p => p.currentStatus === 'SOLVED').length;
  const revisionCount = progressEntries.filter(p => p.needsRevision).length;
  const bookmarkedCount = progressEntries.filter(p => p.bookmarked).length;

  const totalSubmissionsCount = submissions.length;
  const acceptedSubmissionsCount = submissions.filter(s => s.verdict === 'Accepted').length;

  // Find today's study plan tasks
  const todayStr = new Date().toISOString().split('T')[0];
  const todayPlanDay = studyPlan?.days.find(d => d.date === todayStr) || studyPlan?.days[0];

  // Total study plan tasks progress
  const totalPlanTasks = studyPlan ? studyPlan.days.reduce((acc, d) => acc + d.tasks.length, 0) : 0;
  const completedPlanTasks = studyPlan ? studyPlan.days.reduce((acc, d) => acc + d.tasks.filter(t => t.completed).length, 0) : 0;
  const planCompletionPct = totalPlanTasks > 0 ? Math.round((completedPlanTasks / totalPlanTasks) * 100) : 0;

  // Unsolved problems recommended for user's target track
  const recommendedProblems = questions.filter(q => {
    const isTrack = user?.targetTrack ? q.targetTracks.includes(user.targetTrack) : true;
    const isSolved = problemProgress[q.id]?.currentStatus === 'SOLVED';
    return isTrack && !isSolved && q.publicationStatus === 'PUBLISHED';
  }).slice(0, 3);

  // Recent submissions
  const recentSubmissions = submissions.slice(0, 5);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Greeting */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Hello, {user?.displayName || 'Student'}
            </h1>
            {user?.targetTrack && <TrackBadge track={user.targetTrack} />}
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {user?.availablePreparationDays || 14} Days Preparation Journey • {user?.dailyAvailableMinutes || 60} minutes/day target
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link to="/study-plan">
            <Button variant="outline" size="sm" leftIcon={<Calendar className="w-4 h-4" />}>
              View Full Plan
            </Button>
          </Link>
          <Link to="/problems">
            <Button variant="primary" size="sm" leftIcon={<Code2 className="w-4 h-4" />}>
              Practice Code
            </Button>
          </Link>
        </div>
      </div>

      {/* Metrics Row (Genuine Data Only - No Fabricated Numbers) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-xl bg-white border border-slate-200 p-4 space-y-1 shadow-xs">
          <span className="text-xs font-semibold text-slate-500 flex items-center justify-between">
            Unique Solved
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </span>
          <div className="text-2xl font-bold text-slate-900">
            {solvedCount}
          </div>
          <p className="text-[11px] text-slate-400">
            {attemptedCount} unique problems attempted
          </p>
        </div>

        <div className="rounded-xl bg-white border border-slate-200 p-4 space-y-1 shadow-xs">
          <span className="text-xs font-semibold text-slate-500 flex items-center justify-between">
            Plan Progress
            <TrendingUp className="w-4 h-4 text-indigo-500" />
          </span>
          <div className="text-2xl font-bold text-slate-900">
            {planCompletionPct}%
          </div>
          <p className="text-[11px] text-slate-400">
            {completedPlanTasks} of {totalPlanTasks} tasks finished
          </p>
        </div>

        <div className="rounded-xl bg-white border border-slate-200 p-4 space-y-1 shadow-xs">
          <span className="text-xs font-semibold text-slate-500 flex items-center justify-between">
            Judged Submissions
            <Code2 className="w-4 h-4 text-primary" />
          </span>
          <div className="text-2xl font-bold text-slate-900">
            {totalSubmissionsCount}
          </div>
          <p className="text-[11px] text-slate-400">
            {acceptedSubmissionsCount} accepted submissions
          </p>
        </div>

        <div className="rounded-xl bg-white border border-slate-200 p-4 space-y-1 shadow-xs">
          <span className="text-xs font-semibold text-slate-500 flex items-center justify-between">
            Needs Revision
            <Bookmark className="w-4 h-4 text-amber-500" />
          </span>
          <div className="text-2xl font-bold text-slate-900">
            {revisionCount}
          </div>
          <p className="text-[11px] text-slate-400">
            {bookmarkedCount} problems bookmarked
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Today's Tasks */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">
                  Today's Session
                </span>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 mt-0.5">
                  <Calendar className="w-5 h-5 text-primary" />
                  Day {todayPlanDay?.dayNumber || 1} — {todayPlanDay?.topic || 'Foundation Practice'}
                </h3>
              </div>
              <Link to="/study-plan" className="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
                Full Schedule <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Task list for today */}
            <div className="space-y-3">
              {todayPlanDay?.tasks.map((task) => (
                <div
                  key={task.id}
                  className={`p-3.5 rounded-xl border transition-all flex items-start justify-between gap-3 ${
                    task.completed
                      ? 'border-emerald-200 bg-emerald-50/30'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <button
                      onClick={() => todayPlanDay && toggleTaskCompletion(todayPlanDay.dayNumber, task.id)}
                      className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                        task.completed
                          ? 'bg-emerald-500 border-emerald-500 text-white'
                          : 'border-slate-300 hover:border-emerald-500 bg-white'
                      }`}
                    >
                      {task.completed && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </button>
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-semibold ${task.completed ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                          {task.title}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-100 text-slate-500 font-mono">
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
                      <Button variant="ghost" size="sm" className="text-xs shrink-0">
                        Solve
                      </Button>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Practice Problems */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-bold text-teal-600 uppercase tracking-wider">
                  Target Tier Recommendation
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  High-Priority Practice Problems
                </h3>
              </div>
              <Link to="/problems" className="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
                View All <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="divide-y divide-slate-100">
              {recommendedProblems.map((prob) => (
                <div
                  key={prob.id}
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors bg-white my-1"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <DifficultyBadge difficulty={prob.difficulty} />
                      <Link
                        to={`/problems/${prob.id}`}
                        className="text-sm font-semibold text-slate-900 hover:text-primary transition-colors"
                      >
                        {prob.catalogNumber ? `#${prob.catalogNumber} ` : ''}{prob.title}
                      </Link>
                    </div>
                    <div className="text-[11px] text-slate-400 flex items-center gap-2">
                      <span>{prob.sections.join(', ')}</span>
                      <span>•</span>
                      <span>{prob.estimatedMinutes} mins</span>
                    </div>
                  </div>

                  <Link to={`/problems/${prob.id}`}>
                    <Button variant="outline" size="sm" className="text-xs">
                      Practice
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Recent Activity & Quick Tools */}
        <div className="space-y-6">
          {/* Submissions Feed */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm">
            <div>
              <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">
                Submission History
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-0.5">
                Recent Judged Submissions
              </h3>
            </div>

            <div className="space-y-2">
              {recentSubmissions.length > 0 ? (
                recentSubmissions.map((sub) => {
                  const prob = questions.find(q => q.id === sub.problemId);
                  return (
                    <div
                      key={sub.id}
                      className="p-3 rounded-lg border border-slate-100 bg-slate-50/50 text-xs space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <Link
                          to={`/problems/${sub.problemId}`}
                          className="font-semibold text-slate-900 hover:text-primary truncate max-w-[140px]"
                        >
                          {prob?.title || sub.problemId}
                        </Link>
                        <VerdictBadge verdict={sub.verdict} />
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                        <span className="capitalize">{sub.language}</span>
                        <span>{sub.passedTests}/{sub.totalTests} passed</span>
                        <span>{new Date(sub.submittedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="p-6 text-center text-xs text-slate-400 border border-dashed rounded-xl">
                  No submissions yet. Practice a problem to generate your judged performance record!
                </div>
              )}
            </div>
          </div>

          {/* Quick Revision Reminder */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-amber-500" />
              Flagged For Revision
            </h3>
            <p className="text-xs text-slate-500">
              Problems marked for revision are scheduled in Stage D of your daily plan.
            </p>
            <div className="space-y-2">
              {progressEntries.filter(p => p.needsRevision).slice(0, 3).map((item) => {
                const p = questions.find(q => q.id === item.problemId);
                return (
                  <Link
                    key={item.problemId}
                    to={`/problems/${item.problemId}`}
                    className="p-2.5 rounded-lg bg-amber-50/50 border border-amber-200 text-xs text-amber-900 font-medium flex items-center justify-between hover:bg-amber-50 transition-colors"
                  >
                    <span className="truncate max-w-[180px]">{p?.title || item.problemId}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-white text-amber-700 font-mono border border-amber-200">
                      Revisit
                    </span>
                  </Link>
                );
              })}
              {progressEntries.filter(p => p.needsRevision).length === 0 && (
                <div className="text-center text-xs text-slate-400 py-4">
                  No questions currently flagged for revision.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
