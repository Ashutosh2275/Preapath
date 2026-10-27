import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Calendar, 
  Code2, 
  Award, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Bookmark, 
  AlertCircle,
  TrendingUp,
  RotateCcw,
  Zap
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
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Hello, {user?.displayName || 'Student'}
            </h1>
            {user?.targetTrack && <TrackBadge track={user.targetTrack} />}
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            {user?.availablePreparationDays} Days Preparation Journey • {user?.dailyAvailableMinutes} minutes/day target
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
        <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 space-y-1">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center justify-between">
            Unique Solved
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </span>
          <div className="text-2xl font-bold text-slate-900 dark:text-white">
            {solvedCount}
          </div>
          <p className="text-[11px] text-slate-400">
            {attemptedCount} unique problems attempted
          </p>
        </div>

        <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 space-y-1">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center justify-between">
            Plan Progress
            <TrendingUp className="w-4 h-4 text-indigo-500" />
          </span>
          <div className="text-2xl font-bold text-slate-900 dark:text-white">
            {planCompletionPct}%
          </div>
          <p className="text-[11px] text-slate-400">
            {completedPlanTasks} of {totalPlanTasks} tasks finished
          </p>
        </div>

        <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 space-y-1">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center justify-between">
            Judged Submissions
            <Code2 className="w-4 h-4 text-primary" />
          </span>
          <div className="text-2xl font-bold text-slate-900 dark:text-white">
            {totalSubmissionsCount}
          </div>
          <p className="text-[11px] text-slate-400">
            {acceptedSubmissionsCount} accepted submissions
          </p>
        </div>

        <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 space-y-1">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center justify-between">
            Needs Revision
            <Bookmark className="w-4 h-4 text-amber-500" />
          </span>
          <div className="text-2xl font-bold text-slate-900 dark:text-white">
            {revisionCount}
          </div>
          <p className="text-[11px] text-slate-400">
            {bookmarkedCount} problems bookmarked
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Cols: Today's Tasks & Recommended Problems */}
        <div className="lg:col-span-2 space-y-6">
          {/* Question 1: What should I study today? */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  Question 1: What should I study today?
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 mt-0.5">
                  <Calendar className="w-5 h-5 text-primary" />
                  Day {todayPlanDay?.dayNumber || 1} Schedule: {todayPlanDay?.topic || 'Foundational Study'}
                </h3>
              </div>
              <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {todayPlanDay?.totalPlannedMinutes || user?.dailyAvailableMinutes || 90} mins
              </span>
            </div>

            {todayPlanDay?.tasks && todayPlanDay.tasks.length > 0 ? (
              <div className="space-y-2.5">
                {todayPlanDay.tasks.map((task) => (
                  <div
                    key={task.id}
                    className={`flex items-start justify-between p-3.5 rounded-xl border transition-colors ${
                      task.completed
                        ? 'border-emerald-200 dark:border-emerald-900/40 bg-emerald-50/30 dark:bg-emerald-950/20'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <button
                        onClick={() => toggleTaskCompletion(todayPlanDay.dayNumber, task.id)}
                        className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                          task.completed
                            ? 'bg-emerald-500 border-emerald-500 text-white'
                            : 'border-slate-300 dark:border-slate-700 hover:border-emerald-500'
                        }`}
                        aria-label="Toggle task status"
                      >
                        {task.completed && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </button>
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-semibold ${task.completed ? 'line-through text-slate-400' : 'text-slate-800 dark:text-slate-200'}`}>
                            {task.title}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 font-mono">
                            {task.estimatedMinutes}m
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {task.description}
                        </p>
                      </div>
                    </div>

                    {task.problemId && (
                      <Link to={`/problems/${task.problemId}`}>
                        <Button variant="outline" size="sm" className="text-xs shrink-0 ml-2">
                          Solve
                        </Button>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 text-center text-xs text-slate-500 border border-dashed rounded-xl">
                No active tasks scheduled for today. You can regenerate your study plan from the Study Plan page.
              </div>
            )}
          </div>

          {/* Question 2: Which problems should I solve first? */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                  Question 2: Which problems should I solve first?
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                  Recommended for {user?.targetTrack || 'All'} Track
                </h3>
              </div>
              <Link to="/problems" className="text-xs font-semibold text-primary hover:text-primary-hover flex items-center gap-1">
                View All Problems
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-3">
              {recommendedProblems.map((q) => (
                <div
                  key={q.id}
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Link
                        to={`/problems/${q.id}`}
                        className="text-sm font-semibold text-slate-900 dark:text-white hover:text-primary transition-colors"
                      >
                        {q.title}
                      </Link>
                      <DifficultyBadge difficulty={q.difficulty} />
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span>{q.topics.join(', ')}</span>
                      <span>•</span>
                      <span>~{q.estimatedMinutes} mins</span>
                    </div>
                  </div>

                  <Link to={`/problems/${q.id}`}>
                    <Button variant="primary" size="sm">
                      Start Code
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Question 4 & 5 (History, Weak Areas) */}
        <div className="space-y-6">
          {/* Question 4: What did I do last time? */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-sm">
            <div>
              <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                Question 4: What did I do last time?
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                Recent Judged Submissions
              </h3>
            </div>

            {recentSubmissions.length > 0 ? (
              <div className="space-y-2.5">
                {recentSubmissions.map((sub) => {
                  const prob = questions.find(q => q.id === sub.problemId);
                  return (
                    <div
                      key={sub.id}
                      className="p-3 rounded-lg border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 text-xs space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <Link
                          to={`/problems/${sub.problemId}`}
                          className="font-semibold text-slate-900 dark:text-white hover:text-primary truncate max-w-[140px]"
                        >
                          {prob?.title || sub.problemId}
                        </Link>
                        <VerdictBadge verdict={sub.verdict} />
                      </div>
                      <div className="flex items-center justify-between text-slate-500 text-[11px]">
                        <span className="font-mono uppercase">{sub.language}</span>
                        <span>{new Date(sub.submittedAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-4 text-center text-xs text-slate-500 border border-dashed rounded-xl space-y-1">
                <RotateCcw className="w-5 h-5 mx-auto text-slate-400" />
                <p>No judged submissions yet.</p>
                <p className="text-[10px] text-slate-400">
                  Open any problem and submit code to see real judgment history.
                </p>
              </div>
            )}
          </div>

          {/* Weak Topics Card */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500" />
              Focus Areas & Weak Topics
            </h3>

            {user?.weakTopics && user.weakTopics.length > 0 ? (
              <div className="space-y-2">
                {user.weakTopics.map((topic) => (
                  <div
                    key={topic}
                    className="p-2.5 rounded-lg bg-amber-50/50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200 font-medium flex items-center justify-between"
                  >
                    <span>{topic}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 text-amber-700 font-mono">
                      High Priority
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500">
                No specific weak topics tagged. Update your profile settings to prioritize targeted modules.
              </p>
            )}

            <div className="pt-2">
              <Link to="/assessments">
                <Button variant="outline" size="sm" className="w-full text-xs" leftIcon={<Award className="w-3.5 h-3.5" />}>
                  Take a Diagnostic Mock Test
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
