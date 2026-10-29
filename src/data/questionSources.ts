import { SourceEvidenceType } from '../types';

export interface QuestionSourceEntry {
  id: string;
  publisher: string;
  title: string;
  url: string;
  evidenceCategory: SourceEvidenceType;
  verificationDate: string; // ISO date 'YYYY-MM-DD'
  supportedBatchHiringCycle: string;
  notes: string;
  isOfficial: boolean;
}

/**
 * Question Source Register
 * 
 * Catalog of publicly accessible source references used for syllabus mapping,
 * cognitive difficulty calibration, and pattern identification.
 * 
 * Distinguishes official hiring information from candidate recalls, recurring
 * patterns, and original practice problems.
 */
export const QUESTION_SOURCE_REGISTER: QuestionSourceEntry[] = [
  {
    id: 'src-tcs-official-nqt',
    publisher: 'Tata Consultancy Services',
    title: 'TCS All India National Qualifier Test (NQT) Hiring Portal',
    url: 'https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring',
    evidenceCategory: 'OFFICIAL_INFORMATION',
    verificationDate: '2026-10-28',
    supportedBatchHiringCycle: '2024–2026 Batch NQT (Ninja, Digital & Prime Tracks)',
    notes: 'Official examination syllabus, test sections (Foundation: Numerical, Verbal, Reasoning; Advanced: Quant, Reasoning, Coding), and eligibility criteria.',
    isOfficial: true,
  },
  {
    id: 'src-gfg-tcs-prep-guide',
    publisher: 'GeeksforGeeks',
    title: 'TCS NQT Preparation Guide & Coding Interview Questions',
    url: 'https://www.geeksforgeeks.org/interview-prep/tcs-coding-interview-questions/',
    evidenceCategory: 'RECURRING_PATTERN',
    verificationDate: '2026-10-28',
    supportedBatchHiringCycle: '2024–2026 Hiring Cycles',
    notes: 'Recurring algorithmic patterns: modular arithmetic, array rotation, string frequency compression, matrix spirals, and dynamic programming.',
    isOfficial: false,
  },
  {
    id: 'src-prepinsta-nqt-papers',
    publisher: 'PrepInsta',
    title: 'TCS NQT Placement Papers, Coding & Logical Ability Archives',
    url: 'https://prepinsta.com/tcs-nqt/placement-papers/',
    evidenceCategory: 'CANDIDATE_RECALLED',
    verificationDate: '2026-10-28',
    supportedBatchHiringCycle: 'Candidate Recall Archives (2024–2026)',
    notes: 'Candidate recall datasets for aptitude speed math, syllogisms, seating arrangements, and pseudo-code tracing.',
    isOfficial: false,
  },
  {
    id: 'src-faceprep-nqt-coding',
    publisher: 'FACE Prep',
    title: 'TCS NQT Coding Questions and Answers with Solutions',
    url: 'https://faceprep.in/article/tcs-nqt-coding-questions-and-answers-for-tcs-nqt-coding-test-faceprep/',
    evidenceCategory: 'CANDIDATE_RECALLED',
    verificationDate: '2026-10-28',
    supportedBatchHiringCycle: 'Candidate Recall Collections (2024–2026)',
    notes: 'Common Ninja and Digital coding test constraints: 1-second CPU limit, 128MB memory, standard I/O formats.',
    isOfficial: false,
  },
  {
    id: 'src-unstop-nqt-coding',
    publisher: 'Unstop',
    title: 'TCS NQT Coding Questions and Detailed Problem Formulations',
    url: 'https://unstop.com/blog/tcs-nqt-coding-questions',
    evidenceCategory: 'RECURRING_PATTERN',
    verificationDate: '2026-10-28',
    supportedBatchHiringCycle: 'Campus Recruitment Formats (2024–2026)',
    notes: 'Problem distributions across string manipulation, array subsegments, prime factorization, and coordinate geometry.',
    isOfficial: false,
  },
  {
    id: 'src-testbook-nqt-papers',
    publisher: 'Testbook',
    title: 'TCS NQT Previous Year Question Papers & Mock Assessment Sets',
    url: 'https://testbook.com/tcs-nqt/previous-year-papers',
    evidenceCategory: 'CANDIDATE_RECALLED',
    verificationDate: '2026-10-28',
    supportedBatchHiringCycle: 'Reported Placement Patterns',
    notes: 'Sectional time limits: 75 mins Foundation, 90 mins Advanced, standard negative marking rules where applicable.',
    isOfficial: false,
  },
  {
    id: 'src-indiabix-aptitude',
    publisher: 'IndiaBIX',
    title: 'Quantitative Aptitude, Logical Reasoning & Verbal Ability Resource',
    url: 'https://www.indiabix.com/aptitude/',
    evidenceCategory: 'ORIGINAL_PRACTICE',
    verificationDate: '2026-10-28',
    supportedBatchHiringCycle: 'General Campus Placement Standard',
    notes: 'Foundational drills in percentages, time & work, syllogisms, and vocabulary error detection.',
    isOfficial: false,
  },
];
