import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Plus, BookOpen, CheckCircle2, History, ArrowRight } from 'lucide-react';
import { useQuestionsStore } from '../../stores/useQuestionsStore';
import { Button } from '../../components/common/Button';
import { DifficultyBadge, SourceBadge } from '../../components/common/Badge';

export const AdminDashboardPage: React.FC = () => {
  const { questions, auditLogs, setPublicationStatus } = useQuestionsStore();

  const publishedCount = questions.filter(q => q.publicationStatus === 'PUBLISHED').length;
  const draftCount = questions.filter(q => q.publicationStatus === 'DRAFT').length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 text-xs font-semibold mb-2">
            <ShieldAlert className="w-3.5 h-3.5" />
            Administrative Content Portal
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Question & Assessment Management
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Author, validate, and publish verified coding problems, test cases, and progressive hints.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link to="/admin/questions/new">
            <Button variant="primary" size="sm" leftIcon={<Plus className="w-4 h-4" />}>
              Create New Problem
            </Button>
          </Link>
          <Link to="/admin/audit-log">
            <Button variant="outline" size="sm" leftIcon={<History className="w-4 h-4" />}>
              Audit Logs
            </Button>
          </Link>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
          <span className="text-xs font-semibold text-slate-400 uppercase">Total Questions</span>
          <div className="text-3xl font-bold text-slate-900 dark:text-white">{questions.length}</div>
          <p className="text-[11px] text-slate-400">In database storage</p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
          <span className="text-xs font-semibold text-slate-400 uppercase">Published Active</span>
          <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">{publishedCount}</div>
          <p className="text-[11px] text-slate-400">Available to student bank</p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
          <span className="text-xs font-semibold text-slate-400 uppercase">Draft Work-in-Progress</span>
          <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">{draftCount}</div>
          <p className="text-[11px] text-slate-400">Pending test case validation</p>
        </div>
      </div>

      {/* Questions Management Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm space-y-4 p-6">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-base text-slate-900 dark:text-white">
            Repository Content Overview
          </h3>
          <span className="text-xs text-slate-500 font-mono">
            {questions.length} problems registered
          </span>
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {questions.map((q) => (
            <div key={q.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-bold text-sm text-slate-900 dark:text-white">
                    {q.title}
                  </span>
                  <DifficultyBadge difficulty={q.difficulty} />
                  <SourceBadge sourceType={q.sourceType} />
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded font-mono ${
                    q.publicationStatus === 'PUBLISHED'
                      ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                      : 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300'
                  }`}>
                    {q.publicationStatus}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span>{q.topics.join(', ')}</span>
                  <span>•</span>
                  <span>{q.publicTestCases.length} public cases</span>
                  <span>•</span>
                  <span>{q.hiddenTestCases?.length || 0} hidden grader cases</span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Link to={`/admin/questions/${q.id}`}>
                  <Button variant="outline" size="sm" className="text-xs">
                    Edit Content
                  </Button>
                </Link>
                <Link to={`/problems/${q.id}`}>
                  <Button variant="ghost" size="sm" className="text-xs">
                    Preview Student View
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
