import { Question } from '../../types';

export const REASONING_QUESTIONS: Question[] = [
  {
    id: 'prep-reas-161',
    catalogNumber: 161,
    slug: "reasoning-problem-161",
    title: "Syllogisms & Logical Deductions - Set 1",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'EASY',
    topics: ["Syllogisms", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-161-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-162',
    catalogNumber: 162,
    slug: "reasoning-problem-162",
    title: "Blood Relations & Family Tree - Set 2",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'EASY',
    topics: ["Blood Relations", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-162-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-163',
    catalogNumber: 163,
    slug: "reasoning-problem-163",
    title: "Direction Sense & Coordinates - Set 3",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'EASY',
    topics: ["Direction Sense", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-163-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-164',
    catalogNumber: 164,
    slug: "reasoning-problem-164",
    title: "Coding-Decoding & Letter Shifts - Set 4",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'EASY',
    topics: ["Coding Decoding", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-164-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-165',
    catalogNumber: 165,
    slug: "reasoning-problem-165",
    title: "Number and Letter Series Completion - Set 5",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'EASY',
    topics: ["Series", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-165-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-166',
    catalogNumber: 166,
    slug: "reasoning-problem-166",
    title: "Linear Seating Arrangement - Set 6",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'EASY',
    topics: ["Arrangements", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-166-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-167',
    catalogNumber: 167,
    slug: "reasoning-problem-167",
    title: "Circular Seating Arrangement - Set 7",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'EASY',
    topics: ["Arrangements", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-167-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-168',
    catalogNumber: 168,
    slug: "reasoning-problem-168",
    title: "Statement and Assumptions - Set 8",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'EASY',
    topics: ["Critical Reasoning", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-168-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-169',
    catalogNumber: 169,
    slug: "reasoning-problem-169",
    title: "Statement and Conclusions - Set 9",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'EASY',
    topics: ["Critical Reasoning", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-169-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-170',
    catalogNumber: 170,
    slug: "reasoning-problem-170",
    title: "Course of Action Analysis - Set 10",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'EASY',
    topics: ["Critical Reasoning", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-170-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-171',
    catalogNumber: 171,
    slug: "reasoning-problem-171",
    title: "Data Sufficiency Evaluation - Set 11",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'EASY',
    topics: ["Data Sufficiency", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-171-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-172',
    catalogNumber: 172,
    slug: "reasoning-problem-172",
    title: "Venn Diagrams & Set Relations - Set 12",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'EASY',
    topics: ["Venn Diagrams", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-172-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-173',
    catalogNumber: 173,
    slug: "reasoning-problem-173",
    title: "Syllogisms & Logical Deductions - Set 13",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'EASY',
    topics: ["Syllogisms", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-173-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-174',
    catalogNumber: 174,
    slug: "reasoning-problem-174",
    title: "Blood Relations & Family Tree - Set 14",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'EASY',
    topics: ["Blood Relations", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-174-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-175',
    catalogNumber: 175,
    slug: "reasoning-problem-175",
    title: "Direction Sense & Coordinates - Set 15",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'EASY',
    topics: ["Direction Sense", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-175-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-176',
    catalogNumber: 176,
    slug: "reasoning-problem-176",
    title: "Coding-Decoding & Letter Shifts - Set 16",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Coding Decoding", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-176-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-177',
    catalogNumber: 177,
    slug: "reasoning-problem-177",
    title: "Number and Letter Series Completion - Set 17",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Series", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-177-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-178',
    catalogNumber: 178,
    slug: "reasoning-problem-178",
    title: "Linear Seating Arrangement - Set 18",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Arrangements", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-178-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-179',
    catalogNumber: 179,
    slug: "reasoning-problem-179",
    title: "Circular Seating Arrangement - Set 19",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Arrangements", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-179-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-180',
    catalogNumber: 180,
    slug: "reasoning-problem-180",
    title: "Statement and Assumptions - Set 20",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Critical Reasoning", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-180-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-181',
    catalogNumber: 181,
    slug: "reasoning-problem-181",
    title: "Statement and Conclusions - Set 21",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Critical Reasoning", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-181-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-182',
    catalogNumber: 182,
    slug: "reasoning-problem-182",
    title: "Course of Action Analysis - Set 22",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Critical Reasoning", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-182-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-183',
    catalogNumber: 183,
    slug: "reasoning-problem-183",
    title: "Data Sufficiency Evaluation - Set 23",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Data Sufficiency", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-183-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-184',
    catalogNumber: 184,
    slug: "reasoning-problem-184",
    title: "Venn Diagrams & Set Relations - Set 24",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Venn Diagrams", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-184-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-185',
    catalogNumber: 185,
    slug: "reasoning-problem-185",
    title: "Syllogisms & Logical Deductions - Set 25",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Syllogisms", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-185-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-186',
    catalogNumber: 186,
    slug: "reasoning-problem-186",
    title: "Blood Relations & Family Tree - Set 26",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Blood Relations", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-186-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-187',
    catalogNumber: 187,
    slug: "reasoning-problem-187",
    title: "Direction Sense & Coordinates - Set 27",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Direction Sense", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-187-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-188',
    catalogNumber: 188,
    slug: "reasoning-problem-188",
    title: "Coding-Decoding & Letter Shifts - Set 28",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Coding Decoding", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-188-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-189',
    catalogNumber: 189,
    slug: "reasoning-problem-189",
    title: "Number and Letter Series Completion - Set 29",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Series", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-189-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-190',
    catalogNumber: 190,
    slug: "reasoning-problem-190",
    title: "Linear Seating Arrangement - Set 30",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Arrangements", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-190-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-191',
    catalogNumber: 191,
    slug: "reasoning-problem-191",
    title: "Circular Seating Arrangement - Set 31",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Arrangements", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-191-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-192',
    catalogNumber: 192,
    slug: "reasoning-problem-192",
    title: "Statement and Assumptions - Set 32",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Critical Reasoning", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-192-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-193',
    catalogNumber: 193,
    slug: "reasoning-problem-193",
    title: "Statement and Conclusions - Set 33",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Critical Reasoning", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-193-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-194',
    catalogNumber: 194,
    slug: "reasoning-problem-194",
    title: "Course of Action Analysis - Set 34",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Critical Reasoning", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-194-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-195',
    catalogNumber: 195,
    slug: "reasoning-problem-195",
    title: "Data Sufficiency Evaluation - Set 35",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Data Sufficiency", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-195-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-196',
    catalogNumber: 196,
    slug: "reasoning-problem-196",
    title: "Venn Diagrams & Set Relations - Set 36",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Venn Diagrams", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-196-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-197',
    catalogNumber: 197,
    slug: "reasoning-problem-197",
    title: "Syllogisms & Logical Deductions - Set 37",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Syllogisms", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-197-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-198',
    catalogNumber: 198,
    slug: "reasoning-problem-198",
    title: "Blood Relations & Family Tree - Set 38",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Blood Relations", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-198-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-199',
    catalogNumber: 199,
    slug: "reasoning-problem-199",
    title: "Direction Sense & Coordinates - Set 39",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Direction Sense", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-199-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-200',
    catalogNumber: 200,
    slug: "reasoning-problem-200",
    title: "Coding-Decoding & Letter Shifts - Set 40",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Coding Decoding", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-200-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-201',
    catalogNumber: 201,
    slug: "reasoning-problem-201",
    title: "Number and Letter Series Completion - Set 41",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'HARD',
    topics: ["Series", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-201-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-202',
    catalogNumber: 202,
    slug: "reasoning-problem-202",
    title: "Linear Seating Arrangement - Set 42",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'HARD',
    topics: ["Arrangements", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-202-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-203',
    catalogNumber: 203,
    slug: "reasoning-problem-203",
    title: "Circular Seating Arrangement - Set 43",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'HARD',
    topics: ["Arrangements", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-203-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-204',
    catalogNumber: 204,
    slug: "reasoning-problem-204",
    title: "Statement and Assumptions - Set 44",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'HARD',
    topics: ["Critical Reasoning", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-204-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-205',
    catalogNumber: 205,
    slug: "reasoning-problem-205",
    title: "Statement and Conclusions - Set 45",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'HARD',
    topics: ["Critical Reasoning", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-205-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-206',
    catalogNumber: 206,
    slug: "reasoning-problem-206",
    title: "Course of Action Analysis - Set 46",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'HARD',
    topics: ["Critical Reasoning", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-206-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-207',
    catalogNumber: 207,
    slug: "reasoning-problem-207",
    title: "Data Sufficiency Evaluation - Set 47",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'HARD',
    topics: ["Data Sufficiency", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-207-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-208',
    catalogNumber: 208,
    slug: "reasoning-problem-208",
    title: "Venn Diagrams & Set Relations - Set 48",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'HARD',
    topics: ["Venn Diagrams", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-208-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-209',
    catalogNumber: 209,
    slug: "reasoning-problem-209",
    title: "Syllogisms & Logical Deductions - Set 49",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'HARD',
    topics: ["Syllogisms", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-209-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-reas-210',
    catalogNumber: 210,
    slug: "reasoning-problem-210",
    title: "Blood Relations & Family Tree - Set 50",
    problemStatement: "Statements:\n1. All computers are machines.\n2. Some machines are electronic devices.\n\nConclusions:\nI. Some computers are electronic devices.\nII. Some machines are computers.\n\nWhich of the conclusion(s) logically follow?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows."
      }
],
    difficulty: 'HARD',
    topics: ["Blood Relations", "Logical Reasoning"],
    sections: ['REASONING'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Reasoning" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "Only conclusion II follows"
      },
      {
            "id": "B",
            "text": "Only conclusion I follows"
      },
      {
            "id": "C",
            "text": "Both conclusions I and II follow"
      },
      {
            "id": "D",
            "text": "Neither conclusion I nor II follows"
      }
],
    correctOptionId: 'A',
    hints: [
      "Convert the statements into Euler / Venn diagrams.", "Notice that there is no direct intersection guaranteed between Computers and Electronic devices.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Statement 1: All C are M (C is subset of M). Hence, some M are definitely C (Conclusion II is valid). Statement 2: Some M are E, but this does not guarantee any intersection between C and E. Thus only Conclusion II follows.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-rea-210-1",
            "input": "Choice",
            "expectedOutput": "A"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];
