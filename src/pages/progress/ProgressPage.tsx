import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart2, 
  CheckCircle2, 
  Circle, 
  Clock, 
  TrendingUp, 
  Bookmark, 
  AlertCircle,
  Award,
  Zap,
  Code2
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';
import { useUserStore } from '../../stores/useUserStore';
import { useQuestionsStore } from '../../stores/useQuestionsStore';
import { Button } from '../../components/common/Button';

export const ProgressPage: React.FC = () => {
  const { user, problemProgress, submissions, studyPlan, assessmentAttempts } = useUserStore();
  const { questions } = useQuestionsStore();

  const progressEntries = Object.values(problemProgress);
  const attemptedCount = progressEntries.filter(p => p.currentStatus === 'ATTEMPTED' || p.currentStatus === 'SOLVED').length;
  const solvedCount = progressEntries.filter(p => p.currentStatus === 'SOLVED').length;
  const revisionCount = progressEntries.filter(p => p.needsRevision).length;

  const totalSubmissions = submissions.length;
  const acceptedSubmissions = submissions.filter(s => s.verdict === 'Accepted').length;
  const failedSubmissions = totalSubmissions - acceptedSubmissions;

  // Compute Topic Distribution of Solved Problems
  const topicCounts: Record<string, number> = {};
  progressEntries.forEach(p => {
    if (p.currentStatus === 'SOLVED') {
      const q = questions.find(item => item.id === p.problemId);
      if (q) {
        q.topics.forEach(t => {
          topicCounts[t] = (topicCounts[t] || 0) + 1;
        });
      }
    }
  });

  const topicChartData = Object.entries(topicCounts).map(([name, count]) => ({
    name,
    count,
  }));

  // Verdict breakdown
  const verdictCounts: Record<string, number> = {};
  submissions.forEach(s => {
    verdictCounts[s.verdict] = (verdictCounts[s.verdict] || 0) + 1;
  });

  const verdictChartData = Object.entries(verdictCounts).map(([name, value]) => ({
    name,
    value,
  }));

  const COLORS = ['#10B981', '#F59E0B', '#EF4444', '#6366F1', '#8B5CF6'];

  const hasActivity = totalSubmissions > 0 || solvedCount > 0 || assessmentAttempts.length > 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
          <BarChart2 className="w-7 h-7 text-primary" />
          Preparation Progress Analytics
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Honest progress metrics computed authoritatively from your verified attempts, submissions, and assessments.
        </p>
      </div>

      {hasActivity ? (
        <div className="space-y-8">
          {/* Key Metric Tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-1">
              <span className="text-xs font-semibold text-slate-400">DISTINCT SOLVED</span>
              <div className="text-3xl font-bold text-slate-900">{solvedCount}</div>
              <p className="text-[11px] text-slate-400">{attemptedCount} unique problems attempted</p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-1">
              <span className="text-xs font-semibold text-slate-400">TOTAL SUBMISSIONS</span>
              <div className="text-3xl font-bold text-slate-900">{totalSubmissions}</div>
              <p className="text-[11px] text-emerald-500">{acceptedSubmissions} accepted verdicts</p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-1">
              <span className="text-xs font-semibold text-slate-400">NEEDS REVISION</span>
              <div className="text-3xl font-bold text-slate-900">{revisionCount}</div>
              <p className="text-[11px] text-slate-400">Flagged for reinforcement</p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-1">
              <span className="text-xs font-semibold text-slate-400">MOCK ATTEMPTS</span>
              <div className="text-3xl font-bold text-slate-900">{assessmentAttempts.length}</div>
              <p className="text-[11px] text-slate-400">Timed assessments taken</p>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Topic Mastery Bar Chart */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm">
              <h3 className="font-bold text-base text-slate-900">
                Solved Questions by Topic
              </h3>
              {topicChartData.length > 0 ? (
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={topicChartData} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                      <XAxis dataKey="name" stroke="#94A3B8" fontSize={11} interval={0} angle={-20} textAnchor="end" />
                      <YAxis stroke="#94A3B8" fontSize={11} allowDecimals={false} />
                      <Tooltip contentStyle={{ backgroundColor: '#0F172A', borderColor: '#334155', color: '#fff', fontSize: '12px' }} />
                      <Bar dataKey="count" fill="#4F46E5" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <div className="h-64 flex items-center justify-center text-xs text-slate-400 border border-dashed rounded-xl">
                  Solve practice questions to visualize topic distribution.
                </div>
              )}
            </div>

            {/* Verdict Distribution Pie Chart */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm">
              <h3 className="font-bold text-base text-slate-900">
                Submission Verdict Breakdown
              </h3>
              {verdictChartData.length > 0 ? (
                <div className="h-64 w-full flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={verdictChartData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        labelLine={false}
                      >
                        {verdictChartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ backgroundColor: '#0F172A', borderColor: '#334155', color: '#fff', fontSize: '12px' }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <div className="h-64 flex items-center justify-center text-xs text-slate-400 border border-dashed rounded-xl">
                  Submit code solutions to view execution verdict distribution.
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Honest Empty State for New Accounts */
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4 shadow-sm max-w-xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-primary flex items-center justify-center mx-auto">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            No Activity Recorded Yet
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            PrepPath displays strictly verified user activity without fabricated stats or fake streaks. As you solve questions, run custom test cases, and complete assessments, your real progress will be charted here.
          </p>
          <div className="pt-2">
            <Link to="/problems">
              <Button variant="primary" size="sm" rightIcon={<Code2 className="w-4 h-4" />}>
                Start First Problem
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
