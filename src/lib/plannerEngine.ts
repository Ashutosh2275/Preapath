import { 
  TargetTrack, 
  ProficiencyLevel, 
  SectionType, 
  StudyPlan, 
  StudyPlanDay, 
  StudyPlanTask,
  Question,
  SpacedReviewItem
} from '../types';
import { ALL_QUESTIONS } from '../data/questions';

export interface PlannerInput {
  userId: string;
  targetTrack: TargetTrack;
  availablePreparationDays: number;
  dailyAvailableMinutes: number;
  proficiency: ProficiencyLevel;
  weakTopics: string[];
  examDate?: string;
  startDate?: string;
  existingSpacedReviews?: SpacedReviewItem[];
}

/**
 * Deterministic Pseudorandom Number Generator (Mulberry32)
 * Ensures reproducible, stable question selection across page reloads.
 */
function createPRNG(seedString: string) {
  let hash = 0;
  for (let i = 0; i < seedString.length; i++) {
    hash = Math.imul(31, hash) + seedString.charCodeAt(i) | 0;
  }
  let s = hash >>> 0;
  return function() {
    s |= 0; s = s + 0x6D2B79F5 | 0;
    let t = Math.imul(s ^ s >>> 15, 1 | s);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

/**
 * Deterministically shuffles an array using the provided PRNG function.
 */
function seededShuffle<T>(array: T[], prng: () => number): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(prng() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Core Daily Preparation Engine
 * 
 * Generates an authoritative, syllabus-aligned daily preparation sequence:
 * - Stage A: MCQ Practice (rotated across Numerical, Reasoning, Verbal, Adv Quant, Programming)
 * - Stage B: Easy Coding Practice (fundamentals, number manipulation, arrays, strings)
 * - Stage C: Medium Coding Practice (track algorithms, data structures)
 * - Stage D: Spaced Review (due / overdue revision items, mistake remediation)
 */
export function generateStudyPlan(input: PlannerInput): StudyPlan {
  const daysCount = Math.max(3, Math.min(90, input.availablePreparationDays || 14));
  const dailyMins = Math.max(30, Math.min(480, input.dailyAvailableMinutes || 90));

  const start = input.startDate ? new Date(input.startDate) : new Date();
  const startDateStr = start.toISOString().split('T')[0];

  // Base PRNG for user's overall schedule
  const planSeed = `${input.userId}_${input.targetTrack}_${daysCount}_${dailyMins}_${startDateStr}`;
  const basePrng = createPRNG(planSeed);

  // Filter published questions
  const publishedQuestions = ALL_QUESTIONS.filter(q => q.publicationStatus === 'PUBLISHED');

  // Question Pools
  const mcqPool = publishedQuestions.filter(q => q.problemFormat === 'MULTIPLE_CHOICE');
  const codingPool = publishedQuestions.filter(q => q.problemFormat !== 'MULTIPLE_CHOICE');

  // Track-filtered coding questions
  const trackCoding = codingPool.filter(q => q.targetTracks.includes(input.targetTrack));
  const easyCoding = trackCoding.filter(q => q.difficulty === 'EASY');
  const mediumCoding = trackCoding.filter(q => q.difficulty === 'MEDIUM' || q.difficulty === 'HARD');

  // Fallbacks if track specific pool is small
  const safeEasyCoding = easyCoding.length > 0 ? easyCoding : codingPool.filter(q => q.difficulty === 'EASY');
  const safeMediumCoding = mediumCoding.length > 0 ? mediumCoding : codingPool.filter(q => q.difficulty !== 'EASY');

  // Shuffle pools deterministically
  const shuffledEasy = seededShuffle(safeEasyCoding, createPRNG(`${planSeed}_easy`));
  const shuffledMedium = seededShuffle(safeMediumCoding, createPRNG(`${planSeed}_medium`));

  // MCQ rotation sections
  const mcqSections: SectionType[] = [
    'NUMERICAL',
    'REASONING',
    'VERBAL',
    'ADVANCED_QUANT',
    'PROGRAMMING'
  ];

  const generatedDays: StudyPlanDay[] = [];
  const assignedProblemIds = new Set<string>();

  // Track pointer indices for unique assignments
  let easyIndex = 0;
  let mediumIndex = 0;

  for (let i = 0; i < daysCount; i++) {
    const dayNumber = i + 1;
    const dayDate = new Date(start);
    dayDate.setDate(start.getDate() + i);
    const dateStr = dayDate.toISOString().split('T')[0];

    // Day specific PRNG
    const dayPrng = createPRNG(`${planSeed}_day_${dayNumber}`);

    // Periodic milestones: Mock assessment day and Revision day
    const isMockDay = dayNumber === Math.floor(daysCount / 2) || dayNumber === daysCount;
    const isMilestoneRevisionDay = !isMockDay && (dayNumber % 4 === 0);

    const tasks: StudyPlanTask[] = [];

    if (isMockDay) {
      // Full mock simulation day
      const mockMins = Math.min(dailyMins, 75);
      const reviewMins = Math.max(15, dailyMins - mockMins);

      tasks.push({
        id: `task-d${dayNumber}-mock`,
        type: 'MOCK_ASSESSMENT',
        stage: 'MOCK_ASSESSMENT',
        stageLabel: 'Full Timed Mock Assessment',
        title: input.targetTrack === 'NINJA' ? 'Full NQT Foundation Mock Test' : 'Digital / Prime Advanced Mock Exam',
        description: 'Timed full-length practice assessment simulating real TCS exam sectional timing and negative marking.',
        estimatedMinutes: mockMins,
        completed: false,
      });

      tasks.push({
        id: `task-d${dayNumber}-analysis`,
        type: 'REVISION',
        stage: 'STAGE_D_REVIEW',
        stageLabel: 'Stage D — Review & Post-Mock Analysis',
        title: 'Mock Mistake & Accuracy Review',
        description: 'Review wrong answers, understand solution explanations, and record recurring pitfalls.',
        estimatedMinutes: reviewMins,
        completed: false,
      });

      generatedDays.push({
        dayNumber,
        date: dateStr,
        topic: 'Full Mock Assessment & Mistake Analysis',
        section: 'CODING',
        tasks,
        isCompleted: false,
        totalPlannedMinutes: dailyMins,
      });
      continue;
    }

    if (isMilestoneRevisionDay) {
      // Periodic dedicated consolidation day
      const recallMins = Math.floor(dailyMins * 0.4);
      const codingPracticeMins = dailyMins - recallMins;

      // Select problem for revision
      const revCoding = safeMediumCoding[(dayNumber * 3) % safeMediumCoding.length];

      tasks.push({
        id: `task-d${dayNumber}-rev1`,
        type: 'REVISION',
        stage: 'STAGE_D_REVIEW',
        stageLabel: 'Stage D — Formula & Invariant Active Recall',
        title: 'Consolidated Formula & Concepts Active Recall',
        description: 'Quick active recall of modular arithmetic, speed harmonics, syllogisms, and core data structures.',
        estimatedMinutes: recallMins,
        completed: false,
      });

      tasks.push({
        id: `task-d${dayNumber}-rev2`,
        type: 'PRACTICE_CODING',
        stage: 'STAGE_C_MEDIUM_CODING',
        stageLabel: 'Stage C — Algorithmic Re-implementation',
        title: `Re-attempt Problem: ${revCoding.title}`,
        description: 'Re-implement an optimal time/space solution with zero hints and clean invariant checks.',
        estimatedMinutes: codingPracticeMins,
        problemId: revCoding.id,
        catalogNumber: revCoding.catalogNumber,
        completed: false,
      });

      generatedDays.push({
        dayNumber,
        date: dateStr,
        topic: 'Active Recall & Algorithmic Re-implementation',
        section: 'REASONING',
        tasks,
        isCompleted: false,
        totalPlannedMinutes: dailyMins,
      });
      continue;
    }

    // Standard Preparation Day: Stage A -> Stage B -> Stage C -> Stage D
    let mcqCount = 5;
    let mcqMins = 10;
    let easyMins = 15;
    let mediumMins = 25;
    let reviewMins = 10;
    let budgetExplanation: string | undefined = undefined;

    // Time-aware budget allocation
    if (dailyMins <= 35) {
      mcqCount = 3;
      mcqMins = 6;
      easyMins = 15;
      reviewMins = 9;
      budgetExplanation = 'Session adapted for 30-min budget: 3 MCQs + 1 Easy Coding + quick review. Medium coding deferred.';
    } else if (dailyMins <= 50) {
      mcqCount = 4;
      mcqMins = 8;
      easyMins = 15;
      if (dayNumber % 2 === 0) {
        mediumMins = 20;
        reviewMins = dailyMins - (mcqMins + mediumMins);
      } else {
        reviewMins = dailyMins - (mcqMins + easyMins);
      }
      budgetExplanation = 'Session adapted for 45-min budget: Alternating easy and medium coding across days to respect your time.';
    } else if (dailyMins >= 120) {
      mcqCount = 6;
      mcqMins = 12;
      easyMins = 20;
      mediumMins = 35;
      reviewMins = dailyMins - (mcqMins + easyMins + mediumMins);
    } else {
      // 60-90 mins
      mcqCount = 5;
      mcqMins = 10;
      easyMins = 18;
      mediumMins = 28;
      reviewMins = Math.max(10, dailyMins - (mcqMins + easyMins + mediumMins));
    }

    // --- STAGE A: MCQ PRACTICE ---
    // Rotate sections across days
    const activeSection = mcqSections[(i) % mcqSections.length];
    const sectionMcqs = mcqPool.filter(q => q.sections.includes(activeSection));
    const poolToUse = sectionMcqs.length >= mcqCount ? sectionMcqs : mcqPool;
    const shuffledSectionMcqs = seededShuffle(poolToUse, dayPrng);

    const selectedMcq = shuffledSectionMcqs[0];

    tasks.push({
      id: `task-d${dayNumber}-stage-a`,
      type: 'APTITUDE_QUIZ',
      stage: 'STAGE_A_MCQ',
      stageLabel: 'Stage A — MCQ Practice',
      title: `Daily ${formatSectionTitle(activeSection)} MCQ Set (${mcqCount} Questions)`,
      description: `Solve ${mcqCount} timed multiple-choice questions focusing on speed math, pattern deduction, and accuracy.`,
      estimatedMinutes: mcqMins,
      problemId: selectedMcq?.id,
      catalogNumber: selectedMcq?.catalogNumber,
      budgetReason: budgetExplanation,
      completed: false,
    });

    // --- STAGE B: EASY CODING ---
    if (dailyMins >= 45 || dayNumber % 2 !== 0 || dailyMins <= 35) {
      const assignedEasy = shuffledEasy[easyIndex % shuffledEasy.length];
      easyIndex++;
      assignedProblemIds.add(assignedEasy.id);

      tasks.push({
        id: `task-d${dayNumber}-stage-b`,
        type: 'PRACTICE_CODING',
        stage: 'STAGE_B_EASY_CODING',
        stageLabel: 'Stage B — Easy Coding',
        title: `Solve: #${assignedEasy.catalogNumber} ${assignedEasy.title}`,
        description: `Implement and submit clean code. Focus on edge conditions, standard I/O format, and boundary invariants.`,
        estimatedMinutes: easyMins,
        problemId: assignedEasy.id,
        catalogNumber: assignedEasy.catalogNumber,
        completed: false,
      });
    }

    // --- STAGE C: MEDIUM CODING ---
    if (dailyMins >= 60 || (dailyMins >= 45 && dayNumber % 2 === 0)) {
      const assignedMedium = shuffledMedium[mediumIndex % shuffledMedium.length];
      mediumIndex++;
      assignedProblemIds.add(assignedMedium.id);

      tasks.push({
        id: `task-d${dayNumber}-stage-c`,
        type: 'PRACTICE_CODING',
        stage: 'STAGE_C_MEDIUM_CODING',
        stageLabel: 'Stage C — Medium Coding',
        title: `Solve: #${assignedMedium.catalogNumber} ${assignedMedium.title}`,
        description: `Tackle core TCS Digital/Prime algorithmic patterns (optimal data structures, two-pointers, hash maps, or DP).`,
        estimatedMinutes: mediumMins,
        problemId: assignedMedium.id,
        catalogNumber: assignedMedium.catalogNumber,
        completed: false,
      });
    }

    // --- STAGE D: REVIEW & SPACED REVISION ---
    tasks.push({
      id: `task-d${dayNumber}-stage-d`,
      type: 'REVISION',
      stage: 'STAGE_D_REVIEW',
      stageLabel: 'Stage D — Spaced Review',
      title: `Daily Spaced Review & Mistake Remediation`,
      description: `Revisit questions flagged for revision, previously answered incorrectly, or scheduled for spaced repetition recall.`,
      estimatedMinutes: reviewMins,
      completed: false,
    });

    // Topic title for the day
    const primaryTopic = input.weakTopics && input.weakTopics.length > 0 && i < 3
      ? `${input.weakTopics[i % input.weakTopics.length]} (Weak Area Priority)`
      : `${formatSectionTitle(activeSection)} & ${tasks[1]?.title.replace('Solve: ', '') || 'Algorithmic Drills'}`;

    generatedDays.push({
      dayNumber,
      date: dateStr,
      topic: primaryTopic,
      section: activeSection,
      tasks,
      isCompleted: false,
      totalPlannedMinutes: dailyMins,
    });
  }

  const endDateObj = new Date(start);
  endDateObj.setDate(start.getDate() + daysCount - 1);
  const endDateStr = endDateObj.toISOString().split('T')[0];

  return {
    id: `plan-${input.userId}-${Date.now()}`,
    userId: input.userId,
    targetTrack: input.targetTrack,
    startDate: startDateStr,
    endDate: endDateStr,
    dailyAvailableMinutes: dailyMins,
    days: generatedDays,
    status: 'ACTIVE',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

function formatSectionTitle(sec: SectionType): string {
  switch (sec) {
    case 'NUMERICAL': return 'Numerical Ability';
    case 'REASONING': return 'Logical Reasoning';
    case 'VERBAL': return 'Verbal Ability';
    case 'ADVANCED_QUANT': return 'Advanced Quantitative';
    case 'PROGRAMMING': return 'Programming Logic';
    case 'CODING': return 'Core Coding';
    default: return sec;
  }
}
