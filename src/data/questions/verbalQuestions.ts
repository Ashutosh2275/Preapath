import { Question } from '../../types';

export const VERBAL_QUESTIONS: Question[] = [
  {
    id: 'prep-verb-211',
    catalogNumber: 211,
    slug: "verbal-problem-211",
    title: "Reading Comprehension - Main Idea - Item 1",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'EASY',
    topics: ["Reading Comprehension", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-211-1",
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
    id: 'prep-verb-212',
    catalogNumber: 212,
    slug: "verbal-problem-212",
    title: "Reading Comprehension - Tone and Inference - Item 2",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'EASY',
    topics: ["Reading Comprehension", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-212-1",
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
    id: 'prep-verb-213',
    catalogNumber: 213,
    slug: "verbal-problem-213",
    title: "Sentence Correction & Grammar Rules - Item 3",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'EASY',
    topics: ["Sentence Correction", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-213-1",
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
    id: 'prep-verb-214',
    catalogNumber: 214,
    slug: "verbal-problem-214",
    title: "Sentence Completion & Vocabulary Context - Item 4",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'EASY',
    topics: ["Sentence Completion", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-214-1",
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
    id: 'prep-verb-215',
    catalogNumber: 215,
    slug: "verbal-problem-215",
    title: "Error Spotting in Complex Sentences - Item 5",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'EASY',
    topics: ["Error Spotting", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-215-1",
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
    id: 'prep-verb-216',
    catalogNumber: 216,
    slug: "verbal-problem-216",
    title: "Para Jumbles & Logical Sentence Order - Item 6",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'EASY',
    topics: ["Para Jumbles", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-216-1",
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
    id: 'prep-verb-217',
    catalogNumber: 217,
    slug: "verbal-problem-217",
    title: "Synonyms & Antonyms in Context - Item 7",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'EASY',
    topics: ["Vocabulary", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-217-1",
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
    id: 'prep-verb-218',
    catalogNumber: 218,
    slug: "verbal-problem-218",
    title: "Idioms & Phrasal Verbs - Item 8",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'EASY',
    topics: ["Idioms", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-218-1",
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
    id: 'prep-verb-219',
    catalogNumber: 219,
    slug: "verbal-problem-219",
    title: "Reading Comprehension - Main Idea - Item 9",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'EASY',
    topics: ["Reading Comprehension", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-219-1",
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
    id: 'prep-verb-220',
    catalogNumber: 220,
    slug: "verbal-problem-220",
    title: "Reading Comprehension - Tone and Inference - Item 10",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'EASY',
    topics: ["Reading Comprehension", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-220-1",
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
    id: 'prep-verb-221',
    catalogNumber: 221,
    slug: "verbal-problem-221",
    title: "Sentence Correction & Grammar Rules - Item 11",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'EASY',
    topics: ["Sentence Correction", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-221-1",
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
    id: 'prep-verb-222',
    catalogNumber: 222,
    slug: "verbal-problem-222",
    title: "Sentence Completion & Vocabulary Context - Item 12",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'EASY',
    topics: ["Sentence Completion", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-222-1",
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
    id: 'prep-verb-223',
    catalogNumber: 223,
    slug: "verbal-problem-223",
    title: "Error Spotting in Complex Sentences - Item 13",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'EASY',
    topics: ["Error Spotting", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-223-1",
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
    id: 'prep-verb-224',
    catalogNumber: 224,
    slug: "verbal-problem-224",
    title: "Para Jumbles & Logical Sentence Order - Item 14",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'EASY',
    topics: ["Para Jumbles", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-224-1",
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
    id: 'prep-verb-225',
    catalogNumber: 225,
    slug: "verbal-problem-225",
    title: "Synonyms & Antonyms in Context - Item 15",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'EASY',
    topics: ["Vocabulary", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-225-1",
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
    id: 'prep-verb-226',
    catalogNumber: 226,
    slug: "verbal-problem-226",
    title: "Idioms & Phrasal Verbs - Item 16",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Idioms", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-226-1",
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
    id: 'prep-verb-227',
    catalogNumber: 227,
    slug: "verbal-problem-227",
    title: "Reading Comprehension - Main Idea - Item 17",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Reading Comprehension", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-227-1",
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
    id: 'prep-verb-228',
    catalogNumber: 228,
    slug: "verbal-problem-228",
    title: "Reading Comprehension - Tone and Inference - Item 18",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Reading Comprehension", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-228-1",
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
    id: 'prep-verb-229',
    catalogNumber: 229,
    slug: "verbal-problem-229",
    title: "Sentence Correction & Grammar Rules - Item 19",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Sentence Correction", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-229-1",
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
    id: 'prep-verb-230',
    catalogNumber: 230,
    slug: "verbal-problem-230",
    title: "Sentence Completion & Vocabulary Context - Item 20",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Sentence Completion", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-230-1",
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
    id: 'prep-verb-231',
    catalogNumber: 231,
    slug: "verbal-problem-231",
    title: "Error Spotting in Complex Sentences - Item 21",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Error Spotting", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-231-1",
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
    id: 'prep-verb-232',
    catalogNumber: 232,
    slug: "verbal-problem-232",
    title: "Para Jumbles & Logical Sentence Order - Item 22",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Para Jumbles", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-232-1",
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
    id: 'prep-verb-233',
    catalogNumber: 233,
    slug: "verbal-problem-233",
    title: "Synonyms & Antonyms in Context - Item 23",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Vocabulary", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-233-1",
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
    id: 'prep-verb-234',
    catalogNumber: 234,
    slug: "verbal-problem-234",
    title: "Idioms & Phrasal Verbs - Item 24",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Idioms", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-234-1",
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
    id: 'prep-verb-235',
    catalogNumber: 235,
    slug: "verbal-problem-235",
    title: "Reading Comprehension - Main Idea - Item 25",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Reading Comprehension", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-235-1",
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
    id: 'prep-verb-236',
    catalogNumber: 236,
    slug: "verbal-problem-236",
    title: "Reading Comprehension - Tone and Inference - Item 26",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Reading Comprehension", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-236-1",
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
    id: 'prep-verb-237',
    catalogNumber: 237,
    slug: "verbal-problem-237",
    title: "Sentence Correction & Grammar Rules - Item 27",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Sentence Correction", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-237-1",
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
    id: 'prep-verb-238',
    catalogNumber: 238,
    slug: "verbal-problem-238",
    title: "Sentence Completion & Vocabulary Context - Item 28",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Sentence Completion", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-238-1",
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
    id: 'prep-verb-239',
    catalogNumber: 239,
    slug: "verbal-problem-239",
    title: "Error Spotting in Complex Sentences - Item 29",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Error Spotting", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-239-1",
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
    id: 'prep-verb-240',
    catalogNumber: 240,
    slug: "verbal-problem-240",
    title: "Para Jumbles & Logical Sentence Order - Item 30",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Para Jumbles", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-240-1",
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
    id: 'prep-verb-241',
    catalogNumber: 241,
    slug: "verbal-problem-241",
    title: "Synonyms & Antonyms in Context - Item 31",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Vocabulary", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-241-1",
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
    id: 'prep-verb-242',
    catalogNumber: 242,
    slug: "verbal-problem-242",
    title: "Idioms & Phrasal Verbs - Item 32",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Idioms", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-242-1",
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
    id: 'prep-verb-243',
    catalogNumber: 243,
    slug: "verbal-problem-243",
    title: "Reading Comprehension - Main Idea - Item 33",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'HARD',
    topics: ["Reading Comprehension", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-243-1",
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
    id: 'prep-verb-244',
    catalogNumber: 244,
    slug: "verbal-problem-244",
    title: "Reading Comprehension - Tone and Inference - Item 34",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'HARD',
    topics: ["Reading Comprehension", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-244-1",
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
    id: 'prep-verb-245',
    catalogNumber: 245,
    slug: "verbal-problem-245",
    title: "Sentence Correction & Grammar Rules - Item 35",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'HARD',
    topics: ["Sentence Correction", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-245-1",
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
    id: 'prep-verb-246',
    catalogNumber: 246,
    slug: "verbal-problem-246",
    title: "Sentence Completion & Vocabulary Context - Item 36",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'HARD',
    topics: ["Sentence Completion", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-246-1",
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
    id: 'prep-verb-247',
    catalogNumber: 247,
    slug: "verbal-problem-247",
    title: "Error Spotting in Complex Sentences - Item 37",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'HARD',
    topics: ["Error Spotting", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-247-1",
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
    id: 'prep-verb-248',
    catalogNumber: 248,
    slug: "verbal-problem-248",
    title: "Para Jumbles & Logical Sentence Order - Item 38",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'HARD',
    topics: ["Para Jumbles", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-248-1",
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
    id: 'prep-verb-249',
    catalogNumber: 249,
    slug: "verbal-problem-249",
    title: "Synonyms & Antonyms in Context - Item 39",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'HARD',
    topics: ["Vocabulary", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-249-1",
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
    id: 'prep-verb-250',
    catalogNumber: 250,
    slug: "verbal-problem-250",
    title: "Idioms & Phrasal Verbs - Item 40",
    problemStatement: "Identify the grammatically correct option to fill in the blank:\n'Neither the supervisor nor the engineers _______ able to identify the root cause of the system failure until the logs were audited.'",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice."
      }
],
    difficulty: 'HARD',
    topics: ["Idioms", "Verbal Ability"],
    sections: ['VERBAL'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Verbal" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "were"
      },
      {
            "id": "B",
            "text": "was"
      },
      {
            "id": "C",
            "text": "are being"
      },
      {
            "id": "D",
            "text": "has been"
      }
],
    correctOptionId: 'A',
    hints: [
      "In a 'neither ... nor' construction, the verb agrees with the subject closest to it.", "The subject nearest to the verb is 'the engineers' (plural).",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Subject-verb agreement rule with correlative conjunctions (neither...nor): the verb agrees in number with the nearest subject. Since 'engineers' is plural and the past tense is required by the context ('until the logs were audited'), 'were' is the correct choice.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-ver-250-1",
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
