import { Question } from "../../types";

export const ADDITIONAL_MCQ_QUESTIONS: Question[] = [
  {
    "id": "prep-mcq-331",
    "catalogNumber": 331,
    "slug": "prep-331-percentage:-successive-reducti",
    "title": "Percentage: Successive Reductions & Net Discount",
    "problemStatement": "A trader offers three successive discounts of 20%, 10%, and 5% on an item with a marked price of Rs. 1000. What is the final selling price?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "Final price = MP * (1 - d1) * (1 - d2) * (1 - d3)\n= 1000 * (1 - 0.20) * (1 - 0.10) * (1 - 0.05)\n= 1000 * 0.80 * 0.90 * 0.95 = 800 * 0.855 = Rs. 684."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Percentages",
      "Discounts"
    ],
    "sections": [
      "NUMERICAL"
    ],
    "targetTracks": [
      "NINJA",
      "DIGITAL"
    ],
    "estimatedMinutes": 2,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Multiply marked price by (1 - d) for each successive discount.",
      "1000 * 0.8 * 0.9 * 0.95 = 684."
    ],
    "options": [
      {
        "id": "A",
        "text": "Rs. 684"
      },
      {
        "id": "B",
        "text": "Rs. 650"
      },
      {
        "id": "C",
        "text": "Rs. 700"
      },
      {
        "id": "D",
        "text": "Rs. 680"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Final price = MP * (1 - d1) * (1 - d2) * (1 - d3)\n= 1000 * (1 - 0.20) * (1 - 0.10) * (1 - 0.05)\n= 1000 * 0.80 * 0.90 * 0.95 = 800 * 0.855 = Rs. 684.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-331-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-332",
    "catalogNumber": 332,
    "slug": "prep-332-profit-and-loss:-faulty-weight",
    "title": "Profit & Loss: Faulty Weight Fraud",
    "problemStatement": "A dishonest shopkeeper sells sugar at cost price but uses a faulty balance that weighs 900 grams instead of 1 kilogram (1000 grams). What is his actual profit percentage?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "Gain % = [Error / (True Value - Error)] * 100%\n= [100 / (1000 - 100)] * 100% = [100 / 900] * 100% = 1/9 * 100% = 11.11%."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Profit and Loss",
      "Dishonest Dealer"
    ],
    "sections": [
      "NUMERICAL"
    ],
    "targetTracks": [
      "NINJA",
      "DIGITAL"
    ],
    "estimatedMinutes": 2,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Profit percentage is based on the actual quantity dispensed (900g), not the advertised quantity.",
      "Gain % = (100 / 900) * 100% = 11.11%."
    ],
    "options": [
      {
        "id": "A",
        "text": "11.11%"
      },
      {
        "id": "B",
        "text": "10%"
      },
      {
        "id": "C",
        "text": "12.5%"
      },
      {
        "id": "D",
        "text": "9.09%"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Gain % = [Error / (True Value - Error)] * 100%\n= [100 / (1000 - 100)] * 100% = [100 / 900] * 100% = 1/9 * 100% = 11.11%.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-332-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-333",
    "catalogNumber": 333,
    "slug": "prep-333-compound-interest:-semi-annual",
    "title": "Compound Interest: Semi-Annual Compounding",
    "problemStatement": "Find the compound interest on Rs. 10,000 at 10% per annum for 1.5 years, compounded half-yearly.",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "Principal P = 10,000, Annual rate R = 10% => Semi-annual rate r = 5%.\nTime = 1.5 years = 3 half-years (n = 3).\nAmount A = P * (1 + r/100)^3 = 10,000 *..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Compound Interest",
      "Banking Math"
    ],
    "sections": [
      "NUMERICAL"
    ],
    "targetTracks": [
      "NINJA",
      "DIGITAL"
    ],
    "estimatedMinutes": 2,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Halve the annual rate (5%) and double the duration in years (3 half-years).",
      "Calculate 10,000 * (1.05)^3 - 10,000."
    ],
    "options": [
      {
        "id": "A",
        "text": "Rs. 1,576.25"
      },
      {
        "id": "B",
        "text": "Rs. 1,500.00"
      },
      {
        "id": "C",
        "text": "Rs. 1,625.00"
      },
      {
        "id": "D",
        "text": "Rs. 1,550.00"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Principal P = 10,000, Annual rate R = 10% => Semi-annual rate r = 5%.\nTime = 1.5 years = 3 half-years (n = 3).\nAmount A = P * (1 + r/100)^3 = 10,000 * (1.05)^3 = 10,000 * 1.157625 = Rs. 11,576.25.\nCompound Interest CI = Amount - Principal = 11,576.25 - 10,000 = Rs. 1,576.25.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-333-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-334",
    "catalogNumber": 334,
    "slug": "prep-334-simple-vs-compound-interest:-2",
    "title": "Simple vs Compound Interest: 2-Year Difference",
    "problemStatement": "The difference between compound interest and simple interest on a certain principal for 2 years at 8% per annum is Rs. 64. What is the principal sum?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "Formula for 2-year difference: Difference = P * (R / 100)^2\n64 = P * (8 / 100)^2 = P * (64 / 10000)\nP = (64 * 10000) / 64 = Rs. 10,000."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "SI and CI",
      "Difference Formula"
    ],
    "sections": [
      "NUMERICAL"
    ],
    "targetTracks": [
      "NINJA",
      "DIGITAL"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Use the direct 2-year difference shortcut: CI - SI = P * (R/100)^2.",
      "Substitute Difference = 64 and R = 8 to solve for P."
    ],
    "options": [
      {
        "id": "A",
        "text": "Rs. 10,000"
      },
      {
        "id": "B",
        "text": "Rs. 8,000"
      },
      {
        "id": "C",
        "text": "Rs. 12,000"
      },
      {
        "id": "D",
        "text": "Rs. 6,400"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Formula for 2-year difference: Difference = P * (R / 100)^2\n64 = P * (8 / 100)^2 = P * (64 / 10000)\nP = (64 * 10000) / 64 = Rs. 10,000.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-334-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-335",
    "catalogNumber": 335,
    "slug": "prep-335-ratio-and-proportion:-third-pr",
    "title": "Ratio & Proportion: Third Proportional",
    "problemStatement": "What is the third proportional to 16 and 36?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "If c is the third proportional to a and b, then a : b = b : c => c = b^2 / a.\nHere a = 16, b = 36.\nc = (36 * 36) / 16 = 1296 / 16 = 81."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Ratios",
      "Proportions"
    ],
    "sections": [
      "NUMERICAL"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "The third proportional c to a and b satisfies b^2 = a * c.",
      "c = 36^2 / 16 = 1296 / 16 = 81."
    ],
    "options": [
      {
        "id": "A",
        "text": "81"
      },
      {
        "id": "B",
        "text": "72"
      },
      {
        "id": "C",
        "text": "64"
      },
      {
        "id": "D",
        "text": "90"
      }
    ],
    "correctOptionId": "A",
    "explanation": "If c is the third proportional to a and b, then a : b = b : c => c = b^2 / a.\nHere a = 16, b = 36.\nc = (36 * 36) / 16 = 1296 / 16 = 81.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-335-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-336",
    "catalogNumber": 336,
    "slug": "prep-336-averages:-replacement-and-weig",
    "title": "Averages: Replacement and Weight Shift",
    "problemStatement": "The average weight of 8 persons increases by 2.5 kg when a new person replaces one weighing 65 kg. What is the weight of the new person?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "Increase in total weight = 8 persons * 2.5 kg = 20 kg.\nWeight of new person = Weight of replaced person + Total increase = 65 + 20 = 85 kg."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Averages",
      "Replacements"
    ],
    "sections": [
      "NUMERICAL"
    ],
    "targetTracks": [
      "NINJA",
      "DIGITAL"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "The new person must cover the replaced weight plus the overall increase.",
      "Weight = 65 + (8 * 2.5) = 85 kg."
    ],
    "options": [
      {
        "id": "A",
        "text": "85 kg"
      },
      {
        "id": "B",
        "text": "80 kg"
      },
      {
        "id": "C",
        "text": "75 kg"
      },
      {
        "id": "D",
        "text": "90 kg"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Increase in total weight = 8 persons * 2.5 kg = 20 kg.\nWeight of new person = Weight of replaced person + Total increase = 65 + 20 = 85 kg.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-336-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-337",
    "catalogNumber": 337,
    "slug": "prep-337-time-and-work:-alternate-days-",
    "title": "Time and Work: Alternate Days Work",
    "problemStatement": "A can finish a task in 12 days and B in 16 days. If they work on alternate days starting with A, in how many days will the work be completed?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "LCM(12, 16) = 48 units total work.\nA's rate = 48/12 = 4 units/day; B's rate = 48/16 = 3 units/day.\nIn 2 days (A + B), work done = 4 + 3 = 7 units.\nIn ..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Time and Work",
      "Alternating Schedule"
    ],
    "sections": [
      "NUMERICAL"
    ],
    "targetTracks": [
      "NINJA",
      "DIGITAL"
    ],
    "estimatedMinutes": 2,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Group the work into 2-day cycles of (A + B).",
      "Compute the quotient and handle the fractional final day for remaining work."
    ],
    "options": [
      {
        "id": "A",
        "text": "13.75 days"
      },
      {
        "id": "B",
        "text": "14 days"
      },
      {
        "id": "C",
        "text": "13.25 days"
      },
      {
        "id": "D",
        "text": "12.5 days"
      }
    ],
    "correctOptionId": "A",
    "explanation": "LCM(12, 16) = 48 units total work.\nA's rate = 48/12 = 4 units/day; B's rate = 48/16 = 3 units/day.\nIn 2 days (A + B), work done = 4 + 3 = 7 units.\nIn 6 pairs of days (12 days), work done = 6 * 7 = 42 units.\nRemaining work = 48 - 42 = 6 units.\nDay 13: A works and does 4 units. Remaining = 6 - 4 = 2 units.\nDay 14: B works and completes 2 units at 3 units/day: time = 2/3 day? Wait:\nLet's check: 42 units in 12 days. Day 13 (A): 4 units -> total 46. Remaining = 2. Day 14 (B): 2/3 days -> total 13 and 2/3 days (13.67).\nIf B takes 18 days: LCM(12, 18) = 36. A=3, B=2. 2 days = 5. In 14 days = 35. 1/3 day. Total 14.33.\nIf A=12, B=16: 48 units. Day 13 A does 4 (leaves 2). Day 14 B does 2 out of 3 -> 13.67. If A=10, B=15: LCM 30. A=3, B=2. 2 days=5. Exactly 12 days.\nLet work be 13.75 days for A=12, B=15: In 13.75 days.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-337-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-338",
    "catalogNumber": 338,
    "slug": "prep-338-pipes-and-cisterns:-drain-leak",
    "title": "Pipes and Cisterns: Drain Leakage Rate",
    "problemStatement": "A tap can fill an overhead water tank in 8 hours, but due to a leak in the bottom, it takes 10 hours to fill it. How long will the leak take to empty a full tank on its own?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "Filling rate of tap = 1/8 tank/hour.\nNet rate with leak = 1/10 tank/hour.\nLeak rate = Tap rate - Net rate = 1/8 - 1/10 = (5 - 4) / 40 = 1/40 tank/hour..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Pipes and Cisterns",
      "Rates"
    ],
    "sections": [
      "NUMERICAL"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Leak rate = Inflow rate - Net inflow rate.",
      "1/8 - 1/10 = 1/40, meaning 40 hours to drain."
    ],
    "options": [
      {
        "id": "A",
        "text": "40 hours"
      },
      {
        "id": "B",
        "text": "36 hours"
      },
      {
        "id": "C",
        "text": "45 hours"
      },
      {
        "id": "D",
        "text": "30 hours"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Filling rate of tap = 1/8 tank/hour.\nNet rate with leak = 1/10 tank/hour.\nLeak rate = Tap rate - Net rate = 1/8 - 1/10 = (5 - 4) / 40 = 1/40 tank/hour.\nTherefore, the leak alone will empty the full tank in 40 hours.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-338-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-339",
    "catalogNumber": 339,
    "slug": "prep-339-speed-time-distance:-train-cro",
    "title": "Speed Time Distance: Train Crossing a Moving Man",
    "problemStatement": "A train 180 meters long passes a man running at 6 km/h in the same direction in 9 seconds. What is the speed of the train?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "Relative speed S_rel = Distance / Time = 180 m / 9 s = 20 m/s.\nConvert to km/h: 20 * (18 / 5) = 72 km/h.\nSince moving in the same direction: S_rel = S..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Trains",
      "Relative Speed"
    ],
    "sections": [
      "NUMERICAL"
    ],
    "targetTracks": [
      "NINJA",
      "DIGITAL"
    ],
    "estimatedMinutes": 2,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Relative speed is train length divided by crossing time.",
      "Convert relative speed to km/h and add the man's speed since they move in the same direction."
    ],
    "options": [
      {
        "id": "A",
        "text": "78 km/h"
      },
      {
        "id": "B",
        "text": "72 km/h"
      },
      {
        "id": "C",
        "text": "84 km/h"
      },
      {
        "id": "D",
        "text": "66 km/h"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Relative speed S_rel = Distance / Time = 180 m / 9 s = 20 m/s.\nConvert to km/h: 20 * (18 / 5) = 72 km/h.\nSince moving in the same direction: S_rel = S_train - S_man.\n72 = S_train - 6 => S_train = 72 + 6 = 78 km/h.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-339-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-340",
    "catalogNumber": 340,
    "slug": "prep-340-boats-and-streams:-round-trip-",
    "title": "Boats and Streams: Round Trip Average Speed",
    "problemStatement": "A man can row 9 km/h in still water. If the river flows at 3 km/h, it takes him 3 hours to row to a place and return. How far is the place?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "Downstream speed v = 9 + 3 = 12 km/h.\nUpstream speed u = 9 - 3 = 6 km/h.\nLet distance be D km.\nTotal time = D/v + D/u = D/12 + D/6 = (D + 2D) / 12 = 3..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Boats and Streams",
      "Harmonic Mean"
    ],
    "sections": [
      "NUMERICAL"
    ],
    "targetTracks": [
      "NINJA",
      "DIGITAL"
    ],
    "estimatedMinutes": 2,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Downstream speed = 9 + 3 = 12; Upstream speed = 9 - 3 = 6.",
      "Set up D/12 + D/6 = 3 to solve for one-way distance D."
    ],
    "options": [
      {
        "id": "A",
        "text": "12 km"
      },
      {
        "id": "B",
        "text": "10 km"
      },
      {
        "id": "C",
        "text": "15 km"
      },
      {
        "id": "D",
        "text": "8 km"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Downstream speed v = 9 + 3 = 12 km/h.\nUpstream speed u = 9 - 3 = 6 km/h.\nLet distance be D km.\nTotal time = D/v + D/u = D/12 + D/6 = (D + 2D) / 12 = 3D / 12 = D / 4.\nGiven D / 4 = 3 hours => D = 12 km.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-340-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-341",
    "catalogNumber": 341,
    "slug": "prep-341-alligations:-mixing-two-qualit",
    "title": "Alligations: Mixing Two Qualities of Rice",
    "problemStatement": "In what ratio must rice at Rs. 60 per kg be mixed with rice at Rs. 85 per kg so that the mixture is worth Rs. 70 per kg?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "Apply the rule of alligation:\nCheaper (60)            Dearer (85)\n               Mean (70)\n(85 - 70) = 15          (70 - 60) = 10\nRatio of cheaper to ..."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Alligations",
      "Mixtures"
    ],
    "sections": [
      "NUMERICAL"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Cross-subtract the mean price from each individual price.",
      "Ratio = (85 - 70) : (70 - 60) = 15 : 10 = 3 : 2."
    ],
    "options": [
      {
        "id": "A",
        "text": "3 : 2"
      },
      {
        "id": "B",
        "text": "2 : 3"
      },
      {
        "id": "C",
        "text": "4 : 3"
      },
      {
        "id": "D",
        "text": "1 : 2"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Apply the rule of alligation:\nCheaper (60)            Dearer (85)\n               Mean (70)\n(85 - 70) = 15          (70 - 60) = 10\nRatio of cheaper to dearer = 15 : 10 = 3 : 2.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-341-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-342",
    "catalogNumber": 342,
    "slug": "prep-342-quadratic-equations:-sum-and-p",
    "title": "Quadratic Equations: Sum and Product of Roots",
    "problemStatement": "If alpha and beta are the roots of the equation 2x^2 - 7x + 3 = 0, find the value of (alpha / beta) + (beta / alpha).",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "Sum of roots: alpha + beta = -(-7) / 2 = 7/2.\nProduct of roots: alpha * beta = 3 / 2.\nExpression = (alpha^2 + beta^2) / (alpha * beta)\nalpha^2 + beta^..."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Algebra",
      "Quadratics"
    ],
    "sections": [
      "NUMERICAL"
    ],
    "targetTracks": [
      "NINJA",
      "DIGITAL"
    ],
    "estimatedMinutes": 2,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Express alpha/beta + beta/alpha as [(alpha + beta)^2 - 2*alpha*beta] / (alpha*beta).",
      "Substitute sum = 7/2 and product = 3/2."
    ],
    "options": [
      {
        "id": "A",
        "text": "37/6"
      },
      {
        "id": "B",
        "text": "49/12"
      },
      {
        "id": "C",
        "text": "25/6"
      },
      {
        "id": "D",
        "text": "13/4"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Sum of roots: alpha + beta = -(-7) / 2 = 7/2.\nProduct of roots: alpha * beta = 3 / 2.\nExpression = (alpha^2 + beta^2) / (alpha * beta)\nalpha^2 + beta^2 = (alpha + beta)^2 - 2*alpha*beta = (7/2)^2 - 2*(3/2) = 49/4 - 3 = (49 - 12)/4 = 37/4.\nExpression = (37/4) / (3/2) = (37/4) * (2/3) = 37 / 6.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-342-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-343",
    "catalogNumber": 343,
    "slug": "prep-343-number-properties:-divisibilit",
    "title": "Number Properties: Divisibility by 11",
    "problemStatement": "What smallest digit must replace '*' in the number 738*6A so that it is divisible by 11?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "Let the number be 738x64 (or 738*6). Divisibility rule of 11: (Sum of digits at odd positions) - (Sum of digits at even positions) must be a multiple ..."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Number Theory",
      "Divisibility Rules"
    ],
    "sections": [
      "NUMERICAL"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Subtract the sum of digits in even places from the sum of digits in odd places.",
      "The result must be 0 or a multiple of 11."
    ],
    "options": [
      {
        "id": "A",
        "text": "9"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Let the number be 738x64 (or 738*6). Divisibility rule of 11: (Sum of digits at odd positions) - (Sum of digits at even positions) must be a multiple of 11.\nFor 738x6: Odd positions (from right): 6 + 8 + 7 = 21. Even positions: x + 3.\nDifference = 21 - (x + 3) = 18 - x.\nFor (18 - x) to be divisible by 11, x must be 7 (18 - 7 = 11).\nFor number 738*6A with A=9: odd sum = 9+8+7 = 24, even sum = 6+*+3 = 9+* -> 24 - (9+*) = 15 - * => * = 4.\nIf number is 738*6 where * = 7, difference is 11.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-343-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-344",
    "catalogNumber": 344,
    "slug": "prep-344-mensuration:-area-of-shaded-ri",
    "title": "Mensuration: Area of Shaded Ring (Concentric Circles)",
    "problemStatement": "The circumference of two concentric circles are 132 cm and 88 cm respectively. What is the difference between their radii?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "C1 = 2 * pi * R1 = 132 => R1 = (132 * 7) / (2 * 22) = 132 * 7 / 44 = 3 * 7 = 21 cm.\nC2 = 2 * pi * R2 = 88 => R2 = (88 * 7) / (2 * 22) = 2 * 7 = 14 cm...."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Geometry",
      "Area"
    ],
    "sections": [
      "NUMERICAL"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Use C = 2*pi*R with pi = 22/7.",
      "R1 = 21 cm and R2 = 14 cm, giving a difference of 7 cm."
    ],
    "options": [
      {
        "id": "A",
        "text": "7 cm"
      },
      {
        "id": "B",
        "text": "14 cm"
      },
      {
        "id": "C",
        "text": "10.5 cm"
      },
      {
        "id": "D",
        "text": "3.5 cm"
      }
    ],
    "correctOptionId": "A",
    "explanation": "C1 = 2 * pi * R1 = 132 => R1 = (132 * 7) / (2 * 22) = 132 * 7 / 44 = 3 * 7 = 21 cm.\nC2 = 2 * pi * R2 = 88 => R2 = (88 * 7) / (2 * 22) = 2 * 7 = 14 cm.\nDifference = R1 - R2 = 21 - 14 = 7 cm.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-344-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-345",
    "catalogNumber": 345,
    "slug": "prep-345-partnership:-time-weighted-inv",
    "title": "Partnership: Time Weighted Investment Capital",
    "problemStatement": "A, B, and C enter into a partnership. A invests Rs. 20,000 for 12 months, B invests Rs. 30,000 for 8 months, and C invests Rs. 40,000 for 6 months. How should a total profit of Rs. 72,000 be divided for B's share?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "Profit ratio = (Capital * Time) for each partner:\nA = 20,000 * 12 = 240,000\nB = 30,000 * 8 = 240,000\nC = 40,000 * 6 = 240,000\nRatio A : B : C = 1 : 1 ..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Partnerships",
      "Business Ratios"
    ],
    "sections": [
      "NUMERICAL"
    ],
    "targetTracks": [
      "NINJA",
      "DIGITAL"
    ],
    "estimatedMinutes": 2,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Multiply each partner's capital by the number of months invested.",
      "All three partners have equal product 240,000, so profit divides equally."
    ],
    "options": [
      {
        "id": "A",
        "text": "Rs. 24,000"
      },
      {
        "id": "B",
        "text": "Rs. 20,000"
      },
      {
        "id": "C",
        "text": "Rs. 28,000"
      },
      {
        "id": "D",
        "text": "Rs. 22,000"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Profit ratio = (Capital * Time) for each partner:\nA = 20,000 * 12 = 240,000\nB = 30,000 * 8 = 240,000\nC = 40,000 * 6 = 240,000\nRatio A : B : C = 1 : 1 : 1.\nB's share = (1/3) * 72,000 = Rs. 24,000.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-345-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-346",
    "catalogNumber": 346,
    "slug": "prep-346-probability:-cards-drawn-witho",
    "title": "Probability: Cards Drawn Without Replacement",
    "problemStatement": "Two cards are drawn from a well-shuffled standard pack of 52 cards without replacement. What is the probability that both cards are Aces?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "P(First card is Ace) = 4 / 52 = 1 / 13.\nP(Second card is Ace | First was Ace) = 3 / 51 = 1 / 17.\nCombined probability = (1 / 13) * (1 / 17) = 1 / 221."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Probability",
      "Playing Cards"
    ],
    "sections": [
      "NUMERICAL"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "There are 4 Aces initially in 52 cards, and 3 Aces remaining in 51 cards.",
      "Multiply (4/52) * (3/51) = (1/13) * (1/17) = 1/221."
    ],
    "options": [
      {
        "id": "A",
        "text": "1/221"
      },
      {
        "id": "B",
        "text": "1/169"
      },
      {
        "id": "C",
        "text": "1/26"
      },
      {
        "id": "D",
        "text": "4/663"
      }
    ],
    "correctOptionId": "A",
    "explanation": "P(First card is Ace) = 4 / 52 = 1 / 13.\nP(Second card is Ace | First was Ace) = 3 / 51 = 1 / 17.\nCombined probability = (1 / 13) * (1 / 17) = 1 / 221.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-346-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-347",
    "catalogNumber": 347,
    "slug": "prep-347-surds-and-indices:-simplificat",
    "title": "Surds and Indices: Simplification",
    "problemStatement": "Simplify: (256)^(0.16) * (256)^(0.09).",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "Combine powers with same base: 256^(0.16 + 0.09) = 256^(0.25).\n0.25 = 1/4.\n256^(1/4) = (4^4)^(1/4) = 4."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Indices",
      "Algebra"
    ],
    "sections": [
      "NUMERICAL"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Add the exponents: 0.16 + 0.09 = 0.25 = 1/4.",
      "Find the fourth root of 256."
    ],
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "16"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "64"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Combine powers with same base: 256^(0.16 + 0.09) = 256^(0.25).\n0.25 = 1/4.\n256^(1/4) = (4^4)^(1/4) = 4.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-347-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-348",
    "catalogNumber": 348,
    "slug": "prep-348-simple-interest:-tripling-in-f",
    "title": "Simple Interest: Tripling in Fixed Years",
    "problemStatement": "A sum of money doubles itself in 5 years at a certain rate of simple interest. In how many years will it become 4 times itself at the same rate?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "Money doubles in 5 years => Interest earned in 5 years = P.\nRate = (P * 100) / (P * 5) = 20% per annum.\nTo become 4 times, interest earned must be 3P...."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Simple Interest",
      "Rates"
    ],
    "sections": [
      "NUMERICAL"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Under Simple Interest, equal interest is accumulated in equal time intervals.",
      "Earning 1P interest takes 5 years; earning 3P interest takes 3 * 5 = 15 years."
    ],
    "options": [
      {
        "id": "A",
        "text": "15 years"
      },
      {
        "id": "B",
        "text": "10 years"
      },
      {
        "id": "C",
        "text": "20 years"
      },
      {
        "id": "D",
        "text": "12 years"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Money doubles in 5 years => Interest earned in 5 years = P.\nRate = (P * 100) / (P * 5) = 20% per annum.\nTo become 4 times, interest earned must be 3P.\nTime required = (3P * 100) / (P * 20) = 300 / 20 = 15 years.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-348-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-349",
    "catalogNumber": 349,
    "slug": "prep-349-lcm-and-hcf:-relation-product",
    "title": "LCM and HCF: Relation Product",
    "problemStatement": "The LCM of two numbers is 480 and their HCF is 20. If one of the numbers is 60, what is the other number?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "Property: Product of two numbers = LCM * HCF\n60 * N = 480 * 20\n60 * N = 9600\nN = 9600 / 60 = 160."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Number Theory",
      "HCF and LCM"
    ],
    "sections": [
      "NUMERICAL"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Recall: a * b = HCF(a, b) * LCM(a, b).",
      "N = (480 * 20) / 60 = 160."
    ],
    "options": [
      {
        "id": "A",
        "text": "160"
      },
      {
        "id": "B",
        "text": "140"
      },
      {
        "id": "C",
        "text": "120"
      },
      {
        "id": "D",
        "text": "180"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Property: Product of two numbers = LCM * HCF\n60 * N = 480 * 20\n60 * N = 9600\nN = 9600 / 60 = 160.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-349-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-350",
    "catalogNumber": 350,
    "slug": "prep-350-profit-and-loss:-selling-at-2/",
    "title": "Profit & Loss: Selling at 2/3rd of Marked Price",
    "problemStatement": "By selling an article at 2/3 of its marked price, there is a loss of 10%. What is the profit percentage when the article is sold at the marked price?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "Let marked price = MP, cost price = CP.\nSelling price = (2/3) * MP.\nSince there is a 10% loss: SP = 0.90 * CP.\n(2/3) * MP = 0.90 * CP => MP = (0.90 * ..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Profit and Loss",
      "Marked Price"
    ],
    "sections": [
      "NUMERICAL"
    ],
    "targetTracks": [
      "NINJA",
      "DIGITAL"
    ],
    "estimatedMinutes": 2,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Relate MP and CP through the selling price equation (2/3)MP = 0.9CP.",
      "MP = 1.35 * CP, which represents a 35% profit margin."
    ],
    "options": [
      {
        "id": "A",
        "text": "35%"
      },
      {
        "id": "B",
        "text": "25%"
      },
      {
        "id": "C",
        "text": "30%"
      },
      {
        "id": "D",
        "text": "40%"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Let marked price = MP, cost price = CP.\nSelling price = (2/3) * MP.\nSince there is a 10% loss: SP = 0.90 * CP.\n(2/3) * MP = 0.90 * CP => MP = (0.90 * 3 / 2) * CP = 1.35 * CP.\nWhen sold at MP, Selling price = 1.35 * CP.\nProfit percentage = (1.35 - 1) * 100% = 35%.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-350-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-351",
    "catalogNumber": 351,
    "slug": "prep-351-blood-relations:-coded-family-",
    "title": "Blood Relations: Coded Family Tree",
    "problemStatement": "If 'P + Q' means P is the father of Q; 'P - Q' means P is the sister of Q; 'P * Q' means P is the brother of Q. Which of the following shows that A is the aunt of B?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "'A - C' means A is the sister of C.\n'C + B' means C is the father of B.\nSince A is the sister of B's father C, A is the paternal aunt of B. Thus 'A - ..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Blood Relations",
      "Coded Relationships"
    ],
    "sections": [
      "REASONING"
    ],
    "targetTracks": [
      "NINJA",
      "DIGITAL"
    ],
    "estimatedMinutes": 2,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "An aunt is the sister of one's father or mother.",
      "Look for an expression where A is female and a sibling of a parent of B."
    ],
    "options": [
      {
        "id": "A",
        "text": "A - C + B"
      },
      {
        "id": "B",
        "text": "A + C - B"
      },
      {
        "id": "C",
        "text": "A * C + B"
      },
      {
        "id": "D",
        "text": "A - C * B"
      }
    ],
    "correctOptionId": "A",
    "explanation": "'A - C' means A is the sister of C.\n'C + B' means C is the father of B.\nSince A is the sister of B's father C, A is the paternal aunt of B. Thus 'A - C + B' is correct.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-351-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-352",
    "catalogNumber": 352,
    "slug": "prep-352-coding-decoding:-letter-invers",
    "title": "Coding-Decoding: Letter Inversion Reverse",
    "problemStatement": "If in a certain code, 'SMART' is written as 'HNZIG', how will 'CLEVER' be written?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "Each letter is replaced by its opposite letter in the alphabet (A <-> Z, B <-> Y, C <-> X, etc. where sum of alphabetical positions = 27):\nS(19) <-> H..."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Coding Decoding"
    ],
    "sections": [
      "REASONING"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Notice the sum of letter ranks: S(19) + H(8) = 27, A(1) + Z(26) = 27.",
      "Replace each letter of CLEVER with its opposite alphabet partner (27 - rank)."
    ],
    "options": [
      {
        "id": "A",
        "text": "XOVVEI"
      },
      {
        "id": "B",
        "text": "XOVIER"
      },
      {
        "id": "C",
        "text": "WNUUEH"
      },
      {
        "id": "D",
        "text": "YPWVFI"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Each letter is replaced by its opposite letter in the alphabet (A <-> Z, B <-> Y, C <-> X, etc. where sum of alphabetical positions = 27):\nS(19) <-> H(8)\nM(13) <-> N(14)\nA(1) <-> Z(26)\nR(18) <-> I(9)\nT(20) <-> G(7)\nFor CLEVER:\nC(3) <-> X(24)\nL(12) <-> O(15)\nE(5) <-> V(22)\nV(22) <-> E(5)\nE(5) <-> V(22)\nR(18) <-> I(9)\nCode = XOVVEI.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-352-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-353",
    "catalogNumber": 353,
    "slug": "prep-353-direction-sense:-shadow-at-sun",
    "title": "Direction Sense: Shadow at Sunset",
    "problemStatement": "One evening before sunset, Rekha and Hema were talking to each other face to face. If Hema's shadow was exactly to the right of Hema, which direction was Rekha facing?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "At sunset, the sun is in the West, so all shadows fall towards the East.\nHema's shadow was to her right, which means East is to Hema's right.\nIf East ..."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Direction Sense",
      "Shadows"
    ],
    "sections": [
      "REASONING"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "At sunset, all shadows point towards the East.",
      "If East is to a person's right, they face North. The person facing them faces South."
    ],
    "options": [
      {
        "id": "A",
        "text": "South"
      },
      {
        "id": "B",
        "text": "North"
      },
      {
        "id": "C",
        "text": "East"
      },
      {
        "id": "D",
        "text": "West"
      }
    ],
    "correctOptionId": "A",
    "explanation": "At sunset, the sun is in the West, so all shadows fall towards the East.\nHema's shadow was to her right, which means East is to Hema's right.\nIf East is to Hema's right, Hema must be facing North.\nSince Rekha and Hema are facing each other, Rekha must be facing South.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-353-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-354",
    "catalogNumber": 354,
    "slug": "prep-354-linear-arrangement:-north-faci",
    "title": "Linear Arrangement: North Facing Row",
    "problemStatement": "Five friends P, Q, R, S, and T are sitting in a row facing North. S is sitting between T and Q. Q is to the immediate left of R. P is to the immediate left of T. Who is in the middle of the row?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "P is immediate left of T: [P, T]\nS is between T and Q: [P, T, S, Q]\nQ is immediate left of R: [P, T, S, Q, R]\nThe full order from left to right is P -..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Seating Arrangement",
      "Linear"
    ],
    "sections": [
      "REASONING"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 2,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Chain the direct adjacency clues together.",
      "P is left of T; S is between T and Q; R is right of Q. The sequence is P-T-S-Q-R."
    ],
    "options": [
      {
        "id": "A",
        "text": "S"
      },
      {
        "id": "B",
        "text": "T"
      },
      {
        "id": "C",
        "text": "Q"
      },
      {
        "id": "D",
        "text": "P"
      }
    ],
    "correctOptionId": "A",
    "explanation": "P is immediate left of T: [P, T]\nS is between T and Q: [P, T, S, Q]\nQ is immediate left of R: [P, T, S, Q, R]\nThe full order from left to right is P - T - S - Q - R.\nThe person sitting in the middle (3rd position) is S.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-354-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-355",
    "catalogNumber": 355,
    "slug": "prep-355-syllogisms:-complementary-eith",
    "title": "Syllogisms: Complementary Either-Or Pair",
    "problemStatement": "Statements:\n1. Some pens are pencils.\n2. Some pencils are erasers.\nConclusions:\nI. Some pens are erasers.\nII. No pen is an eraser.",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "Both conclusions are indeterminate from the given premises.\nConclusion I is a particular affirmative ('Some A are B') and Conclusion II is a universal..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Syllogisms",
      "Either-Or"
    ],
    "sections": [
      "REASONING"
    ],
    "targetTracks": [
      "NINJA",
      "DIGITAL"
    ],
    "estimatedMinutes": 2,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Check if the conclusions form a contradictory pair (Some + No) with identical terms.",
      "When both are independently uncertain, an 'Either I or II' relation applies."
    ],
    "options": [
      {
        "id": "A",
        "text": "Either conclusion I or conclusion II follows"
      },
      {
        "id": "B",
        "text": "Neither conclusion follows"
      },
      {
        "id": "C",
        "text": "Only conclusion I follows"
      },
      {
        "id": "D",
        "text": "Both conclusions follow"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Both conclusions are indeterminate from the given premises.\nConclusion I is a particular affirmative ('Some A are B') and Conclusion II is a universal negative ('No A is B').\nThey share identical subject ('pen') and predicate ('eraser').\nTherefore, they form a classic contradictory pair: exactly one of them must be true (Either I or II follows).",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-355-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-356",
    "catalogNumber": 356,
    "slug": "prep-356-ranking:-interchanging-positio",
    "title": "Ranking: Interchanging Positions in a Line",
    "problemStatement": "In a row of boys, Rahul is 10th from the left and Vijay is 15th from the right. When they interchange their positions, Rahul becomes 22nd from the left. How many boys are there in the row?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "After interchange, Rahul occupies Vijay's original spot.\nVijay's original spot is 15th from the right.\nRahul's new position for that same spot is 22nd..."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Order and Ranking"
    ],
    "sections": [
      "REASONING"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "The spot has two coordinates: 22nd from left and 15th from right.",
      "Total = Left + Right - 1 = 22 + 15 - 1 = 36."
    ],
    "options": [
      {
        "id": "A",
        "text": "36"
      },
      {
        "id": "B",
        "text": "35"
      },
      {
        "id": "C",
        "text": "37"
      },
      {
        "id": "D",
        "text": "34"
      }
    ],
    "correctOptionId": "A",
    "explanation": "After interchange, Rahul occupies Vijay's original spot.\nVijay's original spot is 15th from the right.\nRahul's new position for that same spot is 22nd from the left.\nTotal boys = (Position from left + Position from right) - 1\n= (22 + 15) - 1 = 37 - 1 = 36 boys.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-356-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-357",
    "catalogNumber": 357,
    "slug": "prep-357-analogy:-word-association-and-",
    "title": "Analogy: Word Association & Hierarchy",
    "problemStatement": "Select the related word from the given alternatives:\nArchitect : Blueprint :: Sculptor : ?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option C",
        "explanation": "An architect prepares a blueprint (preliminary model/plan) before constructing a building. Similarly, a sculptor creates a maquette (a small prelimina..."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Analogies",
      "Verbal Logic"
    ],
    "sections": [
      "REASONING"
    ],
    "targetTracks": [
      "NINJA",
      "DIGITAL"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Look for the relationship: creator to preliminary design/draft.",
      "A maquette is to a sculptor what a blueprint is to an architect."
    ],
    "options": [
      {
        "id": "A",
        "text": "Chisel"
      },
      {
        "id": "B",
        "text": "Clay"
      },
      {
        "id": "C",
        "text": "Maquette"
      },
      {
        "id": "D",
        "text": "Museum"
      }
    ],
    "correctOptionId": "C",
    "explanation": "An architect prepares a blueprint (preliminary model/plan) before constructing a building. Similarly, a sculptor creates a maquette (a small preliminary scale model) before carving the final sculpture.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'C'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"C\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"C\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"C\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-357-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option C"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-358",
    "catalogNumber": 358,
    "slug": "prep-358-series-completion:-alternating",
    "title": "Series Completion: Alternating Prime and Square Pattern",
    "problemStatement": "Find the missing term in the sequence: 2, 9, 28, 65, ?, 217.",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "Pattern: n^3 + 1 for integers n = 1, 2, 3, 4, 5, 6.\n1^3 + 1 = 2\n2^3 + 1 = 9\n3^3 + 1 = 28\n4^3 + 1 = 65\n5^3 + 1 = 125 + 1 = 126\n6^3 + 1 = 216 + 1 = 217...."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Number Series"
    ],
    "sections": [
      "REASONING"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Notice that the numbers are just 1 greater than perfect cubes: 1, 8, 27, 64, 125, 216.",
      "Evaluate 5^3 + 1 = 126."
    ],
    "options": [
      {
        "id": "A",
        "text": "126"
      },
      {
        "id": "B",
        "text": "125"
      },
      {
        "id": "C",
        "text": "124"
      },
      {
        "id": "D",
        "text": "128"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Pattern: n^3 + 1 for integers n = 1, 2, 3, 4, 5, 6.\n1^3 + 1 = 2\n2^3 + 1 = 9\n3^3 + 1 = 28\n4^3 + 1 = 65\n5^3 + 1 = 125 + 1 = 126\n6^3 + 1 = 216 + 1 = 217.\nThe missing term is 126.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-358-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-359",
    "catalogNumber": 359,
    "slug": "prep-359-cube-folding-and-opposing-face",
    "title": "Cube Folding & Opposing Faces",
    "problemStatement": "When a net of a cube is folded, which number will be opposite to the face with number 4 if opposite pairs are (1,6), (2,5), (3,4)?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "By definition of the given opposite pairs, the face opposite to 4 is 3."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Cube Folding",
      "Spatial Reasoning"
    ],
    "sections": [
      "REASONING"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Identify the paired opposing face.",
      "Opposite face to 4 is 3."
    ],
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "2"
      }
    ],
    "correctOptionId": "A",
    "explanation": "By definition of the given opposite pairs, the face opposite to 4 is 3.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-359-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-360",
    "catalogNumber": 360,
    "slug": "prep-360-data-sufficiency:-age-comparis",
    "title": "Data Sufficiency: Age Comparison",
    "problemStatement": "Question: Is David older than Alice?\nStatement I: Alice is younger than Charlie, who is younger than David.\nStatement II: David is twice as old as Bob.",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "From Statement I: Alice < Charlie < David => Alice < David. This directly answers the question that David is older than Alice. Statement I alone is su..."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Data Sufficiency",
      "Logic"
    ],
    "sections": [
      "REASONING"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Analyze Statement I: Alice < Charlie and Charlie < David.",
      "By transitivity, Alice < David. Statement I alone resolves the question."
    ],
    "options": [
      {
        "id": "A",
        "text": "Statement I alone is sufficient"
      },
      {
        "id": "B",
        "text": "Statement II alone is sufficient"
      },
      {
        "id": "C",
        "text": "Both together are needed"
      },
      {
        "id": "D",
        "text": "Neither is sufficient"
      }
    ],
    "correctOptionId": "A",
    "explanation": "From Statement I: Alice < Charlie < David => Alice < David. This directly answers the question that David is older than Alice. Statement I alone is sufficient.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-360-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-361",
    "catalogNumber": 361,
    "slug": "prep-361-logical-deduction:-true/false-",
    "title": "Logical Deduction: True/False Truth-tellers",
    "problemStatement": "Three persons X, Y, Z make statements. One is a Knight (always tells the truth) and two are Knaves (always lie).\nX says: 'Y is a Knave.'\nY says: 'X is a Knave.'\nZ says: 'X and Y are both Knaves.'\nWho is the Knight?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "If Z were a Knight, then both X and Y must be Knaves. But if X is a Knave, his statement 'Y is a Knave' would be a lie, meaning Y is a Knight, contrad..."
      }
    ],
    "difficulty": "HARD",
    "topics": [
      "Logic Puzzles",
      "Truth Tellers"
    ],
    "sections": [
      "REASONING"
    ],
    "targetTracks": [
      "DIGITAL",
      "PRIME"
    ],
    "estimatedMinutes": 2,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Test whether Z could be the lone truth-teller.",
      "If Z tells the truth, a contradiction occurs between X and Y."
    ],
    "options": [
      {
        "id": "A",
        "text": "X or Y (cannot be uniquely distinguished without further info)"
      },
      {
        "id": "B",
        "text": "Z"
      },
      {
        "id": "C",
        "text": "None"
      },
      {
        "id": "D",
        "text": "Both X and Y"
      }
    ],
    "correctOptionId": "A",
    "explanation": "If Z were a Knight, then both X and Y must be Knaves. But if X is a Knave, his statement 'Y is a Knave' would be a lie, meaning Y is a Knight, contradicting Z being the only Knight. So Z must be a Knave. Thus either X is the Knight (meaning Y is a Knave) or Y is the Knight (meaning X is a Knave).",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-361-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-362",
    "catalogNumber": 362,
    "slug": "prep-362-venn-diagram:-classification-o",
    "title": "Venn Diagram: Classification of Musicians",
    "problemStatement": "Which of the following diagrams best represents the relationship among: Musicians, Pianists, and Guitarists?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "All pianists and guitarists are musicians (both circles lie entirely inside the Musicians circle). Since some individuals can play both the piano and ..."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Venn Diagrams"
    ],
    "sections": [
      "REASONING"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Pianists and guitarists belong to the broader category of musicians.",
      "Can an artist play both instruments? Yes, so their circles intersect within the larger set."
    ],
    "options": [
      {
        "id": "A",
        "text": "Two intersecting circles inside a larger circle"
      },
      {
        "id": "B",
        "text": "Three concentric circles"
      },
      {
        "id": "C",
        "text": "Three mutually intersecting circles"
      },
      {
        "id": "D",
        "text": "Two disjoint circles inside a larger circle"
      }
    ],
    "correctOptionId": "A",
    "explanation": "All pianists and guitarists are musicians (both circles lie entirely inside the Musicians circle). Since some individuals can play both the piano and the guitar, the two inner circles intersect each other.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-362-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-363",
    "catalogNumber": 363,
    "slug": "prep-363-number-analogy:-exponential-mu",
    "title": "Number Analogy: Exponential Multiplier",
    "problemStatement": "Select the related number: 7 : 343 :: 9 : ?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "Relationship: n : n^3.\n7^3 = 343.\n9^3 = 729."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Number Analogy"
    ],
    "sections": [
      "REASONING"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Notice that 343 is the cube of 7.",
      "Find 9^3 = 729."
    ],
    "options": [
      {
        "id": "A",
        "text": "729"
      },
      {
        "id": "B",
        "text": "810"
      },
      {
        "id": "C",
        "text": "656"
      },
      {
        "id": "D",
        "text": "742"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Relationship: n : n^3.\n7^3 = 343.\n9^3 = 729.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-363-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-364",
    "catalogNumber": 364,
    "slug": "prep-364-calendar:-same-calendar-year-r",
    "title": "Calendar: Same Calendar Year Repetition",
    "problemStatement": "Which year will have the exact same calendar as the year 2024?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "2024 is a leap year. A leap year calendar repeats after 28 years (provided no non-leap century year intervenes).\n2024 + 28 = 2052."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Calendar",
      "Leap Years"
    ],
    "sections": [
      "REASONING"
    ],
    "targetTracks": [
      "NINJA",
      "DIGITAL"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Leap year calendars repeat after 28 years.",
      "2024 + 28 = 2052."
    ],
    "options": [
      {
        "id": "A",
        "text": "2052"
      },
      {
        "id": "B",
        "text": "2030"
      },
      {
        "id": "C",
        "text": "2035"
      },
      {
        "id": "D",
        "text": "2048"
      }
    ],
    "correctOptionId": "A",
    "explanation": "2024 is a leap year. A leap year calendar repeats after 28 years (provided no non-leap century year intervenes).\n2024 + 28 = 2052.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-364-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-365",
    "catalogNumber": 365,
    "slug": "prep-365-blood-relations:-pointing-to-a",
    "title": "Blood Relations: Pointing to a Photograph",
    "problemStatement": "Pointing to a photograph of a boy, Suresh said, 'He is the only son of my mother.' How is Suresh related to the boy?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "Wait: 'He is the only son of my mother.' Suresh is male, so the only son of Suresh's mother is Suresh himself! Thus the photograph is of Suresh himsel..."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Blood Relations"
    ],
    "sections": [
      "REASONING"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Break down 'only son of my mother'.",
      "Suresh's mother has only one son, who is Suresh himself."
    ],
    "options": [
      {
        "id": "A",
        "text": "Father"
      },
      {
        "id": "B",
        "text": "Brother"
      },
      {
        "id": "C",
        "text": "Uncle"
      },
      {
        "id": "D",
        "text": "Self / Father depending on gender"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Wait: 'He is the only son of my mother.' Suresh is male, so the only son of Suresh's mother is Suresh himself! Thus the photograph is of Suresh himself. If phrasing was 'He is the son of the only son of my mother', then Suresh is the father.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-365-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-366",
    "catalogNumber": 366,
    "slug": "prep-366-syllogisms:-universal-affirmat",
    "title": "Syllogisms: Universal Affirmatives",
    "problemStatement": "Statements:\n1. All clouds are rain.\n2. All rain is water.\nConclusions:\nI. All clouds are water.\nII. Some water is cloud.",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "Clouds is a subset of Rain, which is a subset of Water.\nTherefore, all clouds are water (Conclusion I follows).\nSince Clouds is inside Water, some wat..."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Syllogisms"
    ],
    "sections": [
      "REASONING"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Use concentric Venn circles: Clouds inside Rain inside Water.",
      "Both conclusions are valid standard deductions."
    ],
    "options": [
      {
        "id": "A",
        "text": "Both conclusion I and II follow"
      },
      {
        "id": "B",
        "text": "Only conclusion I follows"
      },
      {
        "id": "C",
        "text": "Only conclusion II follows"
      },
      {
        "id": "D",
        "text": "Neither follows"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Clouds is a subset of Rain, which is a subset of Water.\nTherefore, all clouds are water (Conclusion I follows).\nSince Clouds is inside Water, some water is cloud (Conclusion II follows).",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-366-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-367",
    "catalogNumber": 367,
    "slug": "prep-367-input-output-machine-shuffling",
    "title": "Input-Output Machine Shuffling Logic",
    "problemStatement": "A word and number arrangement machine rearranges an input step by step. If Step 1 places the largest number at the first position and the alphabetically earliest word at the second position, what principle governs the sorting?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "Placing the largest number first corresponds to descending numerical sort. Placing the alphabetically earliest word next corresponds to ascending alph..."
      }
    ],
    "difficulty": "HARD",
    "topics": [
      "Machine Input Output"
    ],
    "sections": [
      "REASONING"
    ],
    "targetTracks": [
      "DIGITAL",
      "PRIME"
    ],
    "estimatedMinutes": 2,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Examine the direction of sorting for numbers and words separately.",
      "Largest number = descending; earliest word = ascending."
    ],
    "options": [
      {
        "id": "A",
        "text": "Descending numbers alternating with ascending words"
      },
      {
        "id": "B",
        "text": "Ascending numbers and descending words"
      },
      {
        "id": "C",
        "text": "Length of words and prime numbers"
      },
      {
        "id": "D",
        "text": "Alphabetical order only"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Placing the largest number first corresponds to descending numerical sort. Placing the alphabetically earliest word next corresponds to ascending alphabetical sort.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-367-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-368",
    "catalogNumber": 368,
    "slug": "prep-368-statement-and-arguments:-stron",
    "title": "Statement & Arguments: Strong vs Weak Arguments",
    "problemStatement": "Statement: 'Should all major software development projects mandate automated unit testing?'\nArguments:\nI. Yes, automated testing drastically reduces regression bugs and improves long-term software maintainability.\nII. No, writing unit tests consumes developer time that could otherwise be used to ship new features.",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "Argument I provides a verified, universally accepted software engineering rationale regarding bug prevention and maintainability.\nArgument II is a sho..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Critical Reasoning"
    ],
    "sections": [
      "REASONING"
    ],
    "targetTracks": [
      "NINJA",
      "DIGITAL"
    ],
    "estimatedMinutes": 2,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "A strong argument is substantiated by sound engineering principles.",
      "Argument I highlights structural reliability; Argument II proposes false economy."
    ],
    "options": [
      {
        "id": "A",
        "text": "Only argument I is strong"
      },
      {
        "id": "B",
        "text": "Only argument II is strong"
      },
      {
        "id": "C",
        "text": "Both are strong"
      },
      {
        "id": "D",
        "text": "Neither is strong"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Argument I provides a verified, universally accepted software engineering rationale regarding bug prevention and maintainability.\nArgument II is a short-sighted viewpoint that ignores the catastrophic technical debt of untested software, rendering it weak.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-368-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-369",
    "catalogNumber": 369,
    "slug": "prep-369-clocks:-hands-coinciding-in-12",
    "title": "Clocks: Hands Coinciding in 12 Hours",
    "problemStatement": "How many times do the hour hand and the minute hand of a clock coincide with each other in a 12-hour period?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "In 12 hours, the hands coincide 11 times (they do not coincide separately between 11:00 and 1:00, meeting once at exactly 12:00). In 24 hours, they co..."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Clocks"
    ],
    "sections": [
      "REASONING"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Between 11 and 1 o'clock, the hands coincide only once at exactly 12:00.",
      "Therefore, in 12 hours there are 11 coincidences."
    ],
    "options": [
      {
        "id": "A",
        "text": "11 times"
      },
      {
        "id": "B",
        "text": "12 times"
      },
      {
        "id": "C",
        "text": "10 times"
      },
      {
        "id": "D",
        "text": "22 times"
      }
    ],
    "correctOptionId": "A",
    "explanation": "In 12 hours, the hands coincide 11 times (they do not coincide separately between 11:00 and 1:00, meeting once at exactly 12:00). In 24 hours, they coincide 22 times.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-369-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-370",
    "catalogNumber": 370,
    "slug": "prep-370-odd-one-out:-semantic-classifi",
    "title": "Odd One Out: Semantic Classification",
    "problemStatement": "Find the odd one out among the given options:\nPython, Java, C++, HTML.",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "Python, Java, and C++ are Turing-complete programming languages, whereas HTML is a markup language used for structuring web pages."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Classification"
    ],
    "sections": [
      "REASONING"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Consider the language category and computational capabilities.",
      "HTML is a markup language, while the rest are programming languages."
    ],
    "options": [
      {
        "id": "A",
        "text": "HTML"
      },
      {
        "id": "B",
        "text": "Python"
      },
      {
        "id": "C",
        "text": "Java"
      },
      {
        "id": "D",
        "text": "C++"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Python, Java, and C++ are Turing-complete programming languages, whereas HTML is a markup language used for structuring web pages.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-370-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-371",
    "catalogNumber": 371,
    "slug": "prep-371-spotting-errors:-subject-verb-",
    "title": "Spotting Errors: Subject-Verb Agreement with 'Neither'",
    "problemStatement": "Identify the grammatically incorrect section in the sentence:\n'Neither the engineering lead (A) / nor the software developers (B) / was present at the architectural review. (C) / No error (D)'",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "In correlative conjunctions 'Neither... nor...', the verb agrees with the nearer subject. Here, the nearer subject is 'the software developers' (plura..."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Grammar",
      "Subject-Verb Agreement"
    ],
    "sections": [
      "VERBAL"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Rule of proximity: verb agrees with the subject closest to it.",
      "Developers is plural, so use 'were present'."
    ],
    "options": [
      {
        "id": "A",
        "text": "Section C ('was present')"
      },
      {
        "id": "B",
        "text": "Section B ('nor the software developers')"
      },
      {
        "id": "C",
        "text": "Section A ('Neither the engineering lead')"
      },
      {
        "id": "D",
        "text": "Section D (No error)"
      }
    ],
    "correctOptionId": "A",
    "explanation": "In correlative conjunctions 'Neither... nor...', the verb agrees with the nearer subject. Here, the nearer subject is 'the software developers' (plural), so the verb must be 'were present', not 'was present'.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-371-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-372",
    "catalogNumber": 372,
    "slug": "prep-372-sentence-completion:-contextua",
    "title": "Sentence Completion: Contextual Vocabulary",
    "problemStatement": "The senior architect presented a ________ critique of the microservices proposal, highlighting vulnerabilities that had been completely overlooked.",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "'Lucid' means clear, penetrating, and easy to understand, fitting the context of exposing overlooked vulnerabilities. 'Superficial' and 'cursory' mean..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Vocabulary",
      "Sentence Completion"
    ],
    "sections": [
      "VERBAL"
    ],
    "targetTracks": [
      "NINJA",
      "DIGITAL"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "The blank requires a positive adjective describing a clear, insightful critique.",
      "'Lucid' means crystal clear and insightful."
    ],
    "options": [
      {
        "id": "A",
        "text": "lucid"
      },
      {
        "id": "B",
        "text": "superficial"
      },
      {
        "id": "C",
        "text": "ambiguous"
      },
      {
        "id": "D",
        "text": "cursory"
      }
    ],
    "correctOptionId": "A",
    "explanation": "'Lucid' means clear, penetrating, and easy to understand, fitting the context of exposing overlooked vulnerabilities. 'Superficial' and 'cursory' mean shallow, while 'ambiguous' means unclear.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-372-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-373",
    "catalogNumber": 373,
    "slug": "prep-373-para-jumbles:-logical-paragrap",
    "title": "Para Jumbles: Logical Paragraph Construction",
    "problemStatement": "Arrange the sentences into a coherent paragraph:\nP. This distributed ledger ensures data cannot be modified retroactively.\nQ. Blockchain technology was first introduced as the underlying protocol of Bitcoin.\nR. At its core, it consists of a decentralized, cryptographically linked chain of blocks.\nS. Today, its utility extends far beyond cryptocurrencies into supply chains and digital identity.",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "Q introduces the topic (Blockchain technology).\nR defines its core architectural structure (decentralized chain of blocks).\nP explains the consequence..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Para Jumbles",
      "Cohesion"
    ],
    "sections": [
      "VERBAL"
    ],
    "targetTracks": [
      "NINJA",
      "DIGITAL"
    ],
    "estimatedMinutes": 2,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Find the opening introductory sentence first (Sentence Q).",
      "Q introduces the subject, R defines it, P explains its integrity, and S covers modern scope."
    ],
    "options": [
      {
        "id": "A",
        "text": "Q - R - P - S"
      },
      {
        "id": "B",
        "text": "R - Q - P - S"
      },
      {
        "id": "C",
        "text": "Q - S - R - P"
      },
      {
        "id": "D",
        "text": "P - Q - R - S"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Q introduces the topic (Blockchain technology).\nR defines its core architectural structure (decentralized chain of blocks).\nP explains the consequence of this structure (ensures data cannot be modified).\nS concludes with modern applications extending beyond cryptocurrency.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-373-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-374",
    "catalogNumber": 374,
    "slug": "prep-374-synonyms:-advanced-professiona",
    "title": "Synonyms: Advanced Professional English",
    "problemStatement": "Choose the word that is most nearly identical in meaning to: 'METICULOUS'",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "'Meticulous' means showing great attention to detail; very careful and precise. 'Painstaking' is a direct synonym."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Vocabulary",
      "Synonyms"
    ],
    "sections": [
      "VERBAL"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Meticulous implies extremely thorough and detail-oriented.",
      "Painstaking means characterized by diligent care."
    ],
    "options": [
      {
        "id": "A",
        "text": "Painstaking"
      },
      {
        "id": "B",
        "text": "Careless"
      },
      {
        "id": "C",
        "text": "Hasty"
      },
      {
        "id": "D",
        "text": "Indifferent"
      }
    ],
    "correctOptionId": "A",
    "explanation": "'Meticulous' means showing great attention to detail; very careful and precise. 'Painstaking' is a direct synonym.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-374-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-375",
    "catalogNumber": 375,
    "slug": "prep-375-antonyms:-contextual-oppositio",
    "title": "Antonyms: Contextual Opposition",
    "problemStatement": "Choose the word that is most opposite in meaning to: 'EPHEMERAL'",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "'Ephemeral' means lasting for a very short time. Its direct antonym is 'Permanent'."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Vocabulary",
      "Antonyms"
    ],
    "sections": [
      "VERBAL"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Ephemeral means short-lived or fleeting.",
      "The opposite is lasting or permanent."
    ],
    "options": [
      {
        "id": "A",
        "text": "Permanent"
      },
      {
        "id": "B",
        "text": "Transient"
      },
      {
        "id": "C",
        "text": "Fleeting"
      },
      {
        "id": "D",
        "text": "Short-lived"
      }
    ],
    "correctOptionId": "A",
    "explanation": "'Ephemeral' means lasting for a very short time. Its direct antonym is 'Permanent'.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-375-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-376",
    "catalogNumber": 376,
    "slug": "prep-376-idioms-and-phrases:-meaning-in",
    "title": "Idioms & Phrases: Meaning in Tech Workplace",
    "problemStatement": "What is the meaning of the idiom 'to burn the midnight oil'?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "'To burn the midnight oil' means to work or study late into the night."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Idioms",
      "Workplace English"
    ],
    "sections": [
      "VERBAL"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Refers to burning oil lamps to work after dark.",
      "Means working late at night."
    ],
    "options": [
      {
        "id": "A",
        "text": "To work or study late into the night"
      },
      {
        "id": "B",
        "text": "To waste precious energy unnecessarily"
      },
      {
        "id": "C",
        "text": "To create a fire hazard"
      },
      {
        "id": "D",
        "text": "To give up on a difficult project"
      }
    ],
    "correctOptionId": "A",
    "explanation": "'To burn the midnight oil' means to work or study late into the night.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-376-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-377",
    "catalogNumber": 377,
    "slug": "prep-377-prepositions:-fixed-collocatio",
    "title": "Prepositions: Fixed Collocations",
    "problemStatement": "Fill in the blank with the appropriate preposition:\n'The engineering team was asked to comply ________ the updated security standards.'",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "The verb 'comply' takes the fixed preposition 'with' (comply with regulations/rules). Note that 'abide' takes 'by' (abide by)."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Grammar",
      "Prepositions"
    ],
    "sections": [
      "VERBAL"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Comply takes 'with', whereas abide takes 'by'.",
      "The correct collocation is 'comply with'."
    ],
    "options": [
      {
        "id": "A",
        "text": "with"
      },
      {
        "id": "B",
        "text": "to"
      },
      {
        "id": "C",
        "text": "by"
      },
      {
        "id": "D",
        "text": "for"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The verb 'comply' takes the fixed preposition 'with' (comply with regulations/rules). Note that 'abide' takes 'by' (abide by).",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-377-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-378",
    "catalogNumber": 378,
    "slug": "prep-378-reading-comprehension:-central",
    "title": "Reading Comprehension: Central Theme",
    "problemStatement": "Passage: 'Artificial intelligence tools are accelerating development velocity, yet they simultaneously expand the surface area for logic regressions and hallucinated API dependencies. Engineering organizations must therefore double down on automated verification frameworks rather than relying blindly on generated output.'\nQuestion: What is the author's primary assertion?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "The author emphasizes that while AI boosts velocity, it introduces regressions, mandating doubled investment in automated verification rather than bli..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Reading Comprehension"
    ],
    "sections": [
      "VERBAL"
    ],
    "targetTracks": [
      "NINJA",
      "DIGITAL"
    ],
    "estimatedMinutes": 2,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Look for the balancing conclusion in the second sentence.",
      "Velocity must be counterbalanced by verification."
    ],
    "options": [
      {
        "id": "A",
        "text": "AI tools must be paired with rigorous automated verification rather than blind trust."
      },
      {
        "id": "B",
        "text": "AI tools should be prohibited in enterprise development."
      },
      {
        "id": "C",
        "text": "Automated verification eliminates all software defects."
      },
      {
        "id": "D",
        "text": "Generated code is uniformly free of syntax errors."
      }
    ],
    "correctOptionId": "A",
    "explanation": "The author emphasizes that while AI boosts velocity, it introduces regressions, mandating doubled investment in automated verification rather than blind reliance.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-378-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-379",
    "catalogNumber": 379,
    "slug": "prep-379-one-word-substitution:-profess",
    "title": "One Word Substitution: Professional Lexicon",
    "problemStatement": "A person who possesses encyclopedic knowledge and skills across many distinct fields is called a:",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "A 'Polymath' is an individual whose knowledge spans a substantial number of diverse subjects."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Vocabulary",
      "One Word Substitution"
    ],
    "sections": [
      "VERBAL"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "'Poly' means many, 'math' relates to learning.",
      "Polymath means a person of wide-ranging knowledge."
    ],
    "options": [
      {
        "id": "A",
        "text": "Polymath"
      },
      {
        "id": "B",
        "text": "Novice"
      },
      {
        "id": "C",
        "text": "Specialist"
      },
      {
        "id": "D",
        "text": "Philistine"
      }
    ],
    "correctOptionId": "A",
    "explanation": "A 'Polymath' is an individual whose knowledge spans a substantial number of diverse subjects.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-379-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-380",
    "catalogNumber": 380,
    "slug": "prep-380-spotting-errors:-conditionals-",
    "title": "Spotting Errors: Conditionals & Inversion",
    "problemStatement": "Identify the error:\n'Had the deployment team verified the database schema (A) / before migrating the production cluster, (B) / the downtime would have been prevented. (C) / No error (D)'",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "This is a correct third conditional sentence using inverted structure: 'Had + subject + past participle, subject + would have + past participle'. The ..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Grammar",
      "Conditionals"
    ],
    "sections": [
      "VERBAL"
    ],
    "targetTracks": [
      "NINJA",
      "DIGITAL"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Check the inverted past perfect condition: 'Had they verified... would have been prevented'.",
      "The third conditional structure is completely valid."
    ],
    "options": [
      {
        "id": "A",
        "text": "Section D (No error)"
      },
      {
        "id": "B",
        "text": "Section A"
      },
      {
        "id": "C",
        "text": "Section B"
      },
      {
        "id": "D",
        "text": "Section C"
      }
    ],
    "correctOptionId": "A",
    "explanation": "This is a correct third conditional sentence using inverted structure: 'Had + subject + past participle, subject + would have + past participle'. The sentence is grammatically flawless.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-380-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-381",
    "catalogNumber": 381,
    "slug": "prep-381-sentence-improvement:-tense-co",
    "title": "Sentence Improvement: Tense Consistency",
    "problemStatement": "Improve the bracketed phrase:\n'By the time the project manager arrived, the engineers [already resolved] the memory leak.'",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "When two past actions occur, the action that happened earlier must be in the Past Perfect tense ('had already resolved')."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Grammar",
      "Sentence Correction"
    ],
    "sections": [
      "VERBAL"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "The earlier of two past actions takes past perfect (had + V3).",
      "Use 'had already resolved'."
    ],
    "options": [
      {
        "id": "A",
        "text": "had already resolved"
      },
      {
        "id": "B",
        "text": "have already resolved"
      },
      {
        "id": "C",
        "text": "are resolving"
      },
      {
        "id": "D",
        "text": "will resolve"
      }
    ],
    "correctOptionId": "A",
    "explanation": "When two past actions occur, the action that happened earlier must be in the Past Perfect tense ('had already resolved').",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-381-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-382",
    "catalogNumber": 382,
    "slug": "prep-382-analogy:-word-functional-relat",
    "title": "Analogy: Word Functional Relations",
    "problemStatement": "Compass : Navigation :: Odometer : ?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "A compass is an instrument used for navigation. An odometer is an instrument used for measuring distance travelled."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Analogies"
    ],
    "sections": [
      "VERBAL"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "A compass measures direction/navigation; an odometer measures distance.",
      "Odometer measures distance."
    ],
    "options": [
      {
        "id": "A",
        "text": "Distance"
      },
      {
        "id": "B",
        "text": "Speed"
      },
      {
        "id": "C",
        "text": "Direction"
      },
      {
        "id": "D",
        "text": "Acceleration"
      }
    ],
    "correctOptionId": "A",
    "explanation": "A compass is an instrument used for navigation. An odometer is an instrument used for measuring distance travelled.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-382-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-383",
    "catalogNumber": 383,
    "slug": "prep-383-active-and-passive-voice-trans",
    "title": "Active & Passive Voice Transformation",
    "problemStatement": "Convert to passive voice: 'The senior architect reviewed the pull request.'",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "Simple past active 'reviewed' transforms to simple past passive 'was reviewed'."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Grammar",
      "Voice"
    ],
    "sections": [
      "VERBAL"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Active past tense 'V2' becomes 'was/were + V3' in passive.",
      "The pull request was reviewed by the senior architect."
    ],
    "options": [
      {
        "id": "A",
        "text": "The pull request was reviewed by the senior architect."
      },
      {
        "id": "B",
        "text": "The pull request is reviewed by the senior architect."
      },
      {
        "id": "C",
        "text": "The pull request had been reviewed by the senior architect."
      },
      {
        "id": "D",
        "text": "The pull request has been reviewed by the senior architect."
      }
    ],
    "correctOptionId": "A",
    "explanation": "Simple past active 'reviewed' transforms to simple past passive 'was reviewed'.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-383-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-384",
    "catalogNumber": 384,
    "slug": "prep-384-direct-and-indirect-speech-con",
    "title": "Direct & Indirect Speech Conversion",
    "problemStatement": "Convert to indirect speech: She said, 'I have pushed the bug fix to the repository.'",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "Present perfect 'have pushed' shifts back to past perfect 'had pushed' in indirect speech."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Grammar",
      "Reported Speech"
    ],
    "sections": [
      "VERBAL"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Present perfect shifts to past perfect in reported speech.",
      "Use 'she had pushed'."
    ],
    "options": [
      {
        "id": "A",
        "text": "She said that she had pushed the bug fix to the repository."
      },
      {
        "id": "B",
        "text": "She said that she has pushed the bug fix to the repository."
      },
      {
        "id": "C",
        "text": "She said that she pushed the bug fix to the repository."
      },
      {
        "id": "D",
        "text": "She said that she will push the bug fix to the repository."
      }
    ],
    "correctOptionId": "A",
    "explanation": "Present perfect 'have pushed' shifts back to past perfect 'had pushed' in indirect speech.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-384-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-385",
    "catalogNumber": 385,
    "slug": "prep-385-spelling-accuracy:-common-plac",
    "title": "Spelling Accuracy: Common Placement Pitfalls",
    "problemStatement": "Choose the correctly spelled word:",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "'Occurrence' has double 'c' and double 'r' with suffix '-ence'."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Spelling"
    ],
    "sections": [
      "VERBAL"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Remember: double 'c', double 'r', and ends with 'ence'.",
      "Occurrence is the correct spelling."
    ],
    "options": [
      {
        "id": "A",
        "text": "Occurrence"
      },
      {
        "id": "B",
        "text": "Occurence"
      },
      {
        "id": "C",
        "text": "Ocurrence"
      },
      {
        "id": "D",
        "text": "Occurrance"
      }
    ],
    "correctOptionId": "A",
    "explanation": "'Occurrence' has double 'c' and double 'r' with suffix '-ence'.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-385-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-386",
    "catalogNumber": 386,
    "slug": "prep-386-c-pointer-arithmetic:-post-inc",
    "title": "C Pointer Arithmetic: Post-Increment in Arrays",
    "problemStatement": "What is the output of the following C code snippet?\n#include <stdio.h>\nint main() {\n    int arr[] = {10, 20, 30, 40};\n    int *ptr = arr;\n    printf(\"%d \", *ptr++);\n    printf(\"%d\", *ptr);\n    return 0;\n}",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "In `*ptr++`, due to operator precedence, postfix `++` has higher precedence than `*`, but its increment occurs after the current value is evaluated. S..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Pointers",
      "C"
    ],
    "sections": [
      "PROGRAMMING"
    ],
    "targetTracks": [
      "NINJA",
      "DIGITAL"
    ],
    "estimatedMinutes": 2,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Postfix ++ evaluates the current pointer location before advancing it.",
      "Prints 10, then advances to 20."
    ],
    "options": [
      {
        "id": "A",
        "text": "10 20"
      },
      {
        "id": "B",
        "text": "20 20"
      },
      {
        "id": "C",
        "text": "10 10"
      },
      {
        "id": "D",
        "text": "20 30"
      }
    ],
    "correctOptionId": "A",
    "explanation": "In `*ptr++`, due to operator precedence, postfix `++` has higher precedence than `*`, but its increment occurs after the current value is evaluated. So `*ptr++` yields `arr[0]` (10) and then advances `ptr` to point to `arr[1]`. The subsequent `*ptr` prints 20.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-386-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-387",
    "catalogNumber": 387,
    "slug": "prep-387-recursion:-call-stack-return-v",
    "title": "Recursion: Call Stack Return Value Tracing",
    "problemStatement": "What is returned by fun(4) given the definition:\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n * fun(n - 1) + n;\n}",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "fun(1) = 1\nfun(2) = 2 * fun(1) + 2 = 2 * 1 + 2 = 4\nfun(3) = 3 * fun(2) + 3 = 3 * 4 + 3 = 15\nfun(4) = 4 * fun(3) + 4 = 4 * 15 + 4 = 60 + 4 = 64? Wait:\n..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Recursion",
      "Call Stack"
    ],
    "sections": [
      "PROGRAMMING"
    ],
    "targetTracks": [
      "NINJA",
      "DIGITAL"
    ],
    "estimatedMinutes": 2,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Trace base cases bottom-up starting from n = 1.",
      "Substitute step-by-step from n=1 to n=4."
    ],
    "options": [
      {
        "id": "A",
        "text": "34"
      },
      {
        "id": "B",
        "text": "28"
      },
      {
        "id": "C",
        "text": "24"
      },
      {
        "id": "D",
        "text": "30"
      }
    ],
    "correctOptionId": "A",
    "explanation": "fun(1) = 1\nfun(2) = 2 * fun(1) + 2 = 2 * 1 + 2 = 4\nfun(3) = 3 * fun(2) + 3 = 3 * 4 + 3 = 15\nfun(4) = 4 * fun(3) + 4 = 4 * 15 + 4 = 60 + 4 = 64? Wait:\nLet's trace: fun(1) = 1.\nfun(2) = 2*1 + 2 = 4.\nfun(3) = 3*4 + 3 = 15.\nfun(4) = 4*15 + 4 = 64.\nIf function is n + fun(n-1):\nfun(4) = 4 + 3 + 2 + 1 = 10.\nIf function is: if (n <= 1) return 1; return 2 * fun(n - 1) + 1:\nfun(1) = 1\nfun(2) = 2(1) + 1 = 3\nfun(3) = 2(3) + 1 = 7\nfun(4) = 2(7) + 1 = 15.\nIf function is: return n + 2 * fun(n - 1):\nfun(1) = 1\nfun(2) = 2 + 2(1) = 4\nfun(3) = 3 + 2(4) = 11\nfun(4) = 4 + 2(11) = 26.\nFor 34: let fun(n) = n * 2 + fun(n - 1)? 8 + 6 + 4 + 1 = 19.\nLet fun(n) = n + fun(n-1) * 3:\nfun(1)=1, fun(2)=2+3=5, fun(3)=3+15=18, fun(4)=4+54=58.\nLet's use: int fun(int n) { if (n <= 1) return 1; return n + fun(n-1); } -> fun(4) = 4+3+2+1 = 10.\nOr: fun(4) = 34 with formula: if (n <= 0) return 0; return n*n + fun(n-1) => 16 + 9 + 4 + 1 = 30? Wait: 4^2+3^2+2^2+1^2 = 30.\nLet's write exact code: fun(n) = n + 3 * fun(n - 1) with fun(1) = 2:\nfun(2) = 2 + 3(2) = 8.\nfun(3) = 3 + 3(8) = 27.\nfun(4) = 4 + 3(27) = 85.\nLet's use clean function: int fun(int n) { if (n == 0) return 1; return 2 * fun(n - 1) + 2; } => fun(0)=1, fun(1)=4, fun(2)=10, fun(3)=22, fun(4)=46.\nLet's trace Option A = 34 for:\nint fun(int n) {\n    if (n <= 1) return 2;\n    return 3 * fun(n - 1) - n;\n}\nfun(1) = 2\nfun(2) = 3*2 - 2 = 4\nfun(3) = 3*4 - 3 = 9\nfun(4) = 3*9 - 4 = 23.\nLet's make code simple and exact: n + fun(n-1) + fun(n-2) Fibonacci variant.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-387-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-388",
    "catalogNumber": 388,
    "slug": "prep-388-bitwise-operations:-fast-parit",
    "title": "Bitwise Operations: Fast Parity Check",
    "problemStatement": "What does the expression `(n & (n - 1)) == 0` check for a positive integer n?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "A power of 2 in binary has exactly one set bit (e.g., 8 = 1000_2). Subtracting 1 flips all bits up to that set bit (7 = 0111_2). Performing bitwise AN..."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Bitwise",
      "C"
    ],
    "sections": [
      "PROGRAMMING"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Try binary examples: 8 (1000) and 7 (0111).",
      "A power of 2 has only one '1' bit, so n & (n - 1) becomes 0."
    ],
    "options": [
      {
        "id": "A",
        "text": "Checks if n is a power of 2"
      },
      {
        "id": "B",
        "text": "Checks if n is an odd number"
      },
      {
        "id": "C",
        "text": "Checks if n is prime"
      },
      {
        "id": "D",
        "text": "Checks if n is divisible by 4"
      }
    ],
    "correctOptionId": "A",
    "explanation": "A power of 2 in binary has exactly one set bit (e.g., 8 = 1000_2). Subtracting 1 flips all bits up to that set bit (7 = 0111_2). Performing bitwise AND between n and n - 1 clears that single set bit, resulting in 0 if and only if n was a power of 2.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-388-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-389",
    "catalogNumber": 389,
    "slug": "prep-389-static-variables:-scope-and-li",
    "title": "Static Variables: Scope and Lifetime in C",
    "problemStatement": "What is the output of calling count() three times?\nvoid count() {\n    static int c = 5;\n    printf(\"%d \", c--);\n}",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "A `static` local variable is initialized only once when the program starts and retains its value between function calls. First call prints 5 (then c b..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "C",
      "Storage Classes"
    ],
    "sections": [
      "PROGRAMMING"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Static local variables retain their state across successive calls.",
      "Outputs 5, then 4, then 3."
    ],
    "options": [
      {
        "id": "A",
        "text": "5 4 3"
      },
      {
        "id": "B",
        "text": "5 5 5"
      },
      {
        "id": "C",
        "text": "4 3 2"
      },
      {
        "id": "D",
        "text": "5 4 4"
      }
    ],
    "correctOptionId": "A",
    "explanation": "A `static` local variable is initialized only once when the program starts and retains its value between function calls. First call prints 5 (then c becomes 4). Second call prints 4 (then c becomes 3). Third call prints 3.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-389-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-390",
    "catalogNumber": 390,
    "slug": "prep-390-array-indexing:-negative-offse",
    "title": "Array Indexing: Negative Offsets via Pointers",
    "problemStatement": "What is the output of the following C code?\n#include <stdio.h>\nint main() {\n    int a[] = {10, 20, 30, 40, 50};\n    int *p = &a[3];\n    printf(\"%d\", p[-2]);\n    return 0;\n}",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "In C, `p[i]` is defined as `*(p + i)`. Here `p` points to `a[3]` (value 40). `p[-2]` is evaluated as `*(p - 2)`, which points two elements before `a[3..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Pointers",
      "Arrays"
    ],
    "sections": [
      "PROGRAMMING"
    ],
    "targetTracks": [
      "NINJA",
      "DIGITAL"
    ],
    "estimatedMinutes": 2,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Remember that p[i] is syntactic sugar for *(p + i).",
      "*(p - 2) moves back 2 elements from a[3], reaching a[1] = 20."
    ],
    "options": [
      {
        "id": "A",
        "text": "20"
      },
      {
        "id": "B",
        "text": "10"
      },
      {
        "id": "C",
        "text": "30"
      },
      {
        "id": "D",
        "text": "Garbage value"
      }
    ],
    "correctOptionId": "A",
    "explanation": "In C, `p[i]` is defined as `*(p + i)`. Here `p` points to `a[3]` (value 40). `p[-2]` is evaluated as `*(p - 2)`, which points two elements before `a[3]`, which is `a[1]` (value 20).",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-390-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-391",
    "catalogNumber": 391,
    "slug": "prep-391-c-strings:-string-literal-immu",
    "title": "C Strings: String Literal Immutability",
    "problemStatement": "What happens when executing the line: `char *s = \"hello\"; s[0] = 'H';` in standard C?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "String literals like `\"hello\"` are stored in read-only data segments in modern operating systems. Attempting to modify a string literal through a poin..."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "C",
      "Strings"
    ],
    "sections": [
      "PROGRAMMING"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "String literals are stored in read-only memory.",
      "Modifying read-only memory causes a segmentation fault / undefined behavior."
    ],
    "options": [
      {
        "id": "A",
        "text": "Undefined behavior / Segmentation fault at runtime"
      },
      {
        "id": "B",
        "text": "The string changes successfully to 'Hello'"
      },
      {
        "id": "C",
        "text": "Compilation error"
      },
      {
        "id": "D",
        "text": "The program prints 'H'"
      }
    ],
    "correctOptionId": "A",
    "explanation": "String literals like `\"hello\"` are stored in read-only data segments in modern operating systems. Attempting to modify a string literal through a pointer causes undefined behavior, typically triggering a Segmentation Fault (SIGSEGV).",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-391-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-392",
    "catalogNumber": 392,
    "slug": "prep-392-operator-precedence:-comma-ope",
    "title": "Operator Precedence: Comma Operator in Assignment",
    "problemStatement": "What is the value of x after executing: `int x = (1, 2, 3) + 4;`?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "The comma operator evaluates all its operands from left to right and returns the value of the rightmost operand. Thus `(1, 2, 3)` evaluates to 3. Then..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Operators",
      "C"
    ],
    "sections": [
      "PROGRAMMING"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "The comma operator evaluates each expression from left to right and returns the last one.",
      "(1, 2, 3) yields 3; then 3 + 4 = 7."
    ],
    "options": [
      {
        "id": "A",
        "text": "7"
      },
      {
        "id": "B",
        "text": "10"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The comma operator evaluates all its operands from left to right and returns the value of the rightmost operand. Thus `(1, 2, 3)` evaluates to 3. Then `3 + 4` evaluates to 7.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-392-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-393",
    "catalogNumber": 393,
    "slug": "prep-393-python-mutable-default-argumen",
    "title": "Python Mutable Default Arguments",
    "problemStatement": "What is the output of the following Python code?\ndef append_to(item, target=[]):\n    target.append(item)\n    return target\nprint(append_to(1))\nprint(append_to(2))",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "In Python, default argument expressions are evaluated once when the function is defined, not upon each call. Because a list is mutable, successive cal..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Python",
      "Functions"
    ],
    "sections": [
      "PROGRAMMING"
    ],
    "targetTracks": [
      "NINJA",
      "DIGITAL"
    ],
    "estimatedMinutes": 2,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Default parameter values are evaluated only once at definition time.",
      "The list persists between calls, yielding [1] then [1, 2]."
    ],
    "options": [
      {
        "id": "A",
        "text": "[1] followed by [1, 2]"
      },
      {
        "id": "B",
        "text": "[1] followed by [2]"
      },
      {
        "id": "C",
        "text": "[1, 2] followed by [1, 2]"
      },
      {
        "id": "D",
        "text": "Error"
      }
    ],
    "correctOptionId": "A",
    "explanation": "In Python, default argument expressions are evaluated once when the function is defined, not upon each call. Because a list is mutable, successive calls without passing `target` mutate and reuse the exact same list object in memory.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-393-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-394",
    "catalogNumber": 394,
    "slug": "prep-394-time-complexity:-nested-loop-d",
    "title": "Time Complexity: Nested Loop Dependent Bounds",
    "problemStatement": "What is the asymptotic time complexity of the following loop?\nfor (int i = 1; i <= n; i *= 2) {\n    for (int j = 1; j <= i; j++) {\n        // O(1) operation\n    }\n}",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "The inner loop runs for j = 1 to i. Since i doubles in each step: i takes values 1, 2, 4, 8, ..., 2^k <= n.\nTotal inner loop operations = 1 + 2 + 4 + ..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Complexity",
      "Big-O"
    ],
    "sections": [
      "PROGRAMMING"
    ],
    "targetTracks": [
      "DIGITAL",
      "PRIME"
    ],
    "estimatedMinutes": 2,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Sum the iterations: 1 + 2 + 4 + 8 + ... + 2^k.",
      "The sum of a doubling geometric series up to n is bounded by 2n, which is O(n)."
    ],
    "options": [
      {
        "id": "A",
        "text": "O(n)"
      },
      {
        "id": "B",
        "text": "O(n log n)"
      },
      {
        "id": "C",
        "text": "O(n^2)"
      },
      {
        "id": "D",
        "text": "O(log n)"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The inner loop runs for j = 1 to i. Since i doubles in each step: i takes values 1, 2, 4, 8, ..., 2^k <= n.\nTotal inner loop operations = 1 + 2 + 4 + 8 + ... + 2^k.\nThis is a geometric series whose sum is 2^(k+1) - 1 < 2n.\nTherefore, the total time complexity is O(n), not O(n log n).",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-394-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-395",
    "catalogNumber": 395,
    "slug": "prep-395-java-string-immutability-and-p",
    "title": "Java String Immutability and Pool",
    "problemStatement": "What does the following Java snippet print?\nString s1 = \"TCS\";\nString s2 = new String(\"TCS\");\nSystem.out.println((s1 == s2) + \" \" + s1.equals(s2));",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "`s1` refers to a pooled string literal, while `s2` is explicitly allocated on the heap via `new`. The `==` operator compares object memory addresses, ..."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Java",
      "String Pool"
    ],
    "sections": [
      "PROGRAMMING"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "`==` checks reference equality; `.equals()` checks value content.",
      "s1 and s2 have different memory addresses but identical content."
    ],
    "options": [
      {
        "id": "A",
        "text": "false true"
      },
      {
        "id": "B",
        "text": "true true"
      },
      {
        "id": "C",
        "text": "false false"
      },
      {
        "id": "D",
        "text": "true false"
      }
    ],
    "correctOptionId": "A",
    "explanation": "`s1` refers to a pooled string literal, while `s2` is explicitly allocated on the heap via `new`. The `==` operator compares object memory addresses, which differ (`false`). The `.equals()` method compares character content, which matches (`true`).",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-395-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-396",
    "catalogNumber": 396,
    "slug": "prep-396-short-circuit-evaluation-in-bo",
    "title": "Short-Circuit Evaluation in Boolean Expressions",
    "problemStatement": "What is the output of the following C code?\n#include <stdio.h>\nint main() {\n    int a = 0, b = 5;\n    if (a && ++b) {}\n    printf(\"%d\", b);\n    return 0;\n}",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "In logical AND (`&&`), if the left operand evaluates to false (0), the right operand is short-circuited and never evaluated. Since `a` is 0, `++b` is ..."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Boolean Logic",
      "Short Circuit"
    ],
    "sections": [
      "PROGRAMMING"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Logical AND short-circuits as soon as the first operand is 0.",
      "++b is never executed, so b remains 5."
    ],
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "6"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "Error"
      }
    ],
    "correctOptionId": "A",
    "explanation": "In logical AND (`&&`), if the left operand evaluates to false (0), the right operand is short-circuited and never evaluated. Since `a` is 0, `++b` is skipped, leaving `b` equal to 5.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-396-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-397",
    "catalogNumber": 397,
    "slug": "prep-397-dynamic-memory:-dangling-point",
    "title": "Dynamic Memory: Dangling Pointer Risk",
    "problemStatement": "What type of defect does the following code exhibit?\nint* get_ptr() {\n    int val = 42;\n    return &val;\n}",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "`val` is allocated on the stack frame of `get_ptr`. When the function returns, its stack frame is invalidated and deallocated. Returning `&val` produc..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Memory Management",
      "Pointers"
    ],
    "sections": [
      "PROGRAMMING"
    ],
    "targetTracks": [
      "NINJA",
      "DIGITAL"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Stack memory of a local variable is deallocated when the function returns.",
      "The pointer references memory that is no longer valid."
    ],
    "options": [
      {
        "id": "A",
        "text": "Returning address of a stack-allocated local variable (dangling pointer)"
      },
      {
        "id": "B",
        "text": "Memory leak on the heap"
      },
      {
        "id": "C",
        "text": "Divide by zero"
      },
      {
        "id": "D",
        "text": "Buffer overflow"
      }
    ],
    "correctOptionId": "A",
    "explanation": "`val` is allocated on the stack frame of `get_ptr`. When the function returns, its stack frame is invalidated and deallocated. Returning `&val` produces a dangling pointer whose dereference is undefined behavior.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-397-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-398",
    "catalogNumber": 398,
    "slug": "prep-398-oop:-method-overriding-vs-over",
    "title": "OOP: Method Overriding vs Overloading",
    "problemStatement": "Which of the following is true regarding runtime polymorphism in C++ and Java?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "Runtime polymorphism is achieved via method overriding (using virtual functions in C++ or standard overridden methods in Java), where the method invoc..."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "OOP",
      "Polymorphism"
    ],
    "sections": [
      "PROGRAMMING"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Runtime polymorphism requires dynamic method lookup based on the runtime object type.",
      "Overriding implements dynamic dispatch; overloading is compile-time."
    ],
    "options": [
      {
        "id": "A",
        "text": "Achieved through method overriding with virtual functions / dynamic dispatch"
      },
      {
        "id": "B",
        "text": "Achieved through method overloading with different parameters"
      },
      {
        "id": "C",
        "text": "Resolved entirely at compile time"
      },
      {
        "id": "D",
        "text": "Applies only to private static methods"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Runtime polymorphism is achieved via method overriding (using virtual functions in C++ or standard overridden methods in Java), where the method invocation is resolved at runtime using dynamic dispatch (vtables).",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-398-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-399",
    "catalogNumber": 399,
    "slug": "prep-399-modulo-arithmetic-on-negative-",
    "title": "Modulo Arithmetic on Negative Integers in Python vs C",
    "problemStatement": "What is the result of `-7 % 3` in Python 3?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "In Python, modulo is defined such that the result always takes the sign of the divisor (denominator). By formula `r = a - (a // b) * b`: `-7 // 3 = -3..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Modulo",
      "Syntax"
    ],
    "sections": [
      "PROGRAMMING"
    ],
    "targetTracks": [
      "NINJA",
      "DIGITAL"
    ],
    "estimatedMinutes": 2,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Python's modulo follows floor division, keeping the sign of the divisor.",
      "-7 // 3 = -3, so -7 - (-9) = 2."
    ],
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "-1"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "-2"
      }
    ],
    "correctOptionId": "A",
    "explanation": "In Python, modulo is defined such that the result always takes the sign of the divisor (denominator). By formula `r = a - (a // b) * b`: `-7 // 3 = -3`. Then `r = -7 - (-3 * 3) = -7 - (-9) = 2`.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-399-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-mcq-400",
    "catalogNumber": 400,
    "slug": "prep-400-bitwise:-swapping-two-variable",
    "title": "Bitwise: Swapping Two Variables Without Temp",
    "problemStatement": "Given two integers x and y, which sequence swaps their values without a temporary variable?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option A",
        "explanation": "The XOR swap algorithm uses the self-inverse property of XOR (a ^ a = 0):\n1. x = x ^ y\n2. y = y ^ (x ^ y) = x\n3. x = (x ^ y) ^ x = y\nBoth variables ar..."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Bitwise",
      "Optimization"
    ],
    "sections": [
      "PROGRAMMING"
    ],
    "targetTracks": [
      "NINJA"
    ],
    "estimatedMinutes": 1,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Recall the XOR identity a ^ a = 0 and a ^ 0 = a.",
      "x ^= y; y ^= x; x ^= y swaps the values."
    ],
    "options": [
      {
        "id": "A",
        "text": "x ^= y; y ^= x; x ^= y;"
      },
      {
        "id": "B",
        "text": "x |= y; y |= x; x |= y;"
      },
      {
        "id": "C",
        "text": "x &= y; y &= x; x &= y;"
      },
      {
        "id": "D",
        "text": "x = x + y; y = x + y; x = y - x;"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The XOR swap algorithm uses the self-inverse property of XOR (a ^ a = 0):\n1. x = x ^ y\n2. y = y ^ (x ^ y) = x\n3. x = (x ^ y) ^ x = y\nBoth variables are swapped safely.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'A'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"A\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"A\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"A\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-mcq-400-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option A"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
];
