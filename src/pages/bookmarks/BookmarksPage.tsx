import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, RotateCcw, Code2, Trash2, ArrowRight, FileCode } from 'lucide-react';
import { useUserStore } from '../../stores/useUserStore';
import { useQuestionsStore } from '../../stores/useQuestionsStore';
import { DifficultyBadge, TrackBadge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';

export const BookmarksPage: React.FC = () => {
  const { problemProgress, toggleBookmark, toggleNeedsRevision } = useUserStore();
  const { questions } = useQuestionsStore();

  const [activeTab, setActiveTab] = useState<'all' | 'bookmarks' | 'revision'>('all');

  const filteredItems = questions.filter(q => {
    const prog = problemProgress[q.id];
    if (activeTab === 'bookmarks') return prog?.bookmarked;
    if (activeTab === 'revision') return prog?.needsRevision;
    return prog?.bookmarked || prog?.needsRevision;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <Bookmark className="w-7 h-7 text-primary" />
          Bookmarks & Revision Queue
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Review flagged problems, revisit incorrect attempts, and reinforce key concepts before exam day.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2 text-xs font-semibold">
        <button
          onClick={() => setActiveTab('all')}
          className={`py-1.5 px-3 rounded-lg transition-colors ${
            activeTab === 'all'
              ? 'bg-primary text-white'
              : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          All Flagged Items
        </button>
        <button
          onClick={() => setActiveTab('bookmarks')}
          className={`py-1.5 px-3 rounded-lg transition-colors ${
            activeTab === 'bookmarks'
              ? 'bg-primary text-white'
              : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          Bookmarked Only
        </button>
        <button
          onClick={() => setActiveTab('revision')}
          className={`py-1.5 px-3 rounded-lg transition-colors ${
            activeTab === 'revision'
              ? 'bg-primary text-white'
              : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          Needs Revision Only
        </button>
      </div>

      {/* Items List */}
      {filteredItems.length > 0 ? (
        <div className="space-y-4">
          {filteredItems.map(q => {
            const prog = problemProgress[q.id];
            return (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      to={`/problems/${q.id}`}
                      className="font-bold text-base text-slate-900 dark:text-white hover:text-primary transition-colors"
                    >
                      {q.title}
                    </Link>
                    <DifficultyBadge difficulty={q.difficulty} />
                    {prog?.bookmarked && (
                      <span className="text-[10px] bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded font-semibold border border-indigo-200 dark:border-indigo-800">
                        Bookmarked
                      </span>
                    )}
                    {prog?.needsRevision && (
                      <span className="text-[10px] bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded font-semibold border border-amber-200 dark:border-amber-800">
                        Needs Revision
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-500 line-clamp-1">
                    {q.problemStatement.slice(0, 150)}...
                  </p>

                  {/* Private Notes Preview if exists */}
                  {prog?.notes && (
                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 font-mono">
                      <span className="font-bold text-[10px] uppercase block text-slate-400">My Note:</span>
                      {prog.notes}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {prog?.bookmarked && (
                    <button
                      onClick={() => toggleBookmark(q.id)}
                      className="text-xs p-2 text-slate-400 hover:text-rose-500 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
                      title="Remove bookmark"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}

                  <Link to={`/problems/${q.id}`}>
                    <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
                      Solve / Review
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-12 text-center space-y-3">
          <Bookmark className="w-10 h-10 text-slate-300 dark:text-slate-700 mx-auto" />
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            No items in this queue
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            While solving coding and aptitude problems, click the Bookmark icon or "Flag Revision" to add them to your personalized queue.
          </p>
          <Link to="/problems">
            <Button variant="outline" size="sm">
              Browse Problems
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};
