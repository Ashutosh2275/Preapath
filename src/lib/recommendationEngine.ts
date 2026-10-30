import { 
  Question, 
  TargetTrack, 
  MCQAttempt, 
  Submission, 
  DailyStudySession, 
  DailyStudySessionItem,
  SectionType,
  DifficultyLevel
} from '../types';
import { ALL_QUESTIONS } from '../data/questions';

/**
 * Creates a deterministic pseudo-random number generator (Mulberry32)
 * using an initial string seed. Ensures identical daily output on reloads.
 */
export function createSeededRandom(seedStr: string): () => number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < seedStr.length; i++) {
    h = Math.imul(h ^ seedStr.charCodeAt(i), 16777619);
  }
  
  let s = h >>> 0;
  return function () {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Deterministically shuffles an array in place or returns a shuffled copy.
 */
export function seededShuffle<T>(array: T[], rng: () => number): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Analyzes attempts and submissions to detect topics where accuracy is below 60%.
 */
export function identifyWeakTopics(
  attempts: MCQAttempt[] = [],
  submissions: Submission[] = []
): string[] {
  const topicStats: Record<string, { total: number; correct: number }> = {};

  attempts.forEach((a) => {
    if (!a.topic) return;
    if (!topicStats[a.topic]) {
      topicStats[a.topic] = { total: 0, correct: 0 };
    }
    topicStats[a.topic].total += 1;
    if (a.isCorrect) {
      topicStats[a.topic].correct += 1;
    }
  });

  // Include coding submissions where status is not ACCEPTED
  submissions.forEach((s) => {
    // Coding problems topic if available
    const q = ALL_QUESTIONS.find((item) => item.id === s.problemId);
    if (q && q.topics) {
      q.topics.forEach((t) => {
        if (!topicStats[t]) {
          topicStats[t] = { total: 0, correct: 0 };
        }
        topicStats[t].total += 1;
        if (s.verdict === 'Accepted') {
          topicStats[t].correct += 1;
        }
      });
    }
  });

  const weakTopics: string[] = [];
  Object.entries(topicStats).forEach(([topic, stats]) => {
    // At least 2 attempts and accuracy < 60%
    if (stats.total >= 2 && stats.correct / stats.total < 0.6) {
      weakTopics.push(topic);
    }
  });

  return weakTopics;
}

/**
 * Identifies question IDs that are due for spaced repetition review based on SM-2 intervals (1, 3, 7, 14 days).
 */
export function getDueSpacedReviews(
  attempts: MCQAttempt[] = [],
  currentDateStr: string
): string[] {
  const dueQuestionIds = new Set<string>();
  const now = new Date(currentDateStr).getTime();

  // Look for incorrect attempts and check elapsed days
  attempts.forEach((att) => {
    if (!att.isCorrect && att.attemptedAt) {
      const attTime = new Date(att.attemptedAt).getTime();
      const elapsedDays = Math.floor((now - attTime) / (1000 * 60 * 60 * 24));
      
      // Spaced intervals: 1 day, 3 days, 7 days, 14 days
      if (elapsedDays === 1 || elapsedDays === 3 || elapsedDays === 7 || elapsedDays === 14) {
        dueQuestionIds.add(att.questionId);
      }
    }
  });

  return Array.from(dueQuestionIds);
}

export interface DailySessionGenerationParams {
  userId: string;
  dateString: string; // YYYY-MM-DD
  dayNumber?: number;
  targetTrack: TargetTrack;
  dailyAvailableMinutes: number;
  attempts?: MCQAttempt[];
  submissions?: Submission[];
  questions?: Question[];
}

/**
 * Generates an adaptive, balanced daily preparation session tailored to the student's
 * target hiring track, available time budget, and diagnostic weaknesses.
 */
export function generateDailyStudySession(params: {
  userId: string;
  dateString: string;
  dayNumber?: number;
  targetTrack: TargetTrack;
  dailyAvailableMinutes?: number;
  attempts?: MCQAttempt[];
  submissions?: Submission[];
  questions?: Question[];
}): DailyStudySession {
  const {
    userId,
    dateString,
    dayNumber = 1,
    targetTrack,
    dailyAvailableMinutes = 90,
    attempts = [],
    submissions = [],
    questions = ALL_QUESTIONS
  } = params;

  const seed = `${userId}-${dateString}-v1`;
  const rng = createSeededRandom(seed);

  // 1. Determine time allocations and item counts based on student time budget
  let mcqCount = 6;
  let mcqMinutesEach = 2.5;
  let easyCodingCount = 1;
  let mediumCodingCount = 1;
  let reviewMinutes = 15;

  if (dailyAvailableMinutes <= 45) {
    mcqCount = 4;
    easyCodingCount = 1;
    mediumCodingCount = 0;
    reviewMinutes = 10;
  } else if (dailyAvailableMinutes <= 75) {
    mcqCount = 5;
    easyCodingCount = 1;
    mediumCodingCount = 1;
    reviewMinutes = 10;
  } else if (dailyAvailableMinutes >= 120) {
    mcqCount = 8;
    easyCodingCount = 1;
    mediumCodingCount = 1;
    reviewMinutes = 20;
  }

  // 2. Separate question banks
  const allMcqs = questions.filter((q) => q.problemFormat === 'MULTIPLE_CHOICE');
  const allCoding = questions.filter((q) => q.problemFormat !== 'MULTIPLE_CHOICE');

  // Filter by track relevance (fallback to all if track questions are scarce)
  const trackMcqs = allMcqs.filter((q) => q.targetTracks.includes(targetTrack));
  const candidateMcqs = trackMcqs.length >= mcqCount ? trackMcqs : allMcqs;

  const trackCoding = allCoding.filter((q) => q.targetTracks.includes(targetTrack));
  const candidateCoding = trackCoding.length >= 2 ? trackCoding : allCoding;

  // 3. Find weak topics and review candidates
  const weakTopics = identifyWeakTopics(attempts, submissions);
  const dueReviewIds = getDueSpacedReviews(attempts, dateString);

  // 4. Select Review Item
  let reviewItemQuestion: Question | undefined = undefined;
  if (dueReviewIds.length > 0) {
    const reviewId = dueReviewIds[0];
    reviewItemQuestion = questions.find((q) => q.id === reviewId);
  }

  // 5. Select MCQs with Weakness Prioritization & Balanced Sections
  const weakMcqs: Question[] = [];
  const regularMcqs: Question[] = [];

  candidateMcqs.forEach((q) => {
    const isWeak = q.topics.some((t) => weakTopics.includes(t));
    if (isWeak) {
      weakMcqs.push(q);
    } else {
      regularMcqs.push(q);
    }
  });

  const shuffledWeak = seededShuffle(weakMcqs, rng);
  const shuffledRegular = seededShuffle(regularMcqs, rng);

  // Ensure cross-section diversity: pick across sections
  const selectedMcqs: Question[] = [];
  const targetSections: SectionType[] = [
    'NUMERICAL_ABILITY',
    'LOGICAL_REASONING',
    'VERBAL_ABILITY',
    'PROGRAMMING',
    'ADVANCED_QUANT'
  ];

  // First pick from weak topics if available
  shuffledWeak.forEach((q) => {
    if (selectedMcqs.length < Math.min(3, mcqCount) && !selectedMcqs.some((s) => s.id === q.id)) {
      selectedMcqs.push(q);
    }
  });

  // Fill remaining MCQs ensuring broad section distribution
  for (const sec of targetSections) {
    if (selectedMcqs.length >= mcqCount) break;
    const match = shuffledRegular.find(
      (q) => q.sections.includes(sec) && !selectedMcqs.some((s) => s.id === q.id)
    );
    if (match) {
      selectedMcqs.push(match);
    }
  }

  // If still need more, fill from regular pool
  for (const q of shuffledRegular) {
    if (selectedMcqs.length >= mcqCount) break;
    if (!selectedMcqs.some((s) => s.id === q.id)) {
      selectedMcqs.push(q);
    }
  }

  // 6. Select Coding Problems (1 Easy, 1 Medium)
  const easyCandidates = candidateCoding.filter((q) => q.difficulty === 'EASY');
  const mediumCandidates = candidateCoding.filter((q) => q.difficulty === 'MEDIUM');

  const shuffledEasy = seededShuffle(
    easyCandidates.length > 0 ? easyCandidates : candidateCoding,
    rng
  );
  const shuffledMedium = seededShuffle(
    mediumCandidates.length > 0 ? mediumCandidates : candidateCoding,
    rng
  );

  const selectedEasyCoding = shuffledEasy[0];
  let selectedMediumCoding = shuffledMedium.find((q) => q.id !== selectedEasyCoding?.id);
  if (!selectedMediumCoding && shuffledMedium.length > 0) {
    selectedMediumCoding = shuffledMedium[0];
  }

  // 7. Assemble Session Items
  const items: DailyStudySessionItem[] = [];
  let orderIndex = 1;
  const sessionId = `session-${userId}-${dateString}`;

  // Item 1 to N: MCQs
  selectedMcqs.forEach((mcq) => {
    items.push({
      id: `${sessionId}-mcq-${mcq.id}`,
      sessionId,
      orderIndex: orderIndex++,
      itemType: 'MCQ',
      section: mcq.sections[0] || 'NUMERICAL_ABILITY',
      topic: mcq.topics[0] || 'Foundations',
      questionId: mcq.id,
      difficulty: mcq.difficulty,
      estimatedMinutes: Math.round(mcqMinutesEach),
      status: 'PENDING'
    });
  });

  // Next: Easy Coding
  if (easyCodingCount > 0 && selectedEasyCoding) {
    items.push({
      id: `${sessionId}-coding-${selectedEasyCoding.id}`,
      sessionId,
      orderIndex: orderIndex++,
      itemType: 'EASY_CODING',
      section: 'CODING',
      topic: selectedEasyCoding.topics[0] || 'Core Algorithms',
      questionId: selectedEasyCoding.id,
      difficulty: 'EASY',
      estimatedMinutes: 25,
      status: 'PENDING'
    });
  }

  // Next: Medium Coding
  if (mediumCodingCount > 0 && selectedMediumCoding) {
    items.push({
      id: `${sessionId}-coding-${selectedMediumCoding.id}`,
      sessionId,
      orderIndex: orderIndex++,
      itemType: 'MEDIUM_CODING',
      section: 'CODING',
      topic: selectedMediumCoding.topics[0] || 'Data Structures & Logic',
      questionId: selectedMediumCoding.id,
      difficulty: 'MEDIUM',
      estimatedMinutes: 35,
      status: 'PENDING'
    });
  }

  // Final: Spaced Review or Concept Consolidation
  if (reviewItemQuestion) {
    items.push({
      id: `${sessionId}-review-${reviewItemQuestion.id}`,
      sessionId,
      orderIndex: orderIndex++,
      itemType: 'SPACED_REVIEW',
      section: reviewItemQuestion.sections[0] || 'REVISION',
      topic: reviewItemQuestion.topics[0] || 'Spaced Repetition',
      questionId: reviewItemQuestion.id,
      difficulty: reviewItemQuestion.difficulty,
      estimatedMinutes: reviewMinutes,
      status: 'PENDING'
    });
  }

  // Calculate actual total estimated minutes
  const totalAllocatedMinutes = items.reduce((acc, it) => acc + it.estimatedMinutes, 0);

  return {
    id: sessionId,
    userId,
    sessionDate: dateString,
    dayNumber,
    targetTrack,
    randomizationSeed: seed,
    timeBudgetMinutes: Math.max(dailyAvailableMinutes, totalAllocatedMinutes),
    status: 'ACTIVE',
    items,
    createdAt: new Date().toISOString()
  };
}
