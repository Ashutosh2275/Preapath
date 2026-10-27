import { TargetTrack, ProficiencyLevel, SectionType, StudyPlan, StudyPlanDay, StudyPlanTask } from '../types';
import { STARTER_QUESTIONS } from '../data/starterQuestions';

interface PlannerInput {
  userId: string;
  targetTrack: TargetTrack;
  availablePreparationDays: number;
  dailyAvailableMinutes: number;
  proficiency: ProficiencyLevel;
  weakTopics: string[];
  examDate?: string;
}

interface SyllabusTopic {
  title: string;
  section: SectionType;
  tracks: TargetTrack[];
  baseMinutes: number;
  description: string;
  codingProblemId?: string;
}

const SYLLABUS: SyllabusTopic[] = [
  {
    title: 'Number Theory & Divisibility Multiples',
    section: 'NUMERICAL',
    tracks: ['NINJA', 'DIGITAL'],
    baseMinutes: 45,
    description: 'Master modular arithmetic, prime numbers, divisibility tests, and LCM/HCF concepts.',
    codingProblemId: 'tcs-cp-001',
  },
  {
    title: 'Work, Time & Alternate Day Pipes',
    section: 'NUMERICAL',
    tracks: ['NINJA'],
    baseMinutes: 40,
    description: 'Unit work rate formula, efficiency ratios, and alternating worker schedules.',
  },
  {
    title: 'String Compression & Two-Pointer Traversal',
    section: 'PROGRAMMING',
    tracks: ['NINJA', 'DIGITAL'],
    baseMinutes: 50,
    description: 'String manipulation, boundary conditions, and run-length encoding techniques.',
    codingProblemId: 'tcs-cp-002',
  },
  {
    title: 'Syllogisms & Deductive Logic',
    section: 'REASONING',
    tracks: ['NINJA', 'DIGITAL', 'PRIME'],
    baseMinutes: 35,
    description: 'Categorical propositions, Venn diagram validations, and conditional deductions.',
  },
  {
    title: 'Prefix Sums & Hash Map Lookup Optimization',
    section: 'CODING',
    tracks: ['DIGITAL', 'PRIME'],
    baseMinutes: 60,
    description: 'Subarray sum equivalence, running totals, and zero-sum subarray lookups.',
    codingProblemId: 'tcs-cp-003',
  },
  {
    title: 'Linear & Circular Seating Arrangements',
    section: 'REASONING',
    tracks: ['NINJA', 'DIGITAL'],
    baseMinutes: 40,
    description: 'Directional facing logic, multi-variable constraints, and boundary placements.',
  },
  {
    title: '2D Matrix Clockwise Spiral & Grid Traversal',
    section: 'CODING',
    tracks: ['DIGITAL', 'PRIME'],
    baseMinutes: 55,
    description: 'Matrix indexing, 4-boundary pointer movement, and edge-case single row/col.',
    codingProblemId: 'tcs-cp-004',
  },
  {
    title: 'Grammar, Subject-Verb Agreement & Error Detection',
    section: 'VERBAL',
    tracks: ['NINJA'],
    baseMinutes: 30,
    description: 'Rule of proximity, pronoun-antecedent agreement, and modifier placement.',
  },
  {
    title: 'Trial Division & Prime Factorization Bounds',
    section: 'PROGRAMMING',
    tracks: ['NINJA', 'DIGITAL'],
    baseMinutes: 45,
    description: 'Square-root trial division, prime counting, and factor analysis.',
    codingProblemId: 'tcs-cp-005',
  },
  {
    title: 'Dynamic Programming & Unbounded Knapsack',
    section: 'CODING',
    tracks: ['DIGITAL', 'PRIME'],
    baseMinutes: 65,
    description: 'State formulation, memoization vs tabulation, and coin change minimization.',
    codingProblemId: 'tcs-cp-006',
  },
  {
    title: 'Speed, Relative Distance & Trains',
    section: 'NUMERICAL',
    tracks: ['NINJA', 'DIGITAL'],
    baseMinutes: 40,
    description: 'Relative speed across opposite and parallel tracks, average speed harmonics.',
  },
  {
    title: 'Advanced Modular Exponentiation & Combinatorics',
    section: 'ADVANCED_QUANT',
    tracks: ['DIGITAL', 'PRIME'],
    baseMinutes: 50,
    description: 'Fermat Little Theorem, modular inverse, and permutation with repetitions.',
  }
];

export function generateStudyPlan(input: PlannerInput): StudyPlan {
  const daysCount = Math.max(3, Math.min(90, input.availablePreparationDays || 14));
  const dailyMins = Math.max(30, Math.min(480, input.dailyAvailableMinutes || 90));

  // Filter topics relevant to target track
  let trackTopics = SYLLABUS.filter(t => t.tracks.includes(input.targetTrack));

  // Prioritize weak topics
  if (input.weakTopics && input.weakTopics.length > 0) {
    const weakLower = input.weakTopics.map(w => w.toLowerCase());
    trackTopics = trackTopics.sort((a, b) => {
      const aIsWeak = weakLower.some(w => a.title.toLowerCase().includes(w) || a.section.toLowerCase().includes(w));
      const bIsWeak = weakLower.some(w => b.title.toLowerCase().includes(w) || b.section.toLowerCase().includes(w));
      if (aIsWeak && !bIsWeak) return -1;
      if (!aIsWeak && bIsWeak) return 1;
      return 0;
    });
  }

  const generatedDays: StudyPlanDay[] = [];
  const today = new Date();

  for (let i = 0; i < daysCount; i++) {
    const dayNumber = i + 1;
    const dayDate = new Date(today);
    dayDate.setDate(today.getDate() + i);
    const dateStr = dayDate.toISOString().split('T')[0];

    // Designate periodic Mock Assessment and Revision days
    const isMockDay = dayNumber === Math.floor(daysCount / 2) || dayNumber === daysCount;
    const isRevisionDay = !isMockDay && (dayNumber % 4 === 0);

    const tasks: StudyPlanTask[] = [];

    if (isMockDay) {
      tasks.push({
        id: `task-d${dayNumber}-mock`,
        type: 'MOCK_ASSESSMENT',
        title: input.targetTrack === 'NINJA' ? 'Full NQT Foundation Mock Test' : 'Digital / Prime Advanced Mock Exam',
        description: 'Timed full-length practice assessment simulating exam conditions and time constraints.',
        estimatedMinutes: Math.min(dailyMins, 75),
        completed: false,
      });
      tasks.push({
        id: `task-d${dayNumber}-analysis`,
        type: 'REVISION',
        title: 'Mock Mistake & Accuracy Review',
        description: 'Review wrong answers, understand solution explanations, and note weaker subtopics.',
        estimatedMinutes: Math.max(15, dailyMins - 75),
        completed: false,
      });
    } else if (isRevisionDay) {
      tasks.push({
        id: `task-d${dayNumber}-rev1`,
        type: 'REVISION',
        title: 'Consolidated Formula & Concepts Flashcards',
        description: 'Quick active recall of speed-time formulas, divisibility shortcuts, and syntax patterns.',
        estimatedMinutes: Math.floor(dailyMins * 0.4),
        completed: false,
      });
      tasks.push({
        id: `task-d${dayNumber}-rev2`,
        type: 'PRACTICE_CODING',
        title: 'Re-attempt Flagged Problem Practice',
        description: 'Review problems marked for revision and verify clean time-efficient implementations.',
        estimatedMinutes: Math.ceil(dailyMins * 0.6),
        completed: false,
      });
    } else {
      // Regular concept & practice day
      const topicIndex = (i - Math.floor(i / 4)) % trackTopics.length;
      const topic = trackTopics[topicIndex];

      const conceptMins = Math.floor(dailyMins * 0.4);
      const practiceMins = dailyMins - conceptMins;

      tasks.push({
        id: `task-d${dayNumber}-concept`,
        type: 'CONCEPT',
        title: `Concept Study: ${topic.title}`,
        description: topic.description,
        estimatedMinutes: conceptMins,
        completed: false,
      });

      if (topic.codingProblemId) {
        const problem = STARTER_QUESTIONS.find(q => q.id === topic.codingProblemId);
        tasks.push({
          id: `task-d${dayNumber}-code`,
          type: 'PRACTICE_CODING',
          title: `Solve: ${problem ? problem.title : topic.title}`,
          description: `Implement and submit an optimized solution with all edge cases.`,
          estimatedMinutes: practiceMins,
          problemId: topic.codingProblemId,
          completed: false,
        });
      } else {
        tasks.push({
          id: `task-d${dayNumber}-quiz`,
          type: 'APTITUDE_QUIZ',
          title: `Topic Practice Set: ${topic.title}`,
          description: `Solve 10-15 targeted practice questions focusing on speed and accuracy.`,
          estimatedMinutes: practiceMins,
          completed: false,
        });
      }
    }

    const currentTopic = isMockDay 
      ? 'Mock Assessment Evaluation' 
      : isRevisionDay 
        ? 'Active Recall & Revision' 
        : trackTopics[(i - Math.floor(i / 4)) % trackTopics.length].title;

    const currentSection: SectionType = isMockDay 
      ? 'CODING' 
      : isRevisionDay 
        ? 'REASONING' 
        : trackTopics[(i - Math.floor(i / 4)) % trackTopics.length].section;

    generatedDays.push({
      dayNumber,
      date: dateStr,
      topic: currentTopic,
      section: currentSection,
      tasks,
      isCompleted: false,
      totalPlannedMinutes: dailyMins,
    });
  }

  const startDate = today.toISOString().split('T')[0];
  const endDateObj = new Date(today);
  endDateObj.setDate(today.getDate() + daysCount - 1);
  const endDate = endDateObj.toISOString().split('T')[0];

  return {
    id: `plan-${input.userId}-${Date.now()}`,
    userId: input.userId,
    targetTrack: input.targetTrack,
    startDate,
    endDate,
    dailyAvailableMinutes: dailyMins,
    days: generatedDays,
    status: 'ACTIVE',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}
