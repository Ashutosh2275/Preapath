import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Save, ArrowLeft, Plus, Trash2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useQuestionsStore } from '../../stores/useQuestionsStore';
import { useUserStore } from '../../stores/useUserStore';
import { Question, DifficultyLevel, TargetTrack, SectionType, SourceEvidenceType, TestCase, Example } from '../../types';
import { Button } from '../../components/common/Button';

export const AdminQuestionEditorPage: React.FC = () => {
  const { questionId } = useParams<{ questionId: string }>();
  const navigate = useNavigate();
  const { questions, addQuestion, updateQuestion } = useQuestionsStore();
  const { user } = useUserStore();

  const isNew = !questionId || questionId === 'new';
  const existing = questions.find(q => q.id === questionId);

  // Form State
  const [title, setTitle] = useState(existing?.title || '');
  const [slug, setSlug] = useState(existing?.slug || '');
  const [problemStatement, setProblemStatement] = useState(existing?.problemStatement || '');
  const [inputFormat, setInputFormat] = useState(existing?.inputFormat || '');
  const [outputFormat, setOutputFormat] = useState(existing?.outputFormat || '');
  const [constraintsText, setConstraintsText] = useState(existing?.constraints.join('\n') || '1 <= N <= 10^5\nTime Limit: 1.0s\nMemory Limit: 128 MB');
  const [difficulty, setDifficulty] = useState<DifficultyLevel>(existing?.difficulty || 'EASY');
  const [tracks, setTracks] = useState<TargetTrack[]>(existing?.targetTracks || ['NINJA']);
  const [sections, setSections] = useState<SectionType[]>(existing?.sections || ['CODING']);
  const [topicsText, setTopicsText] = useState(existing?.topics.join(', ') || 'Math, Strings');
  const [estimatedMinutes, setEstimatedMinutes] = useState(existing?.estimatedMinutes || 20);
  const [sourceType, setSourceType] = useState<SourceEvidenceType>(existing?.sourceType || 'ORIGINAL_PRACTICE');
  const [sourceNotes, setSourceNotes] = useState(existing?.sourceReferences?.notes || '');
  const [publicationStatus, setPublicationStatus] = useState<'DRAFT' | 'PUBLISHED'>(existing?.publicationStatus === 'DRAFT' ? 'DRAFT' : 'PUBLISHED');

  // Examples
  const [examples, setExamples] = useState<Example[]>(
    existing?.examples || [
      { input: '10', output: '23', explanation: 'Sample test explanation' }
    ]
  );

  // Hints
  const [hints, setHints] = useState<string[]>(
    existing?.hints || [
      'Hint 1: Observe problem constraints and edge cases.',
      'Hint 2: Identify whether a greedy or DP approach applies.',
      'Hint 3: Formulate your algorithmic steps.'
    ]
  );

  // Explanation
  const [explanation, setExplanation] = useState(existing?.explanation || 'Optimal solution concept and complexity explanation.');
  const [timeComplexity, setTimeComplexity] = useState(existing?.timeComplexity || 'O(N)');
  const [spaceComplexity, setSpaceComplexity] = useState(existing?.spaceComplexity || 'O(1)');

  // Public Test Cases
  const [publicTestCases, setPublicTestCases] = useState<TestCase[]>(
    existing?.publicTestCases || [
      { id: 'tc-pub-1', name: 'Sample 1', input: '10', expectedOutput: '23' }
    ]
  );

  // Hidden Test Cases
  const [hiddenTestCases, setHiddenTestCases] = useState<TestCase[]>(
    existing?.hiddenTestCases || [
      { id: 'tc-hid-1', input: '100', expectedOutput: '2318', isHidden: true }
    ]
  );

  // Starter Code
  const [starterPython, setStarterPython] = useState(existing?.starterCodeByLanguage?.python || 'import sys\n\ndef solve():\n    pass\n\nif __name__ == "__main__":\n    solve()\n');
  const [starterCpp, setStarterCpp] = useState(existing?.starterCodeByLanguage?.cpp || '#include <iostream>\nusing namespace std;\n\nint main() {\n    return 0;\n}\n');
  const [starterJava, setStarterJava] = useState(existing?.starterCodeByLanguage?.java || 'import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n    }\n}\n');
  const [starterC, setStarterC] = useState(existing?.starterCodeByLanguage?.c || '#include <stdio.h>\n\nint main() {\n    return 0;\n}\n');

  const [error, setError] = useState<string | null>(null);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!title.trim() || !problemStatement.trim()) {
      setError('Title and Problem Statement are required.');
      return;
    }

    if (publicTestCases.length === 0) {
      setError('At least one public test case is required.');
      return;
    }

    const payload = {
      slug: slug.trim() || title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      title: title.trim(),
      problemStatement: problemStatement.trim(),
      inputFormat: inputFormat.trim(),
      outputFormat: outputFormat.trim(),
      constraints: constraintsText.split('\n').map(c => c.trim()).filter(Boolean),
      examples,
      difficulty,
      topics: topicsText.split(',').map(t => t.trim()).filter(Boolean),
      sections,
      targetTracks: tracks,
      estimatedMinutes: Number(estimatedMinutes),
      problemFormat: 'STANDARD_IO' as const,
      sourceType,
      sourceReferences: {
        title: sourceType === 'ORIGINAL_PRACTICE' ? 'PrepPath Original Question' : 'Exam Pattern',
        notes: sourceNotes.trim(),
      },
      hints: hints.filter(h => h.trim().length > 0),
      explanation: explanation.trim(),
      timeComplexity: timeComplexity.trim(),
      spaceComplexity: spaceComplexity.trim(),
      starterCodeByLanguage: {
        python: starterPython,
        cpp: starterCpp,
        java: starterJava,
        c: starterC,
      },
      publicTestCases,
      hiddenTestCases,
      publicationStatus,
    };

    const adminEmail = user?.email || 'admin@preppath.dev';

    if (isNew || !existing) {
      addQuestion(payload, adminEmail);
    } else {
      updateQuestion(existing.id, payload, adminEmail);
    }

    navigate('/admin');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/admin" className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-800">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {isNew || !existing ? 'Create New Practice Problem' : `Edit: ${existing.title}`}
            </h1>
            <p className="text-xs text-slate-500">
              Validated problem authoring, test case grader setup, and progressive hints.
            </p>
          </div>
        </div>

        <Button
          type="button"
          onClick={handleSave}
          variant="primary"
          size="sm"
          leftIcon={<Save className="w-4 h-4" />}
        >
          Save & Publish
        </Button>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-xs text-rose-700 dark:text-rose-300 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSave} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-6 shadow-sm text-xs">
        {/* Basic Metadata */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2">
            <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
              Problem Title
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Consecutive Prime Sum"
              className="w-full p-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
              Publication Status
            </label>
            <select
              value={publicationStatus}
              onChange={(e) => setPublicationStatus(e.target.value as any)}
              className="w-full p-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
            >
              <option value="DRAFT">Draft (Under Review)</option>
              <option value="PUBLISHED">Published (Student Accessible)</option>
            </select>
          </div>
        </div>

        {/* Difficulty, Tracks, Provenance */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div>
            <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
              Difficulty Tier
            </label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value as DifficultyLevel)}
              className="w-full p-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
            >
              <option value="EASY">Easy</option>
              <option value="MEDIUM">Medium</option>
              <option value="HARD">Hard</option>
            </select>
          </div>

          <div>
            <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
              Evidence Provenance
            </label>
            <select
              value={sourceType}
              onChange={(e) => setSourceType(e.target.value as SourceEvidenceType)}
              className="w-full p-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
            >
              <option value="ORIGINAL_PRACTICE">ORIGINAL_PRACTICE</option>
              <option value="RECURRING_PATTERN">RECURRING_PATTERN</option>
              <option value="OFFICIAL_INFORMATION">OFFICIAL_INFORMATION</option>
              <option value="CANDIDATE_RECALLED">CANDIDATE_RECALLED</option>
            </select>
          </div>

          <div>
            <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
              Topic Tags (comma separated)
            </label>
            <input
              type="text"
              value={topicsText}
              onChange={(e) => setTopicsText(e.target.value)}
              placeholder="e.g. Arrays, Prefix Sum, Hash Map"
              className="w-full p-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
            />
          </div>
        </div>

        {/* Problem Statement */}
        <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">
          <label className="block font-bold text-slate-700 dark:text-slate-300">
            Problem Statement (Markdown supported)
          </label>
          <textarea
            rows={5}
            required
            value={problemStatement}
            onChange={(e) => setProblemStatement(e.target.value)}
            className="w-full p-3 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-mono"
          />
        </div>

        {/* Input / Output Format */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
              Input Format
            </label>
            <textarea
              rows={2}
              value={inputFormat}
              onChange={(e) => setInputFormat(e.target.value)}
              className="w-full p-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
              Output Format
            </label>
            <textarea
              rows={2}
              value={outputFormat}
              onChange={(e) => setOutputFormat(e.target.value)}
              className="w-full p-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
            />
          </div>
        </div>

        {/* Constraints */}
        <div>
          <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
            Constraints (One per line)
          </label>
          <textarea
            rows={3}
            value={constraintsText}
            onChange={(e) => setConstraintsText(e.target.value)}
            className="w-full p-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-mono"
          />
        </div>

        {/* Progressive Hints */}
        <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <label className="font-bold text-slate-700 dark:text-slate-300">
              Progressive Hints (Layered)
            </label>
            <button
              type="button"
              onClick={() => setHints([...hints, `Hint ${hints.length + 1}: `])}
              className="text-primary hover:text-primary-hover font-bold text-xs"
            >
              + Add Hint Level
            </button>
          </div>
          {hints.map((h, i) => (
            <div key={i} className="flex items-center gap-2">
              <input
                type="text"
                value={h}
                onChange={(e) => {
                  const copy = [...hints];
                  copy[i] = e.target.value;
                  setHints(copy);
                }}
                className="flex-1 p-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
              />
              <button
                type="button"
                onClick={() => setHints(hints.filter((_, idx) => idx !== i))}
                className="p-1.5 text-slate-400 hover:text-rose-500"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Test Cases Setup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
          {/* Public Test Cases */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="font-bold text-slate-700 dark:text-slate-300">
                Public Test Cases ({publicTestCases.length})
              </label>
              <button
                type="button"
                onClick={() => setPublicTestCases([...publicTestCases, { id: `tc-${Date.now()}`, name: `Case ${publicTestCases.length + 1}`, input: '', expectedOutput: '' }])}
                className="text-primary hover:text-primary-hover font-bold text-[11px]"
              >
                + Add Public Case
              </button>
            </div>
            {publicTestCases.map((tc, i) => (
              <div key={tc.id} className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-600 dark:text-slate-400">Public #{i + 1}</span>
                  {publicTestCases.length > 1 && (
                    <button
                      type="button"
                      onClick={() => setPublicTestCases(publicTestCases.filter((_, idx) => idx !== i))}
                      className="text-slate-400 hover:text-rose-500"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="Input stdin"
                  value={tc.input}
                  onChange={(e) => {
                    const copy = [...publicTestCases];
                    copy[i].input = e.target.value;
                    setPublicTestCases(copy);
                  }}
                  className="w-full p-1.5 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded font-mono"
                />
                <input
                  type="text"
                  placeholder="Expected output"
                  value={tc.expectedOutput}
                  onChange={(e) => {
                    const copy = [...publicTestCases];
                    copy[i].expectedOutput = e.target.value;
                    setPublicTestCases(copy);
                  }}
                  className="w-full p-1.5 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded font-mono"
                />
              </div>
            ))}
          </div>

          {/* Hidden Grader Test Cases */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="font-bold text-slate-700 dark:text-slate-300">
                Hidden Evaluation Cases ({hiddenTestCases.length})
              </label>
              <button
                type="button"
                onClick={() => setHiddenTestCases([...hiddenTestCases, { id: `tc-hid-${Date.now()}`, input: '', expectedOutput: '', isHidden: true }])}
                className="text-primary hover:text-primary-hover font-bold text-[11px]"
              >
                + Add Hidden Case
              </button>
            </div>
            {hiddenTestCases.map((tc, i) => (
              <div key={tc.id} className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-purple-600 dark:text-purple-400">Hidden Evaluation #{i + 1}</span>
                  <button
                    type="button"
                    onClick={() => setHiddenTestCases(hiddenTestCases.filter((_, idx) => idx !== i))}
                    className="text-slate-400 hover:text-rose-500"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Hidden input stdin"
                  value={tc.input}
                  onChange={(e) => {
                    const copy = [...hiddenTestCases];
                    copy[i].input = e.target.value;
                    setHiddenTestCases(copy);
                  }}
                  className="w-full p-1.5 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded font-mono"
                />
                <input
                  type="text"
                  placeholder="Hidden expected output"
                  value={tc.expectedOutput}
                  onChange={(e) => {
                    const copy = [...hiddenTestCases];
                    copy[i].expectedOutput = e.target.value;
                    setHiddenTestCases(copy);
                  }}
                  className="w-full p-1.5 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded font-mono"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 flex justify-end gap-3 border-t border-slate-100 dark:border-slate-800">
          <Link to="/admin">
            <Button type="button" variant="ghost" size="sm">
              Cancel
            </Button>
          </Link>
          <Button type="submit" variant="primary" size="md" leftIcon={<Save className="w-4 h-4" />}>
            Save Question
          </Button>
        </div>
      </form>
    </div>
  );
};
