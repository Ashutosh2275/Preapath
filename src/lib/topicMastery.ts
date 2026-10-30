import { 
  TopicMasteryRecord, 
  TopicMasteryState, 
  SectionType, 
  TargetTrack, 
  ExecutionVerdict 
} from '../types';

export interface TopicEvaluationInput {
  userId: string;
  topic: string;
  section: SectionType;
  track: TargetTrack;
  isCorrect: boolean;
  verdict?: ExecutionVerdict;
  hintsRevealedCount: number;
  hasViewedReferenceSolution: boolean;
  isDelayedRecall?: boolean;
  existingRecord?: TopicMasteryRecord | null;
}

/**
 * Quality-based topic mastery evaluation
 * 
 * Rules:
 * 1. Revealing the reference solution or multiple hints (> 2) invalidates independent mastery.
 * 2. An incorrect attempt drops mastery into NEEDS_REVIEW or keeps in LEARNING.
 * 3. Solving independently (0 hints) with subsequent successful delayed recall promotes to PROVISIONALLY_MASTERED.
 * 4. Repeated independent successes (>= 3 independent solves across separated sessions) promotes to MASTERED.
 */
export function evaluateTopicMastery(input: TopicEvaluationInput): TopicMasteryRecord {
  const {
    userId,
    topic,
    section,
    track,
    isCorrect,
    hintsRevealedCount,
    hasViewedReferenceSolution,
    isDelayedRecall = false,
    existingRecord
  } = input;

  const totalAttempts = (existingRecord?.totalAttempts || 0) + 1;
  let successfulAttempts = existingRecord?.successfulAttempts || 0;
  let independentSolves = existingRecord?.independentSolves || 0;
  let delayedRecallSuccesses = existingRecord?.delayedRecallSuccesses || 0;
  let evidenceNotes = existingRecord?.evidenceNotes ? [...existingRecord.evidenceNotes] : [];

  const isIndependentSolve = isCorrect && hintsRevealedCount === 0 && !hasViewedReferenceSolution;
  const isAssistedSolve = isCorrect && (hintsRevealedCount > 0 || hasViewedReferenceSolution);

  let state: TopicMasteryState = existingRecord?.masteryState || 'NOT_STARTED';

  if (!isCorrect) {
    // Failed attempt
    if (state === 'MASTERED' || state === 'PROVISIONALLY_MASTERED') {
      state = 'NEEDS_REVIEW';
      evidenceNotes.push(`Mistake logged during practice/review; demoted to NEEDS_REVIEW`);
    } else if (state === 'IMPROVING' || state === 'LEARNING') {
      state = 'NEEDS_REVIEW';
    } else {
      state = 'LEARNING';
    }
  } else {
    // Successful attempt
    successfulAttempts += 1;

    if (isIndependentSolve) {
      independentSolves += 1;
      if (isDelayedRecall) {
        delayedRecallSuccesses += 1;
        evidenceNotes.push(`Successful independent delayed recall on ${new Date().toISOString().split('T')[0]}`);
      } else {
        evidenceNotes.push(`Solved with 0 hints independently`);
      }

      // Mastery progression
      if (independentSolves >= 3 && delayedRecallSuccesses >= 1) {
        state = 'MASTERED';
      } else if (independentSolves >= 1 && (isDelayedRecall || existingRecord?.masteryState === 'IMPROVING')) {
        state = 'PROVISIONALLY_MASTERED';
      } else if (state === 'NEEDS_REVIEW' || state === 'LEARNING' || state === 'NOT_STARTED') {
        state = 'IMPROVING';
      }
    } else if (isAssistedSolve) {
      // Assisted solve: Cannot reach provisional or full mastery
      evidenceNotes.push(
        hasViewedReferenceSolution 
          ? `Viewed reference solution (assisted practice)` 
          : `Solved with ${hintsRevealedCount} hints revealed (assisted)`
      );

      if (state === 'NOT_STARTED') {
        state = 'LEARNING';
      } else if (state === 'NEEDS_REVIEW') {
        // Remediating, but not yet independent
        state = 'LEARNING';
      }
    }
  }

  // Calculate mastery score (0 to 100)
  const score = calculateMasteryScore(state, independentSolves, delayedRecallSuccesses);

  return {
    id: existingRecord?.id,
    userId,
    topic,
    section,
    track,
    masteryState: state,
    score,
    totalAttempts,
    successfulAttempts,
    independentSolves,
    delayedRecallSuccesses,
    evidenceNotes: evidenceNotes.slice(-10), // Keep last 10 evidence points
    lastAttemptAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

function calculateMasteryScore(
  state: TopicMasteryState, 
  independentSolves: number, 
  delayedRecallSuccesses: number
): number {
  switch (state) {
    case 'MASTERED':
      return Math.min(100, 90 + Math.min(10, independentSolves * 2));
    case 'PROVISIONALLY_MASTERED':
      return 75 + Math.min(14, delayedRecallSuccesses * 7);
    case 'IMPROVING':
      return 50 + Math.min(20, independentSolves * 10);
    case 'LEARNING':
      return 30;
    case 'NEEDS_REVIEW':
      return 20;
    case 'NOT_STARTED':
    default:
      return 0;
  }
}
