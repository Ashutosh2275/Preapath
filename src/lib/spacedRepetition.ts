import { ExecutionVerdict, DifficultyLevel, SpacedReviewItem, Question } from '../types';

export interface SpacedReviewCalculationInput {
  userId: string;
  question: Question;
  verdict: ExecutionVerdict;
  revealedHintsCount: number;
  timeSpentSeconds?: number;
  previousRecord?: SpacedReviewItem;
  currentDate?: Date;
}

/**
 * Calculates next spaced repetition review schedule based on real performance.
 * 
 * Rules:
 * - Incorrect answer: review after ~1 day.
 * - Solved with several hints (>= 3): review after ~2 days.
 * - Correct but slow: review after ~3 days.
 * - Correct with good confidence (0-2 hints): review after ~7 days.
 * - Repeatedly mastered question (>= 2 prior consecutive passes): review after ~14 days.
 */
export function calculateNextSpacedReview(input: SpacedReviewCalculationInput): SpacedReviewItem {
  const { userId, question, verdict, revealedHintsCount, timeSpentSeconds, previousRecord } = input;
  const now = input.currentDate || new Date();
  const todayStr = now.toISOString().split('T')[0];

  const isAccepted = verdict === 'Accepted';
  const previousConsecutive = previousRecord?.consecutiveCorrect || 0;
  const attemptCount = (previousRecord?.attemptCount || 0) + 1;
  const repetitionCount = (previousRecord?.repetitionCount || 0) + (isAccepted ? 1 : 0);

  let intervalDays = 1;
  let consecutiveCorrect = 0;
  let isMastered = false;

  if (!isAccepted) {
    // Incorrect response -> Next day (1 day)
    intervalDays = 1;
    consecutiveCorrect = 0;
    isMastered = false;
  } else {
    // Correct submission
    const isSlow = isResponseSlow(question, timeSpentSeconds);

    if (revealedHintsCount >= 3) {
      // Correct after several hints -> 1 day
      intervalDays = 1;
      consecutiveCorrect = Math.max(1, previousConsecutive);
      isMastered = false;
    } else if (revealedHintsCount > 0) {
      // Correct after limited hints (1 or 2 hints) -> 2 days
      intervalDays = 2;
      consecutiveCorrect = Math.max(1, previousConsecutive);
      isMastered = false;
    } else if (isSlow) {
      // Correct independently but slowly -> 3 days
      intervalDays = 3;
      consecutiveCorrect = previousConsecutive + 1;
      isMastered = false;
    } else if (previousConsecutive >= 3) {
      // Repeatedly demonstrated mastery -> 30 days
      intervalDays = 30;
      consecutiveCorrect = previousConsecutive + 1;
      isMastered = true;
    } else if (previousConsecutive >= 1) {
      // Successful delayed recall -> 14 days
      intervalDays = 14;
      consecutiveCorrect = previousConsecutive + 1;
      isMastered = previousConsecutive >= 2;
    } else {
      // Correct independently with confidence (0 hints) -> 7 days
      intervalDays = 7;
      consecutiveCorrect = 1;
      isMastered = false;
    }
  }

  // Calculate target date
  const targetDate = new Date(now);
  targetDate.setDate(targetDate.getDate() + intervalDays);
  const nextReviewDate = targetDate.toISOString().split('T')[0];

  return {
    id: previousRecord?.id || `rev_${userId}_${question.id}`,
    userId,
    problemId: question.id,
    problemTitle: question.title,
    catalogNumber: question.catalogNumber,
    problemFormat: question.problemFormat,
    section: question.sections[0] || 'CODING',
    difficulty: question.difficulty,
    lastAttemptAt: now.toISOString(),
    lastVerdict: verdict,
    attemptCount,
    isAccepted,
    revealedHintsCount,
    timeSpentSeconds,
    nextReviewDate,
    intervalDays,
    repetitionCount,
    consecutiveCorrect,
    isMastered,
    status: 'PENDING',
    updatedAt: now.toISOString(),
  };
}

/**
 * Heuristic threshold for detecting slow solving
 */
function isResponseSlow(question: Question, timeSpentSeconds?: number): boolean {
  if (!timeSpentSeconds) return false;

  if (question.problemFormat === 'MULTIPLE_CHOICE') {
    // MCQs expected within 120s (2 mins)
    return timeSpentSeconds > 150;
  }

  // Coding questions: Easy expected <= 15m (900s), Medium <= 30m (1800s), Hard <= 45m (2700s)
  if (question.difficulty === 'EASY') return timeSpentSeconds > 1200;
  if (question.difficulty === 'MEDIUM') return timeSpentSeconds > 2100;
  return timeSpentSeconds > 3000;
}

/**
 * Returns true if an item is due for review on or before the given date
 */
export function isReviewDue(item: SpacedReviewItem, targetDateStr?: string): boolean {
  const compDate = targetDateStr || new Date().toISOString().split('T')[0];
  return item.status === 'PENDING' && item.nextReviewDate <= compDate;
}

/**
 * Returns true if an item is strictly overdue for review
 */
export function isReviewOverdue(item: SpacedReviewItem, targetDateStr?: string): boolean {
  const compDate = targetDateStr || new Date().toISOString().split('T')[0];
  return item.status === 'PENDING' && item.nextReviewDate < compDate;
}

/**
 * Filter due review items
 */
export function getDueReviewItems(items: SpacedReviewItem[], targetDateStr?: string): SpacedReviewItem[] {
  return items.filter(i => isReviewDue(i, targetDateStr));
}

/**
 * Filter overdue review items
 */
export function getOverdueReviewItems(items: SpacedReviewItem[], targetDateStr?: string): SpacedReviewItem[] {
  return items.filter(i => isReviewOverdue(i, targetDateStr));
}
