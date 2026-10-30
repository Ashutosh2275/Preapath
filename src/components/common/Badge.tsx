import React from 'react';
import { DifficultyLevel, TargetTrack, SourceEvidenceType, ExecutionVerdict } from '../../types';

interface BadgeProps {
  children?: React.ReactNode;
  variant?: 'default' | 'outline' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs font-medium';

  const variantClasses = {
    default: 'bg-slate-100 text-slate-800 border border-slate-200',
    outline: 'border border-slate-300 text-slate-700',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    warning: 'bg-amber-50 text-amber-700 border border-amber-200',
    danger: 'bg-rose-50 text-rose-700 border border-rose-200',
    info: 'bg-indigo-50 text-indigo-700 border border-indigo-200',
  };

  return (
    <span className={`inline-flex items-center gap-1 rounded-full ${sizeClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};

export const DifficultyBadge: React.FC<{ difficulty: DifficultyLevel }> = ({ difficulty }) => {
  if (difficulty === 'EASY') return <Badge variant="success">Easy</Badge>;
  if (difficulty === 'MEDIUM') return <Badge variant="warning">Medium</Badge>;
  return <Badge variant="danger">Hard</Badge>;
};

export const TrackBadge: React.FC<{ track: TargetTrack }> = ({ track }) => {
  if (track === 'NINJA') {
    return <Badge variant="info">Ninja Track</Badge>;
  }
  if (track === 'DIGITAL') {
    return <Badge variant="warning">Digital Track</Badge>;
  }
  return (
    <Badge className="bg-purple-50 text-purple-700 border border-purple-200">
      Prime Track
    </Badge>
  );
};

export const SourceBadge: React.FC<{ sourceType: SourceEvidenceType }> = ({ sourceType }) => {
  switch (sourceType) {
    case 'OFFICIAL_INFORMATION':
      return <Badge variant="info">Official Exam Syllabus</Badge>;
    case 'RECURRING_PATTERN':
      return <Badge variant="warning">Recurring NQT Pattern</Badge>;
    case 'CANDIDATE_RECALLED':
      return <Badge variant="default">Candidate Recalled Pattern</Badge>;
    case 'ORIGINAL_PRACTICE':
    default:
      return <Badge variant="default">Original Practice Problem</Badge>;
  }
};

export const VerdictBadge: React.FC<{ verdict: ExecutionVerdict }> = ({ verdict }) => {
  switch (verdict) {
    case 'Accepted':
      return <Badge variant="success">Accepted</Badge>;
    case 'Wrong Answer':
      return <Badge variant="danger">Wrong Answer</Badge>;
    case 'Compilation Error':
      return <Badge variant="danger">Compilation Error</Badge>;
    case 'Runtime Error':
      return <Badge variant="danger">Runtime Error</Badge>;
    case 'Time Limit Exceeded':
      return <Badge variant="warning">Time Limit Exceeded</Badge>;
    case 'Memory Limit Exceeded':
      return <Badge variant="warning">Memory Limit Exceeded</Badge>;
    default:
      return <Badge variant="default">{verdict}</Badge>;
  }
};
