import React from 'react';
import { Link } from 'react-router-dom';
import { History, ArrowLeft, ShieldAlert } from 'lucide-react';
import { useQuestionsStore } from '../../stores/useQuestionsStore';
import { Button } from '../../components/common/Button';

export const AdminAuditLogPage: React.FC = () => {
  const { auditLogs } = useQuestionsStore();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="flex items-center gap-3">
        <Link to="/admin" className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-800">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <History className="w-6 h-6 text-purple-600" />
            Administrative Audit Log
          </h1>
          <p className="text-xs text-slate-500">
            Immutable tracking of question creation, updates, and publication status modifications.
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        {auditLogs.length > 0 ? (
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {auditLogs.map((log) => (
              <div key={log.id} className="py-3.5 space-y-1 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-800 dark:text-slate-200 font-mono">
                    {log.action}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {new Date(log.timestamp).toLocaleString()}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  {log.details}
                </p>
                <span className="text-[10px] text-slate-400 font-mono block">
                  Modified by: {log.adminEmail} • Ref: {log.questionId}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-xs text-slate-500 py-12">
            No administrative modifications recorded yet. Actions taken in the question editor will appear here.
          </div>
        )}
      </div>
    </div>
  );
};
