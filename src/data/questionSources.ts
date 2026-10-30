import { SourceEvidenceType } from '../types';

export interface QuestionSourceEntry {
  id: string;
  publisher: string;
  title: string;
  url: string;
  evidenceCategory: SourceEvidenceType;
  verificationDate: string; // ISO date 'YYYY-MM-DD'
  supportedBatchHiringCycle: string;
  reportedExamShift?: string;
  notes: string;
  reviewerStatus: 'VERIFIED' | 'PENDING' | 'EDITORIAL_AUDITED';
  contentUsageRights: 'OFFICIAL_PUBLIC_NOTICE' | 'EDUCATIONAL_FAIR_USE' | 'ORIGINAL_AUTHORSHIP';
  isOfficial: boolean;
}

/**
 * Question Source Register
 * 
 * Authoritative registry of publicly accessible source references used for syllabus mapping,
 * cognitive difficulty calibration, and pattern identification.
 * 
 * Strict Attribution Policy:
 * - Distinguishes official hiring information from candidate recalls, recurring patterns,
 *   and original practice problems.
 * - Never fabricates previous-year question repetition counts.
 * - Original practice problems are never represented as identical past examination questions.
 */
export const QUESTION_SOURCE_REGISTER: QuestionSourceEntry[] = [
  {
    id: 'src-tcs-official-nqt',
    publisher: 'Tata Consultancy Services',
    title: 'TCS All India National Qualifier Test (NQT) Hiring Portal',
    url: 'https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring',
    evidenceCategory: 'OFFICIAL_INFORMATION',
    verificationDate: '2026-10-30',
    supportedBatchHiringCycle: '2024–2026 Batch Integrated NQT (Ninja, Digital & Prime Tracks)',
    notes: 'Official examination syllabus, test sections (Foundation: Numerical, Verbal, Reasoning; Advanced: Quant, Reasoning, Coding - 190 minutes total), and eligibility criteria.',
    reviewerStatus: 'VERIFIED',
    contentUsageRights: 'OFFICIAL_PUBLIC_NOTICE',
    isOfficial: true,
  },
  {
    id: 'src-gfg-tcs-nqt-guide',
    publisher: 'GeeksforGeeks',
    title: 'TCS NQT Preparation Guide 2026: Videos, MCQs & Questions Bank',
    url: 'https://www.geeksforgeeks.org/interview-prep/tcs-nqt-preparation-guide-2026-videos-mcqs-questions-bank/',
    evidenceCategory: 'RECURRING_PATTERN',
    verificationDate: '2026-10-30',
    supportedBatchHiringCycle: '2024–2026 Hiring Cycles',
    notes: 'Curriculum structure: quantitative shortcuts, logical deduction puzzles, verbal error correction, and foundational coding paradigms.',
    reviewerStatus: 'VERIFIED',
    contentUsageRights: 'EDUCATIONAL_FAIR_USE',
    isOfficial: false,
  },
  {
    id: 'src-gfg-tcs-coding',
    publisher: 'GeeksforGeeks',
    title: 'TCS Coding Interview Questions and Algorithmic Patterns',
    url: 'https://www.geeksforgeeks.org/interview-prep/tcs-coding-interview-questions/',
    evidenceCategory: 'RECURRING_PATTERN',
    verificationDate: '2026-10-30',
    supportedBatchHiringCycle: '2024–2026 Hiring Cycles',
    notes: 'Recurring algorithmic patterns: modular arithmetic, array sliding window, string frequency compression, matrix operations, and dynamic programming.',
    reviewerStatus: 'VERIFIED',
    contentUsageRights: 'EDUCATIONAL_FAIR_USE',
    isOfficial: false,
  },
  {
    id: 'src-prepinsta-nqt-papers',
    publisher: 'PrepInsta',
    title: 'TCS NQT Placement Papers Archives',
    url: 'https://prepinsta.com/tcs-nqt/placement-papers/',
    evidenceCategory: 'CANDIDATE_RECALLED',
    verificationDate: '2026-10-30',
    supportedBatchHiringCycle: 'Candidate Recall Archives (2024–2026)',
    notes: 'Candidate recall datasets for aptitude speed math, syllogisms, seating arrangements, and pseudo-code output tracing.',
    reviewerStatus: 'VERIFIED',
    contentUsageRights: 'EDUCATIONAL_FAIR_USE',
    isOfficial: false,
  },
  {
    id: 'src-prepinsta-aptitude',
    publisher: 'PrepInsta',
    title: 'TCS NQT Numerical Ability & Aptitude Preparation Papers',
    url: 'https://prepinsta.com/tcs-nqt/placement-papers/aptitude/',
    evidenceCategory: 'CANDIDATE_RECALLED',
    verificationDate: '2026-10-30',
    supportedBatchHiringCycle: '2024–2026 Cycles',
    notes: 'Numerical ability question archetypes: percentages, profit and loss, time-speed-distance, mixtures, and numbers systems.',
    reviewerStatus: 'VERIFIED',
    contentUsageRights: 'EDUCATIONAL_FAIR_USE',
    isOfficial: false,
  },
  {
    id: 'src-prepinsta-logical',
    publisher: 'PrepInsta',
    title: 'TCS NQT Logical Reasoning Ability Section Archives',
    url: 'https://prepinsta.com/tcs-nqt/logical-ability/',
    evidenceCategory: 'CANDIDATE_RECALLED',
    verificationDate: '2026-10-30',
    supportedBatchHiringCycle: '2024–2026 Cycles',
    notes: 'Logical reasoning pattern distributions: circular seating arrangements, family blood relations, direction sense, and coded symbols.',
    reviewerStatus: 'VERIFIED',
    contentUsageRights: 'EDUCATIONAL_FAIR_USE',
    isOfficial: false,
  },
  {
    id: 'src-prepinsta-verbal',
    publisher: 'PrepInsta',
    title: 'TCS NQT English Verbal Ability Placement Papers',
    url: 'https://prepinsta.com/tcs-nqt/placement-papers/english-verbal/',
    evidenceCategory: 'CANDIDATE_RECALLED',
    verificationDate: '2026-10-30',
    supportedBatchHiringCycle: '2024–2026 Cycles',
    notes: 'Verbal ability formats: contextual sentence completion, reading comprehension inferences, error spotting, and paragraph ordering.',
    reviewerStatus: 'VERIFIED',
    contentUsageRights: 'EDUCATIONAL_FAIR_USE',
    isOfficial: false,
  },
  {
    id: 'src-prepinsta-advanced-reasoning',
    publisher: 'PrepInsta',
    title: 'TCS NQT Advanced Reasoning Ability & Quantitative Section',
    url: 'https://prepinsta.com/tcs-nqt/placement-papers/advance/reasoning-ability/',
    evidenceCategory: 'CANDIDATE_RECALLED',
    verificationDate: '2026-10-30',
    supportedBatchHiringCycle: 'Digital & Prime Tier Assessments',
    notes: 'Multi-variable seating arrangements, complex decision matrices, and quantitative data sufficiency with 2-3 statements.',
    reviewerStatus: 'VERIFIED',
    contentUsageRights: 'EDUCATIONAL_FAIR_USE',
    isOfficial: false,
  },
  {
    id: 'src-faceprep-nqt-papers',
    publisher: 'FACE Prep',
    title: 'TCS NQT Placement Papers with Verified Solutions',
    url: 'https://faceprep.in/article/tcs-nqt-questions-tcs-nqt-placement-papers-with-solutions-faceprep/',
    evidenceCategory: 'CANDIDATE_RECALLED',
    verificationDate: '2026-10-30',
    supportedBatchHiringCycle: 'Candidate Recall Collections (2024–2026)',
    notes: 'Sectional time limits, scoring patterns, and mathematical shortcuts for high-frequency topics.',
    reviewerStatus: 'VERIFIED',
    contentUsageRights: 'EDUCATIONAL_FAIR_USE',
    isOfficial: false,
  },
  {
    id: 'src-unstop-nqt-papers',
    publisher: 'Unstop',
    title: 'TCS NQT Previous Year Question Papers & Candidate Experiences',
    url: 'https://unstop.com/blog/tcs-nqt-previous-year-question-papers',
    evidenceCategory: 'RECURRING_PATTERN',
    verificationDate: '2026-10-30',
    supportedBatchHiringCycle: 'Campus Recruitment Formats (2024–2026)',
    notes: 'Comprehensive sectional analysis: Foundation section vs Advanced section timing and difficulty calibration.',
    reviewerStatus: 'VERIFIED',
    contentUsageRights: 'EDUCATIONAL_FAIR_USE',
    isOfficial: false,
  },
  {
    id: 'src-testbook-nqt-papers',
    publisher: 'Testbook',
    title: 'TCS NQT Previous Year Question Papers & Mock Test Archives',
    url: 'https://testbook.com/tcs-nqt/previous-year-papers',
    evidenceCategory: 'CANDIDATE_RECALLED',
    verificationDate: '2026-10-30',
    supportedBatchHiringCycle: 'Reported Placement Patterns',
    notes: 'Sectional timing breakdown: 75 mins Foundation, 90 mins Advanced, standard negative marking rules where applicable.',
    reviewerStatus: 'VERIFIED',
    contentUsageRights: 'EDUCATIONAL_FAIR_USE',
    isOfficial: false,
  },
  {
    id: 'src-indiabix-aptitude',
    publisher: 'IndiaBIX',
    title: 'Quantitative Aptitude, Logical Reasoning & Verbal Ability Resource',
    url: 'https://www.indiabix.com/aptitude/',
    evidenceCategory: 'ORIGINAL_PRACTICE',
    verificationDate: '2026-10-30',
    supportedBatchHiringCycle: 'General Campus Placement Standard',
    notes: 'Foundational drills in percentages, time & work, syllogisms, and vocabulary error detection used for skill building.',
    reviewerStatus: 'VERIFIED',
    contentUsageRights: 'EDUCATIONAL_FAIR_USE',
    isOfficial: false,
  },
  {
    id: 'src-github-divyansh-nqt',
    publisher: 'Divyansh1502 Aptitude Repository',
    title: 'TCS NQT Previous Questions Open Compilation',
    url: 'https://github.com/divyansh1502/Aptitude/blob/main/05-company-wise/tcs-nqt/previous-questions.md',
    evidenceCategory: 'CANDIDATE_RECALLED',
    verificationDate: '2026-10-30',
    supportedBatchHiringCycle: 'Community Recalled Questions (2022–2025)',
    notes: 'Community-maintained repository of recall questions across aptitude, logical deduction, and pseudo-code tracing.',
    reviewerStatus: 'VERIFIED',
    contentUsageRights: 'EDUCATIONAL_FAIR_USE',
    isOfficial: false,
  },
  {
    id: 'src-preppath-editorial-original',
    publisher: 'PrepPath Editorial Assessment Board',
    title: 'PrepPath Original Placement Preparation Question Suite',
    url: 'https://preppath.dev/curriculum',
    evidenceCategory: 'ORIGINAL_PRACTICE',
    verificationDate: '2026-10-31',
    supportedBatchHiringCycle: '2024–2026 Preparation Engine',
    notes: 'Independently authored, educator-quality MCQs with unique reasoning contexts, plausible misconception-based distractors, and verified programming executions.',
    reviewerStatus: 'EDITORIAL_AUDITED',
    contentUsageRights: 'ORIGINAL_AUTHORSHIP',
    isOfficial: false,
  }
];

export function getQuestionSourceById(id: string): QuestionSourceEntry | undefined {
  return QUESTION_SOURCE_REGISTER.find(s => s.id === id);
}
