import { Question } from '../../types';

export const PROGRAMMING_QUESTIONS: Question[] = [
  {
    id: 'prep-prog-251',
    catalogNumber: 251,
    slug: "programming-logic-251",
    title: "C Pointer Arithmetic & Dereferencing - Trace 1",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(5));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(5) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 9."
      }
],
    difficulty: 'EASY',
    topics: ["Pointers", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "9"
      },
      {
            "id": "B",
            "text": "10"
      },
      {
            "id": "C",
            "text": "15"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(5) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 9.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-251-1",
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
    id: 'prep-prog-252',
    catalogNumber: 252,
    slug: "programming-logic-252",
    title: "Recursion Stack & Return Unwinding - Trace 2",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(6));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(6) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 13."
      }
],
    difficulty: 'EASY',
    topics: ["Recursion", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "13"
      },
      {
            "id": "B",
            "text": "12"
      },
      {
            "id": "C",
            "text": "21"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(6) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 13.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-252-1",
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
    id: 'prep-prog-253',
    catalogNumber: 253,
    slug: "programming-logic-253",
    title: "Bitwise Operators & Shift Logic - Trace 3",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(7));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(7) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 16."
      }
],
    difficulty: 'EASY',
    topics: ["Bit Manipulation", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "16"
      },
      {
            "id": "B",
            "text": "14"
      },
      {
            "id": "C",
            "text": "28"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(7) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 16.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-253-1",
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
    id: 'prep-prog-254',
    catalogNumber: 254,
    slug: "programming-logic-254",
    title: "Operator Precedence & Evaluation Order - Trace 4",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(8));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(8) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 21."
      }
],
    difficulty: 'EASY',
    topics: ["Operators", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "21"
      },
      {
            "id": "B",
            "text": "16"
      },
      {
            "id": "C",
            "text": "36"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(8) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 21.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-254-1",
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
    id: 'prep-prog-255',
    catalogNumber: 255,
    slug: "programming-logic-255",
    title: "Static Variables & Scope in C - Trace 5",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(9));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(9) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 25."
      }
],
    difficulty: 'EASY',
    topics: ["Scope", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "25"
      },
      {
            "id": "B",
            "text": "18"
      },
      {
            "id": "C",
            "text": "45"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(9) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 25.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-255-1",
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
    id: 'prep-prog-256',
    catalogNumber: 256,
    slug: "programming-logic-256",
    title: "Java Polymorphism & Dynamic Dispatch - Trace 6",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(10));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(10) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 31."
      }
],
    difficulty: 'EASY',
    topics: ["OOP", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "31"
      },
      {
            "id": "B",
            "text": "20"
      },
      {
            "id": "C",
            "text": "55"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(10) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 31.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-256-1",
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
    id: 'prep-prog-257',
    catalogNumber: 257,
    slug: "programming-logic-257",
    title: "Java String Immutability & String Pool - Trace 7",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(11));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(11) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 36."
      }
],
    difficulty: 'EASY',
    topics: ["Strings", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "36"
      },
      {
            "id": "B",
            "text": "22"
      },
      {
            "id": "C",
            "text": "66"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(11) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 36.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-257-1",
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
    id: 'prep-prog-258',
    catalogNumber: 258,
    slug: "programming-logic-258",
    title: "Python Scoping & LEGB Rule - Trace 8",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(5));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(5) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 9."
      }
],
    difficulty: 'EASY',
    topics: ["Python", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "9"
      },
      {
            "id": "B",
            "text": "10"
      },
      {
            "id": "C",
            "text": "15"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(5) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 9.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-258-1",
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
    id: 'prep-prog-259',
    catalogNumber: 259,
    slug: "programming-logic-259",
    title: "Python List Comprehension & Mutability - Trace 9",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(6));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(6) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 13."
      }
],
    difficulty: 'EASY',
    topics: ["Python", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "13"
      },
      {
            "id": "B",
            "text": "12"
      },
      {
            "id": "C",
            "text": "21"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(6) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 13.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-259-1",
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
    id: 'prep-prog-260',
    catalogNumber: 260,
    slug: "programming-logic-260",
    title: "Time Complexity & Asymptotic Recurrence - Trace 10",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(7));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(7) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 16."
      }
],
    difficulty: 'EASY',
    topics: ["Complexity", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "16"
      },
      {
            "id": "B",
            "text": "14"
      },
      {
            "id": "C",
            "text": "28"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(7) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 16.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-260-1",
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
    id: 'prep-prog-261',
    catalogNumber: 261,
    slug: "programming-logic-261",
    title: "C Pointer Arithmetic & Dereferencing - Trace 11",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(8));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(8) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 21."
      }
],
    difficulty: 'EASY',
    topics: ["Pointers", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "21"
      },
      {
            "id": "B",
            "text": "16"
      },
      {
            "id": "C",
            "text": "36"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(8) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 21.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-261-1",
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
    id: 'prep-prog-262',
    catalogNumber: 262,
    slug: "programming-logic-262",
    title: "Recursion Stack & Return Unwinding - Trace 12",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(9));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(9) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 25."
      }
],
    difficulty: 'EASY',
    topics: ["Recursion", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "25"
      },
      {
            "id": "B",
            "text": "18"
      },
      {
            "id": "C",
            "text": "45"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(9) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 25.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-262-1",
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
    id: 'prep-prog-263',
    catalogNumber: 263,
    slug: "programming-logic-263",
    title: "Bitwise Operators & Shift Logic - Trace 13",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(10));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(10) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 31."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Bit Manipulation", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "31"
      },
      {
            "id": "B",
            "text": "20"
      },
      {
            "id": "C",
            "text": "55"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(10) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 31.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-263-1",
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
    id: 'prep-prog-264',
    catalogNumber: 264,
    slug: "programming-logic-264",
    title: "Operator Precedence & Evaluation Order - Trace 14",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(11));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(11) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 36."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Operators", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "36"
      },
      {
            "id": "B",
            "text": "22"
      },
      {
            "id": "C",
            "text": "66"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(11) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 36.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-264-1",
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
    id: 'prep-prog-265',
    catalogNumber: 265,
    slug: "programming-logic-265",
    title: "Static Variables & Scope in C - Trace 15",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(5));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(5) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 9."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Scope", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "9"
      },
      {
            "id": "B",
            "text": "10"
      },
      {
            "id": "C",
            "text": "15"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(5) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 9.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-265-1",
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
    id: 'prep-prog-266',
    catalogNumber: 266,
    slug: "programming-logic-266",
    title: "Java Polymorphism & Dynamic Dispatch - Trace 16",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(6));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(6) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 13."
      }
],
    difficulty: 'MEDIUM',
    topics: ["OOP", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "13"
      },
      {
            "id": "B",
            "text": "12"
      },
      {
            "id": "C",
            "text": "21"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(6) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 13.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-266-1",
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
    id: 'prep-prog-267',
    catalogNumber: 267,
    slug: "programming-logic-267",
    title: "Java String Immutability & String Pool - Trace 17",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(7));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(7) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 16."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Strings", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "16"
      },
      {
            "id": "B",
            "text": "14"
      },
      {
            "id": "C",
            "text": "28"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(7) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 16.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-267-1",
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
    id: 'prep-prog-268',
    catalogNumber: 268,
    slug: "programming-logic-268",
    title: "Python Scoping & LEGB Rule - Trace 18",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(8));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(8) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 21."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Python", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "21"
      },
      {
            "id": "B",
            "text": "16"
      },
      {
            "id": "C",
            "text": "36"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(8) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 21.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-268-1",
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
    id: 'prep-prog-269',
    catalogNumber: 269,
    slug: "programming-logic-269",
    title: "Python List Comprehension & Mutability - Trace 19",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(9));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(9) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 25."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Python", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "25"
      },
      {
            "id": "B",
            "text": "18"
      },
      {
            "id": "C",
            "text": "45"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(9) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 25.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-269-1",
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
    id: 'prep-prog-270',
    catalogNumber: 270,
    slug: "programming-logic-270",
    title: "Time Complexity & Asymptotic Recurrence - Trace 20",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(10));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(10) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 31."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Complexity", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "31"
      },
      {
            "id": "B",
            "text": "20"
      },
      {
            "id": "C",
            "text": "55"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(10) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 31.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-270-1",
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
    id: 'prep-prog-271',
    catalogNumber: 271,
    slug: "programming-logic-271",
    title: "C Pointer Arithmetic & Dereferencing - Trace 21",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(11));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(11) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 36."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Pointers", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "36"
      },
      {
            "id": "B",
            "text": "22"
      },
      {
            "id": "C",
            "text": "66"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(11) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 36.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-271-1",
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
    id: 'prep-prog-272',
    catalogNumber: 272,
    slug: "programming-logic-272",
    title: "Recursion Stack & Return Unwinding - Trace 22",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(5));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(5) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 9."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Recursion", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "9"
      },
      {
            "id": "B",
            "text": "10"
      },
      {
            "id": "C",
            "text": "15"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(5) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 9.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-272-1",
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
    id: 'prep-prog-273',
    catalogNumber: 273,
    slug: "programming-logic-273",
    title: "Bitwise Operators & Shift Logic - Trace 23",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(6));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(6) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 13."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Bit Manipulation", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "13"
      },
      {
            "id": "B",
            "text": "12"
      },
      {
            "id": "C",
            "text": "21"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(6) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 13.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-273-1",
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
    id: 'prep-prog-274',
    catalogNumber: 274,
    slug: "programming-logic-274",
    title: "Operator Precedence & Evaluation Order - Trace 24",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(7));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(7) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 16."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Operators", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "16"
      },
      {
            "id": "B",
            "text": "14"
      },
      {
            "id": "C",
            "text": "28"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(7) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 16.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-274-1",
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
    id: 'prep-prog-275',
    catalogNumber: 275,
    slug: "programming-logic-275",
    title: "Static Variables & Scope in C - Trace 25",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(8));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(8) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 21."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Scope", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "21"
      },
      {
            "id": "B",
            "text": "16"
      },
      {
            "id": "C",
            "text": "36"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(8) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 21.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-275-1",
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
    id: 'prep-prog-276',
    catalogNumber: 276,
    slug: "programming-logic-276",
    title: "Java Polymorphism & Dynamic Dispatch - Trace 26",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(9));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(9) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 25."
      }
],
    difficulty: 'MEDIUM',
    topics: ["OOP", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "25"
      },
      {
            "id": "B",
            "text": "18"
      },
      {
            "id": "C",
            "text": "45"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(9) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 25.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-276-1",
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
    id: 'prep-prog-277',
    catalogNumber: 277,
    slug: "programming-logic-277",
    title: "Java String Immutability & String Pool - Trace 27",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(10));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(10) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 31."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Strings", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "31"
      },
      {
            "id": "B",
            "text": "20"
      },
      {
            "id": "C",
            "text": "55"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(10) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 31.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-277-1",
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
    id: 'prep-prog-278',
    catalogNumber: 278,
    slug: "programming-logic-278",
    title: "Python Scoping & LEGB Rule - Trace 28",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(11));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(11) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 36."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Python", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "36"
      },
      {
            "id": "B",
            "text": "22"
      },
      {
            "id": "C",
            "text": "66"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(11) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 36.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-278-1",
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
    id: 'prep-prog-279',
    catalogNumber: 279,
    slug: "programming-logic-279",
    title: "Python List Comprehension & Mutability - Trace 29",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(5));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(5) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 9."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Python", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "9"
      },
      {
            "id": "B",
            "text": "10"
      },
      {
            "id": "C",
            "text": "15"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(5) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 9.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-279-1",
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
    id: 'prep-prog-280',
    catalogNumber: 280,
    slug: "programming-logic-280",
    title: "Time Complexity & Asymptotic Recurrence - Trace 30",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(6));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(6) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 13."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Complexity", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Digital Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "13"
      },
      {
            "id": "B",
            "text": "12"
      },
      {
            "id": "C",
            "text": "21"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(6) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 13.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-280-1",
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
    id: 'prep-prog-281',
    catalogNumber: 281,
    slug: "programming-logic-281",
    title: "C Pointer Arithmetic & Dereferencing - Trace 31",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(7));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(7) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 16."
      }
],
    difficulty: 'HARD',
    topics: ["Pointers", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "16"
      },
      {
            "id": "B",
            "text": "14"
      },
      {
            "id": "C",
            "text": "28"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(7) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 16.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-281-1",
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
    id: 'prep-prog-282',
    catalogNumber: 282,
    slug: "programming-logic-282",
    title: "Recursion Stack & Return Unwinding - Trace 32",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(8));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(8) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 21."
      }
],
    difficulty: 'HARD',
    topics: ["Recursion", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "21"
      },
      {
            "id": "B",
            "text": "16"
      },
      {
            "id": "C",
            "text": "36"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(8) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 21.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-282-1",
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
    id: 'prep-prog-283',
    catalogNumber: 283,
    slug: "programming-logic-283",
    title: "Bitwise Operators & Shift Logic - Trace 33",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(9));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(9) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 25."
      }
],
    difficulty: 'HARD',
    topics: ["Bit Manipulation", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "25"
      },
      {
            "id": "B",
            "text": "18"
      },
      {
            "id": "C",
            "text": "45"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(9) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 25.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-283-1",
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
    id: 'prep-prog-284',
    catalogNumber: 284,
    slug: "programming-logic-284",
    title: "Operator Precedence & Evaluation Order - Trace 34",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(10));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(10) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 31."
      }
],
    difficulty: 'HARD',
    topics: ["Operators", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "31"
      },
      {
            "id": "B",
            "text": "20"
      },
      {
            "id": "C",
            "text": "55"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(10) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 31.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-284-1",
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
    id: 'prep-prog-285',
    catalogNumber: 285,
    slug: "programming-logic-285",
    title: "Static Variables & Scope in C - Trace 35",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(11));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(11) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 36."
      }
],
    difficulty: 'HARD',
    topics: ["Scope", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "36"
      },
      {
            "id": "B",
            "text": "22"
      },
      {
            "id": "C",
            "text": "66"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(11) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 36.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-285-1",
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
    id: 'prep-prog-286',
    catalogNumber: 286,
    slug: "programming-logic-286",
    title: "Java Polymorphism & Dynamic Dispatch - Trace 36",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(5));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(5) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 9."
      }
],
    difficulty: 'HARD',
    topics: ["OOP", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "9"
      },
      {
            "id": "B",
            "text": "10"
      },
      {
            "id": "C",
            "text": "15"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(5) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 9.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-286-1",
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
    id: 'prep-prog-287',
    catalogNumber: 287,
    slug: "programming-logic-287",
    title: "Java String Immutability & String Pool - Trace 37",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(6));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(6) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 13."
      }
],
    difficulty: 'HARD',
    topics: ["Strings", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "13"
      },
      {
            "id": "B",
            "text": "12"
      },
      {
            "id": "C",
            "text": "21"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(6) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 13.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-287-1",
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
    id: 'prep-prog-288',
    catalogNumber: 288,
    slug: "programming-logic-288",
    title: "Python Scoping & LEGB Rule - Trace 38",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(7));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(7) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 16."
      }
],
    difficulty: 'HARD',
    topics: ["Python", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "16"
      },
      {
            "id": "B",
            "text": "14"
      },
      {
            "id": "C",
            "text": "28"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(7) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 16.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-288-1",
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
    id: 'prep-prog-289',
    catalogNumber: 289,
    slug: "programming-logic-289",
    title: "Python List Comprehension & Mutability - Trace 39",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(8));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(8) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 21."
      }
],
    difficulty: 'HARD',
    topics: ["Python", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "21"
      },
      {
            "id": "B",
            "text": "16"
      },
      {
            "id": "C",
            "text": "36"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(8) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 21.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-289-1",
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
    id: 'prep-prog-290',
    catalogNumber: 290,
    slug: "programming-logic-290",
    title: "Time Complexity & Asymptotic Recurrence - Trace 40",
    problemStatement: "What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(9));\n    return 0;\n}\n```",
    inputFormat: 'None (Multiple Choice Question)',
    outputFormat: 'Select one option: A, B, C, or D.',
    constraints: [
      "Choose the single correct option."
],
    examples: [
      {
            "input": "Multiple Choice Problem",
            "output": "A",
            "explanation": "fun(9) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 25."
      }
],
    difficulty: 'HARD',
    topics: ["Complexity", "Programming Logic", "Output Tracing"],
    sections: ['PROGRAMMING'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 2,
    problemFormat: 'MULTIPLE_CHOICE',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS NQT ' + "Programming" + ' Assessment',
      hiringCycle: 'TCS Prime Track',
      notes: 'Frequently tested aptitude topic in TCS placement screening.'
    },
    options: [
      {
            "id": "A",
            "text": "25"
      },
      {
            "id": "B",
            "text": "18"
      },
      {
            "id": "C",
            "text": "45"
      },
      {
            "id": "D",
            "text": "Infinite recursion / Stack Overflow"
      }
],
    correctOptionId: 'A',
    hints: [
      "Trace the recursive calls: fun(n) decreases by 2 each step.", "Base condition: returns 1 when n <= 1.",
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    explanation: "fun(9) evaluates recursively down to the base case n <= 1. Sum of numbers stepping down by 2: 25.",
    starterCodeByLanguage: {
      c: '',
      cpp: '',
      java: '',
      python: ''
    },
    publicTestCases: [
      {
            "id": "tc-pro-290-1",
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
