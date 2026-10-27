import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Clock, HelpCircle, CheckCircle2, ArrowRight, AlertCircle } from 'lucide-react';
import { STARTER_MOCK_ASSESSMENTS } from '../../data/mockAssessments';
import { useUserStore } from '../../stores/useUserStore';
import { Button } from '../../components/common/Button';
import { TrackBadge } from '../../components/common/Badge';

export const AssessmentListPage: React.FC = () => {
  const { assessmentAttempts } = useUserStore();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <Award className="w-7 h-7 text-primary" />
          Timed Practice Assessments
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Full-length diagnostic exams designed to evaluate multi-section time management and test endurance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {STARTER_MOCK_ASSESSMENTS.map((assessment) => {
          const pastAttempt = assessmentAttempts.find(a => a.assessmentId === assessment.id);
          const totalQuestions = assessment.questions.length;
          const totalMarks = assessment.questions.reduce((acc, q) => acc + q.marks, 0);

          return (
            <div
              key={assessment.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-sm space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <TrackBadge track={assessment.track} />
                  <span className="text-xs font-mono font-medium text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {assessment.totalDurationMinutes} mins
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {assessment.title}
                  </h3>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-mono mt-0.5">
                    {assessment.hiringCycle}
                  </p>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {assessment.description}
                </p>

                {/* Section breakdown */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                  <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Sections Included:
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {assessment.sections.map((sec) => (
                      <span
                        key={sec.id}
                        className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                      >
                        {sec.title} ({sec.durationMinutes}m)
                      </span>
                    ))}
                  </div>
                </div>

                {/* Previous Attempt Summary if taken */}
                {pastAttempt && (
                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-200 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      Completed on {new Date(pastAttempt.completedAt || pastAttempt.startedAt).toLocaleDateString()}
                    </span>
                    <span className="font-bold font-mono">
                      Score: {pastAttempt.score}/{pastAttempt.totalPossibleScore} ({Math.round((pastAttempt.score / pastAttempt.totalPossibleScore) * 100)}%)
                    </span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">
                  {totalQuestions} questions • {totalMarks} max marks
                </span>
                <Link to={`/assessments/${assessment.id}`}>
                  <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    {pastAttempt ? 'Retake / Review' : 'Start Assessment'}
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
