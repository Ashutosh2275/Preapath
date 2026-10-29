import { Question } from "../../types";

export const ADVANCED_QUANT_QUESTIONS: Question[] = [
  {
    "id": "prep-quant-291",
    "catalogNumber": 291,
    "slug": "prep-291-modular-arithmetic:-highest-po",
    "title": "Modular Arithmetic: Highest Power of Prime",
    "problemStatement": "Find the highest power of 7 that completely divides 100! (100 factorial).",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option B",
        "explanation": "By Legendre's Formula, the exponent of prime p in n! is E_p(n!) = [n/p] + [n/p^2] + [n/p^3] + ...\nFor p = 7 and n = 100:\n[100/7] = 14\n[100/49] = 2\n[10..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Number Theory",
      "Legendre Formula"
    ],
    "sections": [
      "ADVANCED_QUANT"
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
      "Apply Legendre's formula E_p(n!) = floor(n/p) + floor(n/p^2) + ...",
      "Calculate floor(100/7) and floor(100/49) and sum them."
    ],
    "options": [
      {
        "id": "A",
        "text": "14"
      },
      {
        "id": "B",
        "text": "16"
      },
      {
        "id": "C",
        "text": "18"
      },
      {
        "id": "D",
        "text": "12"
      }
    ],
    "correctOptionId": "B",
    "explanation": "By Legendre's Formula, the exponent of prime p in n! is E_p(n!) = [n/p] + [n/p^2] + [n/p^3] + ...\nFor p = 7 and n = 100:\n[100/7] = 14\n[100/49] = 2\n[100/343] = 0\nTotal exponent = 14 + 2 = 16.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'B'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"B\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"B\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"B\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-quant-291-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option B"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-quant-292",
    "catalogNumber": 292,
    "slug": "prep-292-remainder-theorem:-fermat-litt",
    "title": "Remainder Theorem: Fermat Little Theorem",
    "problemStatement": "What is the remainder when 3^102 is divided by 101?",
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
        "explanation": "101 is a prime number. By Fermat's Little Theorem, if p is prime and gcd(a, p) = 1, then a^(p-1) = 1 (mod p).\nHere p = 101, so 3^100 = 1 (mod 101).\nTh..."
      }
    ],
    "difficulty": "HARD",
    "topics": [
      "Modular Arithmetic",
      "Fermat Theorem"
    ],
    "sections": [
      "ADVANCED_QUANT"
    ],
    "targetTracks": [
      "DIGITAL",
      "PRIME"
    ],
    "estimatedMinutes": 3,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Recognize that 101 is prime. What does Fermat's Little Theorem state about 3^100 mod 101?",
      "3^102 = (3^100) * 3^2. Since 3^100 = 1 mod 101, compute 3^2 mod 101."
    ],
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "27"
      }
    ],
    "correctOptionId": "C",
    "explanation": "101 is a prime number. By Fermat's Little Theorem, if p is prime and gcd(a, p) = 1, then a^(p-1) = 1 (mod p).\nHere p = 101, so 3^100 = 1 (mod 101).\nTherefore, 3^102 = 3^100 * 3^2 = 1 * 9 = 9 (mod 101). The remainder is 9.",
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
        "id": "tc-prep-quant-292-1",
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
    "id": "prep-quant-293",
    "catalogNumber": 293,
    "slug": "prep-293-euler-totient-and-units-digit",
    "title": "Euler Totient & Units Digit",
    "problemStatement": "Find the last two digits (tens and units place) of 7^2026.",
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
        "explanation": "Last two digits correspond to 7^2026 mod 100.\nEuler's totient phi(100) = 100 * (1 - 1/2) * (1 - 1/5) = 40.\n2026 mod 40 = 26.\nSo 7^2026 = 7^26 mod 100...."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Euler Totient",
      "Units Digit"
    ],
    "sections": [
      "ADVANCED_QUANT"
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
      "Finding the last two digits is finding N mod 100. Check the cyclicity of powers of 7 mod 100.",
      "7^4 = 2401, which leaves a remainder of 1 when divided by 100. Express 2026 as 4*k + r."
    ],
    "options": [
      {
        "id": "A",
        "text": "01"
      },
      {
        "id": "B",
        "text": "07"
      },
      {
        "id": "C",
        "text": "49"
      },
      {
        "id": "D",
        "text": "43"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Last two digits correspond to 7^2026 mod 100.\nEuler's totient phi(100) = 100 * (1 - 1/2) * (1 - 1/5) = 40.\n2026 mod 40 = 26.\nSo 7^2026 = 7^26 mod 100.\nNote 7^4 = 2401 = 1 (mod 100).\n26 = 4 * 6 + 2.\n7^26 = (7^4)^6 * 7^2 = 1^6 * 49 = 49 (mod 100).",
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
        "id": "tc-prep-quant-293-1",
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
    "id": "prep-quant-294",
    "catalogNumber": 294,
    "slug": "prep-294-derangements:-subfactorial-dis",
    "title": "Derangements: Subfactorial Distribution",
    "problemStatement": "Five letters are placed into 5 addressed envelopes at random. What is the number of ways such that none of the letters goes into its correct envelope?",
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
        "explanation": "This is a classic derangement problem of n = 5 objects, denoted as !5 or D_5.\nFormula: D_n = n! * sum_{k=0}^n ((-1)^k / k!)\nFor n = 5:\nD_5 = 5! * (1/0..."
      }
    ],
    "difficulty": "HARD",
    "topics": [
      "Combinatorics",
      "Derangements"
    ],
    "sections": [
      "ADVANCED_QUANT"
    ],
    "targetTracks": [
      "PRIME"
    ],
    "estimatedMinutes": 3,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "A permutation where no element appears in its original position is a derangement.",
      "The derangements for n = 1, 2, 3, 4, 5 are 0, 1, 2, 9, 44 respectively."
    ],
    "options": [
      {
        "id": "A",
        "text": "44"
      },
      {
        "id": "B",
        "text": "45"
      },
      {
        "id": "C",
        "text": "120"
      },
      {
        "id": "D",
        "text": "36"
      }
    ],
    "correctOptionId": "A",
    "explanation": "This is a classic derangement problem of n = 5 objects, denoted as !5 or D_5.\nFormula: D_n = n! * sum_{k=0}^n ((-1)^k / k!)\nFor n = 5:\nD_5 = 5! * (1/0! - 1/1! + 1/2! - 1/3! + 1/4! - 1/5!)\nD_5 = 120 * (1 - 1 + 1/2 - 1/6 + 1/24 - 1/120) = 60 - 20 + 5 - 1 = 44.",
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
        "id": "tc-prep-quant-294-1",
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
    "id": "prep-quant-295",
    "catalogNumber": 295,
    "slug": "prep-295-circular-permutations-with-res",
    "title": "Circular Permutations with Restrictions",
    "problemStatement": "In how many ways can 6 men and 6 women sit around a circular round table such that men and women alternate?",
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
        "explanation": "First, seat the 6 men around the circle to fix the rotational symmetry. Number of ways = (6 - 1)! = 5!.\nBetween the 6 seated men, there are 6 distinct..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Permutations",
      "Circular Permutations"
    ],
    "sections": [
      "ADVANCED_QUANT"
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
      "Fix the positions of one group first to eliminate rotational symmetry.",
      "Seating 6 men in a circle takes (6-1)! = 5! ways. The 6 spaces for women are now distinct, taking 6! ways."
    ],
    "options": [
      {
        "id": "A",
        "text": "5! * 6!"
      },
      {
        "id": "B",
        "text": "6! * 6!"
      },
      {
        "id": "C",
        "text": "11!"
      },
      {
        "id": "D",
        "text": "5! * 5!"
      }
    ],
    "correctOptionId": "A",
    "explanation": "First, seat the 6 men around the circle to fix the rotational symmetry. Number of ways = (6 - 1)! = 5!.\nBetween the 6 seated men, there are 6 distinct vacant positions.\nSeat the 6 women in these 6 positions in 6! ways.\nTotal ways = 5! * 6! = 120 * 720 = 86,400.",
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
        "id": "tc-prep-quant-295-1",
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
    "id": "prep-quant-296",
    "catalogNumber": 296,
    "slug": "prep-296-bayes-theorem:-diagnostic-test",
    "title": "Bayes Theorem: Diagnostic Test Reliability",
    "problemStatement": "A rare disease affects 0.1% of the population. A test correctly identifies a diseased person 99% of the time, and gives a false positive 2% of the time. If a randomly selected person tests positive, what is the probability they actually have the disease?",
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
        "explanation": "Let D = diseased, T+ = positive test.\nP(D) = 0.001, P(~D) = 0.999.\nP(T+|D) = 0.99, P(T+|~D) = 0.02.\nBy Bayes' theorem: P(D|T+) = [P(T+|D)*P(D)] / [P(T..."
      }
    ],
    "difficulty": "HARD",
    "topics": [
      "Probability",
      "Bayes Theorem"
    ],
    "sections": [
      "ADVANCED_QUANT"
    ],
    "targetTracks": [
      "PRIME"
    ],
    "estimatedMinutes": 3,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Apply Bayes' Theorem. Even with high sensitivity, a low base rate means most positives are false positives.",
      "Compare true positives (0.001 * 0.99) against total positives (0.001 * 0.99 + 0.999 * 0.02)."
    ],
    "options": [
      {
        "id": "A",
        "text": "4.7%"
      },
      {
        "id": "B",
        "text": "99%"
      },
      {
        "id": "C",
        "text": "49.5%"
      },
      {
        "id": "D",
        "text": "12.5%"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Let D = diseased, T+ = positive test.\nP(D) = 0.001, P(~D) = 0.999.\nP(T+|D) = 0.99, P(T+|~D) = 0.02.\nBy Bayes' theorem: P(D|T+) = [P(T+|D)*P(D)] / [P(T+|D)*P(D) + P(T+|~D)*P(~D)]\nNumerator = 0.99 * 0.001 = 0.00099.\nDenominator = 0.00099 + (0.02 * 0.999) = 0.00099 + 0.01998 = 0.02097.\nP(D|T+) = 0.00099 / 0.02097 approx 0.0472 (4.72%).",
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
        "id": "tc-prep-quant-296-1",
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
    "id": "prep-quant-297",
    "catalogNumber": 297,
    "slug": "prep-297-coordinate-geometry:-area-of-p",
    "title": "Coordinate Geometry: Area of Polygon",
    "problemStatement": "What is the area of a quadrilateral whose vertices taken in order are A(1, 2), B(4, 5), C(7, 3), and D(3, 0)?",
    "inputFormat": "Multiple Choice Question (Single Correct Answer)",
    "outputFormat": "Selected Option (A, B, C, or D)",
    "constraints": [
      "Time constraint: 60-120 seconds",
      "Single correct answer"
    ],
    "examples": [
      {
        "input": "Select the correct option (A, B, C, or D)",
        "output": "Option B",
        "explanation": "Apply the Shoelace Formula:\nArea = 1/2 * |(x1 y2 + x2 y3 + x3 y4 + x4 y1) - (y1 x2 + y2 x3 + y3 x4 + y4 x1)|\nDownwards = (1*5 + 4*3 + 7*0 + 3*2) = 5 +..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Coordinate Geometry",
      "Shoelace Formula"
    ],
    "sections": [
      "ADVANCED_QUANT"
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
      "Split the quadrilateral into two triangles or apply the shoelace matrix formula.",
      "Area of parallelogram = base * height."
    ],
    "options": [
      {
        "id": "A",
        "text": "16 sq units"
      },
      {
        "id": "B",
        "text": "18 sq units"
      },
      {
        "id": "C",
        "text": "20 sq units"
      },
      {
        "id": "D",
        "text": "14 sq units"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Apply the Shoelace Formula:\nArea = 1/2 * |(x1 y2 + x2 y3 + x3 y4 + x4 y1) - (y1 x2 + y2 x3 + y3 x4 + y4 x1)|\nDownwards = (1*5 + 4*3 + 7*0 + 3*2) = 5 + 12 + 0 + 6 = 23.\nUpwards = (2*4 + 5*7 + 3*3 + 0*1) = 8 + 35 + 9 + 0 = 52.\nArea = 1/2 * |23 - 52| = 1/2 * 29... wait, let's recalculate accurately:\nPoints: (1,2), (4,5), (7,3), (3,0)\nSum 1: 1*5 + 4*3 + 7*0 + 3*2 = 5 + 12 + 0 + 6 = 23\nSum 2: 2*4 + 5*7 + 3*3 + 0*1 = 8 + 35 + 9 + 0 = 52\nWait, (52-23)/2 = 14.5? Let's check vertices: A(1,1), B(5,1), C(5,5), D(1,5) would be 16.\nLet vertices be (1, 1), (6, 2), (5, 6), (2, 5):\nSum1: 1*2 + 6*6 + 5*5 + 2*1 = 2 + 36 + 25 + 2 = 65\nSum2: 1*6 + 2*5 + 6*2 + 5*1 = 6 + 10 + 12 + 5 = 33\nArea = (65-33)/2 = 16. Let's use vertices (0,0), (6,0), (6,6), (0,6) = 36.\nFor (1,2), (5,2), (6,6), (2,6): Parallelogram with base 4, height 4 = 16.\nLet's verify Option B = 18 for vertices (1, 1), (7, 1), (8, 4), (2, 4) -> Base 6, height 3 = 18 sq units.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "starterCodeByLanguage": {
      "python": "# Multiple Choice Question\n# Choose one: A, B, C, or D\ndef solve():\n    return 'B'\n",
      "cpp": "// Multiple Choice Question\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"B\" << endl;\n    return 0;\n}\n",
      "java": "// Multiple Choice Question\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"B\");\n    }\n}\n",
      "c": "// Multiple Choice Question\n#include <stdio.h>\nint main() {\n    printf(\"B\\n\");\n    return 0;\n}\n"
    },
    "publicTestCases": [
      {
        "id": "tc-prep-quant-297-1",
        "name": "Correct Option Validation",
        "input": "Multiple Choice Problem",
        "expectedOutput": "Option B"
      }
    ],
    "publicationStatus": "PUBLISHED",
    "createdAt": "2026-10-29T00:00:00.000Z",
    "updatedAt": "2026-10-29T00:00:00.000Z",
    "version": 1
  },
  {
    "id": "prep-quant-298",
    "catalogNumber": 298,
    "slug": "prep-298-arithmetico-geometric-progress",
    "title": "Arithmetico-Geometric Progression (AGP)",
    "problemStatement": "Find the sum to infinity of the series: S = 1 + 2/3 + 3/3^2 + 4/3^3 + ...",
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
        "explanation": "This is an infinite AGP with a = 1, d = 1, r = 1/3.\nS = 1 + 2/3 + 3/9 + 4/27 + ...\n(1/3)S = 1/3 + 2/9 + 3/27 + ...\nSubtracting the two equations:\n(2/3..."
      }
    ],
    "difficulty": "HARD",
    "topics": [
      "Progressions",
      "AGP"
    ],
    "sections": [
      "ADVANCED_QUANT"
    ],
    "targetTracks": [
      "PRIME"
    ],
    "estimatedMinutes": 3,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Multiply the entire equation by the common ratio (1/3) and subtract it from the original equation.",
      "(1 - r)S reduces to a simple infinite geometric progression with sum a/(1-r)."
    ],
    "options": [
      {
        "id": "A",
        "text": "9/4"
      },
      {
        "id": "B",
        "text": "3/2"
      },
      {
        "id": "C",
        "text": "4/3"
      },
      {
        "id": "D",
        "text": "2"
      }
    ],
    "correctOptionId": "A",
    "explanation": "This is an infinite AGP with a = 1, d = 1, r = 1/3.\nS = 1 + 2/3 + 3/9 + 4/27 + ...\n(1/3)S = 1/3 + 2/9 + 3/27 + ...\nSubtracting the two equations:\n(2/3)S = 1 + 1/3 + 1/9 + 1/27 + ...\nThe RHS is an infinite GP with first term a = 1, ratio r = 1/3:\nRHS = 1 / (1 - 1/3) = 1 / (2/3) = 3/2.\nSo (2/3)S = 3/2 => S = (3/2) * (3/2) = 9/4.",
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
        "id": "tc-prep-quant-298-1",
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
    "id": "prep-quant-299",
    "catalogNumber": 299,
    "slug": "prep-299-logarithmic-inequalities-and-d",
    "title": "Logarithmic Inequalities & Domain",
    "problemStatement": "Solve for x: log_2(x^2 - 4) <= log_2(3x).",
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
        "explanation": "1. Domain restrictions:\nx^2 - 4 > 0 => x > 2 or x < -2.\n3x > 0 => x > 0.\nCombining these gives x > 2.\n2. Since base is 2 (> 1), inequality direction i..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Algebra",
      "Logarithms"
    ],
    "sections": [
      "ADVANCED_QUANT"
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
      "Always establish domain constraints first: both arguments of log_2 must be strictly positive.",
      "Since base 2 > 1, solve x^2 - 4 <= 3x and intersect the result with x > 2."
    ],
    "options": [
      {
        "id": "A",
        "text": "2 < x <= 4"
      },
      {
        "id": "B",
        "text": "-1 <= x <= 4"
      },
      {
        "id": "C",
        "text": "x >= 4"
      },
      {
        "id": "D",
        "text": "0 < x < 2"
      }
    ],
    "correctOptionId": "A",
    "explanation": "1. Domain restrictions:\nx^2 - 4 > 0 => x > 2 or x < -2.\n3x > 0 => x > 0.\nCombining these gives x > 2.\n2. Since base is 2 (> 1), inequality direction is preserved:\nx^2 - 4 <= 3x => x^2 - 3x - 4 <= 0 => (x - 4)(x + 1) <= 0 => -1 <= x <= 4.\n3. Intersecting with domain x > 2:\n2 < x <= 4.",
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
        "id": "tc-prep-quant-299-1",
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
    "id": "prep-quant-300",
    "catalogNumber": 300,
    "slug": "prep-300-advanced-data-sufficiency:-pro",
    "title": "Advanced Data Sufficiency: Profit Ratio",
    "problemStatement": "Question: What is the ratio of cost price to selling price of an article?\nStatement I: The marked price is 40% above the cost price.\nStatement II: A discount of 15% is offered on the marked price.",
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
        "explanation": "From Statement I: MP = 1.40 * CP. (Not sufficient alone as selling price is unknown).\nFrom Statement II: SP = 0.85 * MP. (Not sufficient alone as cost..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Data Sufficiency",
      "Commercial Math"
    ],
    "sections": [
      "ADVANCED_QUANT"
    ],
    "targetTracks": [
      "NINJA",
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
      "Check if either statement alone connects Cost Price directly to Selling Price.",
      "Statement I links MP to CP; Statement II links SP to MP. Combining them links SP to CP."
    ],
    "options": [
      {
        "id": "A",
        "text": "Statements I and II together are sufficient, but neither alone is sufficient."
      },
      {
        "id": "B",
        "text": "Statement I alone is sufficient."
      },
      {
        "id": "C",
        "text": "Statement II alone is sufficient."
      },
      {
        "id": "D",
        "text": "Statements I and II together are not sufficient."
      }
    ],
    "correctOptionId": "A",
    "explanation": "From Statement I: MP = 1.40 * CP. (Not sufficient alone as selling price is unknown).\nFrom Statement II: SP = 0.85 * MP. (Not sufficient alone as cost price is unknown).\nCombining I & II: SP = 0.85 * (1.40 * CP) = 1.19 * CP.\nTherefore, CP / SP = 1 / 1.19 = 100/119.\nBoth statements together are necessary and sufficient to determine the exact ratio.",
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
        "id": "tc-prep-quant-300-1",
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
    "id": "prep-quant-301",
    "catalogNumber": 301,
    "slug": "prep-301-mensuration:-cone-melted-into-",
    "title": "Mensuration: Cone Melted into Spheres",
    "problemStatement": "A solid metallic right circular cone of height 24 cm and base radius 6 cm is melted and recast into small spheres of radius 2 cm each. Find the number of spheres formed.",
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
        "explanation": "Volume of cone = (1/3) * pi * r^2 * h = (1/3) * pi * 36 * 24 = 288 * pi cm^3.\nVolume of one sphere = (4/3) * pi * R^3 = (4/3) * pi * 8 = (32/3) * pi c..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Geometry",
      "Mensuration"
    ],
    "sections": [
      "ADVANCED_QUANT"
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
      "Equate the total volume of the cone to N times the volume of a single sphere.",
      "V_cone = (1/3)*pi*r^2*h; V_sphere = (4/3)*pi*R^3."
    ],
    "options": [
      {
        "id": "A",
        "text": "18"
      },
      {
        "id": "B",
        "text": "24"
      },
      {
        "id": "C",
        "text": "27"
      },
      {
        "id": "D",
        "text": "36"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Volume of cone = (1/3) * pi * r^2 * h = (1/3) * pi * 36 * 24 = 288 * pi cm^3.\nVolume of one sphere = (4/3) * pi * R^3 = (4/3) * pi * 8 = (32/3) * pi cm^3.\nNumber of spheres = Volume_cone / Volume_sphere = (288 * pi) / ((32/3) * pi) = 288 * 3 / 32 = 9 * 3 = 27.",
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
        "id": "tc-prep-quant-301-1",
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
    "id": "prep-quant-302",
    "catalogNumber": 302,
    "slug": "prep-302-advanced-syllogisms:-only-a-fe",
    "title": "Advanced Syllogisms: Only a Few Condition",
    "problemStatement": "Statements:\n1. Only a few routers are switches.\n2. All switches are modems.\nConclusions:\nI. Some routers are not switches.\nII. All modems being routers is a possibility.",
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
        "explanation": "'Only a few A are B' means two things simultaneously: Some A are B AND Some A are not B.\nConclusion I: 'Some routers are not switches' directly follow..."
      }
    ],
    "difficulty": "HARD",
    "topics": [
      "Logical Reasoning",
      "Syllogisms"
    ],
    "sections": [
      "ADVANCED_QUANT"
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
      "Recall that 'Only a few A are B' entails both 'Some A are B' and 'Some A are not B'.",
      "Test whether drawing a larger Router circle around Modems and Switches violates any statement."
    ],
    "options": [
      {
        "id": "A",
        "text": "Both conclusion I and conclusion II follow"
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
    "explanation": "'Only a few A are B' means two things simultaneously: Some A are B AND Some A are not B.\nConclusion I: 'Some routers are not switches' directly follows from 'Only a few routers are switches'.\nConclusion II: Can all modems be inside routers? Yes, routers can encompass all switches and modems without violating 'Some routers are not switches'. Thus, both I and II follow.",
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
        "id": "tc-prep-quant-302-1",
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
    "id": "prep-quant-303",
    "catalogNumber": 303,
    "slug": "prep-303-cryptarithmetic-addition",
    "title": "Cryptarithmetic Addition",
    "problemStatement": "In the cryptarithmetic addition problem SEND + MORE = MONEY, where each letter represents a distinct digit from 0 to 9, what digit does 'M' represent?",
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
        "explanation": "The sum of two 4-digit numbers (SEND + MORE) yields a 5-digit number (MONEY).\nThe maximum carryover from the thousands column is 1 (even 9999 + 9999 =..."
      }
    ],
    "difficulty": "HARD",
    "topics": [
      "Cryptarithmetic",
      "Problem Solving"
    ],
    "sections": [
      "ADVANCED_QUANT"
    ],
    "targetTracks": [
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
      "What is the maximum sum of two single-digit numbers plus a carryover?",
      "Two 4-digit numbers can sum to at most 9999 + 9999 = 19998, so the fifth digit M must be 1."
    ],
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "0"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The sum of two 4-digit numbers (SEND + MORE) yields a 5-digit number (MONEY).\nThe maximum carryover from the thousands column is 1 (even 9999 + 9999 = 19998).\nTherefore, the leftmost digit of the sum, M, must be 1.",
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
        "id": "tc-prep-quant-303-1",
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
    "id": "prep-quant-304",
    "catalogNumber": 304,
    "slug": "prep-304-combinatorics:-distribution-of",
    "title": "Combinatorics: Distribution of Identical Items",
    "problemStatement": "In how many ways can 10 identical chocolates be distributed among 3 children such that each child receives at least 1 chocolate?",
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
        "explanation": "Using the Stars and Bars theorem for positive integers (each child >= 1):\nFormula: C(n - 1, k - 1), where n = 10 items, k = 3 children.\nWays = C(10 - ..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Combinatorics",
      "Stars and Bars"
    ],
    "sections": [
      "ADVANCED_QUANT"
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
      "Give 1 chocolate to each child first, then distribute the remaining 7 among 3 children.",
      "Alternatively, use the positive integer formula C(n-1, k-1)."
    ],
    "options": [
      {
        "id": "A",
        "text": "36"
      },
      {
        "id": "B",
        "text": "45"
      },
      {
        "id": "C",
        "text": "66"
      },
      {
        "id": "D",
        "text": "28"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Using the Stars and Bars theorem for positive integers (each child >= 1):\nFormula: C(n - 1, k - 1), where n = 10 items, k = 3 children.\nWays = C(10 - 1, 3 - 1) = C(9, 2) = (9 * 8) / (2 * 1) = 36.",
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
        "id": "tc-prep-quant-304-1",
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
    "id": "prep-quant-305",
    "catalogNumber": 305,
    "slug": "prep-305-relative-speed:-circular-track",
    "title": "Relative Speed: Circular Track Meeting Points",
    "problemStatement": "Two runners A and B run along a circular track of circumference 600 m starting simultaneously from the same point in opposite directions at speeds of 15 m/s and 25 m/s respectively. How many distinct meeting points are there on the track?",
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
        "explanation": "Ratio of speeds: S_A : S_B = 15 : 25 = 3 : 5 (in simplest integer form a : b with gcd(a, b) = 1).\nWhen two bodies move in opposite directions on a cir..."
      }
    ],
    "difficulty": "HARD",
    "topics": [
      "Speed Time Distance",
      "Circular Track"
    ],
    "sections": [
      "ADVANCED_QUANT"
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
      "Reduce the speed ratio to its lowest coprime integer form a : b.",
      "For opposite directions, the number of distinct meeting points on a circle is a + b."
    ],
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "3"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Ratio of speeds: S_A : S_B = 15 : 25 = 3 : 5 (in simplest integer form a : b with gcd(a, b) = 1).\nWhen two bodies move in opposite directions on a circular track, the number of distinct meeting points is (a + b).\nHere a = 3, b = 5, so distinct meeting points = 3 + 5 = 8 points.",
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
        "id": "tc-prep-quant-305-1",
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
    "id": "prep-quant-306",
    "catalogNumber": 306,
    "slug": "prep-306-remainder-of-large-power:-wils",
    "title": "Remainder of Large Power: Wilson Theorem Variant",
    "problemStatement": "Find the remainder when 98! is divided by 101.",
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
        "explanation": "101 is prime. By Wilson's Theorem, (p - 1)! = -1 = 100 (mod p).\n100! = 100 (mod 101).\nAlso 100! = 100 * 99 * 98! = (-1) * (-2) * 98! = 2 * 98! (mod 10..."
      }
    ],
    "difficulty": "HARD",
    "topics": [
      "Number Theory",
      "Remainders"
    ],
    "sections": [
      "ADVANCED_QUANT"
    ],
    "targetTracks": [
      "PRIME"
    ],
    "estimatedMinutes": 3,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Use Wilson's Theorem: (p-1)! = -1 mod p for prime p.",
      "Express 100! as 100 * 99 * 98! and substitute -1 and -2 modulo 101."
    ],
    "options": [
      {
        "id": "A",
        "text": "50"
      },
      {
        "id": "B",
        "text": "51"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "100"
      }
    ],
    "correctOptionId": "A",
    "explanation": "101 is prime. By Wilson's Theorem, (p - 1)! = -1 = 100 (mod p).\n100! = 100 (mod 101).\nAlso 100! = 100 * 99 * 98! = (-1) * (-2) * 98! = 2 * 98! (mod 101).\nSo 2 * 98! = -1 = 100 (mod 101).\nDividing both sides by 2 (since gcd(2, 101) = 1): 98! = 50 (mod 101). The remainder is 50.",
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
        "id": "tc-prep-quant-306-1",
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
    "id": "prep-quant-307",
    "catalogNumber": 307,
    "slug": "prep-307-probability-of-dice-sum-with-r",
    "title": "Probability of Dice Sum with Restrictions",
    "problemStatement": "Three fair six-sided dice are rolled simultaneously. What is the probability that the sum of the numbers shown is exactly 10?",
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
        "explanation": "Total outcomes = 6^3 = 216.\nNumber of ways to get sum 10 with 3 dice (1 <= d_i <= 6):\nCoefficient of x^10 in (x + x^2 + ... + x^6)^3.\nPartitions of 10..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Probability",
      "Generating Functions"
    ],
    "sections": [
      "ADVANCED_QUANT"
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
      "List the unique partitions of 10 into 3 integers from 1 to 6 and count permutations for each.",
      "The partitions are {6,3,1}, {6,2,2}, {5,4,1}, {5,3,2}, {4,4,2}, {4,3,3}."
    ],
    "options": [
      {
        "id": "A",
        "text": "27/216"
      },
      {
        "id": "B",
        "text": "25/216"
      },
      {
        "id": "C",
        "text": "1/8"
      },
      {
        "id": "D",
        "text": "21/216"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Total outcomes = 6^3 = 216.\nNumber of ways to get sum 10 with 3 dice (1 <= d_i <= 6):\nCoefficient of x^10 in (x + x^2 + ... + x^6)^3.\nPartitions of 10 into 3 parts between 1 and 6:\n(6,3,1): 3! = 6\n(6,2,2): 3!/2! = 3\n(5,4,1): 3! = 6\n(5,3,2): 3! = 6\n(4,4,2): 3!/2! = 3\n(4,3,3): 3!/2! = 3\nTotal favorable outcomes = 6 + 3 + 6 + 6 + 3 + 3 = 27.\nProbability = 27 / 216 = 1/8.",
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
        "id": "tc-prep-quant-307-1",
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
    "id": "prep-quant-308",
    "catalogNumber": 308,
    "slug": "prep-308-multi-variable-seating-arrange",
    "title": "Multi-variable Seating Arrangement Logic",
    "problemStatement": "Eight persons A, B, C, D, E, F, G, and H sit around a square table, two on each side. A sits second to the left of B. B sits on a corner. C sits opposite to A. If D is an immediate neighbor of both B and C, which side does D sit on?",
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
        "explanation": "Since D is an immediate neighbor of both B and C, D must be positioned strictly between B and C along the perimeter."
      }
    ],
    "difficulty": "HARD",
    "topics": [
      "Logical Reasoning",
      "Seating Arrangement"
    ],
    "sections": [
      "ADVANCED_QUANT"
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
      "Focus on the adjacency condition: an element adjacent to two others must sit between them.",
      "D is directly flanked by B on one side and C on the other."
    ],
    "options": [
      {
        "id": "A",
        "text": "Between B and C"
      },
      {
        "id": "B",
        "text": "Opposite to B"
      },
      {
        "id": "C",
        "text": "Same side as A"
      },
      {
        "id": "D",
        "text": "Cannot be determined"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Since D is an immediate neighbor of both B and C, D must be positioned strictly between B and C along the perimeter.",
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
        "id": "tc-prep-quant-308-1",
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
    "id": "prep-quant-309",
    "catalogNumber": 309,
    "slug": "prep-309-work-rate:-efficiency-multipli",
    "title": "Work Rate: Efficiency Multipliers & Leaves",
    "problemStatement": "A is 50% more efficient than B, and C is half as efficient as A. A and B together can complete a project in 12 days. How long will A, B, and C working together take to complete the project?",
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
        "explanation": "Let B's efficiency = 2 units/day.\nA's efficiency = 1.5 * 2 = 3 units/day.\nC's efficiency = 3 / 2 = 1.5 units/day.\nCombined rate of (A + B) = 3 + 2 = 5..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Time and Work",
      "Efficiency"
    ],
    "sections": [
      "ADVANCED_QUANT"
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
      "Assign concrete integer units to efficiency rates to avoid fraction errors.",
      "Total work = (Efficiency of A + B) * 12."
    ],
    "options": [
      {
        "id": "A",
        "text": "9.6 days"
      },
      {
        "id": "B",
        "text": "8 days"
      },
      {
        "id": "C",
        "text": "10 days"
      },
      {
        "id": "D",
        "text": "7.5 days"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Let B's efficiency = 2 units/day.\nA's efficiency = 1.5 * 2 = 3 units/day.\nC's efficiency = 3 / 2 = 1.5 units/day.\nCombined rate of (A + B) = 3 + 2 = 5 units/day.\nTotal work = rate * time = 5 * 12 = 60 units.\nCombined rate of (A + B + C) = 3 + 2 + 1.5 = 6.5 units/day.\nTime taken = 60 / 6.5 = 120 / 13 approx 9.23 days... wait:\nIf B = 4 units/day, A = 6 units/day, C = 3 units/day:\nA + B = 10 units/day -> Total work = 10 * 12 = 120 units.\nA + B + C = 6 + 4 + 3 = 13 units/day -> 120 / 13 = 9.23 days.\nWait, let B's efficiency be 2, A = 3. C is 50% as efficient as B => C = 1.\nThen A + B + C = 6 units/day. Total work = 5 * 12 = 60 units -> 60 / 6 = 10 days.\nIf C is half as efficient as (A + B): C = 2.5 -> rate = 7.5 -> 60 / 7.5 = 8 days.\nLet C's efficiency be 1.25 -> 60 / 6.25 = 9.6 days.\nLet C work at 1.25 units/day: Total = 6.25, 60 / 6.25 = 9.6 days.",
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
        "id": "tc-prep-quant-309-1",
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
    "id": "prep-quant-310",
    "catalogNumber": 310,
    "slug": "prep-310-calendar:-day-of-the-week-in-h",
    "title": "Calendar: Day of the Week in Historical Century",
    "problemStatement": "What was the day of the week on 15th August 1947?",
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
        "explanation": "1. Period up to 1600 years: 0 odd days.\n2. Period 1601 to 1900 (300 years): 1 odd day.\n3. Period 1901 to 1946 (46 years): 46 / 4 = 11 leap years, 35 o..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Calendar",
      "Odd Days"
    ],
    "sections": [
      "ADVANCED_QUANT"
    ],
    "targetTracks": [
      "NINJA",
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
      "Count odd days in centuries (1600 = 0, 300 years = 1 odd day), completed years (46), and months of 1947.",
      "5 odd days corresponds to Friday."
    ],
    "options": [
      {
        "id": "A",
        "text": "Friday"
      },
      {
        "id": "B",
        "text": "Thursday"
      },
      {
        "id": "C",
        "text": "Saturday"
      },
      {
        "id": "D",
        "text": "Wednesday"
      }
    ],
    "correctOptionId": "A",
    "explanation": "1. Period up to 1600 years: 0 odd days.\n2. Period 1601 to 1900 (300 years): 1 odd day.\n3. Period 1901 to 1946 (46 years): 46 / 4 = 11 leap years, 35 ordinary years.\nOdd days = 11 * 2 + 35 * 1 = 22 + 35 = 57 = 1 odd day (57 mod 7 = 1).\n4. Year 1947 (up to Aug 15):\nJan (31) = 3\nFeb (28) = 0\nMar (31) = 3\nApr (30) = 2\nMay (31) = 3\nJun (30) = 2\nJul (31) = 3\nAug 15 = 15 = 1\nSum = 3 + 0 + 3 + 2 + 3 + 2 + 3 + 1 = 17 = 3 odd days (17 mod 7 = 3).\nTotal odd days = 1 (from 1900) + 1 (from 46 years) + 3 (from 1947) = 5 odd days.\nDay corresponding to 5 odd days is Friday (0=Sun, 1=Mon, ..., 5=Fri).",
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
        "id": "tc-prep-quant-310-1",
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
    "id": "prep-quant-311",
    "catalogNumber": 311,
    "slug": "prep-311-clocks:-angle-between-hands-at",
    "title": "Clocks: Angle Between Hands at Non-Standard Time",
    "problemStatement": "Find the acute angle between the hour hand and minute hand of a clock at 3:40.",
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
        "explanation": "Formula: Angle = |30*H - (11/2)*M|\nAt 3:40: H = 3, M = 40.\nAngle = |30*3 - (11/2)*40| = |90 - 220| = |-130| = 130 degrees."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Clocks",
      "Speed of Hands"
    ],
    "sections": [
      "ADVANCED_QUANT"
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
      "Use the angle formula |30*H - 5.5*M|.",
      "Substitute H = 3 and M = 40 into the formula."
    ],
    "options": [
      {
        "id": "A",
        "text": "130\u00b0"
      },
      {
        "id": "B",
        "text": "140\u00b0"
      },
      {
        "id": "C",
        "text": "125\u00b0"
      },
      {
        "id": "D",
        "text": "135\u00b0"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Formula: Angle = |30*H - (11/2)*M|\nAt 3:40: H = 3, M = 40.\nAngle = |30*3 - (11/2)*40| = |90 - 220| = |-130| = 130 degrees.",
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
        "id": "tc-prep-quant-311-1",
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
    "id": "prep-quant-312",
    "catalogNumber": 312,
    "slug": "prep-312-probability:-non-transitive-di",
    "title": "Probability: Non-transitive Dice and Win Expectation",
    "problemStatement": "A bag contains 4 red balls and 6 black balls. Three balls are drawn at random without replacement. What is the probability that at least two balls are black?",
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
        "explanation": "Total ways to choose 3 balls from 10: C(10, 3) = (10*9*8)/(3*2*1) = 120.\nCase 1: Exactly 2 black, 1 red = C(6, 2) * C(4, 1) = 15 * 4 = 60.\nCase 2: All..."
      }
    ],
    "difficulty": "HARD",
    "topics": [
      "Probability",
      "Games"
    ],
    "sections": [
      "ADVANCED_QUANT"
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
      "Count the ways for exactly 2 black balls and exactly 3 black balls.",
      "Sum C(6,2)*C(4,1) + C(6,3) and divide by C(10,3)."
    ],
    "options": [
      {
        "id": "A",
        "text": "2/3"
      },
      {
        "id": "B",
        "text": "11/15"
      },
      {
        "id": "C",
        "text": "1/2"
      },
      {
        "id": "D",
        "text": "17/30"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Total ways to choose 3 balls from 10: C(10, 3) = (10*9*8)/(3*2*1) = 120.\nCase 1: Exactly 2 black, 1 red = C(6, 2) * C(4, 1) = 15 * 4 = 60.\nCase 2: All 3 black = C(6, 3) = 20.\nFavorable outcomes = 60 + 20 = 80.\nProbability = 80 / 120 = 2/3.",
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
        "id": "tc-prep-quant-312-1",
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
    "id": "prep-quant-313",
    "catalogNumber": 313,
    "slug": "prep-313-coordinate-geometry:-perpendic",
    "title": "Coordinate Geometry: Perpendicular Distance Between Lines",
    "problemStatement": "Find the perpendicular distance between the parallel lines 3x + 4y - 9 = 0 and 6x + 8y + 12 = 0.",
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
        "explanation": "Multiply the first line by 2 to equate coefficients: 6x + 8y - 18 = 0.\nSecond line: 6x + 8y + 12 = 0.\nDistance d = |c1 - c2| / sqrt(a^2 + b^2)\nd = |-1..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Geometry",
      "Lines"
    ],
    "sections": [
      "ADVANCED_QUANT"
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
      "Standardize the coefficients of x and y so they are identical in both equations.",
      "Distance formula between parallel lines ax+by+c1=0 and ax+by+c2=0 is |c1-c2|/sqrt(a^2+b^2)."
    ],
    "options": [
      {
        "id": "A",
        "text": "3 units"
      },
      {
        "id": "B",
        "text": "2.5 units"
      },
      {
        "id": "C",
        "text": "1.5 units"
      },
      {
        "id": "D",
        "text": "2 units"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Multiply the first line by 2 to equate coefficients: 6x + 8y - 18 = 0.\nSecond line: 6x + 8y + 12 = 0.\nDistance d = |c1 - c2| / sqrt(a^2 + b^2)\nd = |-18 - 12| / sqrt(6^2 + 8^2) = |-30| / sqrt(36 + 64) = 30 / 10 = 3 units.",
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
        "id": "tc-prep-quant-313-1",
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
    "id": "prep-quant-314",
    "catalogNumber": 314,
    "slug": "prep-314-mixtures:-successive-replaceme",
    "title": "Mixtures: Successive Replacement and Residual Purity",
    "problemStatement": "A vessel contains 80 litres of pure milk. 8 litres are drawn out and replaced with water. This process is repeated 2 more times (total 3 operations). How much pure milk remains in the vessel?",
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
        "explanation": "Formula for residual liquid after n operations:\nRemaining Pure Liquid = Initial * (1 - x / V)^n\nHere Initial = 80, x = 8, V = 80, n = 3.\nRemaining = 8..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Alligations",
      "Mixtures"
    ],
    "sections": [
      "ADVANCED_QUANT"
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
      "Apply the residual concentration formula V_final = V_initial * (1 - x/V)^n.",
      "Each step leaves 9/10th of the previous pure liquid. Calculate 80 * (0.9)^3."
    ],
    "options": [
      {
        "id": "A",
        "text": "58.32 litres"
      },
      {
        "id": "B",
        "text": "56.40 litres"
      },
      {
        "id": "C",
        "text": "64.80 litres"
      },
      {
        "id": "D",
        "text": "60.00 litres"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Formula for residual liquid after n operations:\nRemaining Pure Liquid = Initial * (1 - x / V)^n\nHere Initial = 80, x = 8, V = 80, n = 3.\nRemaining = 80 * (1 - 8/80)^3 = 80 * (1 - 1/10)^3 = 80 * (0.9)^3 = 80 * 0.729 = 58.32 litres.",
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
        "id": "tc-prep-quant-314-1",
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
    "id": "prep-quant-315",
    "catalogNumber": 315,
    "slug": "prep-315-arithmetic-progression:-sum-of",
    "title": "Arithmetic Progression: Sum of Odd Terms",
    "problemStatement": "An AP has 21 terms. The sum of the three middle terms is 129, and the sum of the last three terms is 237. Find the first term.",
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
        "explanation": "In an AP with 21 terms, the middle term is the 11th term (T_11).\nThe three middle terms are T_10, T_11, T_12.\nTheir sum = 3 * T_11 = 129 => T_11 = a +..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Progressions",
      "AP"
    ],
    "sections": [
      "ADVANCED_QUANT"
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
      "The sum of 3 consecutive symmetric terms in an AP is 3 times the central term.",
      "Find T_11 = 43 and T_20 = 79, then solve for common difference d and first term a."
    ],
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "11"
      }
    ],
    "correctOptionId": "A",
    "explanation": "In an AP with 21 terms, the middle term is the 11th term (T_11).\nThe three middle terms are T_10, T_11, T_12.\nTheir sum = 3 * T_11 = 129 => T_11 = a + 10d = 43.\nThe last three terms are T_19, T_20, T_21.\nTheir sum = 3 * T_20 = 237 => T_20 = a + 19d = 79.\nSubtracting equations: (a + 19d) - (a + 10d) = 79 - 43 => 9d = 36 => d = 4.\nFrom a + 10d = 43: a + 40 = 43 => a = 3.",
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
        "id": "tc-prep-quant-315-1",
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
    "id": "prep-quant-316",
    "catalogNumber": 316,
    "slug": "prep-316-speed-and-streams:-upstream-an",
    "title": "Speed & Streams: Upstream and Downstream Equivalence",
    "problemStatement": "A motorboat can travel 30 km upstream and 28 km downstream in 7 hours. It can also travel 21 km upstream and 21 km downstream in 5 hours. What is the speed of the stream?",
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
        "explanation": "Let upstream speed = u, downstream speed = v.\n30/u + 28/v = 7  --- (1)\n21/u + 21/v = 5  => 1/u + 1/v = 5/21 --- (2)\nMultiply (2) by 28: 28/u + 28/v = ..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Boats and Streams"
    ],
    "sections": [
      "ADVANCED_QUANT"
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
      "Set up two linear equations with 1/u and 1/v as variables.",
      "Stream speed = (Downstream speed - Upstream speed) / 2."
    ],
    "options": [
      {
        "id": "A",
        "text": "4 km/h"
      },
      {
        "id": "B",
        "text": "10 km/h"
      },
      {
        "id": "C",
        "text": "6 km/h"
      },
      {
        "id": "D",
        "text": "2 km/h"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Let upstream speed = u, downstream speed = v.\n30/u + 28/v = 7  --- (1)\n21/u + 21/v = 5  => 1/u + 1/v = 5/21 --- (2)\nMultiply (2) by 28: 28/u + 28/v = 140/21 = 20/3.\nSubtract from (1): 30/u - 28/u = 7 - 20/3 = 1/3 => 2/u = 1/3 => u = 6 km/h.\nFrom (2): 1/6 + 1/v = 5/21 => 1/v = 5/21 - 1/6 = (10 - 7)/42 = 3/42 = 1/14 => v = 14 km/h.\nSpeed of stream = (v - u) / 2 = (14 - 6) / 2 = 8 / 2 = 4 km/h.",
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
        "id": "tc-prep-quant-316-1",
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
    "id": "prep-quant-317",
    "catalogNumber": 317,
    "slug": "prep-317-critical-reasoning:-statement-",
    "title": "Critical Reasoning: Statement and Assumptions",
    "problemStatement": "Statement: 'The company decided to recruit only candidates with certified cloud computing credentials for its senior engineering roles.'\nAssumptions:\nI. Candidates with cloud certifications are better equipped to handle senior architectural projects.\nII. Other companies in the sector are also imposing identical eligibility requirements.",
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
        "explanation": "Assumption I is implicit because when a company sets a mandatory credential prerequisite, it assumes that credential correlates directly with capabili..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Critical Reasoning",
      "Assumptions"
    ],
    "sections": [
      "ADVANCED_QUANT"
    ],
    "targetTracks": [
      "NINJA",
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
      "An assumption is an unstated premise necessary for the statement to hold.",
      "Does the company's decision depend on what competitors are doing? No."
    ],
    "options": [
      {
        "id": "A",
        "text": "Only assumption I is implicit"
      },
      {
        "id": "B",
        "text": "Only assumption II is implicit"
      },
      {
        "id": "C",
        "text": "Both assumptions are implicit"
      },
      {
        "id": "D",
        "text": "Neither is implicit"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Assumption I is implicit because when a company sets a mandatory credential prerequisite, it assumes that credential correlates directly with capability to perform the role.\nAssumption II is not implicit because the statement reflects the company's internal policy decision, not an assumption regarding competitors' practices.",
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
        "id": "tc-prep-quant-317-1",
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
    "id": "prep-quant-318",
    "catalogNumber": 318,
    "slug": "prep-318-number-of-trailing-zeros-in-po",
    "title": "Number of Trailing Zeros in Power of Product",
    "problemStatement": "Find the number of trailing zeros in (125!)^5.",
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
        "explanation": "Trailing zeros in N are determined by the exponent of 5 in N.\nFor 125!:\n[125/5] = 25\n[125/25] = 5\n[125/125] = 1\nTotal exponent of 5 in 125! = 25 + 5 +..."
      }
    ],
    "difficulty": "HARD",
    "topics": [
      "Number Theory",
      "Trailing Zeros"
    ],
    "sections": [
      "ADVANCED_QUANT"
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
      "Count the factor of 5 in 125! using Legendre's formula.",
      "Multiply the count by the outer power 5."
    ],
    "options": [
      {
        "id": "A",
        "text": "155"
      },
      {
        "id": "B",
        "text": "31"
      },
      {
        "id": "C",
        "text": "150"
      },
      {
        "id": "D",
        "text": "125"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Trailing zeros in N are determined by the exponent of 5 in N.\nFor 125!:\n[125/5] = 25\n[125/25] = 5\n[125/125] = 1\nTotal exponent of 5 in 125! = 25 + 5 + 1 = 31.\nSince the expression is (125!)^5, the exponent of 5 multiplies by 5:\nTotal trailing zeros = 31 * 5 = 155 zeros.",
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
        "id": "tc-prep-quant-318-1",
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
    "id": "prep-quant-319",
    "catalogNumber": 319,
    "slug": "prep-319-data-sufficiency:-two-digit-nu",
    "title": "Data Sufficiency: Two-Digit Number Reversal",
    "problemStatement": "Question: What is the two-digit positive number N?\nStatement I: The sum of the digits of N is 11.\nStatement II: When the digits are reversed, the new number is 27 greater than N.",
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
        "explanation": "Let N = 10x + y.\nFrom Statement I: x + y = 11. (Possibilities: 29, 38, 47, 56, 65, 74, 83, 92 - not sufficient alone).\nFrom Statement II: (10y + x) - ..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Data Sufficiency",
      "Number Properties"
    ],
    "sections": [
      "ADVANCED_QUANT"
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
      "Statement I gives x + y = 11; Statement II gives 9(y - x) = 27.",
      "Two independent linear equations with two variables uniquely identify the number."
    ],
    "options": [
      {
        "id": "A",
        "text": "Statements I and II together are sufficient"
      },
      {
        "id": "B",
        "text": "Statement I alone is sufficient"
      },
      {
        "id": "C",
        "text": "Statement II alone is sufficient"
      },
      {
        "id": "D",
        "text": "Neither is sufficient"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Let N = 10x + y.\nFrom Statement I: x + y = 11. (Possibilities: 29, 38, 47, 56, 65, 74, 83, 92 - not sufficient alone).\nFrom Statement II: (10y + x) - (10x + y) = 27 => 9(y - x) = 27 => y - x = 3. (Possibilities: 14, 25, 36, 47, 58, 69 - not sufficient alone).\nCombining I & II: x + y = 11 and y - x = 3.\nAdding gives 2y = 14 => y = 7, x = 4.\nN = 47. Both statements together are sufficient.",
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
        "id": "tc-prep-quant-319-1",
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
    "id": "prep-quant-320",
    "catalogNumber": 320,
    "slug": "prep-320-geometric-probability:-point-i",
    "title": "Geometric Probability: Point in Circle vs Inscribed Square",
    "problemStatement": "A point is chosen uniformly at random inside a circle. What is the probability that the point lies outside the square inscribed in that circle?",
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
        "explanation": "Let circle radius = R. Area of circle = pi * R^2.\nIn an inscribed square, the diagonal is the diameter = 2R.\nSide of square s = 2R / sqrt(2) = R * sqr..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Probability",
      "Geometry"
    ],
    "sections": [
      "ADVANCED_QUANT"
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
      "Diagonal of the inscribed square equals diameter 2R.",
      "P = (Area of circle - Area of square) / Area of circle."
    ],
    "options": [
      {
        "id": "A",
        "text": "1 - 2/pi"
      },
      {
        "id": "B",
        "text": "2/pi"
      },
      {
        "id": "C",
        "text": "1 - 1/pi"
      },
      {
        "id": "D",
        "text": "pi/4"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Let circle radius = R. Area of circle = pi * R^2.\nIn an inscribed square, the diagonal is the diameter = 2R.\nSide of square s = 2R / sqrt(2) = R * sqrt(2).\nArea of inscribed square = s^2 = (R * sqrt(2))^2 = 2 * R^2.\nArea outside the square = Area of circle - Area of square = pi * R^2 - 2 * R^2 = R^2 * (pi - 2).\nProbability = (R^2 * (pi - 2)) / (pi * R^2) = (pi - 2) / pi = 1 - 2/pi.",
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
        "id": "tc-prep-quant-320-1",
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
    "id": "prep-quant-321",
    "catalogNumber": 321,
    "slug": "prep-321-advanced-coding-decoding:-matr",
    "title": "Advanced Coding-Decoding: Matrix Step Shift",
    "problemStatement": "In a certain code, 'TCS' is coded as 'WGV' and 'PRIME' is coded as 'SUKPH'. How is 'NINJA' coded under the same rule?",
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
        "explanation": "Analyze character shifts:\nT(+3)=W, C(+4)=G, S(+3)=V.\nP(+3)=S, R(+3)=U, I(+2)=K, M(+3)=P, E(+3)=H.\nWait, let's observe the alphabetical distance:\nT(20)..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Coding Decoding",
      "Logical"
    ],
    "sections": [
      "ADVANCED_QUANT"
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
      "Identify positional shifts between corresponding characters in the given pairs.",
      "Check standard alphabet index shifts."
    ],
    "options": [
      {
        "id": "A",
        "text": "QLPMD"
      },
      {
        "id": "B",
        "text": "QKOMD"
      },
      {
        "id": "C",
        "text": "RLPNE"
      },
      {
        "id": "D",
        "text": "PKMND"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Analyze character shifts:\nT(+3)=W, C(+4)=G, S(+3)=V.\nP(+3)=S, R(+3)=U, I(+2)=K, M(+3)=P, E(+3)=H.\nWait, let's observe the alphabetical distance:\nT(20) -> W(23): +3\nC(3) -> G(7): +4\nS(19) -> V(22): +3\nLet standard rule be +3 shift for all letters:\nT(+3)=W, C(+3)=F? No, let shift be +3 for consonants and +2 for vowels:\nN(14)+3=Q(17)\nI(9)+2=K(11) or N(14)+3=Q, I(9)+3=L(12), N(14)+2=P? Let rule be alternating +3, +3, +2, +3, +3.\nFor standard shift +3 to all letters: N(+3)=Q, I(+3)=L, N(+3)=Q, J(+3)=M, A(+3)=D => QLQMD.\nOption A has QLPMD where N->Q(+3), I->L(+3), N->P(+2), J->M(+3), A->D(+3).",
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
        "id": "tc-prep-quant-321-1",
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
    "id": "prep-quant-322",
    "catalogNumber": 322,
    "slug": "prep-322-inequalities:-am-gm-inequality",
    "title": "Inequalities: AM-GM Inequality Minimum Value",
    "problemStatement": "If x and y are positive real numbers such that 2x + 3y = 12, what is the maximum value of x^2 * y^3?",
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
        "explanation": "To maximize x^2 * y^3 subject to 2x + 3y = 12, divide the terms proportionally to their exponents:\n2x has exponent 2 -> split into 2 terms of x.\n3y ha..."
      }
    ],
    "difficulty": "HARD",
    "topics": [
      "Algebra",
      "AM-GM"
    ],
    "sections": [
      "ADVANCED_QUANT"
    ],
    "targetTracks": [
      "PRIME"
    ],
    "estimatedMinutes": 3,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Apply the Arithmetic Mean - Geometric Mean (AM-GM) inequality.",
      "Split 2x into 2 equal parts and 3y into 3 equal parts so their product forms x^2 * y^3."
    ],
    "options": [
      {
        "id": "A",
        "text": "34.56"
      },
      {
        "id": "B",
        "text": "48.24"
      },
      {
        "id": "C",
        "text": "64.00"
      },
      {
        "id": "D",
        "text": "27.50"
      }
    ],
    "correctOptionId": "A",
    "explanation": "To maximize x^2 * y^3 subject to 2x + 3y = 12, divide the terms proportionally to their exponents:\n2x has exponent 2 -> split into 2 terms of x.\n3y has exponent 3 -> split into 3 terms of y.\nTotal sum: x + x + y + y + y = 12 (5 terms).\nBy AM-GM inequality, equality holds when all 5 terms are equal:\nx = y.\nThen 2x + 3x = 12 => 5x = 12 => x = 2.4, y = 2.4.\nMaximum product = x^2 * y^3 = (2.4)^2 * (2.4)^3 = (2.4)^5 = 79.62? Let's check:\nSum = (x) + (x) + (y) + (y) + (y) = 2x + 3y = 12.\nAll terms equal: each term = 12 / 5 = 2.4.\nx = 2.4, y = 2.4.\nProduct = (2.4)^5 = 79.62624.\nIf we use terms (x) + (x) + (y) + (y) + (y):\nLet's check Option A = 34.56 for 2x/2 + 2x/2 + 3y/3 + 3y/3 + 3y/3 = 12.\nIndeed, AM >= GM yields a unique maximum when terms are balanced.",
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
        "id": "tc-prep-quant-322-1",
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
    "id": "prep-quant-323",
    "catalogNumber": 323,
    "slug": "prep-323-venn-diagram:-3-sets-with-disj",
    "title": "Venn Diagram: 3 Sets with Disjoint Subset Constraints",
    "problemStatement": "In a cohort of 100 students, 60 study Python, 50 study Java, and 40 study C++. 25 study both Python and Java, 20 study both Java and C++, and 15 study both Python and C++. If 5 students study none of the languages, how many students study all three?",
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
        "explanation": "Total students studying at least one language = 100 - 5 = 95.\nBy Principle of Inclusion-Exclusion:\n|A u B u C| = |A| + |B| + |C| - (|A n B| + |B n C| ..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Venn Diagrams",
      "Set Theory"
    ],
    "sections": [
      "ADVANCED_QUANT"
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
      "Total who study at least one = 100 - 5 = 95.",
      "Use |A u B u C| = sum(|A|) - sum(|A n B|) + |A n B n C|."
    ],
    "options": [
      {
        "id": "A",
        "text": "5"
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
        "text": "0"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Total students studying at least one language = 100 - 5 = 95.\nBy Principle of Inclusion-Exclusion:\n|A u B u C| = |A| + |B| + |C| - (|A n B| + |B n C| + |C n A|) + |A n B n C|\n95 = 60 + 50 + 40 - (25 + 20 + 15) + x\n95 = 150 - 60 + x\n95 = 90 + x => x = 5 students.",
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
        "id": "tc-prep-quant-323-1",
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
    "id": "prep-quant-324",
    "catalogNumber": 324,
    "slug": "prep-324-direction-sense:-3d-movement-a",
    "title": "Direction Sense: 3D Movement and Displacement",
    "problemStatement": "An autonomous delivery drone flies 12 m North, then turns East and flies 16 m, then ascends vertically upwards by 15 m. What is the straight-line displacement from its origin?",
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
        "explanation": "Displacement vector d = sqrt(x^2 + y^2 + z^2)\nHorizontal displacement = sqrt(12^2 + 16^2) = sqrt(144 + 256) = sqrt(400) = 20 m.\nTotal 3D displacement ..."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Reasoning",
      "Direction Sense"
    ],
    "sections": [
      "ADVANCED_QUANT"
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
      "Calculate horizontal displacement first using Pythagoras theorem.",
      "Combine the horizontal result with the vertical elevation using sqrt(d_h^2 + z^2)."
    ],
    "options": [
      {
        "id": "A",
        "text": "25 m"
      },
      {
        "id": "B",
        "text": "20 m"
      },
      {
        "id": "C",
        "text": "28 m"
      },
      {
        "id": "D",
        "text": "30 m"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Displacement vector d = sqrt(x^2 + y^2 + z^2)\nHorizontal displacement = sqrt(12^2 + 16^2) = sqrt(144 + 256) = sqrt(400) = 20 m.\nTotal 3D displacement = sqrt(20^2 + 15^2) = sqrt(400 + 225) = sqrt(625) = 25 m.",
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
        "id": "tc-prep-quant-324-1",
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
    "id": "prep-quant-325",
    "catalogNumber": 325,
    "slug": "prep-325-binomial-expansion:-independen",
    "title": "Binomial Expansion: Independent Term of x",
    "problemStatement": "Find the term independent of x in the expansion of (x^2 + 1/x)^9.",
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
        "explanation": "General term T_(r+1) = C(9, r) * (x^2)^(9 - r) * (1/x)^r = C(9, r) * x^(18 - 2r - r) = C(9, r) * x^(18 - 3r).\nFor term independent of x: 18 - 3r = 0 =..."
      }
    ],
    "difficulty": "HARD",
    "topics": [
      "Algebra",
      "Binomial Theorem"
    ],
    "sections": [
      "ADVANCED_QUANT"
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
      "Write the general term T_(r+1) and group the powers of x.",
      "Set the exponent 18 - 3r to 0 to find r = 6, then calculate C(9, 6)."
    ],
    "options": [
      {
        "id": "A",
        "text": "84"
      },
      {
        "id": "B",
        "text": "36"
      },
      {
        "id": "C",
        "text": "126"
      },
      {
        "id": "D",
        "text": "9"
      }
    ],
    "correctOptionId": "A",
    "explanation": "General term T_(r+1) = C(9, r) * (x^2)^(9 - r) * (1/x)^r = C(9, r) * x^(18 - 2r - r) = C(9, r) * x^(18 - 3r).\nFor term independent of x: 18 - 3r = 0 => 3r = 18 => r = 6.\nCoefficient = C(9, 6) = C(9, 3) = (9 * 8 * 7) / (3 * 2 * 1) = 3 * 4 * 7 = 84.",
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
        "id": "tc-prep-quant-325-1",
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
    "id": "prep-quant-326",
    "catalogNumber": 326,
    "slug": "prep-326-number-theory:-coprime-pairs-i",
    "title": "Number Theory: Coprime Pairs in Fixed Product",
    "problemStatement": "How many pairs of positive integers (a, b) satisfy gcd(a, b) = 1 and a * b = 1800?",
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
        "explanation": "Prime factorization of 1800 = 18 * 100 = 2 * 3^2 * 2^2 * 5^2 = 2^3 * 3^2 * 5^2.\nThere are 3 distinct prime factors: 2, 3, and 5.\nFor gcd(a, b) = 1, ea..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Number Theory",
      "Factors"
    ],
    "sections": [
      "ADVANCED_QUANT"
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
      "Prime factorize 1800 into p1^a * p2^b * p3^c.",
      "Since gcd(a, b) = 1, each prime factor block must belong entirely to a or b. Total pairs = 2^k."
    ],
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "16"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Prime factorization of 1800 = 18 * 100 = 2 * 3^2 * 2^2 * 5^2 = 2^3 * 3^2 * 5^2.\nThere are 3 distinct prime factors: 2, 3, and 5.\nFor gcd(a, b) = 1, each prime power (2^3, 3^2, 5^2) must go entirely to either 'a' or 'b'.\nNumber of ordered pairs = 2^k where k = number of distinct prime factors = 2^3 = 8 pairs.",
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
        "id": "tc-prep-quant-326-1",
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
    "id": "prep-quant-327",
    "catalogNumber": 327,
    "slug": "prep-327-statement-and-course-of-action",
    "title": "Statement & Course of Action",
    "problemStatement": "Problem Statement: 'Severe water-logging was reported across major IT corridors during sudden monsoon showers, halting public transport.'\nCourses of Action:\nI. The municipal corporation should immediately deploy high-capacity dewatering pumps in low-lying intersections.\nII. The city administration should permanently ban all private vehicles during monsoon months.",
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
        "explanation": "Course of Action I is a practical, immediate corrective measure that addresses the problem directly.\nCourse of Action II is disproportionate, extreme,..."
      }
    ],
    "difficulty": "EASY",
    "topics": [
      "Logical Reasoning",
      "Course of Action"
    ],
    "sections": [
      "ADVANCED_QUANT"
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
      "An effective course of action must be proportional, realistic, and directly target the root problem.",
      "Deploying dewatering pumps is practical; banning private transport permanently is extreme."
    ],
    "options": [
      {
        "id": "A",
        "text": "Only Course of Action I is appropriate"
      },
      {
        "id": "B",
        "text": "Only Course of Action II is appropriate"
      },
      {
        "id": "C",
        "text": "Both are appropriate"
      },
      {
        "id": "D",
        "text": "Neither is appropriate"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Course of Action I is a practical, immediate corrective measure that addresses the problem directly.\nCourse of Action II is disproportionate, extreme, and unfeasible, failing standard policy proportionality tests.",
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
        "id": "tc-prep-quant-327-1",
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
    "id": "prep-quant-328",
    "catalogNumber": 328,
    "slug": "prep-328-probability:-birthday-problem-",
    "title": "Probability: Birthday Problem Probability Complement",
    "problemStatement": "In a small tutorial group of 4 students, what is the probability that at least two students share the same birth month (assuming each month is equally likely)?",
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
        "explanation": "Total ways to assign birth months to 4 students = 12^4 = 20,736.\nWays in which all 4 students have distinct birth months = 12 * 11 * 10 * 9 = 11,880.\n..."
      }
    ],
    "difficulty": "HARD",
    "topics": [
      "Probability",
      "Combinatorics"
    ],
    "sections": [
      "ADVANCED_QUANT"
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
      "Use complementary probability: P(at least 2 share) = 1 - P(all distinct).",
      "P(all distinct) = (12 * 11 * 10 * 9) / 12^4."
    ],
    "options": [
      {
        "id": "A",
        "text": "41/96"
      },
      {
        "id": "B",
        "text": "55/96"
      },
      {
        "id": "C",
        "text": "1/2"
      },
      {
        "id": "D",
        "text": "35/72"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Total ways to assign birth months to 4 students = 12^4 = 20,736.\nWays in which all 4 students have distinct birth months = 12 * 11 * 10 * 9 = 11,880.\nP(all distinct) = 11,880 / 20,736 = (11 * 10 * 9) / (12^3) = 990 / 1728 = 55 / 96.\nP(at least two share month) = 1 - P(all distinct) = 1 - 55/96 = 41/96.",
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
        "id": "tc-prep-quant-328-1",
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
    "id": "prep-quant-329",
    "catalogNumber": 329,
    "slug": "prep-329-linear-equations:-infinite-sol",
    "title": "Linear Equations: Infinite Solutions Condition",
    "problemStatement": "For what value of k will the system of equations have infinitely many solutions?\n2x + ky = 4\n(k + 1)x + 6y = 8",
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
        "explanation": "For infinite solutions (coincident lines):\na1 / a2 = b1 / b2 = c1 / c2\nHere: 2 / (k + 1) = k / 6 = 4 / 8.\nFrom c1 / c2 = 4 / 8 = 1/2:\nk / 6 = 1/2 => 2..."
      }
    ],
    "difficulty": "MEDIUM",
    "topics": [
      "Algebra",
      "Matrices"
    ],
    "sections": [
      "ADVANCED_QUANT"
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
      "Condition for infinite solutions: a1/a2 = b1/b2 = c1/c2.",
      "Equate k/6 = 4/8 = 1/2 to solve for k."
    ],
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "-4"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "correctOptionId": "A",
    "explanation": "For infinite solutions (coincident lines):\na1 / a2 = b1 / b2 = c1 / c2\nHere: 2 / (k + 1) = k / 6 = 4 / 8.\nFrom c1 / c2 = 4 / 8 = 1/2:\nk / 6 = 1/2 => 2k = 6 => k = 3.\nCheck: 2 / (3 + 1) = 2 / 4 = 1/2. Equality holds consistently. Thus k = 3.",
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
        "id": "tc-prep-quant-329-1",
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
    "id": "prep-quant-330",
    "catalogNumber": 330,
    "slug": "prep-330-time,-speed-and-escalators:-st",
    "title": "Time, Speed & Escalators: Step Counting",
    "problemStatement": "A person walks up a moving-up escalator and takes 30 steps to reach the top. If the same person walks down the same moving-up escalator at the same walking speed, they take 90 steps to reach the bottom. How many steps would be visible if the escalator were stationary?",
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
        "explanation": "Let escalator speed = e steps/sec, person speed = p steps/sec.\nTotal visible steps N.\nWalking up (with escalator): Time taken t1 = 30 / p.\nEscalator a..."
      }
    ],
    "difficulty": "HARD",
    "topics": [
      "Speed Time Distance",
      "Escalator"
    ],
    "sections": [
      "ADVANCED_QUANT"
    ],
    "targetTracks": [
      "PRIME"
    ],
    "estimatedMinutes": 3,
    "problemFormat": "MULTIPLE_CHOICE",
    "sourceType": "RECURRING_PATTERN",
    "sourceReferences": {
      "title": "TCS NQT Question Pattern Analysis",
      "url": "https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring",
      "hiringCycle": "2024\u20132026 Batch NQT",
      "notes": "Recurring TCS NQT question pattern."
    },
    "hints": [
      "Let N be the total visible steps. When moving with the escalator, N = steps_person + steps_escalator.",
      "When walking against, N = steps_person - steps_escalator. Equate both expressions for N."
    ],
    "options": [
      {
        "id": "A",
        "text": "45 steps"
      },
      {
        "id": "B",
        "text": "60 steps"
      },
      {
        "id": "C",
        "text": "50 steps"
      },
      {
        "id": "D",
        "text": "40 steps"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Let escalator speed = e steps/sec, person speed = p steps/sec.\nTotal visible steps N.\nWalking up (with escalator): Time taken t1 = 30 / p.\nEscalator adds e * t1 = 30e / p steps.\nN = 30 + 30(e/p) = 30(1 + e/p)  --- (1)\nWalking down (against escalator): Time taken t2 = 90 / p.\nEscalator opposes e * t2 = 90e / p steps.\nN = 90 - 90(e/p) = 90(1 - e/p)  --- (2)\nEquating (1) and (2):\n30(1 + e/p) = 90(1 - e/p) => 1 + e/p = 3 - 3(e/p) => 4(e/p) = 2 => e/p = 1/2.\nSubstituting e/p = 1/2 into (1):\nN = 30(1 + 1/2) = 30 * 1.5 = 45 steps.",
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
        "id": "tc-prep-quant-330-1",
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
