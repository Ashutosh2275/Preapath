import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Code2, 
  CheckCircle2, 
  Circle, 
  Bookmark, 
  Clock, 
  X,
  RotateCcw
} from 'lucide-react';
import { useQuestionsStore } from '../../stores/useQuestionsStore';
import { useUserStore } from '../../stores/useUserStore';
import { DifficultyBadge, TrackBadge, SourceBadge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { SectionType, DifficultyLevel, TargetTrack, SourceEvidenceType } from '../../types';

export const ProblemListPage: React.FC = () => {
  const { questions, filters, setFilter, resetFilters } = useQuestionsStore();
  const { problemProgress, toggleBookmark } = useUserStore();

  // Extract all unique topics
  const allTopics = Array.from(new Set(questions.flatMap(q => q.topics))).sort();

  // Filter questions
  const filteredQuestions = questions.filter((q) => {
    if (q.publicationStatus !== 'PUBLISHED') return false;

    // Search term
    if (filters.searchTerm) {
      const term = filters.searchTerm.toLowerCase();
      const matchTitle = q.title.toLowerCase().includes(term);
      const matchStatement = q.problemStatement.toLowerCase().includes(term);
      const matchTopic = q.topics.some(t => t.toLowerCase().includes(term));
      if (!matchTitle && !matchStatement && !matchTopic) return false;
    }

    // Section
    if (filters.section !== 'ALL') {
      if (!q.sections.includes(filters.section as SectionType)) return false;
    }

    // Difficulty
    if (filters.difficulty !== 'ALL') {
      if (q.difficulty !== filters.difficulty) return false;
    }

    // Track
    if (filters.track !== 'ALL') {
      if (!q.targetTracks.includes(filters.track as TargetTrack)) return false;
    }

    // Source Type
    if (filters.sourceType !== 'ALL') {
      if (q.sourceType !== filters.sourceType) return false;
    }

    // Topic
    if (filters.topic !== 'ALL') {
      if (!q.topics.includes(filters.topic)) return false;
    }

    // Status
    const prog = problemProgress[q.id];
    if (filters.status === 'SOLVED') {
      if (prog?.currentStatus !== 'SOLVED') return false;
    } else if (filters.status === 'ATTEMPTED') {
      if (prog?.currentStatus !== 'ATTEMPTED' && prog?.currentStatus !== 'SOLVED') return false;
    } else if (filters.status === 'NOT_ATTEMPTED') {
      if (prog?.currentStatus === 'ATTEMPTED' || prog?.currentStatus === 'SOLVED') return false;
    } else if (filters.status === 'BOOKMARKED') {
      if (!prog?.bookmarked) return false;
    } else if (filters.status === 'REVISION') {
      if (!prog?.needsRevision) return false;
    }

    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Title & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <Code2 className="w-7 h-7 text-primary" />
            Curated Practice Problem Bank
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Author-validated coding and aptitude practice problems with explicit evidence and provenance labels.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={filters.searchTerm}
            onChange={(e) => setFilter('searchTerm', e.target.value)}
            placeholder="Search problems or topics..."
            className="w-full pl-9 pr-8 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {filters.searchTerm && (
            <button
              onClick={() => setFilter('searchTerm', '')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Filter Controls Row */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 space-y-3 shadow-xs">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {/* Track Filter */}
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
              Hiring Track
            </label>
            <select
              value={filters.track}
              onChange={(e) => setFilter('track', e.target.value as any)}
              className="w-full text-xs p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
            >
              <option value="ALL">All Tracks</option>
              <option value="NINJA">Ninja Track</option>
              <option value="DIGITAL">Digital Track</option>
              <option value="PRIME">Prime Track</option>
            </select>
          </div>

          {/* Difficulty Filter */}
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
              Difficulty
            </label>
            <select
              value={filters.difficulty}
              onChange={(e) => setFilter('difficulty', e.target.value as any)}
              className="w-full text-xs p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
            >
              <option value="ALL">All Difficulties</option>
              <option value="EASY">Easy</option>
              <option value="MEDIUM">Medium</option>
              <option value="HARD">Hard</option>
            </select>
          </div>

          {/* Section Filter */}
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
              Section
            </label>
            <select
              value={filters.section}
              onChange={(e) => setFilter('section', e.target.value as any)}
              className="w-full text-xs p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
            >
              <option value="ALL">All Sections</option>
              <option value="CODING">Hands-on Coding</option>
              <option value="PROGRAMMING">Programming Logic</option>
              <option value="NUMERICAL">Numerical Ability</option>
              <option value="REASONING">Reasoning Ability</option>
              <option value="ADVANCED_QUANT">Advanced Quant</option>
            </select>
          </div>

          {/* Topic Filter */}
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
              Topic
            </label>
            <select
              value={filters.topic}
              onChange={(e) => setFilter('topic', e.target.value)}
              className="w-full text-xs p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
            >
              <option value="ALL">All Topics</option>
              {allTopics.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          {/* Evidence/Source Filter */}
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
              Evidence Type
            </label>
            <select
              value={filters.sourceType}
              onChange={(e) => setFilter('sourceType', e.target.value as any)}
              className="w-full text-xs p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
            >
              <option value="ALL">All Provenances</option>
              <option value="RECURRING_PATTERN">Recurring Pattern</option>
              <option value="ORIGINAL_PRACTICE">Original Practice</option>
              <option value="OFFICIAL_INFORMATION">Official Syllabus</option>
              <option value="CANDIDATE_RECALLED">Candidate Recalled</option>
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
              Solving Status
            </label>
            <select
              value={filters.status}
              onChange={(e) => setFilter('status', e.target.value as any)}
              className="w-full text-xs p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
            >
              <option value="ALL">All Statuses</option>
              <option value="SOLVED">Solved</option>
              <option value="ATTEMPTED">Attempted</option>
              <option value="NOT_ATTEMPTED">Not Attempted</option>
              <option value="BOOKMARKED">Bookmarked</option>
              <option value="REVISION">Needs Revision</option>
            </select>
          </div>
        </div>

        {/* Reset Filter Button if any active filter */}
        {(filters.searchTerm || filters.section !== 'ALL' || filters.difficulty !== 'ALL' || filters.track !== 'ALL' || filters.sourceType !== 'ALL' || filters.topic !== 'ALL' || filters.status !== 'ALL') && (
          <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
            <span className="text-slate-500">
              Showing {filteredQuestions.length} of {questions.length} problems
            </span>
            <button
              onClick={resetFilters}
              className="text-primary hover:text-primary-hover font-semibold flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Problems List Table / Cards */}
      {filteredQuestions.length > 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {filteredQuestions.map((q) => {
              const prog = problemProgress[q.id];
              const isSolved = prog?.currentStatus === 'SOLVED';
              const isAttempted = prog?.currentStatus === 'ATTEMPTED';
              const isBookmarked = prog?.bookmarked || false;

              return (
                <div
                  key={q.id}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors"
                >
                  <div className="flex items-start gap-3.5">
                    {/* Status Icon */}
                    <div className="mt-1 shrink-0">
                      {isSolved ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      ) : isAttempted ? (
                        <div className="w-5 h-5 rounded-full border-2 border-amber-500 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-amber-500" />
                        </div>
                      ) : (
                        <Circle className="w-5 h-5 text-slate-300 dark:text-slate-700" />
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <Link
                          to={`/problems/${q.id}`}
                          className="font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:text-primary transition-colors"
                        >
                          {q.title}
                        </Link>
                        <DifficultyBadge difficulty={q.difficulty} />
                        <SourceBadge sourceType={q.sourceType} />
                      </div>

                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>~{q.estimatedMinutes} mins</span>
                        </div>
                        <span>•</span>
                        <div className="flex flex-wrap gap-1">
                          {q.topics.map(t => (
                            <span key={t} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px]">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:self-center shrink-0">
                    <button
                      onClick={() => toggleBookmark(q.id)}
                      className={`p-2 rounded-lg border transition-colors ${
                        isBookmarked
                          ? 'border-indigo-300 bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400'
                          : 'border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                      aria-label="Bookmark problem"
                    >
                      <Bookmark className="w-4 h-4 fill-current" />
                    </button>

                    <Link to={`/problems/${q.id}`}>
                      <Button variant="primary" size="sm">
                        {isSolved ? 'Review Code' : isAttempted ? 'Resume Code' : 'Solve Problem'}
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-12 text-center space-y-3">
          <Code2 className="w-10 h-10 text-slate-300 dark:text-slate-700 mx-auto" />
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            No problems match your selected filters
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try adjusting your search query, difficulty, or track filters to find relevant practice exercises.
          </p>
          <Button variant="outline" size="sm" onClick={resetFilters}>
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};
