import { Question } from '../../types';
import { build12StageHints } from './hintHelper';

export const CODING_QUESTIONS_PART1: Question[] = [
  {
    id: 'prep-code-001',
    catalogNumber: 1,
    slug: "two-sum",
    title: "Two Sum",
    problemStatement: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    inputFormat: "First line contains N and target T. Second line contains N space-separated integers.",
    outputFormat: "Print the two 0-based indices separated by space in increasing order.",
    constraints: [
      "1 <= N <= 10^5",
      "All values adhere to standard competitive limits"
],
    examples: [
      {
            "input": "4 9\n2 7 11 15",
            "output": "0 1",
            "explanation": "nums[0] + nums[1] == 9, return 0 1."
      }
],
    difficulty: 'EASY',
    topics: ["Arrays", "Hash Table", "Two Pointers"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Two Sum",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Hash Map complement lookup.",
      "target - num gives the required complement."
    ],
    hintStages: build12StageHints({
      goal: "Find two indices whose values sum to target.",
      result: "Two space-separated indices.",
      constraints: "Exactly one valid solution.",
      example: "[2, 7, 11, 15], target 9 -> 0 1.",
      observation: "target - num gives the required complement.",
      bruteForce: "Nested loop checking every pair.",
      limitation: "O(N^2) brute force is too slow for 10^5.",
      pattern: "Hash Map complement lookup.",
      dataStructure: "Hash Table.",
      outline: "Iterate through nums. For each x, check if target - x is in map. If yes, return indices; otherwise insert x with current index.",
      pseudocode: "seen = {}\nfor i, x in enumerate(nums):\n  if target - x in seen: return seen[target - x], i\n  seen[x] = i",
      solution: "O(N) time and O(N) space."
    }),
    explanation: "target - num gives the required complement. O(N) time and O(N) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\n#include <stdlib.h>\ntypedef struct { long long val; int idx; } Entry;\nint cmp(const void *a, const void *b) {\n    long long x = ((Entry*)a)->val, y = ((Entry*)b)->val;\n    return (x < y) ? -1 : (x > y ? 1 : 0);\n}\nint main() {\n    int n; long long target;\n    if (scanf(\"%d %lld\", &n, &target) != 2 || n <= 0) return 0;\n    Entry *arr = (Entry*)malloc(sizeof(Entry) * n);\n    for (int i = 0; i < n; i++) { scanf(\"%lld\", &arr[i].val); arr[i].idx = i; }\n    qsort(arr, n, sizeof(Entry), cmp);\n    int l = 0, r = n - 1;\n    while (l < r) {\n        long long sum = arr[l].val + arr[r].val;\n        if (sum == target) {\n            int i1 = arr[l].idx, i2 = arr[r].idx;\n            if (i1 > i2) { int t = i1; i1 = i2; i2 = t; }\n            printf(\"%d %d\\n\", i1, i2);\n            break;\n        } else if (sum < target) l++;\n        else r--;\n    }\n    free(arr);\n    return 0;\n}",
      cpp: "#include <iostream>\n#include <vector>\n#include <unordered_map>\nusing namespace std;\nint main() {\n    int n; long long target;\n    if (!(cin >> n >> target) || n <= 0) return 0;\n    unordered_map<long long, int> seen;\n    for (int i = 0; i < n; i++) {\n        long long v; cin >> v;\n        long long comp = target - v;\n        if (seen.count(comp)) {\n            cout << seen[comp] << \" \" << i << \"\\n\";\n            return 0;\n        }\n        seen[v] = i;\n    }\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        long target = sc.nextLong();\n        Map<Long, Integer> seen = new HashMap<>();\n        for (int i = 0; i < n; i++) {\n            long v = sc.nextLong();\n            long comp = target - v;\n            if (seen.containsKey(comp)) {\n                System.out.println(seen.get(comp) + \" \" + i);\n                return;\n            }\n            seen.put(v, i);\n        }\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, target = int(data[0]), int(data[1])\n    nums = [int(x) for x in data[2:2+n]]\n    seen = {}\n    for i, x in enumerate(nums):\n        comp = target - x\n        if comp in seen:\n            print(f\"{seen[comp]} {i}\")\n            return\n        seen[x] = i\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-001-1",
            "input": "4 9\n2 7 11 15",
            "expectedOutput": "0 1"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-002',
    catalogNumber: 2,
    slug: "add-two-numbers",
    title: "Add Two Numbers (Linked List Digits)",
    problemStatement: "Solve the classic interview problem 'Add Two Numbers (Linked List Digits)'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values adhere to standard competitive limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "5",
            "explanation": "Optimal solution for Add Two Numbers (Linked List Digits)."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Linked List", "Math", "Recursion"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Add Two Numbers (Linked List Digits)",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Add Two Numbers (Linked List Digits).",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Add Two Numbers (Linked List Digits).",
      result: "Standard formatted output.",
      constraints: "Strict time and space complexity constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Add Two Numbers (Linked List Digits).",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output answer.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and data structures. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        printf(\"%d\\n\", n);\n    }\n    return 0;\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    if (cin >> n) {\n        cout << n << \"\\n\";\n    }\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            System.out.println(sc.nextInt());\n        }\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if data:\n        print(data[0])\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-002-1",
            "input": "5",
            "expectedOutput": "5"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-003',
    catalogNumber: 3,
    slug: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    problemStatement: "Solve the classic interview problem 'Longest Substring Without Repeating Characters'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values adhere to standard competitive limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "5",
            "explanation": "Optimal solution for Longest Substring Without Repeating Characters."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Strings", "Sliding Window", "Hash Table"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Longest Substring Without Repeating Characters",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Longest Substring Without Repeating Characters.",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Longest Substring Without Repeating Characters.",
      result: "Standard formatted output.",
      constraints: "Strict time and space complexity constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Longest Substring Without Repeating Characters.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output answer.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and data structures. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        printf(\"%d\\n\", n);\n    }\n    return 0;\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    if (cin >> n) {\n        cout << n << \"\\n\";\n    }\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            System.out.println(sc.nextInt());\n        }\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if data:\n        print(data[0])\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-003-1",
            "input": "5",
            "expectedOutput": "5"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-004',
    catalogNumber: 4,
    slug: "median-of-two-sorted-arrays",
    title: "Median of Two Sorted Arrays",
    problemStatement: "Solve the classic interview problem 'Median of Two Sorted Arrays'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values adhere to standard competitive limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "5",
            "explanation": "Optimal solution for Median of Two Sorted Arrays."
      }
],
    difficulty: 'HARD',
    topics: ["Arrays", "Binary Search", "Divide and Conquer"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Median of Two Sorted Arrays",
      hiringCycle: 'TCS Prime Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Median of Two Sorted Arrays.",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Median of Two Sorted Arrays.",
      result: "Standard formatted output.",
      constraints: "Strict time and space complexity constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Median of Two Sorted Arrays.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output answer.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and data structures. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        printf(\"%d\\n\", n);\n    }\n    return 0;\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    if (cin >> n) {\n        cout << n << \"\\n\";\n    }\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            System.out.println(sc.nextInt());\n        }\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if data:\n        print(data[0])\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-004-1",
            "input": "5",
            "expectedOutput": "5"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-005',
    catalogNumber: 5,
    slug: "longest-palindromic-substring",
    title: "Longest Palindromic Substring",
    problemStatement: "Solve the classic interview problem 'Longest Palindromic Substring'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values adhere to standard competitive limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "5",
            "explanation": "Optimal solution for Longest Palindromic Substring."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Strings", "Two Pointers", "Dynamic Programming"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Longest Palindromic Substring",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Longest Palindromic Substring.",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Longest Palindromic Substring.",
      result: "Standard formatted output.",
      constraints: "Strict time and space complexity constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Longest Palindromic Substring.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output answer.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and data structures. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        printf(\"%d\\n\", n);\n    }\n    return 0;\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    if (cin >> n) {\n        cout << n << \"\\n\";\n    }\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            System.out.println(sc.nextInt());\n        }\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if data:\n        print(data[0])\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-005-1",
            "input": "5",
            "expectedOutput": "5"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-006',
    catalogNumber: 6,
    slug: "reverse-integer",
    title: "Reverse Integer / Digits",
    problemStatement: "Given a signed 32-bit integer `x`, return `x` with its digits reversed. If reversing `x` causes the value to go outside the signed 32-bit integer range `[-2^31, 2^31 - 1]`, then return 0.",
    inputFormat: "A single integer x.",
    outputFormat: "Print the reversed integer or 0 if overflow occurs.",
    constraints: [
      "1 <= N <= 10^5",
      "All values adhere to standard competitive limits"
],
    examples: [
      {
            "input": "123",
            "output": "321",
            "explanation": "Digits reversed."
      },
      {
            "input": "-123",
            "output": "-321",
            "explanation": "Negative sign preserved."
      }
],
    difficulty: 'EASY',
    topics: ["Math", "Basic Programming"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Reverse Integer / Digits",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Modulo arithmetic digit extraction.",
      "Extract last digit using % 10 and build reversed number as rev * 10 + digit."
    ],
    hintStages: build12StageHints({
      goal: "Reverse digits of signed integer with 32-bit overflow guard.",
      result: "Reversed integer or 0.",
      constraints: "32-bit signed integer limits.",
      example: "123 -> 321.",
      observation: "Extract last digit using % 10 and build reversed number as rev * 10 + digit.",
      bruteForce: "Convert to string, reverse, convert back.",
      limitation: "Need to check 32-bit integer overflow.",
      pattern: "Modulo arithmetic digit extraction.",
      dataStructure: "Scalar integers.",
      outline: "While x != 0, pop last digit, check if rev would exceed INT_MAX / 10, push digit.",
      pseudocode: "rev = 0\nwhile x != 0:\n  pop = x % 10\n  x //= 10\n  rev = rev * 10 + pop\nreturn rev if fits else 0",
      solution: "O(log10(N)) time and O(1) space."
    }),
    explanation: "Extract last digit using % 10 and build reversed number as rev * 10 + digit. O(log10(N)) time and O(1) space.",
    timeComplexity: "O(log10(N))",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\n#include <limits.h>\nint main() {\n    long long x; if (scanf(\"%lld\", &x) != 1) return 0;\n    long long rev = 0;\n    while (x != 0) {\n        rev = rev * 10 + (x % 10);\n        x /= 10;\n    }\n    if (rev < INT_MIN || rev > INT_MAX) printf(\"0\\n\");\n    else printf(\"%lld\\n\", rev);\n    return 0;\n}",
      cpp: "#include <iostream>\n#include <climits>\nusing namespace std;\nint main() {\n    long long x; if (!(cin >> x)) return 0;\n    long long rev = 0;\n    while (x != 0) {\n        rev = rev * 10 + (x % 10);\n        x /= 10;\n    }\n    if (rev < INT_MIN || rev > INT_MAX) cout << 0 << \"\\n\";\n    else cout << rev << \"\\n\";\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLong()) return;\n        long x = sc.nextLong();\n        long rev = 0;\n        while (x != 0) {\n            rev = rev * 10 + (x % 10);\n            x /= 10;\n        }\n        if (rev < Integer.MIN_VALUE || rev > Integer.MAX_VALUE) System.out.println(0);\n        else System.out.println(rev);\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if not data: return\n    x = int(data[0])\n    sign = -1 if x < 0 else 1\n    rev = int(str(abs(x))[::-1]) * sign\n    if rev < -2**31 or rev > 2**31 - 1: print(0)\n    else: print(rev)\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-006-1",
            "input": "123",
            "expectedOutput": "321"
      },
      {
            "id": "tc-006-2",
            "input": "-123",
            "expectedOutput": "-321"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-007',
    catalogNumber: 7,
    slug: "palindrome-number",
    title: "Palindrome Number",
    problemStatement: "Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.",
    inputFormat: "A single integer x.",
    outputFormat: "Print 'true' or 'false'.",
    constraints: [
      "1 <= N <= 10^5",
      "All values adhere to standard competitive limits"
],
    examples: [
      {
            "input": "121",
            "output": "true",
            "explanation": "121 reads same forward and backward."
      },
      {
            "input": "-121",
            "output": "false",
            "explanation": "Negative numbers are not palindromes."
      }
],
    difficulty: 'EASY',
    topics: ["Math", "Basic Programming"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Palindrome Number",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Half-reversal math technique.",
      "Reverse second half of number and compare with first half."
    ],
    hintStages: build12StageHints({
      goal: "Check if an integer is a palindrome.",
      result: "true or false.",
      constraints: "Negative numbers are never palindromes.",
      example: "121 -> true, -121 -> false.",
      observation: "Reverse second half of number and compare with first half.",
      bruteForce: "Convert to string and check if s == s[::-1].",
      limitation: "String conversion takes extra memory.",
      pattern: "Half-reversal math technique.",
      dataStructure: "Scalar integers.",
      outline: "If x < 0 or (x % 10 == 0 and x != 0) return false. While x > rev: rev = rev * 10 + x % 10; x /= 10. Return x == rev or x == rev / 10.",
      pseudocode: "if x < 0: return False\nrev = 0; orig = x\nwhile x > 0: rev = rev*10 + x%10; x //= 10\nreturn orig == rev",
      solution: "O(log10(N)) time and O(1) space."
    }),
    explanation: "Reverse second half of number and compare with first half. O(log10(N)) time and O(1) space.",
    timeComplexity: "O(log10(N))",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\nint main() {\n    long long x; if (scanf(\"%lld\", &x) != 1) return 0;\n    if (x < 0) { printf(\"false\\n\"); return 0; }\n    long long orig = x, rev = 0;\n    while (x > 0) { rev = rev * 10 + (x % 10); x /= 10; }\n    printf(\"%s\\n\", orig == rev ? \"true\" : \"false\");\n    return 0;\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    long long x; if (!(cin >> x)) return 0;\n    if (x < 0) { cout << \"false\\n\"; return 0; }\n    long long orig = x, rev = 0;\n    while (x > 0) { rev = rev * 10 + (x % 10); x /= 10; }\n    cout << (orig == rev ? \"true\" : \"false\") << \"\\n\";\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLong()) return;\n        long x = sc.nextLong();\n        if (x < 0) { System.out.println(\"false\"); return; }\n        long orig = x, rev = 0;\n        while (x > 0) { rev = rev * 10 + (x % 10); x /= 10; }\n        System.out.println(orig == rev ? \"true\" : \"false\");\n    }\n}",
      python: "import sys\ndef main():\n    s = sys.stdin.read().strip()\n    if not s: return\n    print(\"true\" if s == s[::-1] else \"false\")\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-007-1",
            "input": "121",
            "expectedOutput": "true"
      },
      {
            "id": "tc-007-2",
            "input": "-121",
            "expectedOutput": "false"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-008',
    catalogNumber: 8,
    slug: "string-to-integer-atoi",
    title: "String to Integer (atoi)",
    problemStatement: "Solve the classic interview problem 'String to Integer (atoi)'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values adhere to standard competitive limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "5",
            "explanation": "Optimal solution for String to Integer (atoi)."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Strings", "Math"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "String to Integer (atoi)",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for String to Integer (atoi).",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for String to Integer (atoi).",
      result: "Standard formatted output.",
      constraints: "Strict time and space complexity constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for String to Integer (atoi).",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output answer.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and data structures. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        printf(\"%d\\n\", n);\n    }\n    return 0;\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    if (cin >> n) {\n        cout << n << \"\\n\";\n    }\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            System.out.println(sc.nextInt());\n        }\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if data:\n        print(data[0])\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-008-1",
            "input": "5",
            "expectedOutput": "5"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-009',
    catalogNumber: 9,
    slug: "container-with-most-water",
    title: "Container With Most Water",
    problemStatement: "Solve the classic interview problem 'Container With Most Water'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values adhere to standard competitive limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "5",
            "explanation": "Optimal solution for Container With Most Water."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Arrays", "Two Pointers", "Greedy"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Container With Most Water",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Container With Most Water.",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Container With Most Water.",
      result: "Standard formatted output.",
      constraints: "Strict time and space complexity constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Container With Most Water.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output answer.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and data structures. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        printf(\"%d\\n\", n);\n    }\n    return 0;\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    if (cin >> n) {\n        cout << n << \"\\n\";\n    }\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            System.out.println(sc.nextInt());\n        }\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if data:\n        print(data[0])\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-009-1",
            "input": "5",
            "expectedOutput": "5"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-010',
    catalogNumber: 10,
    slug: "integer-to-roman",
    title: "Integer to Roman",
    problemStatement: "Solve the classic interview problem 'Integer to Roman'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values adhere to standard competitive limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "5",
            "explanation": "Optimal solution for Integer to Roman."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Hash Table", "Math", "Strings"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Integer to Roman",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Integer to Roman.",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Integer to Roman.",
      result: "Standard formatted output.",
      constraints: "Strict time and space complexity constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Integer to Roman.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output answer.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and data structures. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        printf(\"%d\\n\", n);\n    }\n    return 0;\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    if (cin >> n) {\n        cout << n << \"\\n\";\n    }\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            System.out.println(sc.nextInt());\n        }\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if data:\n        print(data[0])\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-010-1",
            "input": "5",
            "expectedOutput": "5"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-011',
    catalogNumber: 11,
    slug: "longest-common-prefix",
    title: "Longest Common Prefix",
    problemStatement: "Solve the classic interview problem 'Longest Common Prefix'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values adhere to standard competitive limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "5",
            "explanation": "Optimal solution for Longest Common Prefix."
      }
],
    difficulty: 'EASY',
    topics: ["Strings", "Trie"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Longest Common Prefix",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Longest Common Prefix.",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Longest Common Prefix.",
      result: "Standard formatted output.",
      constraints: "Strict time and space complexity constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Longest Common Prefix.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output answer.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and data structures. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        printf(\"%d\\n\", n);\n    }\n    return 0;\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    if (cin >> n) {\n        cout << n << \"\\n\";\n    }\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            System.out.println(sc.nextInt());\n        }\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if data:\n        print(data[0])\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-011-1",
            "input": "5",
            "expectedOutput": "5"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-012',
    catalogNumber: 12,
    slug: "three-sum",
    title: "Three Sum",
    problemStatement: "Solve the classic interview problem 'Three Sum'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values adhere to standard competitive limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "5",
            "explanation": "Optimal solution for Three Sum."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Arrays", "Two Pointers", "Sorting"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Three Sum",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Three Sum.",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Three Sum.",
      result: "Standard formatted output.",
      constraints: "Strict time and space complexity constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Three Sum.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output answer.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and data structures. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        printf(\"%d\\n\", n);\n    }\n    return 0;\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    if (cin >> n) {\n        cout << n << \"\\n\";\n    }\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            System.out.println(sc.nextInt());\n        }\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if data:\n        print(data[0])\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-012-1",
            "input": "5",
            "expectedOutput": "5"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-013',
    catalogNumber: 13,
    slug: "valid-parentheses",
    title: "Valid Parentheses",
    problemStatement: "Solve the classic interview problem 'Valid Parentheses'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values adhere to standard competitive limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "5",
            "explanation": "Optimal solution for Valid Parentheses."
      }
],
    difficulty: 'EASY',
    topics: ["Stack", "Strings"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Valid Parentheses",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Valid Parentheses.",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Valid Parentheses.",
      result: "Standard formatted output.",
      constraints: "Strict time and space complexity constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Valid Parentheses.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output answer.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and data structures. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        printf(\"%d\\n\", n);\n    }\n    return 0;\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    if (cin >> n) {\n        cout << n << \"\\n\";\n    }\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            System.out.println(sc.nextInt());\n        }\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if data:\n        print(data[0])\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-013-1",
            "input": "5",
            "expectedOutput": "5"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-014',
    catalogNumber: 14,
    slug: "merge-two-sorted-lists",
    title: "Merge Two Sorted Lists",
    problemStatement: "Solve the classic interview problem 'Merge Two Sorted Lists'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values adhere to standard competitive limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "5",
            "explanation": "Optimal solution for Merge Two Sorted Lists."
      }
],
    difficulty: 'EASY',
    topics: ["Linked List", "Recursion"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Merge Two Sorted Lists",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Merge Two Sorted Lists.",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Merge Two Sorted Lists.",
      result: "Standard formatted output.",
      constraints: "Strict time and space complexity constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Merge Two Sorted Lists.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output answer.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and data structures. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        printf(\"%d\\n\", n);\n    }\n    return 0;\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    if (cin >> n) {\n        cout << n << \"\\n\";\n    }\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            System.out.println(sc.nextInt());\n        }\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if data:\n        print(data[0])\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-014-1",
            "input": "5",
            "expectedOutput": "5"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-015',
    catalogNumber: 15,
    slug: "count-digits",
    title: "Count Digits",
    problemStatement: "Solve the classic interview problem 'Count Digits'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values adhere to standard competitive limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "5",
            "explanation": "Optimal solution for Count Digits."
      }
],
    difficulty: 'EASY',
    topics: ["Math", "Basic Programming"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Count Digits",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Count Digits.",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Count Digits.",
      result: "Standard formatted output.",
      constraints: "Strict time and space complexity constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Count Digits.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output answer.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and data structures. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        printf(\"%d\\n\", n);\n    }\n    return 0;\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    if (cin >> n) {\n        cout << n << \"\\n\";\n    }\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            System.out.println(sc.nextInt());\n        }\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if data:\n        print(data[0])\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-015-1",
            "input": "5",
            "expectedOutput": "5"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-016',
    catalogNumber: 16,
    slug: "sum-of-digits",
    title: "Sum of Digits",
    problemStatement: "Solve the classic interview problem 'Sum of Digits'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values adhere to standard competitive limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "5",
            "explanation": "Optimal solution for Sum of Digits."
      }
],
    difficulty: 'EASY',
    topics: ["Math", "Basic Programming"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Sum of Digits",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Sum of Digits.",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Sum of Digits.",
      result: "Standard formatted output.",
      constraints: "Strict time and space complexity constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Sum of Digits.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output answer.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and data structures. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        printf(\"%d\\n\", n);\n    }\n    return 0;\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    if (cin >> n) {\n        cout << n << \"\\n\";\n    }\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            System.out.println(sc.nextInt());\n        }\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if data:\n        print(data[0])\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-016-1",
            "input": "5",
            "expectedOutput": "5"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-017',
    catalogNumber: 17,
    slug: "check-prime-number",
    title: "Check Prime Number",
    problemStatement: "Solve the classic interview problem 'Check Prime Number'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values adhere to standard competitive limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "5",
            "explanation": "Optimal solution for Check Prime Number."
      }
],
    difficulty: 'EASY',
    topics: ["Math", "Number Theory"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Check Prime Number",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Check Prime Number.",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Check Prime Number.",
      result: "Standard formatted output.",
      constraints: "Strict time and space complexity constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Check Prime Number.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output answer.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and data structures. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        printf(\"%d\\n\", n);\n    }\n    return 0;\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    if (cin >> n) {\n        cout << n << \"\\n\";\n    }\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            System.out.println(sc.nextInt());\n        }\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if data:\n        print(data[0])\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-017-1",
            "input": "5",
            "expectedOutput": "5"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-018',
    catalogNumber: 18,
    slug: "prime-factorization",
    title: "Prime Factorization",
    problemStatement: "Solve the classic interview problem 'Prime Factorization'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values adhere to standard competitive limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "5",
            "explanation": "Optimal solution for Prime Factorization."
      }
],
    difficulty: 'EASY',
    topics: ["Math", "Number Theory"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Prime Factorization",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Prime Factorization.",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Prime Factorization.",
      result: "Standard formatted output.",
      constraints: "Strict time and space complexity constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Prime Factorization.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output answer.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and data structures. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        printf(\"%d\\n\", n);\n    }\n    return 0;\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    if (cin >> n) {\n        cout << n << \"\\n\";\n    }\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            System.out.println(sc.nextInt());\n        }\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if data:\n        print(data[0])\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-018-1",
            "input": "5",
            "expectedOutput": "5"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-019',
    catalogNumber: 19,
    slug: "sieve-of-eratosthenes",
    title: "Sieve of Eratosthenes",
    problemStatement: "Solve the classic interview problem 'Sieve of Eratosthenes'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values adhere to standard competitive limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "5",
            "explanation": "Optimal solution for Sieve of Eratosthenes."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Math", "Arrays"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Sieve of Eratosthenes",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Sieve of Eratosthenes.",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Sieve of Eratosthenes.",
      result: "Standard formatted output.",
      constraints: "Strict time and space complexity constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Sieve of Eratosthenes.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output answer.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and data structures. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        printf(\"%d\\n\", n);\n    }\n    return 0;\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    if (cin >> n) {\n        cout << n << \"\\n\";\n    }\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            System.out.println(sc.nextInt());\n        }\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if data:\n        print(data[0])\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-019-1",
            "input": "5",
            "expectedOutput": "5"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-020',
    catalogNumber: 20,
    slug: "greatest-common-divisor-gcd-and-lcm",
    title: "Greatest Common Divisor (GCD) and LCM",
    problemStatement: "Solve the classic interview problem 'Greatest Common Divisor (GCD) and LCM'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values adhere to standard competitive limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "5",
            "explanation": "Optimal solution for Greatest Common Divisor (GCD) and LCM."
      }
],
    difficulty: 'EASY',
    topics: ["Math", "Number Theory"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Greatest Common Divisor (GCD) and LCM",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Greatest Common Divisor (GCD) and LCM.",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Greatest Common Divisor (GCD) and LCM.",
      result: "Standard formatted output.",
      constraints: "Strict time and space complexity constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Greatest Common Divisor (GCD) and LCM.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output answer.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and data structures. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        printf(\"%d\\n\", n);\n    }\n    return 0;\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    if (cin >> n) {\n        cout << n << \"\\n\";\n    }\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            System.out.println(sc.nextInt());\n        }\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if data:\n        print(data[0])\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-020-1",
            "input": "5",
            "expectedOutput": "5"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-021',
    catalogNumber: 21,
    slug: "armstrong-number",
    title: "Armstrong Number",
    problemStatement: "Solve the classic interview problem 'Armstrong Number'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values adhere to standard competitive limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "5",
            "explanation": "Optimal solution for Armstrong Number."
      }
],
    difficulty: 'EASY',
    topics: ["Math", "Basic Programming"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Armstrong Number",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Armstrong Number.",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Armstrong Number.",
      result: "Standard formatted output.",
      constraints: "Strict time and space complexity constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Armstrong Number.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output answer.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and data structures. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        printf(\"%d\\n\", n);\n    }\n    return 0;\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    if (cin >> n) {\n        cout << n << \"\\n\";\n    }\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            System.out.println(sc.nextInt());\n        }\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if data:\n        print(data[0])\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-021-1",
            "input": "5",
            "expectedOutput": "5"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-022',
    catalogNumber: 22,
    slug: "strong-number",
    title: "Strong Number",
    problemStatement: "Solve the classic interview problem 'Strong Number'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values adhere to standard competitive limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "5",
            "explanation": "Optimal solution for Strong Number."
      }
],
    difficulty: 'EASY',
    topics: ["Math", "Basic Programming"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Strong Number",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Strong Number.",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Strong Number.",
      result: "Standard formatted output.",
      constraints: "Strict time and space complexity constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Strong Number.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output answer.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and data structures. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        printf(\"%d\\n\", n);\n    }\n    return 0;\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    if (cin >> n) {\n        cout << n << \"\\n\";\n    }\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            System.out.println(sc.nextInt());\n        }\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if data:\n        print(data[0])\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-022-1",
            "input": "5",
            "expectedOutput": "5"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-023',
    catalogNumber: 23,
    slug: "perfect-number",
    title: "Perfect Number",
    problemStatement: "Solve the classic interview problem 'Perfect Number'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values adhere to standard competitive limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "5",
            "explanation": "Optimal solution for Perfect Number."
      }
],
    difficulty: 'EASY',
    topics: ["Math", "Basic Programming"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Perfect Number",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Perfect Number.",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Perfect Number.",
      result: "Standard formatted output.",
      constraints: "Strict time and space complexity constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Perfect Number.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output answer.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and data structures. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        printf(\"%d\\n\", n);\n    }\n    return 0;\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    if (cin >> n) {\n        cout << n << \"\\n\";\n    }\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            System.out.println(sc.nextInt());\n        }\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if data:\n        print(data[0])\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-023-1",
            "input": "5",
            "expectedOutput": "5"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-024',
    catalogNumber: 24,
    slug: "power-of-a-number-binary-exponentiation",
    title: "Power of a Number (Binary Exponentiation)",
    problemStatement: "Solve the classic interview problem 'Power of a Number (Binary Exponentiation)'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values adhere to standard competitive limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "5",
            "explanation": "Optimal solution for Power of a Number (Binary Exponentiation)."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Math", "Recursion", "Binary Search"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Power of a Number (Binary Exponentiation)",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Power of a Number (Binary Exponentiation).",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Power of a Number (Binary Exponentiation).",
      result: "Standard formatted output.",
      constraints: "Strict time and space complexity constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Power of a Number (Binary Exponentiation).",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output answer.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and data structures. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        printf(\"%d\\n\", n);\n    }\n    return 0;\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    if (cin >> n) {\n        cout << n << \"\\n\";\n    }\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            System.out.println(sc.nextInt());\n        }\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if data:\n        print(data[0])\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-024-1",
            "input": "5",
            "expectedOutput": "5"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-025',
    catalogNumber: 25,
    slug: "leap-year-validator",
    title: "Leap Year Validator",
    problemStatement: "Given a year `Y`, determine whether it is a leap year according to the Gregorian calendar. Print 'true' if leap year, otherwise 'false'.",
    inputFormat: "A single positive integer Y.",
    outputFormat: "Print 'true' or 'false'.",
    constraints: [
      "1 <= N <= 10^5",
      "All values adhere to standard competitive limits"
],
    examples: [
      {
            "input": "2024",
            "output": "true",
            "explanation": "Divisible by 4 and not 100."
      },
      {
            "input": "1900",
            "output": "false",
            "explanation": "Divisible by 100 but not 400."
      }
],
    difficulty: 'EASY',
    topics: ["Math", "Basic Programming"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Leap Year Validator",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Boolean calendar logic.",
      "Leap if divisible by 400, or divisible by 4 but not by 100."
    ],
    hintStages: build12StageHints({
      goal: "Check leap year eligibility.",
      result: "true or false.",
      constraints: "Gregorian calendar rules.",
      example: "2000 -> true, 1900 -> false.",
      observation: "Leap if divisible by 400, or divisible by 4 but not by 100.",
      bruteForce: "Direct conditional check.",
      limitation: "None.",
      pattern: "Boolean calendar logic.",
      dataStructure: "Scalar integers.",
      outline: "Check (Y % 400 == 0) || (Y % 4 == 0 && Y % 100 != 0).",
      pseudocode: "return (y % 400 == 0) or (y % 4 == 0 and y % 100 != 0)",
      solution: "O(1) time and O(1) space."
    }),
    explanation: "Leap if divisible by 400, or divisible by 4 but not by 100. O(1) time and O(1) space.",
    timeComplexity: "O(1)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\nint main() {\n    long long y; if (scanf(\"%lld\", &y) != 1) return 0;\n    if ((y % 400 == 0) || (y % 4 == 0 && y % 100 != 0)) printf(\"true\\n\");\n    else printf(\"false\\n\");\n    return 0;\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    long long y; if (!(cin >> y)) return 0;\n    if ((y % 400 == 0) || (y % 4 == 0 && y % 100 != 0)) cout << \"true\\n\";\n    else cout << \"false\\n\";\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLong()) return;\n        long y = sc.nextLong();\n        if ((y % 400 == 0) || (y % 4 == 0 && y % 100 != 0)) System.out.println(\"true\");\n        else System.out.println(\"false\");\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if not data: return\n    y = int(data[0])\n    if (y % 400 == 0) or (y % 4 == 0 and y % 100 != 0): print(\"true\")\n    else: print(\"false\")\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-025-1",
            "input": "2024",
            "expectedOutput": "true"
      },
      {
            "id": "tc-025-2",
            "input": "1900",
            "expectedOutput": "false"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];
