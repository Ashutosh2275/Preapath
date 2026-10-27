import { Question } from '../../types';

export const NUMERICAL_QUESTIONS: Question[] = [
  {
    id: 'prep-nume-101',
    catalogNumber: 101,
    slug: "numerical-problem-101",
    title: "Percentages & successive change Problem 1",
    problemStatement: "A quantity increases by 20% and then decreases by 10%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 20% increase, value = 100 * (1 + 20/100) = 120. After 10% decrease, value = 120 * (1 - 10/100) = 108.00. Net change = 8.00%."
      }
],
    difficulty: 'EASY',
    topics: ["Percentages", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+8.00%"
      },
      {
            "id": "B",
            "text": "-13.00%"
      },
      {
            "id": "C",
            "text": "+10.00%"
      },
      {
            "id": "D",
            "text": "-30.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +20 and b = -10.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 20% increase, value = 100 * (1 + 20/100) = 120. After 10% decrease, value = 120 * (1 - 10/100) = 108.00. Net change = 8.00%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-101-1",
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
    id: 'prep-nume-102',
    catalogNumber: 102,
    slug: "numerical-problem-102",
    title: "Profit, Loss & Discount Problem 2",
    problemStatement: "A quantity increases by 27% and then decreases by 13%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 27% increase, value = 100 * (1 + 27/100) = 127. After 13% decrease, value = 127 * (1 - 13/100) = 110.49. Net change = 10.49%."
      }
],
    difficulty: 'EASY',
    topics: ["Profit and Loss", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+10.49%"
      },
      {
            "id": "B",
            "text": "-15.49%"
      },
      {
            "id": "C",
            "text": "+14.00%"
      },
      {
            "id": "D",
            "text": "-40.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +27 and b = -13.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 27% increase, value = 100 * (1 + 27/100) = 127. After 13% decrease, value = 127 * (1 - 13/100) = 110.49. Net change = 10.49%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-102-1",
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
    id: 'prep-nume-103',
    catalogNumber: 103,
    slug: "numerical-problem-103",
    title: "Ratio, Proportion & Variation Problem 3",
    problemStatement: "A quantity increases by 34% and then decreases by 16%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 34% increase, value = 100 * (1 + 34/100) = 134. After 16% decrease, value = 134 * (1 - 16/100) = 112.56. Net change = 12.56%."
      }
],
    difficulty: 'EASY',
    topics: ["Ratio and Proportion", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+12.56%"
      },
      {
            "id": "B",
            "text": "-17.56%"
      },
      {
            "id": "C",
            "text": "+18.00%"
      },
      {
            "id": "D",
            "text": "-50.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +34 and b = -16.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 34% increase, value = 100 * (1 + 34/100) = 134. After 16% decrease, value = 134 * (1 - 16/100) = 112.56. Net change = 12.56%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-103-1",
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
    id: 'prep-nume-104',
    catalogNumber: 104,
    slug: "numerical-problem-104",
    title: "Averages & Weighted Average Problem 4",
    problemStatement: "A quantity increases by 41% and then decreases by 19%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 41% increase, value = 100 * (1 + 41/100) = 141. After 19% decrease, value = 141 * (1 - 19/100) = 114.21. Net change = 14.21%."
      }
],
    difficulty: 'EASY',
    topics: ["Averages", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+14.21%"
      },
      {
            "id": "B",
            "text": "-19.21%"
      },
      {
            "id": "C",
            "text": "+22.00%"
      },
      {
            "id": "D",
            "text": "-60.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +41 and b = -19.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 41% increase, value = 100 * (1 + 41/100) = 141. After 19% decrease, value = 141 * (1 - 19/100) = 114.21. Net change = 14.21%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-104-1",
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
    id: 'prep-nume-105',
    catalogNumber: 105,
    slug: "numerical-problem-105",
    title: "Time and Work & Efficiency Problem 5",
    problemStatement: "A quantity increases by 48% and then decreases by 22%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 48% increase, value = 100 * (1 + 48/100) = 148. After 22% decrease, value = 148 * (1 - 22/100) = 115.44. Net change = 15.44%."
      }
],
    difficulty: 'EASY',
    topics: ["Time and Work", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+15.44%"
      },
      {
            "id": "B",
            "text": "-20.44%"
      },
      {
            "id": "C",
            "text": "+26.00%"
      },
      {
            "id": "D",
            "text": "-70.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +48 and b = -22.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 48% increase, value = 100 * (1 + 48/100) = 148. After 22% decrease, value = 148 * (1 - 22/100) = 115.44. Net change = 15.44%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-105-1",
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
    id: 'prep-nume-106',
    catalogNumber: 106,
    slug: "numerical-problem-106",
    title: "Pipes and Cisterns Problem 6",
    problemStatement: "A quantity increases by 55% and then decreases by 25%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 55% increase, value = 100 * (1 + 55/100) = 155. After 25% decrease, value = 155 * (1 - 25/100) = 116.25. Net change = 16.25%."
      }
],
    difficulty: 'EASY',
    topics: ["Pipes and Cisterns", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+16.25%"
      },
      {
            "id": "B",
            "text": "-21.25%"
      },
      {
            "id": "C",
            "text": "+30.00%"
      },
      {
            "id": "D",
            "text": "-80.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +55 and b = -25.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 55% increase, value = 100 * (1 + 55/100) = 155. After 25% decrease, value = 155 * (1 - 25/100) = 116.25. Net change = 16.25%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-106-1",
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
    id: 'prep-nume-107',
    catalogNumber: 107,
    slug: "numerical-problem-107",
    title: "Time, Speed and Distance Problem 7",
    problemStatement: "A quantity increases by 62% and then decreases by 28%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 62% increase, value = 100 * (1 + 62/100) = 162. After 28% decrease, value = 162 * (1 - 28/100) = 116.64. Net change = 16.64%."
      }
],
    difficulty: 'EASY',
    topics: ["Time Speed Distance", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+16.64%"
      },
      {
            "id": "B",
            "text": "-21.64%"
      },
      {
            "id": "C",
            "text": "+34.00%"
      },
      {
            "id": "D",
            "text": "-90.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +62 and b = -28.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 62% increase, value = 100 * (1 + 62/100) = 162. After 28% decrease, value = 162 * (1 - 28/100) = 116.64. Net change = 16.64%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-107-1",
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
    id: 'prep-nume-108',
    catalogNumber: 108,
    slug: "numerical-problem-108",
    title: "Trains & Relative Speed Problem 8",
    problemStatement: "A quantity increases by 69% and then decreases by 31%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 69% increase, value = 100 * (1 + 69/100) = 169. After 31% decrease, value = 169 * (1 - 31/100) = 116.61. Net change = 16.61%."
      }
],
    difficulty: 'EASY',
    topics: ["Relative Speed", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+16.61%"
      },
      {
            "id": "B",
            "text": "-21.61%"
      },
      {
            "id": "C",
            "text": "+38.00%"
      },
      {
            "id": "D",
            "text": "-100.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +69 and b = -31.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 69% increase, value = 100 * (1 + 69/100) = 169. After 31% decrease, value = 169 * (1 - 31/100) = 116.61. Net change = 16.61%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-108-1",
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
    id: 'prep-nume-109',
    catalogNumber: 109,
    slug: "numerical-problem-109",
    title: "Boats and Streams Problem 9",
    problemStatement: "A quantity increases by 26% and then decreases by 34%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 26% increase, value = 100 * (1 + 26/100) = 126. After 34% decrease, value = 126 * (1 - 34/100) = 83.16. Net change = -16.84%."
      }
],
    difficulty: 'EASY',
    topics: ["Boats and Streams", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+-16.84%"
      },
      {
            "id": "B",
            "text": "-21.84%"
      },
      {
            "id": "C",
            "text": "+-8.00%"
      },
      {
            "id": "D",
            "text": "-60.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +26 and b = -34.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 26% increase, value = 100 * (1 + 26/100) = 126. After 34% decrease, value = 126 * (1 - 34/100) = 83.16. Net change = -16.84%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-109-1",
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
    id: 'prep-nume-110',
    catalogNumber: 110,
    slug: "numerical-problem-110",
    title: "Simple and Compound Interest Problem 10",
    problemStatement: "A quantity increases by 33% and then decreases by 37%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 33% increase, value = 100 * (1 + 33/100) = 133. After 37% decrease, value = 133 * (1 - 37/100) = 83.79. Net change = -16.21%."
      }
],
    difficulty: 'EASY',
    topics: ["Simple and Compound Interest", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+-16.21%"
      },
      {
            "id": "B",
            "text": "-21.21%"
      },
      {
            "id": "C",
            "text": "+-4.00%"
      },
      {
            "id": "D",
            "text": "-70.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +33 and b = -37.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 33% increase, value = 100 * (1 + 33/100) = 133. After 37% decrease, value = 133 * (1 - 37/100) = 83.79. Net change = -16.21%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-110-1",
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
    id: 'prep-nume-111',
    catalogNumber: 111,
    slug: "numerical-problem-111",
    title: "Number Systems, LCM & HCF Problem 11",
    problemStatement: "A quantity increases by 40% and then decreases by 10%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 40% increase, value = 100 * (1 + 40/100) = 140. After 10% decrease, value = 140 * (1 - 10/100) = 126.00. Net change = 26.00%."
      }
],
    difficulty: 'EASY',
    topics: ["Number Systems", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+26.00%"
      },
      {
            "id": "B",
            "text": "-31.00%"
      },
      {
            "id": "C",
            "text": "+30.00%"
      },
      {
            "id": "D",
            "text": "-50.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +40 and b = -10.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 40% increase, value = 100 * (1 + 40/100) = 140. After 10% decrease, value = 140 * (1 - 10/100) = 126.00. Net change = 26.00%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-111-1",
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
    id: 'prep-nume-112',
    catalogNumber: 112,
    slug: "numerical-problem-112",
    title: "Divisibility & Remainder Theorem Problem 12",
    problemStatement: "A quantity increases by 47% and then decreases by 13%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 47% increase, value = 100 * (1 + 47/100) = 147. After 13% decrease, value = 147 * (1 - 13/100) = 127.89. Net change = 27.89%."
      }
],
    difficulty: 'EASY',
    topics: ["Number Systems", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+27.89%"
      },
      {
            "id": "B",
            "text": "-32.89%"
      },
      {
            "id": "C",
            "text": "+34.00%"
      },
      {
            "id": "D",
            "text": "-60.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +47 and b = -13.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 47% increase, value = 100 * (1 + 47/100) = 147. After 13% decrease, value = 147 * (1 - 13/100) = 127.89. Net change = 27.89%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-112-1",
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
    id: 'prep-nume-113',
    catalogNumber: 113,
    slug: "numerical-problem-113",
    title: "Permutations and Combinations Problem 13",
    problemStatement: "A quantity increases by 54% and then decreases by 16%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 54% increase, value = 100 * (1 + 54/100) = 154. After 16% decrease, value = 154 * (1 - 16/100) = 129.36. Net change = 29.36%."
      }
],
    difficulty: 'EASY',
    topics: ["Combinatorics", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+29.36%"
      },
      {
            "id": "B",
            "text": "-34.36%"
      },
      {
            "id": "C",
            "text": "+38.00%"
      },
      {
            "id": "D",
            "text": "-70.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +54 and b = -16.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 54% increase, value = 100 * (1 + 54/100) = 154. After 16% decrease, value = 154 * (1 - 16/100) = 129.36. Net change = 29.36%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-113-1",
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
    id: 'prep-nume-114',
    catalogNumber: 114,
    slug: "numerical-problem-114",
    title: "Probability & Independent Events Problem 14",
    problemStatement: "A quantity increases by 61% and then decreases by 19%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 61% increase, value = 100 * (1 + 61/100) = 161. After 19% decrease, value = 161 * (1 - 19/100) = 130.41. Net change = 30.41%."
      }
],
    difficulty: 'EASY',
    topics: ["Probability", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+30.41%"
      },
      {
            "id": "B",
            "text": "-35.41%"
      },
      {
            "id": "C",
            "text": "+42.00%"
      },
      {
            "id": "D",
            "text": "-80.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +61 and b = -19.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 61% increase, value = 100 * (1 + 61/100) = 161. After 19% decrease, value = 161 * (1 - 19/100) = 130.41. Net change = 30.41%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-114-1",
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
    id: 'prep-nume-115',
    catalogNumber: 115,
    slug: "numerical-problem-115",
    title: "Mixtures and Alligations Problem 15",
    problemStatement: "A quantity increases by 68% and then decreases by 22%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 68% increase, value = 100 * (1 + 68/100) = 168. After 22% decrease, value = 168 * (1 - 22/100) = 131.04. Net change = 31.04%."
      }
],
    difficulty: 'EASY',
    topics: ["Alligations", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+31.04%"
      },
      {
            "id": "B",
            "text": "-36.04%"
      },
      {
            "id": "C",
            "text": "+46.00%"
      },
      {
            "id": "D",
            "text": "-90.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +68 and b = -22.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 68% increase, value = 100 * (1 + 68/100) = 168. After 22% decrease, value = 168 * (1 - 22/100) = 131.04. Net change = 31.04%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-115-1",
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
    id: 'prep-nume-116',
    catalogNumber: 116,
    slug: "numerical-problem-116",
    title: "Mensuration 2D & Areas Problem 16",
    problemStatement: "A quantity increases by 25% and then decreases by 25%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 25% increase, value = 100 * (1 + 25/100) = 125. After 25% decrease, value = 125 * (1 - 25/100) = 93.75. Net change = -6.25%."
      }
],
    difficulty: 'EASY',
    topics: ["Geometry", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+-6.25%"
      },
      {
            "id": "B",
            "text": "-11.25%"
      },
      {
            "id": "C",
            "text": "+0.00%"
      },
      {
            "id": "D",
            "text": "-50.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +25 and b = -25.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 25% increase, value = 100 * (1 + 25/100) = 125. After 25% decrease, value = 125 * (1 - 25/100) = 93.75. Net change = -6.25%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-116-1",
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
    id: 'prep-nume-117',
    catalogNumber: 117,
    slug: "numerical-problem-117",
    title: "Mensuration 3D & Volumes Problem 17",
    problemStatement: "A quantity increases by 32% and then decreases by 28%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 32% increase, value = 100 * (1 + 32/100) = 132. After 28% decrease, value = 132 * (1 - 28/100) = 95.04. Net change = -4.96%."
      }
],
    difficulty: 'EASY',
    topics: ["Geometry", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+-4.96%"
      },
      {
            "id": "B",
            "text": "-9.96%"
      },
      {
            "id": "C",
            "text": "+4.00%"
      },
      {
            "id": "D",
            "text": "-60.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +32 and b = -28.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 32% increase, value = 100 * (1 + 32/100) = 132. After 28% decrease, value = 132 * (1 - 28/100) = 95.04. Net change = -4.96%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-117-1",
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
    id: 'prep-nume-118',
    catalogNumber: 118,
    slug: "numerical-problem-118",
    title: "Clocks & Angles Problem 18",
    problemStatement: "A quantity increases by 39% and then decreases by 31%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 39% increase, value = 100 * (1 + 39/100) = 139. After 31% decrease, value = 139 * (1 - 31/100) = 95.91. Net change = -4.09%."
      }
],
    difficulty: 'EASY',
    topics: ["Clocks and Calendars", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+-4.09%"
      },
      {
            "id": "B",
            "text": "-9.09%"
      },
      {
            "id": "C",
            "text": "+8.00%"
      },
      {
            "id": "D",
            "text": "-70.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +39 and b = -31.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 39% increase, value = 100 * (1 + 39/100) = 139. After 31% decrease, value = 139 * (1 - 31/100) = 95.91. Net change = -4.09%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-118-1",
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
    id: 'prep-nume-119',
    catalogNumber: 119,
    slug: "numerical-problem-119",
    title: "Calendars & Odd Days Problem 19",
    problemStatement: "A quantity increases by 46% and then decreases by 34%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 46% increase, value = 100 * (1 + 46/100) = 146. After 34% decrease, value = 146 * (1 - 34/100) = 96.36. Net change = -3.64%."
      }
],
    difficulty: 'EASY',
    topics: ["Clocks and Calendars", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+-3.64%"
      },
      {
            "id": "B",
            "text": "-8.64%"
      },
      {
            "id": "C",
            "text": "+12.00%"
      },
      {
            "id": "D",
            "text": "-80.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +46 and b = -34.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 46% increase, value = 100 * (1 + 46/100) = 146. After 34% decrease, value = 146 * (1 - 34/100) = 96.36. Net change = -3.64%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-119-1",
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
    id: 'prep-nume-120',
    catalogNumber: 120,
    slug: "numerical-problem-120",
    title: "Data Interpretation - Tables & Bar Charts Problem 20",
    problemStatement: "A quantity increases by 53% and then decreases by 37%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 53% increase, value = 100 * (1 + 53/100) = 153. After 37% decrease, value = 153 * (1 - 37/100) = 96.39. Net change = -3.61%."
      }
],
    difficulty: 'EASY',
    topics: ["Data Interpretation", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+-3.61%"
      },
      {
            "id": "B",
            "text": "-8.61%"
      },
      {
            "id": "C",
            "text": "+16.00%"
      },
      {
            "id": "D",
            "text": "-90.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +53 and b = -37.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 53% increase, value = 100 * (1 + 53/100) = 153. After 37% decrease, value = 153 * (1 - 37/100) = 96.39. Net change = -3.61%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-120-1",
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
    id: 'prep-nume-121',
    catalogNumber: 121,
    slug: "numerical-problem-121",
    title: "Percentages & successive change Problem 21",
    problemStatement: "A quantity increases by 60% and then decreases by 10%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 60% increase, value = 100 * (1 + 60/100) = 160. After 10% decrease, value = 160 * (1 - 10/100) = 144.00. Net change = 44.00%."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Percentages", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+44.00%"
      },
      {
            "id": "B",
            "text": "-49.00%"
      },
      {
            "id": "C",
            "text": "+50.00%"
      },
      {
            "id": "D",
            "text": "-70.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +60 and b = -10.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 60% increase, value = 100 * (1 + 60/100) = 160. After 10% decrease, value = 160 * (1 - 10/100) = 144.00. Net change = 44.00%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-121-1",
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
    id: 'prep-nume-122',
    catalogNumber: 122,
    slug: "numerical-problem-122",
    title: "Profit, Loss & Discount Problem 22",
    problemStatement: "A quantity increases by 67% and then decreases by 13%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 67% increase, value = 100 * (1 + 67/100) = 167. After 13% decrease, value = 167 * (1 - 13/100) = 145.29. Net change = 45.29%."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Profit and Loss", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+45.29%"
      },
      {
            "id": "B",
            "text": "-50.29%"
      },
      {
            "id": "C",
            "text": "+54.00%"
      },
      {
            "id": "D",
            "text": "-80.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +67 and b = -13.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 67% increase, value = 100 * (1 + 67/100) = 167. After 13% decrease, value = 167 * (1 - 13/100) = 145.29. Net change = 45.29%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-122-1",
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
    id: 'prep-nume-123',
    catalogNumber: 123,
    slug: "numerical-problem-123",
    title: "Ratio, Proportion & Variation Problem 23",
    problemStatement: "A quantity increases by 24% and then decreases by 16%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 24% increase, value = 100 * (1 + 24/100) = 124. After 16% decrease, value = 124 * (1 - 16/100) = 104.16. Net change = 4.16%."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Ratio and Proportion", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+4.16%"
      },
      {
            "id": "B",
            "text": "-9.16%"
      },
      {
            "id": "C",
            "text": "+8.00%"
      },
      {
            "id": "D",
            "text": "-40.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +24 and b = -16.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 24% increase, value = 100 * (1 + 24/100) = 124. After 16% decrease, value = 124 * (1 - 16/100) = 104.16. Net change = 4.16%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-123-1",
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
    id: 'prep-nume-124',
    catalogNumber: 124,
    slug: "numerical-problem-124",
    title: "Averages & Weighted Average Problem 24",
    problemStatement: "A quantity increases by 31% and then decreases by 19%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 31% increase, value = 100 * (1 + 31/100) = 131. After 19% decrease, value = 131 * (1 - 19/100) = 106.11. Net change = 6.11%."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Averages", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+6.11%"
      },
      {
            "id": "B",
            "text": "-11.11%"
      },
      {
            "id": "C",
            "text": "+12.00%"
      },
      {
            "id": "D",
            "text": "-50.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +31 and b = -19.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 31% increase, value = 100 * (1 + 31/100) = 131. After 19% decrease, value = 131 * (1 - 19/100) = 106.11. Net change = 6.11%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-124-1",
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
    id: 'prep-nume-125',
    catalogNumber: 125,
    slug: "numerical-problem-125",
    title: "Time and Work & Efficiency Problem 25",
    problemStatement: "A quantity increases by 38% and then decreases by 22%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 38% increase, value = 100 * (1 + 38/100) = 138. After 22% decrease, value = 138 * (1 - 22/100) = 107.64. Net change = 7.64%."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Time and Work", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+7.64%"
      },
      {
            "id": "B",
            "text": "-12.64%"
      },
      {
            "id": "C",
            "text": "+16.00%"
      },
      {
            "id": "D",
            "text": "-60.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +38 and b = -22.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 38% increase, value = 100 * (1 + 38/100) = 138. After 22% decrease, value = 138 * (1 - 22/100) = 107.64. Net change = 7.64%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-125-1",
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
    id: 'prep-nume-126',
    catalogNumber: 126,
    slug: "numerical-problem-126",
    title: "Pipes and Cisterns Problem 26",
    problemStatement: "A quantity increases by 45% and then decreases by 25%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 45% increase, value = 100 * (1 + 45/100) = 145. After 25% decrease, value = 145 * (1 - 25/100) = 108.75. Net change = 8.75%."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Pipes and Cisterns", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+8.75%"
      },
      {
            "id": "B",
            "text": "-13.75%"
      },
      {
            "id": "C",
            "text": "+20.00%"
      },
      {
            "id": "D",
            "text": "-70.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +45 and b = -25.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 45% increase, value = 100 * (1 + 45/100) = 145. After 25% decrease, value = 145 * (1 - 25/100) = 108.75. Net change = 8.75%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-126-1",
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
    id: 'prep-nume-127',
    catalogNumber: 127,
    slug: "numerical-problem-127",
    title: "Time, Speed and Distance Problem 27",
    problemStatement: "A quantity increases by 52% and then decreases by 28%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 52% increase, value = 100 * (1 + 52/100) = 152. After 28% decrease, value = 152 * (1 - 28/100) = 109.44. Net change = 9.44%."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Time Speed Distance", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+9.44%"
      },
      {
            "id": "B",
            "text": "-14.44%"
      },
      {
            "id": "C",
            "text": "+24.00%"
      },
      {
            "id": "D",
            "text": "-80.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +52 and b = -28.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 52% increase, value = 100 * (1 + 52/100) = 152. After 28% decrease, value = 152 * (1 - 28/100) = 109.44. Net change = 9.44%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-127-1",
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
    id: 'prep-nume-128',
    catalogNumber: 128,
    slug: "numerical-problem-128",
    title: "Trains & Relative Speed Problem 28",
    problemStatement: "A quantity increases by 59% and then decreases by 31%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 59% increase, value = 100 * (1 + 59/100) = 159. After 31% decrease, value = 159 * (1 - 31/100) = 109.71. Net change = 9.71%."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Relative Speed", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+9.71%"
      },
      {
            "id": "B",
            "text": "-14.71%"
      },
      {
            "id": "C",
            "text": "+28.00%"
      },
      {
            "id": "D",
            "text": "-90.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +59 and b = -31.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 59% increase, value = 100 * (1 + 59/100) = 159. After 31% decrease, value = 159 * (1 - 31/100) = 109.71. Net change = 9.71%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-128-1",
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
    id: 'prep-nume-129',
    catalogNumber: 129,
    slug: "numerical-problem-129",
    title: "Boats and Streams Problem 29",
    problemStatement: "A quantity increases by 66% and then decreases by 34%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 66% increase, value = 100 * (1 + 66/100) = 166. After 34% decrease, value = 166 * (1 - 34/100) = 109.56. Net change = 9.56%."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Boats and Streams", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+9.56%"
      },
      {
            "id": "B",
            "text": "-14.56%"
      },
      {
            "id": "C",
            "text": "+32.00%"
      },
      {
            "id": "D",
            "text": "-100.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +66 and b = -34.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 66% increase, value = 100 * (1 + 66/100) = 166. After 34% decrease, value = 166 * (1 - 34/100) = 109.56. Net change = 9.56%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-129-1",
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
    id: 'prep-nume-130',
    catalogNumber: 130,
    slug: "numerical-problem-130",
    title: "Simple and Compound Interest Problem 30",
    problemStatement: "A quantity increases by 23% and then decreases by 37%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 23% increase, value = 100 * (1 + 23/100) = 123. After 37% decrease, value = 123 * (1 - 37/100) = 77.49. Net change = -22.51%."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Simple and Compound Interest", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+-22.51%"
      },
      {
            "id": "B",
            "text": "-27.51%"
      },
      {
            "id": "C",
            "text": "+-14.00%"
      },
      {
            "id": "D",
            "text": "-60.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +23 and b = -37.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 23% increase, value = 100 * (1 + 23/100) = 123. After 37% decrease, value = 123 * (1 - 37/100) = 77.49. Net change = -22.51%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-130-1",
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
    id: 'prep-nume-131',
    catalogNumber: 131,
    slug: "numerical-problem-131",
    title: "Number Systems, LCM & HCF Problem 31",
    problemStatement: "A quantity increases by 30% and then decreases by 10%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 30% increase, value = 100 * (1 + 30/100) = 130. After 10% decrease, value = 130 * (1 - 10/100) = 117.00. Net change = 17.00%."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Number Systems", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+17.00%"
      },
      {
            "id": "B",
            "text": "-22.00%"
      },
      {
            "id": "C",
            "text": "+20.00%"
      },
      {
            "id": "D",
            "text": "-40.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +30 and b = -10.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 30% increase, value = 100 * (1 + 30/100) = 130. After 10% decrease, value = 130 * (1 - 10/100) = 117.00. Net change = 17.00%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-131-1",
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
    id: 'prep-nume-132',
    catalogNumber: 132,
    slug: "numerical-problem-132",
    title: "Divisibility & Remainder Theorem Problem 32",
    problemStatement: "A quantity increases by 37% and then decreases by 13%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 37% increase, value = 100 * (1 + 37/100) = 137. After 13% decrease, value = 137 * (1 - 13/100) = 119.19. Net change = 19.19%."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Number Systems", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+19.19%"
      },
      {
            "id": "B",
            "text": "-24.19%"
      },
      {
            "id": "C",
            "text": "+24.00%"
      },
      {
            "id": "D",
            "text": "-50.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +37 and b = -13.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 37% increase, value = 100 * (1 + 37/100) = 137. After 13% decrease, value = 137 * (1 - 13/100) = 119.19. Net change = 19.19%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-132-1",
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
    id: 'prep-nume-133',
    catalogNumber: 133,
    slug: "numerical-problem-133",
    title: "Permutations and Combinations Problem 33",
    problemStatement: "A quantity increases by 44% and then decreases by 16%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 44% increase, value = 100 * (1 + 44/100) = 144. After 16% decrease, value = 144 * (1 - 16/100) = 120.96. Net change = 20.96%."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Combinatorics", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+20.96%"
      },
      {
            "id": "B",
            "text": "-25.96%"
      },
      {
            "id": "C",
            "text": "+28.00%"
      },
      {
            "id": "D",
            "text": "-60.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +44 and b = -16.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 44% increase, value = 100 * (1 + 44/100) = 144. After 16% decrease, value = 144 * (1 - 16/100) = 120.96. Net change = 20.96%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-133-1",
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
    id: 'prep-nume-134',
    catalogNumber: 134,
    slug: "numerical-problem-134",
    title: "Probability & Independent Events Problem 34",
    problemStatement: "A quantity increases by 51% and then decreases by 19%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 51% increase, value = 100 * (1 + 51/100) = 151. After 19% decrease, value = 151 * (1 - 19/100) = 122.31. Net change = 22.31%."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Probability", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+22.31%"
      },
      {
            "id": "B",
            "text": "-27.31%"
      },
      {
            "id": "C",
            "text": "+32.00%"
      },
      {
            "id": "D",
            "text": "-70.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +51 and b = -19.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 51% increase, value = 100 * (1 + 51/100) = 151. After 19% decrease, value = 151 * (1 - 19/100) = 122.31. Net change = 22.31%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-134-1",
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
    id: 'prep-nume-135',
    catalogNumber: 135,
    slug: "numerical-problem-135",
    title: "Mixtures and Alligations Problem 35",
    problemStatement: "A quantity increases by 58% and then decreases by 22%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 58% increase, value = 100 * (1 + 58/100) = 158. After 22% decrease, value = 158 * (1 - 22/100) = 123.24. Net change = 23.24%."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Alligations", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+23.24%"
      },
      {
            "id": "B",
            "text": "-28.24%"
      },
      {
            "id": "C",
            "text": "+36.00%"
      },
      {
            "id": "D",
            "text": "-80.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +58 and b = -22.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 58% increase, value = 100 * (1 + 58/100) = 158. After 22% decrease, value = 158 * (1 - 22/100) = 123.24. Net change = 23.24%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-135-1",
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
    id: 'prep-nume-136',
    catalogNumber: 136,
    slug: "numerical-problem-136",
    title: "Mensuration 2D & Areas Problem 36",
    problemStatement: "A quantity increases by 65% and then decreases by 25%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 65% increase, value = 100 * (1 + 65/100) = 165. After 25% decrease, value = 165 * (1 - 25/100) = 123.75. Net change = 23.75%."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Geometry", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+23.75%"
      },
      {
            "id": "B",
            "text": "-28.75%"
      },
      {
            "id": "C",
            "text": "+40.00%"
      },
      {
            "id": "D",
            "text": "-90.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +65 and b = -25.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 65% increase, value = 100 * (1 + 65/100) = 165. After 25% decrease, value = 165 * (1 - 25/100) = 123.75. Net change = 23.75%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-136-1",
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
    id: 'prep-nume-137',
    catalogNumber: 137,
    slug: "numerical-problem-137",
    title: "Mensuration 3D & Volumes Problem 37",
    problemStatement: "A quantity increases by 22% and then decreases by 28%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 22% increase, value = 100 * (1 + 22/100) = 122. After 28% decrease, value = 122 * (1 - 28/100) = 87.84. Net change = -12.16%."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Geometry", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+-12.16%"
      },
      {
            "id": "B",
            "text": "-17.16%"
      },
      {
            "id": "C",
            "text": "+-6.00%"
      },
      {
            "id": "D",
            "text": "-50.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +22 and b = -28.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 22% increase, value = 100 * (1 + 22/100) = 122. After 28% decrease, value = 122 * (1 - 28/100) = 87.84. Net change = -12.16%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-137-1",
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
    id: 'prep-nume-138',
    catalogNumber: 138,
    slug: "numerical-problem-138",
    title: "Clocks & Angles Problem 38",
    problemStatement: "A quantity increases by 29% and then decreases by 31%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 29% increase, value = 100 * (1 + 29/100) = 129. After 31% decrease, value = 129 * (1 - 31/100) = 89.01. Net change = -10.99%."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Clocks and Calendars", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+-10.99%"
      },
      {
            "id": "B",
            "text": "-15.99%"
      },
      {
            "id": "C",
            "text": "+-2.00%"
      },
      {
            "id": "D",
            "text": "-60.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +29 and b = -31.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 29% increase, value = 100 * (1 + 29/100) = 129. After 31% decrease, value = 129 * (1 - 31/100) = 89.01. Net change = -10.99%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-138-1",
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
    id: 'prep-nume-139',
    catalogNumber: 139,
    slug: "numerical-problem-139",
    title: "Calendars & Odd Days Problem 39",
    problemStatement: "A quantity increases by 36% and then decreases by 34%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 36% increase, value = 100 * (1 + 36/100) = 136. After 34% decrease, value = 136 * (1 - 34/100) = 89.76. Net change = -10.24%."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Clocks and Calendars", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+-10.24%"
      },
      {
            "id": "B",
            "text": "-15.24%"
      },
      {
            "id": "C",
            "text": "+2.00%"
      },
      {
            "id": "D",
            "text": "-70.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +36 and b = -34.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 36% increase, value = 100 * (1 + 36/100) = 136. After 34% decrease, value = 136 * (1 - 34/100) = 89.76. Net change = -10.24%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-139-1",
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
    id: 'prep-nume-140',
    catalogNumber: 140,
    slug: "numerical-problem-140",
    title: "Data Interpretation - Tables & Bar Charts Problem 40",
    problemStatement: "A quantity increases by 43% and then decreases by 37%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 43% increase, value = 100 * (1 + 43/100) = 143. After 37% decrease, value = 143 * (1 - 37/100) = 90.09. Net change = -9.91%."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Data Interpretation", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+-9.91%"
      },
      {
            "id": "B",
            "text": "-14.91%"
      },
      {
            "id": "C",
            "text": "+6.00%"
      },
      {
            "id": "D",
            "text": "-80.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +43 and b = -37.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 43% increase, value = 100 * (1 + 43/100) = 143. After 37% decrease, value = 143 * (1 - 37/100) = 90.09. Net change = -9.91%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-140-1",
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
    id: 'prep-nume-141',
    catalogNumber: 141,
    slug: "numerical-problem-141",
    title: "Percentages & successive change Problem 41",
    problemStatement: "A quantity increases by 50% and then decreases by 10%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 50% increase, value = 100 * (1 + 50/100) = 150. After 10% decrease, value = 150 * (1 - 10/100) = 135.00. Net change = 35.00%."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Percentages", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+35.00%"
      },
      {
            "id": "B",
            "text": "-40.00%"
      },
      {
            "id": "C",
            "text": "+40.00%"
      },
      {
            "id": "D",
            "text": "-60.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +50 and b = -10.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 50% increase, value = 100 * (1 + 50/100) = 150. After 10% decrease, value = 150 * (1 - 10/100) = 135.00. Net change = 35.00%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-141-1",
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
    id: 'prep-nume-142',
    catalogNumber: 142,
    slug: "numerical-problem-142",
    title: "Profit, Loss & Discount Problem 42",
    problemStatement: "A quantity increases by 57% and then decreases by 13%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 57% increase, value = 100 * (1 + 57/100) = 157. After 13% decrease, value = 157 * (1 - 13/100) = 136.59. Net change = 36.59%."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Profit and Loss", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+36.59%"
      },
      {
            "id": "B",
            "text": "-41.59%"
      },
      {
            "id": "C",
            "text": "+44.00%"
      },
      {
            "id": "D",
            "text": "-70.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +57 and b = -13.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 57% increase, value = 100 * (1 + 57/100) = 157. After 13% decrease, value = 157 * (1 - 13/100) = 136.59. Net change = 36.59%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-142-1",
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
    id: 'prep-nume-143',
    catalogNumber: 143,
    slug: "numerical-problem-143",
    title: "Ratio, Proportion & Variation Problem 43",
    problemStatement: "A quantity increases by 64% and then decreases by 16%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 64% increase, value = 100 * (1 + 64/100) = 164. After 16% decrease, value = 164 * (1 - 16/100) = 137.76. Net change = 37.76%."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Ratio and Proportion", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+37.76%"
      },
      {
            "id": "B",
            "text": "-42.76%"
      },
      {
            "id": "C",
            "text": "+48.00%"
      },
      {
            "id": "D",
            "text": "-80.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +64 and b = -16.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 64% increase, value = 100 * (1 + 64/100) = 164. After 16% decrease, value = 164 * (1 - 16/100) = 137.76. Net change = 37.76%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-143-1",
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
    id: 'prep-nume-144',
    catalogNumber: 144,
    slug: "numerical-problem-144",
    title: "Averages & Weighted Average Problem 44",
    problemStatement: "A quantity increases by 21% and then decreases by 19%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 21% increase, value = 100 * (1 + 21/100) = 121. After 19% decrease, value = 121 * (1 - 19/100) = 98.01. Net change = -1.99%."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Averages", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+-1.99%"
      },
      {
            "id": "B",
            "text": "-6.99%"
      },
      {
            "id": "C",
            "text": "+2.00%"
      },
      {
            "id": "D",
            "text": "-40.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +21 and b = -19.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 21% increase, value = 100 * (1 + 21/100) = 121. After 19% decrease, value = 121 * (1 - 19/100) = 98.01. Net change = -1.99%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-144-1",
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
    id: 'prep-nume-145',
    catalogNumber: 145,
    slug: "numerical-problem-145",
    title: "Time and Work & Efficiency Problem 45",
    problemStatement: "A quantity increases by 28% and then decreases by 22%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 28% increase, value = 100 * (1 + 28/100) = 128. After 22% decrease, value = 128 * (1 - 22/100) = 99.84. Net change = -0.16%."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Time and Work", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+-0.16%"
      },
      {
            "id": "B",
            "text": "-5.16%"
      },
      {
            "id": "C",
            "text": "+6.00%"
      },
      {
            "id": "D",
            "text": "-50.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +28 and b = -22.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 28% increase, value = 100 * (1 + 28/100) = 128. After 22% decrease, value = 128 * (1 - 22/100) = 99.84. Net change = -0.16%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-145-1",
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
    id: 'prep-nume-146',
    catalogNumber: 146,
    slug: "numerical-problem-146",
    title: "Pipes and Cisterns Problem 46",
    problemStatement: "A quantity increases by 35% and then decreases by 25%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 35% increase, value = 100 * (1 + 35/100) = 135. After 25% decrease, value = 135 * (1 - 25/100) = 101.25. Net change = 1.25%."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Pipes and Cisterns", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+1.25%"
      },
      {
            "id": "B",
            "text": "-6.25%"
      },
      {
            "id": "C",
            "text": "+10.00%"
      },
      {
            "id": "D",
            "text": "-60.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +35 and b = -25.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 35% increase, value = 100 * (1 + 35/100) = 135. After 25% decrease, value = 135 * (1 - 25/100) = 101.25. Net change = 1.25%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-146-1",
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
    id: 'prep-nume-147',
    catalogNumber: 147,
    slug: "numerical-problem-147",
    title: "Time, Speed and Distance Problem 47",
    problemStatement: "A quantity increases by 42% and then decreases by 28%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 42% increase, value = 100 * (1 + 42/100) = 142. After 28% decrease, value = 142 * (1 - 28/100) = 102.24. Net change = 2.24%."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Time Speed Distance", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+2.24%"
      },
      {
            "id": "B",
            "text": "-7.24%"
      },
      {
            "id": "C",
            "text": "+14.00%"
      },
      {
            "id": "D",
            "text": "-70.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +42 and b = -28.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 42% increase, value = 100 * (1 + 42/100) = 142. After 28% decrease, value = 142 * (1 - 28/100) = 102.24. Net change = 2.24%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-147-1",
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
    id: 'prep-nume-148',
    catalogNumber: 148,
    slug: "numerical-problem-148",
    title: "Trains & Relative Speed Problem 48",
    problemStatement: "A quantity increases by 49% and then decreases by 31%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 49% increase, value = 100 * (1 + 49/100) = 149. After 31% decrease, value = 149 * (1 - 31/100) = 102.81. Net change = 2.81%."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Relative Speed", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+2.81%"
      },
      {
            "id": "B",
            "text": "-7.81%"
      },
      {
            "id": "C",
            "text": "+18.00%"
      },
      {
            "id": "D",
            "text": "-80.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +49 and b = -31.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 49% increase, value = 100 * (1 + 49/100) = 149. After 31% decrease, value = 149 * (1 - 31/100) = 102.81. Net change = 2.81%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-148-1",
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
    id: 'prep-nume-149',
    catalogNumber: 149,
    slug: "numerical-problem-149",
    title: "Boats and Streams Problem 49",
    problemStatement: "A quantity increases by 56% and then decreases by 34%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 56% increase, value = 100 * (1 + 56/100) = 156. After 34% decrease, value = 156 * (1 - 34/100) = 102.96. Net change = 2.96%."
      }
],
    difficulty: 'HARD',
    topics: ["Boats and Streams", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+2.96%"
      },
      {
            "id": "B",
            "text": "-7.96%"
      },
      {
            "id": "C",
            "text": "+22.00%"
      },
      {
            "id": "D",
            "text": "-90.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +56 and b = -34.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 56% increase, value = 100 * (1 + 56/100) = 156. After 34% decrease, value = 156 * (1 - 34/100) = 102.96. Net change = 2.96%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-149-1",
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
    id: 'prep-nume-150',
    catalogNumber: 150,
    slug: "numerical-problem-150",
    title: "Simple and Compound Interest Problem 50",
    problemStatement: "A quantity increases by 63% and then decreases by 37%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 63% increase, value = 100 * (1 + 63/100) = 163. After 37% decrease, value = 163 * (1 - 37/100) = 102.69. Net change = 2.69%."
      }
],
    difficulty: 'HARD',
    topics: ["Simple and Compound Interest", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+2.69%"
      },
      {
            "id": "B",
            "text": "-7.69%"
      },
      {
            "id": "C",
            "text": "+26.00%"
      },
      {
            "id": "D",
            "text": "-100.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +63 and b = -37.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 63% increase, value = 100 * (1 + 63/100) = 163. After 37% decrease, value = 163 * (1 - 37/100) = 102.69. Net change = 2.69%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-150-1",
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
    id: 'prep-nume-151',
    catalogNumber: 151,
    slug: "numerical-problem-151",
    title: "Number Systems, LCM & HCF Problem 51",
    problemStatement: "A quantity increases by 20% and then decreases by 10%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 20% increase, value = 100 * (1 + 20/100) = 120. After 10% decrease, value = 120 * (1 - 10/100) = 108.00. Net change = 8.00%."
      }
],
    difficulty: 'HARD',
    topics: ["Number Systems", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+8.00%"
      },
      {
            "id": "B",
            "text": "-13.00%"
      },
      {
            "id": "C",
            "text": "+10.00%"
      },
      {
            "id": "D",
            "text": "-30.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +20 and b = -10.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 20% increase, value = 100 * (1 + 20/100) = 120. After 10% decrease, value = 120 * (1 - 10/100) = 108.00. Net change = 8.00%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-151-1",
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
    id: 'prep-nume-152',
    catalogNumber: 152,
    slug: "numerical-problem-152",
    title: "Divisibility & Remainder Theorem Problem 52",
    problemStatement: "A quantity increases by 27% and then decreases by 13%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 27% increase, value = 100 * (1 + 27/100) = 127. After 13% decrease, value = 127 * (1 - 13/100) = 110.49. Net change = 10.49%."
      }
],
    difficulty: 'HARD',
    topics: ["Number Systems", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+10.49%"
      },
      {
            "id": "B",
            "text": "-15.49%"
      },
      {
            "id": "C",
            "text": "+14.00%"
      },
      {
            "id": "D",
            "text": "-40.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +27 and b = -13.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 27% increase, value = 100 * (1 + 27/100) = 127. After 13% decrease, value = 127 * (1 - 13/100) = 110.49. Net change = 10.49%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-152-1",
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
    id: 'prep-nume-153',
    catalogNumber: 153,
    slug: "numerical-problem-153",
    title: "Permutations and Combinations Problem 53",
    problemStatement: "A quantity increases by 34% and then decreases by 16%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 34% increase, value = 100 * (1 + 34/100) = 134. After 16% decrease, value = 134 * (1 - 16/100) = 112.56. Net change = 12.56%."
      }
],
    difficulty: 'HARD',
    topics: ["Combinatorics", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+12.56%"
      },
      {
            "id": "B",
            "text": "-17.56%"
      },
      {
            "id": "C",
            "text": "+18.00%"
      },
      {
            "id": "D",
            "text": "-50.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +34 and b = -16.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 34% increase, value = 100 * (1 + 34/100) = 134. After 16% decrease, value = 134 * (1 - 16/100) = 112.56. Net change = 12.56%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-153-1",
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
    id: 'prep-nume-154',
    catalogNumber: 154,
    slug: "numerical-problem-154",
    title: "Probability & Independent Events Problem 54",
    problemStatement: "A quantity increases by 41% and then decreases by 19%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 41% increase, value = 100 * (1 + 41/100) = 141. After 19% decrease, value = 141 * (1 - 19/100) = 114.21. Net change = 14.21%."
      }
],
    difficulty: 'HARD',
    topics: ["Probability", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+14.21%"
      },
      {
            "id": "B",
            "text": "-19.21%"
      },
      {
            "id": "C",
            "text": "+22.00%"
      },
      {
            "id": "D",
            "text": "-60.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +41 and b = -19.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 41% increase, value = 100 * (1 + 41/100) = 141. After 19% decrease, value = 141 * (1 - 19/100) = 114.21. Net change = 14.21%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-154-1",
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
    id: 'prep-nume-155',
    catalogNumber: 155,
    slug: "numerical-problem-155",
    title: "Mixtures and Alligations Problem 55",
    problemStatement: "A quantity increases by 48% and then decreases by 22%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 48% increase, value = 100 * (1 + 48/100) = 148. After 22% decrease, value = 148 * (1 - 22/100) = 115.44. Net change = 15.44%."
      }
],
    difficulty: 'HARD',
    topics: ["Alligations", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+15.44%"
      },
      {
            "id": "B",
            "text": "-20.44%"
      },
      {
            "id": "C",
            "text": "+26.00%"
      },
      {
            "id": "D",
            "text": "-70.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +48 and b = -22.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 48% increase, value = 100 * (1 + 48/100) = 148. After 22% decrease, value = 148 * (1 - 22/100) = 115.44. Net change = 15.44%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-155-1",
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
    id: 'prep-nume-156',
    catalogNumber: 156,
    slug: "numerical-problem-156",
    title: "Mensuration 2D & Areas Problem 56",
    problemStatement: "A quantity increases by 55% and then decreases by 25%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 55% increase, value = 100 * (1 + 55/100) = 155. After 25% decrease, value = 155 * (1 - 25/100) = 116.25. Net change = 16.25%."
      }
],
    difficulty: 'HARD',
    topics: ["Geometry", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+16.25%"
      },
      {
            "id": "B",
            "text": "-21.25%"
      },
      {
            "id": "C",
            "text": "+30.00%"
      },
      {
            "id": "D",
            "text": "-80.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +55 and b = -25.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 55% increase, value = 100 * (1 + 55/100) = 155. After 25% decrease, value = 155 * (1 - 25/100) = 116.25. Net change = 16.25%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-156-1",
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
    id: 'prep-nume-157',
    catalogNumber: 157,
    slug: "numerical-problem-157",
    title: "Mensuration 3D & Volumes Problem 57",
    problemStatement: "A quantity increases by 62% and then decreases by 28%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 62% increase, value = 100 * (1 + 62/100) = 162. After 28% decrease, value = 162 * (1 - 28/100) = 116.64. Net change = 16.64%."
      }
],
    difficulty: 'HARD',
    topics: ["Geometry", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+16.64%"
      },
      {
            "id": "B",
            "text": "-21.64%"
      },
      {
            "id": "C",
            "text": "+34.00%"
      },
      {
            "id": "D",
            "text": "-90.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +62 and b = -28.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 62% increase, value = 100 * (1 + 62/100) = 162. After 28% decrease, value = 162 * (1 - 28/100) = 116.64. Net change = 16.64%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-157-1",
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
    id: 'prep-nume-158',
    catalogNumber: 158,
    slug: "numerical-problem-158",
    title: "Clocks & Angles Problem 58",
    problemStatement: "A quantity increases by 69% and then decreases by 31%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 69% increase, value = 100 * (1 + 69/100) = 169. After 31% decrease, value = 169 * (1 - 31/100) = 116.61. Net change = 16.61%."
      }
],
    difficulty: 'HARD',
    topics: ["Clocks and Calendars", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+16.61%"
      },
      {
            "id": "B",
            "text": "-21.61%"
      },
      {
            "id": "C",
            "text": "+38.00%"
      },
      {
            "id": "D",
            "text": "-100.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +69 and b = -31.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 69% increase, value = 100 * (1 + 69/100) = 169. After 31% decrease, value = 169 * (1 - 31/100) = 116.61. Net change = 16.61%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-158-1",
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
    id: 'prep-nume-159',
    catalogNumber: 159,
    slug: "numerical-problem-159",
    title: "Calendars & Odd Days Problem 59",
    problemStatement: "A quantity increases by 26% and then decreases by 34%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 26% increase, value = 100 * (1 + 26/100) = 126. After 34% decrease, value = 126 * (1 - 34/100) = 83.16. Net change = -16.84%."
      }
],
    difficulty: 'HARD',
    topics: ["Clocks and Calendars", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+-16.84%"
      },
      {
            "id": "B",
            "text": "-21.84%"
      },
      {
            "id": "C",
            "text": "+-8.00%"
      },
      {
            "id": "D",
            "text": "-60.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +26 and b = -34.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 26% increase, value = 100 * (1 + 26/100) = 126. After 34% decrease, value = 126 * (1 - 34/100) = 83.16. Net change = -16.84%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-159-1",
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
    id: 'prep-nume-160',
    catalogNumber: 160,
    slug: "numerical-problem-160",
    title: "Data Interpretation - Tables & Bar Charts Problem 60",
    problemStatement: "A quantity increases by 33% and then decreases by 37%. What is the net percentage change in the quantity?",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "Let initial value be 100. After 33% increase, value = 100 * (1 + 33/100) = 133. After 37% decrease, value = 133 * (1 - 37/100) = 83.79. Net change = -16.21%."
      }
],
    difficulty: 'HARD',
    topics: ["Data Interpretation", "Arithmetic", "Aptitude"],
    sections: ['NUMERICAL'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Numerical" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "+-16.21%"
      },
      {
            "id": "B",
            "text": "-21.21%"
      },
      {
            "id": "C",
            "text": "+-4.00%"
      },
      {
            "id": "D",
            "text": "-70.00%"
      }
],
    correctOptionId: 'A',
    hints: [
      "Use the net effective percentage formula: Net % = a + b + (a * b) / 100.", "Here, a = +33 and b = -37.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "Let initial value be 100. After 33% increase, value = 100 * (1 + 33/100) = 133. After 37% decrease, value = 133 * (1 - 37/100) = 83.79. Net change = -16.21%.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-num-160-1",
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
