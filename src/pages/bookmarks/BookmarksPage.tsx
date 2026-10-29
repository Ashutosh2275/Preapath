import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  RotateCcw, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Bookmark, 
  History, 
  Award, 
  Code2, 
  Check, 
  ExternalLink,
  ChevronRight,
  Filter
} from 'lucide-react';
import { useUserStore } from '../../stores/useUserStore';
import { useQuestionsStore } from '../../stores/useQuestionsStore';
import { SpacedReviewItem } from '../../types';
import { getDueReviewItems, getOverdueReviewItems } from '../../lib/spacedRepetition';
import { Button } from '../../components/common/Button';
import { DifficultyBadge, TrackBadge, VerdictBadge } from '../../components/common/Badge';

export const BookmarksPage: React.FC = () => {
  const { 
    user, 
    problemProgress, 
    spacedReviewItems, 
    markReviewCompleted, 
    toggleNeedsRevision, 
    toggleBookmark,
    submissions 
  } = useUserStore();
  const { questions } = useQuestionsStore();

  const [activeTab, setActiveTab] = useState<'due' | 'history' | 'flagged' | 'bookmarks' | 'mastered'>('due');

  const reviewItemsList = Object.values(spacedReviewItems || {});
  const dueItems = getDueReviewItems(reviewItemsList);
  const overdueItems = getOverdueReviewItems(reviewItemsList);
  const masteredItems = reviewItemsList.filter(item => item.isMastered);

  const attemptedProblemIds = Object.keys(problemProgress).filter(
    id => problemProgress[id].currentStatus === 'ATTEMPTED' || problemProgress[id].currentStatus === 'SOLVED'
  );

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
            <RotateCcw className="w-7 h-7 text-primary" />
            Spaced Revision Queue & Question History
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Ebbinghaus-modeled spaced repetition schedule: 1 day for mistakes, 2 days for hints, 3 days for slow solves, 7 days for confidence, and 14 days for mastery.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link to="/study-plan">
            <Button variant="outline" size="sm" leftIcon={<Calendar className="w-4 h-4" />}>
              Daily Planner
            </Button>
          </Link>
          <Link to="/problems">
            <Button variant="primary" size="sm" leftIcon={<Code2 className="w-4 h-4" />}>
              Browse All Problems
            </Button>
          </Link>
        </div>
      </div>

      {/* Overview Stat Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-1 shadow-xs">
          <span className="text-xs font-semibold text-slate-500 flex items-center justify-between">
            Reviews Due Today
            <Clock className="w-4 h-4 text-amber-500" />
          </span>
          <div className="text-2xl font-bold text-amber-600">
            {dueItems.length}
          </div>
          <p className="text-[11px] text-slate-400">
            {overdueItems.length} strictly overdue
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-1 shadow-xs">
          <span className="text-xs font-semibold text-slate-500 flex items-center justify-between">
            Mastered Problems
            <Award className="w-4 h-4 text-emerald-500" />
          </span>
          <div className="text-2xl font-bold text-emerald-600">
            {masteredItems.length}
          </div>
          <p className="text-[11px] text-slate-400">
            &ge; 14-day recall retention
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-1 shadow-xs">
          <span className="text-xs font-semibold text-slate-500 flex items-center justify-between">
            Attempted Questions
            <History className="w-4 h-4 text-primary" />
          </span>
          <div className="text-2xl font-bold text-slate-900">
            {attemptedProblemIds.length}
          </div>
          <p className="text-[11px] text-slate-400">
            Unique problems practiced
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-1 shadow-xs">
          <span className="text-xs font-semibold text-slate-500 flex items-center justify-between">
            Total Submissions
            <Code2 className="w-4 h-4 text-indigo-500" />
          </span>
          <div className="text-2xl font-bold text-slate-900">
            {submissions.length}
          </div>
          <p className="text-[11px] text-slate-400">
            Judged code snapshots
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 text-xs font-semibold overflow-x-auto">
        <button
          onClick={() => setActiveTab('due')}
          className={`py-2 px-3 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'due'
              ? 'bg-primary text-white font-bold'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Clock className="w-3.5 h-3.5" />
          Due for Review ({dueItems.length})
        </button>

        <button
          onClick={() => setActiveTab('history')}
          className={`py-2 px-3 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'history'
              ? 'bg-primary text-white font-bold'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <History className="w-3.5 h-3.5" />
          Attempt History ({attemptedProblemIds.length})
        </button>

        <button
          onClick={() => setActiveTab('flagged')}
          className={`py-2 px-3 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'flagged'
              ? 'bg-primary text-white font-bold'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Flagged Revision ({questions.filter(q => problemProgress[q.id]?.needsRevision).length})
        </button>

        <button
          onClick={() => setActiveTab('bookmarks')}
          className={`py-2 px-3 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'bookmarks'
              ? 'bg-primary text-white font-bold'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Bookmark className="w-3.5 h-3.5" />
          Bookmarked ({questions.filter(q => problemProgress[q.id]?.bookmarked).length})
        </button>

        <button
          onClick={() => setActiveTab('mastered')}
          className={`py-2 px-3 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'mastered'
              ? 'bg-primary text-white font-bold'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Award className="w-3.5 h-3.5" />
          Mastered ({masteredItems.length})
        </button>
      </div>

      {/* Tab 1: Due & Overdue Items */}
      {activeTab === 'due' && (
        <div className="space-y-4">
          {dueItems.length > 0 ? (
            dueItems.map(item => {
              const q = questions.find(qu => qu.id === item.problemId);
              const isOverdue = item.nextReviewDate < todayStr;

              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-2xl border p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm ${
                    isOverdue 
                      ? 'border-amber-300' 
                      : 'border-slate-200'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold text-slate-900">
                        {item.catalogNumber ? `#${item.catalogNumber}` : ''} {item.problemTitle}
                      </span>
                      <DifficultyBadge difficulty={item.difficulty} />
                      {isOverdue ? (
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200">
                          Overdue ({item.nextReviewDate})
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">
                          Due Today ({item.nextReviewDate})
                        </span>
                      )}
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono">
                        {item.intervalDays}-Day Interval
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                      <span>Last Verdict: <VerdictBadge verdict={item.lastVerdict} /></span>
                      <span>Total Attempts: {item.attemptCount}</span>
                      <span>Consecutive Passes: {item.consecutiveCorrect}</span>
                      {item.revealedHintsCount > 0 && <span>Hints Used: {item.revealedHintsCount}</span>}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => markReviewCompleted(item.problemId)}
                      leftIcon={<Check className="w-3.5 h-3.5" />}
                      className="text-xs"
                    >
                      Mark Reviewed
                    </Button>
                    <Link to={`/problems/${item.catalogNumber || item.problemId}`}>
                      <Button variant="primary" size="sm" className="text-xs">
                        Solve Now →
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="p-12 text-center rounded-2xl border border-dashed border-slate-200 bg-white/50 space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
              <h3 className="font-bold text-slate-900 text-base">
                No Spaced Reviews Due Today!
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                You're caught up with your spaced recall queue. Complete today's daily plan tasks or practice new problems to maintain your streak.
              </p>
              <Link to="/study-plan">
                <Button variant="primary" size="sm">Go to Daily Plan</Button>
              </Link>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Attempt History */}
      {activeTab === 'history' && (
        <div className="space-y-4">
          {attemptedProblemIds.length > 0 ? (
            attemptedProblemIds.map(pid => {
              const q = questions.find(qu => qu.id === pid);
              const prog = problemProgress[pid];
              const qSubs = submissions.filter(s => s.problemId === pid);

              return (
                <div
                  key={pid}
                  className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <Link
                        to={`/problems/${q?.catalogNumber || pid}`}
                        className="font-bold text-sm text-slate-900 hover:text-primary transition-colors"
                      >
                        {q?.catalogNumber ? `#${q.catalogNumber} ` : ''}{q?.title || pid}
                      </Link>
                      {q && <DifficultyBadge difficulty={q.difficulty} />}
                      {prog.currentStatus === 'SOLVED' ? (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Solved ✓
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">
                          Attempted
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                      <span>Total Submissions: {prog.totalSubmissions}</span>
                      <span>Accepted: {prog.acceptedSubmissions}</span>
                      {prog.lastAttemptAt && (
                        <span>Last Attempt: {new Date(prog.lastAttemptAt).toLocaleDateString()}</span>
                      )}
                      {prog.revealedHintsCount > 0 && (
                        <span>Hints Revealed: {prog.revealedHintsCount}</span>
                      )}
                    </div>
                  </div>

                  <Link to={`/problems/${q?.catalogNumber || pid}`}>
                    <Button variant="outline" size="sm" className="text-xs shrink-0">
                      View Problem & Code →
                    </Button>
                  </Link>
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center text-xs text-slate-500 border border-dashed rounded-xl">
              No problem attempts recorded yet.
            </div>
          )}
        </div>
      )}

      {/* Tab 3: Flagged for Revision */}
      {activeTab === 'flagged' && (
        <div className="space-y-4">
          {questions.filter(q => problemProgress[q.id]?.needsRevision).map(q => (
            <div
              key={q.id}
              className="bg-white rounded-2xl border border-amber-200 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-slate-900">
                    {q.catalogNumber ? `#${q.catalogNumber} ` : ''}{q.title}
                  </span>
                  <DifficultyBadge difficulty={q.difficulty} />
                </div>
                <p className="text-xs text-slate-500 line-clamp-1">
                  {q.problemStatement.slice(0, 140)}...
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleNeedsRevision(q.id)}
                  className="text-xs"
                >
                  Unflag
                </Button>
                <Link to={`/problems/${q.catalogNumber || q.id}`}>
                  <Button variant="primary" size="sm" className="text-xs">
                    Re-attempt →
                  </Button>
                </Link>
              </div>
            </div>
          ))}

          {questions.filter(q => problemProgress[q.id]?.needsRevision).length === 0 && (
            <div className="p-8 text-center text-xs text-slate-500 border border-dashed rounded-xl">
              No problems currently flagged for revision. Use the "Flag Revision" button on any problem to queue it here.
            </div>
          )}
        </div>
      )}

      {/* Tab 4: Bookmarked */}
      {activeTab === 'bookmarks' && (
        <div className="space-y-4">
          {questions.filter(q => problemProgress[q.id]?.bookmarked).map(q => (
            <div
              key={q.id}
              className="bg-white rounded-2xl border border-indigo-200 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-slate-900">
                    {q.catalogNumber ? `#${q.catalogNumber} ` : ''}{q.title}
                  </span>
                  <DifficultyBadge difficulty={q.difficulty} />
                </div>
                <p className="text-xs text-slate-500 line-clamp-1">
                  {q.problemStatement.slice(0, 140)}...
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleBookmark(q.id)}
                  className="text-xs"
                >
                  Remove Bookmark
                </Button>
                <Link to={`/problems/${q.catalogNumber || q.id}`}>
                  <Button variant="primary" size="sm" className="text-xs">
                    Open Problem →
                  </Button>
                </Link>
              </div>
            </div>
          ))}

          {questions.filter(q => problemProgress[q.id]?.bookmarked).length === 0 && (
            <div className="p-8 text-center text-xs text-slate-500 border border-dashed rounded-xl">
              No bookmarked problems. Click the "Bookmark" button on any problem detail view to store it for quick access.
            </div>
          )}
        </div>
      )}

      {/* Tab 5: Mastered Questions */}
      {activeTab === 'mastered' && (
        <div className="space-y-4">
          {masteredItems.length > 0 ? (
            masteredItems.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-emerald-200 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-slate-900">
                      {item.catalogNumber ? `#${item.catalogNumber} ` : ''}{item.problemTitle}
                    </span>
                    <DifficultyBadge difficulty={item.difficulty} />
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Mastered (14-Day Interval)
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Consecutive correct solves: {item.consecutiveCorrect} • Next scheduled retention check: {item.nextReviewDate}
                  </p>
                </div>

                <Link to={`/problems/${item.catalogNumber || item.problemId}`}>
                  <Button variant="outline" size="sm" className="text-xs shrink-0">
                    Practice Again
                  </Button>
                </Link>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-xs text-slate-500 border border-dashed rounded-xl">
              No mastered problems yet. Questions reach Mastered status when solved correctly with zero hints across successive spaced reviews.
            </div>
          )}
        </div>
      )}
    </div>
  );
};
