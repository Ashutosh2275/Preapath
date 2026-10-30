import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { History, Code2, ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { useUserStore } from '../../stores/useUserStore';
import { useQuestionsStore } from '../../stores/useQuestionsStore';
import { VerdictBadge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { Modal } from '../../components/common/Modal';
import { Submission } from '../../types';

export const SubmissionsPage: React.FC = () => {
  const { submissions } = useUserStore();
  const { questions } = useQuestionsStore();

  const [selectedSub, setSelectedSub] = useState<Submission | null>(null);
  const [filterVerdict, setFilterVerdict] = useState<string>('ALL');

  const filteredSubmissions = submissions.filter(s => {
    if (filterVerdict === 'ACCEPTED') return s.verdict === 'Accepted';
    if (filterVerdict === 'FAILED') return s.verdict !== 'Accepted';
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
            <History className="w-7 h-7 text-primary" />
            Judged Submission History
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Complete persistent audit records of all code submissions, verdicts, and performance metrics.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <select
            value={filterVerdict}
            onChange={(e) => setFilterVerdict(e.target.value)}
            className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-900"
          >
            <option value="ALL">All Verdicts</option>
            <option value="ACCEPTED">Accepted Only</option>
            <option value="FAILED">Failed / Errors Only</option>
          </select>
        </div>
      </div>

      {filteredSubmissions.length > 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="divide-y divide-slate-100">
            {filteredSubmissions.map((sub) => {
              const q = questions.find(item => item.id === sub.problemId);
              return (
                <div
                  key={sub.id}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <Link
                        to={`/problems/${sub.problemId}`}
                        className="font-bold text-sm text-slate-900 hover:text-primary transition-colors"
                      >
                        {q?.title || sub.problemId}
                      </Link>
                      <VerdictBadge verdict={sub.verdict} />
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                      <span className="uppercase font-semibold">{sub.language}</span>
                      <span>•</span>
                      <span>{sub.passedTests} / {sub.totalTests} tests passed</span>
                      <span>•</span>
                      <span>{sub.executionTimeMs} ms</span>
                      <span>•</span>
                      <span>{sub.memoryUsedKb} KB</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400 font-mono mr-2">
                      {new Date(sub.submittedAt).toLocaleTimeString()} • {new Date(sub.submittedAt).toLocaleDateString()}
                    </span>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedSub(sub)}
                      className="text-xs"
                    >
                      View Code Snapshot
                    </Button>

                    <Link to={`/problems/${sub.problemId}`}>
                      <Button variant="ghost" size="sm" className="text-xs">
                        Open Workspace →
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
          <Code2 className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-900">
            No submissions found
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Solve problems and click "Submit Code" to record permanent judged snapshots.
          </p>
          <Link to="/problems">
            <Button variant="primary" size="sm">
              Practice Coding
            </Button>
          </Link>
        </div>
      )}

      {/* Code Snapshot Modal */}
      {selectedSub && (
        <Modal
          isOpen={Boolean(selectedSub)}
          onClose={() => setSelectedSub(null)}
          title={`Code Snapshot (${selectedSub.language.toUpperCase()})`}
          description={`Submitted at ${new Date(selectedSub.submittedAt).toLocaleString()} • Verdict: ${selectedSub.verdict}`}
          maxWidth="2xl"
        >
          <div className="space-y-4">
            <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto max-h-[400px]">
              {selectedSub.sourceCodeSnapshot}
            </pre>

            <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>{selectedSub.passedTests}/{selectedSub.totalTests} tests passed</span>
              <span>Runtime: {selectedSub.executionTimeMs}ms • Memory: {selectedSub.memoryUsedKb}KB</span>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <Button variant="ghost" size="sm" onClick={() => setSelectedSub(null)}>
                Close
              </Button>
              <Link to={`/problems/${selectedSub.problemId}`}>
                <Button variant="primary" size="sm">
                  Go to Problem Workspace
                </Button>
              </Link>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
