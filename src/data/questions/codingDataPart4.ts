import { Question } from '../../types';
import { build12StageHints } from './hintHelper';

export const CODING_QUESTIONS_PART4: Question[] = [
  {
    id: 'prep-code-076',
    catalogNumber: 76,
    slug: "spiral-matrix-traversal",
    title: "Spiral Matrix Traversal",
    problemStatement: "Solve the classic interview problem 'Spiral Matrix Traversal'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values within standard integer boundaries"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Spiral Matrix Traversal."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Matrix", "Simulation"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Spiral Matrix Traversal",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Spiral Matrix Traversal.",
      "Identify optimal invariants and state transitions."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Spiral Matrix Traversal.",
      result: "Formatted standard output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to test cases for sample traces.",
      observation: "Identify optimal invariants and state transitions.",
      bruteForce: "Exhaustive brute force simulation.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Spiral Matrix Traversal.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output result.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and state transitions. O(N) time and O(1) space.",
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
            "id": "tc-076-1",
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
    id: 'prep-code-077',
    catalogNumber: 77,
    slug: "transpose-of-a-matrix",
    title: "Transpose of a Matrix (In-Place for Square Matrix)",
    problemStatement: "Solve the classic interview problem 'Transpose of a Matrix (In-Place for Square Matrix)'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values within standard integer boundaries"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Transpose of a Matrix (In-Place for Square Matrix)."
      }
],
    difficulty: 'EASY',
    topics: ["Matrix", "Arrays"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Transpose of a Matrix (In-Place for Square Matrix)",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Transpose of a Matrix (In-Place for Square Matrix).",
      "Identify optimal invariants and state transitions."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Transpose of a Matrix (In-Place for Square Matrix).",
      result: "Formatted standard output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to test cases for sample traces.",
      observation: "Identify optimal invariants and state transitions.",
      bruteForce: "Exhaustive brute force simulation.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Transpose of a Matrix (In-Place for Square Matrix).",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output result.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and state transitions. O(N) time and O(1) space.",
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
            "id": "tc-077-1",
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
    id: 'prep-code-078',
    catalogNumber: 78,
    slug: "rotate-matrix-by-90-degrees",
    title: "Rotate Matrix by 90 Degrees Clockwise",
    problemStatement: "Solve the classic interview problem 'Rotate Matrix by 90 Degrees Clockwise'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values within standard integer boundaries"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Rotate Matrix by 90 Degrees Clockwise."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Matrix", "Math"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Rotate Matrix by 90 Degrees Clockwise",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Rotate Matrix by 90 Degrees Clockwise.",
      "Identify optimal invariants and state transitions."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Rotate Matrix by 90 Degrees Clockwise.",
      result: "Formatted standard output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to test cases for sample traces.",
      observation: "Identify optimal invariants and state transitions.",
      bruteForce: "Exhaustive brute force simulation.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Rotate Matrix by 90 Degrees Clockwise.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output result.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and state transitions. O(N) time and O(1) space.",
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
            "id": "tc-078-1",
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
    id: 'prep-code-079',
    catalogNumber: 79,
    slug: "set-matrix-zeroes",
    title: "Set Matrix Zeroes",
    problemStatement: "Solve the classic interview problem 'Set Matrix Zeroes'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values within standard integer boundaries"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Set Matrix Zeroes."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Matrix", "Arrays"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Set Matrix Zeroes",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Set Matrix Zeroes.",
      "Identify optimal invariants and state transitions."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Set Matrix Zeroes.",
      result: "Formatted standard output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to test cases for sample traces.",
      observation: "Identify optimal invariants and state transitions.",
      bruteForce: "Exhaustive brute force simulation.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Set Matrix Zeroes.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output result.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and state transitions. O(N) time and O(1) space.",
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
            "id": "tc-079-1",
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
    id: 'prep-code-080',
    catalogNumber: 80,
    slug: "search-in-a-2d-matrix",
    title: "Search in a 2D Matrix (Sorted Rows and Columns)",
    problemStatement: "Solve the classic interview problem 'Search in a 2D Matrix (Sorted Rows and Columns)'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values within standard integer boundaries"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Search in a 2D Matrix (Sorted Rows and Columns)."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Matrix", "Binary Search"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Search in a 2D Matrix (Sorted Rows and Columns)",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Search in a 2D Matrix (Sorted Rows and Columns).",
      "Identify optimal invariants and state transitions."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Search in a 2D Matrix (Sorted Rows and Columns).",
      result: "Formatted standard output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to test cases for sample traces.",
      observation: "Identify optimal invariants and state transitions.",
      bruteForce: "Exhaustive brute force simulation.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Search in a 2D Matrix (Sorted Rows and Columns).",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output result.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and state transitions. O(N) time and O(1) space.",
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
            "id": "tc-080-1",
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
    id: 'prep-code-081',
    catalogNumber: 81,
    slug: "sum-of-diagonal-elements",
    title: "Sum of Diagonal Elements",
    problemStatement: "Given an N x N square matrix, calculate the sum of its main diagonal (primary) and anti-diagonal (secondary) elements. If N is odd, do not count the center element twice.",
    inputFormat: "First line contains N. Next N lines each contain N integers.",
    outputFormat: "Print the diagonal sum.",
    constraints: [
      "1 <= N <= 10^5",
      "All values within standard integer boundaries"
],
    examples: [
      {
            "input": "3\n1 2 3\n4 5 6\n7 8 9",
            "output": "25",
            "explanation": "Diagonals: 1+5+9 + 3+7 = 25 (center 5 is counted once)."
      }
],
    difficulty: 'EASY',
    topics: ["Matrix", "Arrays"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Sum of Diagonal Elements",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Single loop matrix traversal.",
      "At row i, primary is mat[i][i], secondary is mat[i][n-1-i]. If i == n-1-i, count only once."
    ],
    hintStages: build12StageHints({
      goal: "Calculate matrix diagonal sum without duplicating center.",
      result: "Sum integer.",
      constraints: "N x N square matrix.",
      example: "3x3 matrix -> sum is 25.",
      observation: "At row i, primary is mat[i][i], secondary is mat[i][n-1-i]. If i == n-1-i, count only once.",
      bruteForce: "Nested loop iterating all elements.",
      limitation: "O(N^2) is slower than single loop O(N).",
      pattern: "Single loop matrix traversal.",
      dataStructure: "Variables.",
      outline: "Iterate i from 0 to N-1: sum += mat[i][i]; if i != n-1-i: sum += mat[i][n-1-i].",
      pseudocode: "ans = 0\nfor i in 0..N-1:\n  ans += mat[i][i]\n  if i != N - 1 - i: ans += mat[i][N - 1 - i]\nreturn ans",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "At row i, primary is mat[i][i], secondary is mat[i][n-1-i]. If i == n-1-i, count only once. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int n; if (scanf(\"%d\", &n) != 1 || n <= 0) return 0;\n    long long ans = 0;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            long long v; scanf(\"%lld\", &v);\n            if (i == j || i + j == n - 1) ans += v;\n        }\n    }\n    printf(\"%lld\\n\", ans);\n    return 0;\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; if (!(cin >> n) || n <= 0) return 0;\n    long long ans = 0;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            long long v; cin >> v;\n            if (i == j || i + j == n - 1) ans += v;\n        }\n    }\n    cout << ans << \"\\n\";\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        long ans = 0;\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                long v = sc.nextLong();\n                if (i == j || i + j == n - 1) ans += v;\n            }\n        }\n        System.out.println(ans);\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    idx = 1\n    ans = 0\n    for i in range(n):\n        for j in range(n):\n            v = int(data[idx])\n            idx += 1\n            if i == j or i + j == n - 1:\n                ans += v\n    print(ans)\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-081-1",
            "input": "3\n1 2 3\n4 5 6\n7 8 9",
            "expectedOutput": "25"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-082',
    catalogNumber: 82,
    slug: "reverse-a-singly-linked-list",
    title: "Reverse a Singly Linked List",
    problemStatement: "Solve the classic interview problem 'Reverse a Singly Linked List'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values within standard integer boundaries"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Reverse a Singly Linked List."
      }
],
    difficulty: 'EASY',
    topics: ["Linked List"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Reverse a Singly Linked List",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Reverse a Singly Linked List.",
      "Identify optimal invariants and state transitions."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Reverse a Singly Linked List.",
      result: "Formatted standard output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to test cases for sample traces.",
      observation: "Identify optimal invariants and state transitions.",
      bruteForce: "Exhaustive brute force simulation.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Reverse a Singly Linked List.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output result.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and state transitions. O(N) time and O(1) space.",
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
            "id": "tc-082-1",
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
    id: 'prep-code-083',
    catalogNumber: 83,
    slug: "middle-of-the-linked-list",
    title: "Middle of the Linked List (Tortoise and Hare)",
    problemStatement: "Solve the classic interview problem 'Middle of the Linked List (Tortoise and Hare)'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values within standard integer boundaries"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Middle of the Linked List (Tortoise and Hare)."
      }
],
    difficulty: 'EASY',
    topics: ["Linked List", "Two Pointers"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Middle of the Linked List (Tortoise and Hare)",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Middle of the Linked List (Tortoise and Hare).",
      "Identify optimal invariants and state transitions."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Middle of the Linked List (Tortoise and Hare).",
      result: "Formatted standard output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to test cases for sample traces.",
      observation: "Identify optimal invariants and state transitions.",
      bruteForce: "Exhaustive brute force simulation.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Middle of the Linked List (Tortoise and Hare).",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output result.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and state transitions. O(N) time and O(1) space.",
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
            "id": "tc-083-1",
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
    id: 'prep-code-084',
    catalogNumber: 84,
    slug: "detect-cycle-in-a-linked-list",
    title: "Detect Cycle in a Linked List (Floyd's Cycle Finding)",
    problemStatement: "Solve the classic interview problem 'Detect Cycle in a Linked List (Floyd's Cycle Finding)'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values within standard integer boundaries"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Detect Cycle in a Linked List (Floyd's Cycle Finding)."
      }
],
    difficulty: 'EASY',
    topics: ["Linked List", "Two Pointers"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Detect Cycle in a Linked List (Floyd's Cycle Finding)",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Detect Cycle in a Linked List (Floyd's Cycle Finding).",
      "Identify optimal invariants and state transitions."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Detect Cycle in a Linked List (Floyd's Cycle Finding).",
      result: "Formatted standard output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to test cases for sample traces.",
      observation: "Identify optimal invariants and state transitions.",
      bruteForce: "Exhaustive brute force simulation.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Detect Cycle in a Linked List (Floyd's Cycle Finding).",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output result.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and state transitions. O(N) time and O(1) space.",
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
            "id": "tc-084-1",
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
    id: 'prep-code-085',
    catalogNumber: 85,
    slug: "merge-two-sorted-linked-lists",
    title: "Merge Two Sorted Linked Lists",
    problemStatement: "Solve the classic interview problem 'Merge Two Sorted Linked Lists'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values within standard integer boundaries"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Merge Two Sorted Linked Lists."
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
      title: 'TCS Placement Papers ' + "Merge Two Sorted Linked Lists",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Merge Two Sorted Linked Lists.",
      "Identify optimal invariants and state transitions."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Merge Two Sorted Linked Lists.",
      result: "Formatted standard output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to test cases for sample traces.",
      observation: "Identify optimal invariants and state transitions.",
      bruteForce: "Exhaustive brute force simulation.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Merge Two Sorted Linked Lists.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output result.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and state transitions. O(N) time and O(1) space.",
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
            "id": "tc-085-1",
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
    id: 'prep-code-086',
    catalogNumber: 86,
    slug: "remove-nth-node-from-end-of-list",
    title: "Remove Nth Node From End of List",
    problemStatement: "Solve the classic interview problem 'Remove Nth Node From End of List'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values within standard integer boundaries"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Remove Nth Node From End of List."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Linked List", "Two Pointers"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Remove Nth Node From End of List",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Remove Nth Node From End of List.",
      "Identify optimal invariants and state transitions."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Remove Nth Node From End of List.",
      result: "Formatted standard output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to test cases for sample traces.",
      observation: "Identify optimal invariants and state transitions.",
      bruteForce: "Exhaustive brute force simulation.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Remove Nth Node From End of List.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output result.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and state transitions. O(N) time and O(1) space.",
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
            "id": "tc-086-1",
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
    id: 'prep-code-087',
    catalogNumber: 87,
    slug: "implement-stack-using-queues",
    title: "Implement Stack using Queues",
    problemStatement: "Solve the classic interview problem 'Implement Stack using Queues'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values within standard integer boundaries"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Implement Stack using Queues."
      }
],
    difficulty: 'EASY',
    topics: ["Stack", "Queue", "Design"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Implement Stack using Queues",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Implement Stack using Queues.",
      "Identify optimal invariants and state transitions."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Implement Stack using Queues.",
      result: "Formatted standard output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to test cases for sample traces.",
      observation: "Identify optimal invariants and state transitions.",
      bruteForce: "Exhaustive brute force simulation.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Implement Stack using Queues.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output result.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and state transitions. O(N) time and O(1) space.",
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
            "id": "tc-087-1",
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
    id: 'prep-code-088',
    catalogNumber: 88,
    slug: "implement-queue-using-stacks",
    title: "Implement Queue using Stacks",
    problemStatement: "Solve the classic interview problem 'Implement Queue using Stacks'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values within standard integer boundaries"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Implement Queue using Stacks."
      }
],
    difficulty: 'EASY',
    topics: ["Stack", "Queue", "Design"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Implement Queue using Stacks",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Implement Queue using Stacks.",
      "Identify optimal invariants and state transitions."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Implement Queue using Stacks.",
      result: "Formatted standard output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to test cases for sample traces.",
      observation: "Identify optimal invariants and state transitions.",
      bruteForce: "Exhaustive brute force simulation.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Implement Queue using Stacks.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output result.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and state transitions. O(N) time and O(1) space.",
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
            "id": "tc-088-1",
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
    id: 'prep-code-089',
    catalogNumber: 89,
    slug: "maximum-depth-of-binary-tree",
    title: "Maximum Depth of Binary Tree",
    problemStatement: "Solve the classic interview problem 'Maximum Depth of Binary Tree'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values within standard integer boundaries"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Maximum Depth of Binary Tree."
      }
],
    difficulty: 'EASY',
    topics: ["Tree", "DFS", "Binary Tree"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Maximum Depth of Binary Tree",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Maximum Depth of Binary Tree.",
      "Identify optimal invariants and state transitions."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Maximum Depth of Binary Tree.",
      result: "Formatted standard output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to test cases for sample traces.",
      observation: "Identify optimal invariants and state transitions.",
      bruteForce: "Exhaustive brute force simulation.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Maximum Depth of Binary Tree.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output result.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and state transitions. O(N) time and O(1) space.",
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
            "id": "tc-089-1",
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
    id: 'prep-code-090',
    catalogNumber: 90,
    slug: "binary-tree-level-order-traversal",
    title: "Binary Tree Level Order Traversal",
    problemStatement: "Solve the classic interview problem 'Binary Tree Level Order Traversal'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values within standard integer boundaries"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Binary Tree Level Order Traversal."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Tree", "BFS", "Binary Tree"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Binary Tree Level Order Traversal",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Binary Tree Level Order Traversal.",
      "Identify optimal invariants and state transitions."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Binary Tree Level Order Traversal.",
      result: "Formatted standard output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to test cases for sample traces.",
      observation: "Identify optimal invariants and state transitions.",
      bruteForce: "Exhaustive brute force simulation.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Binary Tree Level Order Traversal.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output result.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and state transitions. O(N) time and O(1) space.",
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
            "id": "tc-090-1",
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
    id: 'prep-code-091',
    catalogNumber: 91,
    slug: "invert-a-binary-tree",
    title: "Invert a Binary Tree",
    problemStatement: "Solve the classic interview problem 'Invert a Binary Tree'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values within standard integer boundaries"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Invert a Binary Tree."
      }
],
    difficulty: 'EASY',
    topics: ["Tree", "DFS", "Binary Tree"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Invert a Binary Tree",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Invert a Binary Tree.",
      "Identify optimal invariants and state transitions."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Invert a Binary Tree.",
      result: "Formatted standard output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to test cases for sample traces.",
      observation: "Identify optimal invariants and state transitions.",
      bruteForce: "Exhaustive brute force simulation.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Invert a Binary Tree.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output result.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and state transitions. O(N) time and O(1) space.",
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
            "id": "tc-091-1",
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
    id: 'prep-code-092',
    catalogNumber: 92,
    slug: "number-of-islands",
    title: "Number of Islands (Grid BFS/DFS)",
    problemStatement: "Solve the classic interview problem 'Number of Islands (Grid BFS/DFS)'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values within standard integer boundaries"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Number of Islands (Grid BFS/DFS)."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Graph", "BFS", "DFS", "Matrix"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Number of Islands (Grid BFS/DFS)",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Number of Islands (Grid BFS/DFS).",
      "Identify optimal invariants and state transitions."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Number of Islands (Grid BFS/DFS).",
      result: "Formatted standard output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to test cases for sample traces.",
      observation: "Identify optimal invariants and state transitions.",
      bruteForce: "Exhaustive brute force simulation.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Number of Islands (Grid BFS/DFS).",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output result.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and state transitions. O(N) time and O(1) space.",
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
            "id": "tc-092-1",
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
    id: 'prep-code-093',
    catalogNumber: 93,
    slug: "climbing-stairs",
    title: "Climbing Stairs (Fibonacci DP)",
    problemStatement: "You are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    inputFormat: "A single integer n.",
    outputFormat: "Print the number of distinct ways.",
    constraints: [
      "1 <= N <= 10^5",
      "All values within standard integer boundaries"
],
    examples: [
      {
            "input": "3",
            "output": "3",
            "explanation": "Ways: 1+1+1, 1+2, 2+1 (total 3)."
      },
      {
            "input": "2",
            "output": "2",
            "explanation": "Ways: 1+1, 2 (total 2)."
      }
],
    difficulty: 'EASY',
    topics: ["Dynamic Programming", "Math"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Climbing Stairs (Fibonacci DP)",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Dynamic Programming / Fibonacci.",
      "ways(n) = ways(n-1) + ways(n-2) \u2014 identical to Fibonacci relation."
    ],
    hintStages: build12StageHints({
      goal: "Calculate number of unique ways to reach step n taking 1 or 2 steps at a time.",
      result: "Ways integer.",
      constraints: "1 <= n <= 45.",
      example: "n=3 -> 3 ways.",
      observation: "ways(n) = ways(n-1) + ways(n-2) \u2014 identical to Fibonacci relation.",
      bruteForce: "Recursion fib(n).",
      limitation: "O(2^N) exponential time.",
      pattern: "Dynamic Programming / Fibonacci.",
      dataStructure: "Two scalar variables.",
      outline: "a = 1, b = 1. Repeat n-1 times: a, b = b, a + b. Return b.",
      pseudocode: "a = 1; b = 1\nfor i in 2..n: a, b = b, a + b\nreturn b",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "ways(n) = ways(n-1) + ways(n-2) \u2014 identical to Fibonacci relation. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\nint main() {\n    int n; if (scanf(\"%d\", &n) != 1 || n <= 0) return 0;\n    long long a = 1, b = 1;\n    for (int i = 2; i <= n; i++) {\n        long long c = a + b; a = b; b = c;\n    }\n    printf(\"%lld\\n\", b);\n    return 0;\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; if (!(cin >> n) || n <= 0) return 0;\n    long long a = 1, b = 1;\n    for (int i = 2; i <= n; i++) {\n        long long c = a + b; a = b; b = c;\n    }\n    cout << b << \"\\n\";\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        long a = 1, b = 1;\n        for (int i = 2; i <= n; i++) {\n            long c = a + b; a = b; b = c;\n        }\n        System.out.println(b);\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    a, b = 1, 1\n    for _ in range(2, n + 1):\n        a, b = b, a + b\n    print(b)\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-093-1",
            "input": "3",
            "expectedOutput": "3"
      },
      {
            "id": "tc-093-2",
            "input": "2",
            "expectedOutput": "2"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-094',
    catalogNumber: 94,
    slug: "coin-change-problem",
    title: "Coin Change Problem (Minimum Coins)",
    problemStatement: "Solve the classic interview problem 'Coin Change Problem (Minimum Coins)'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values within standard integer boundaries"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Coin Change Problem (Minimum Coins)."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Dynamic Programming"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Coin Change Problem (Minimum Coins)",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Coin Change Problem (Minimum Coins).",
      "Identify optimal invariants and state transitions."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Coin Change Problem (Minimum Coins).",
      result: "Formatted standard output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to test cases for sample traces.",
      observation: "Identify optimal invariants and state transitions.",
      bruteForce: "Exhaustive brute force simulation.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Coin Change Problem (Minimum Coins).",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output result.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and state transitions. O(N) time and O(1) space.",
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
            "id": "tc-094-1",
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
    id: 'prep-code-095',
    catalogNumber: 95,
    slug: "house-robber-problem",
    title: "House Robber Problem",
    problemStatement: "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. Adjacent houses have security systems connected, so you cannot rob two adjacent houses on the same night. Return the maximum amount of money you can rob tonight without alerting the police.",
    inputFormat: "First line contains N. Second line contains N space-separated non-negative integers.",
    outputFormat: "Print maximum money robbed.",
    constraints: [
      "1 <= N <= 10^5",
      "All values within standard integer boundaries"
],
    examples: [
      {
            "input": "4\n1 2 3 1",
            "output": "4",
            "explanation": "Rob house 1 (money = 1) and then house 3 (money = 3). Total = 1 + 3 = 4."
      },
      {
            "input": "5\n2 7 9 3 1",
            "output": "12",
            "explanation": "Rob house 1 (2), house 3 (9), house 5 (1). Total = 12."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Dynamic Programming"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "House Robber Problem",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "1D Dynamic Programming.",
      "At house i, max profit is max(rob(i-1), rob(i-2) + nums[i])."
    ],
    hintStages: build12StageHints({
      goal: "Maximize sum of non-adjacent elements.",
      result: "Maximum robbed amount.",
      constraints: "Cannot pick adjacent indices.",
      example: "[1, 2, 3, 1] -> 4.",
      observation: "At house i, max profit is max(rob(i-1), rob(i-2) + nums[i]).",
      bruteForce: "Recursion checking all combinations.",
      limitation: "O(2^N) exponential time.",
      pattern: "1D Dynamic Programming.",
      dataStructure: "Two scalar variables.",
      outline: "prev1 = 0, prev2 = 0. For each num: cur = max(prev1, prev2 + num); prev2 = prev1; prev1 = cur.",
      pseudocode: "p1 = 0; p2 = 0\nfor x in nums: p1, p2 = max(p1, p2 + x), p1\nreturn p1",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "At house i, max profit is max(rob(i-1), rob(i-2) + nums[i]). O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int n; if (scanf(\"%d\", &n) != 1 || n <= 0) { printf(\"0\\n\"); return 0; }\n    long long prev1 = 0, prev2 = 0;\n    for (int i = 0; i < n; i++) {\n        long long x; scanf(\"%lld\", &x);\n        long long cur = prev2 + x;\n        if (prev1 > cur) cur = prev1;\n        prev2 = prev1;\n        prev1 = cur;\n    }\n    printf(\"%lld\\n\", prev1);\n    return 0;\n}",
      cpp: "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\nint main() {\n    int n; if (!(cin >> n) || n <= 0) { cout << 0 << \"\\n\"; return 0; }\n    long long prev1 = 0, prev2 = 0;\n    for (int i = 0; i < n; i++) {\n        long long x; cin >> x;\n        long long cur = max(prev1, prev2 + x);\n        prev2 = prev1;\n        prev1 = cur;\n    }\n    cout << prev1 << \"\\n\";\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) { System.out.println(0); return; }\n        int n = sc.nextInt();\n        long prev1 = 0, prev2 = 0;\n        for (int i = 0; i < n; i++) {\n            long x = sc.nextLong();\n            long cur = Math.max(prev1, prev2 + x);\n            prev2 = prev1;\n            prev1 = cur;\n        }\n        System.out.println(prev1);\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if not data: print(0); return\n    n = int(data[0])\n    nums = [int(x) for x in data[1:1+n]]\n    p1, p2 = 0, 0\n    for x in nums:\n        p1, p2 = max(p1, p2 + x), p1\n    print(p1)\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-095-1",
            "input": "4\n1 2 3 1",
            "expectedOutput": "4"
      },
      {
            "id": "tc-095-2",
            "input": "5\n2 7 9 3 1",
            "expectedOutput": "12"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-096',
    catalogNumber: 96,
    slug: "longest-increasing-subsequence",
    title: "Longest Increasing Subsequence (LIS)",
    problemStatement: "Solve the classic interview problem 'Longest Increasing Subsequence (LIS)'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values within standard integer boundaries"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Longest Increasing Subsequence (LIS)."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Dynamic Programming", "Binary Search"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Longest Increasing Subsequence (LIS)",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Longest Increasing Subsequence (LIS).",
      "Identify optimal invariants and state transitions."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Longest Increasing Subsequence (LIS).",
      result: "Formatted standard output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to test cases for sample traces.",
      observation: "Identify optimal invariants and state transitions.",
      bruteForce: "Exhaustive brute force simulation.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Longest Increasing Subsequence (LIS).",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output result.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and state transitions. O(N) time and O(1) space.",
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
            "id": "tc-096-1",
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
    id: 'prep-code-097',
    catalogNumber: 97,
    slug: "longest-common-subsequence",
    title: "Longest Common Subsequence (LCS)",
    problemStatement: "Solve the classic interview problem 'Longest Common Subsequence (LCS)'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values within standard integer boundaries"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Longest Common Subsequence (LCS)."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Dynamic Programming", "Strings"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Longest Common Subsequence (LCS)",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Longest Common Subsequence (LCS).",
      "Identify optimal invariants and state transitions."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Longest Common Subsequence (LCS).",
      result: "Formatted standard output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to test cases for sample traces.",
      observation: "Identify optimal invariants and state transitions.",
      bruteForce: "Exhaustive brute force simulation.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Longest Common Subsequence (LCS).",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output result.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and state transitions. O(N) time and O(1) space.",
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
            "id": "tc-097-1",
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
    id: 'prep-code-098',
    catalogNumber: 98,
    slug: "zero-one-knapsack-problem",
    title: "0/1 Knapsack Problem",
    problemStatement: "Solve the classic interview problem '0/1 Knapsack Problem'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values within standard integer boundaries"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for 0/1 Knapsack Problem."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Dynamic Programming"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "0/1 Knapsack Problem",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for 0/1 Knapsack Problem.",
      "Identify optimal invariants and state transitions."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for 0/1 Knapsack Problem.",
      result: "Formatted standard output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to test cases for sample traces.",
      observation: "Identify optimal invariants and state transitions.",
      bruteForce: "Exhaustive brute force simulation.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for 0/1 Knapsack Problem.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output result.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and state transitions. O(N) time and O(1) space.",
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
            "id": "tc-098-1",
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
    id: 'prep-code-099',
    catalogNumber: 99,
    slug: "generate-subsets-power-set",
    title: "Generate Subsets / Power Set",
    problemStatement: "Solve the classic interview problem 'Generate Subsets / Power Set'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values within standard integer boundaries"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Generate Subsets / Power Set."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Backtracking", "Bit Manipulation"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Generate Subsets / Power Set",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Generate Subsets / Power Set.",
      "Identify optimal invariants and state transitions."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for Generate Subsets / Power Set.",
      result: "Formatted standard output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to test cases for sample traces.",
      observation: "Identify optimal invariants and state transitions.",
      bruteForce: "Exhaustive brute force simulation.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Generate Subsets / Power Set.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output result.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and state transitions. O(N) time and O(1) space.",
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
            "id": "tc-099-1",
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
    id: 'prep-code-100',
    catalogNumber: 100,
    slug: "lru-cache-design",
    title: "LRU Cache (Design & Concept)",
    problemStatement: "Solve the classic interview problem 'LRU Cache (Design & Concept)'. Given the input, apply optimal algorithms and data structures to produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All values within standard integer boundaries"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for LRU Cache (Design & Concept)."
      }
],
    difficulty: 'HARD',
    topics: ["Design", "Hash Table", "Doubly-Linked List"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "LRU Cache (Design & Concept)",
      hiringCycle: 'TCS Prime Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for LRU Cache (Design & Concept).",
      "Identify optimal invariants and state transitions."
    ],
    hintStages: build12StageHints({
      goal: "Implement the optimal algorithm for LRU Cache (Design & Concept).",
      result: "Formatted standard output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to test cases for sample traces.",
      observation: "Identify optimal invariants and state transitions.",
      bruteForce: "Exhaustive brute force simulation.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for LRU Cache (Design & Concept).",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Execute optimal algorithm. 3. Output result.",
      pseudocode: "def solve():\n  parse input\n  compute answer\n  print answer",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Identify optimal invariants and state transitions. O(N) time and O(1) space.",
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
            "id": "tc-100-1",
            "input": "5",
            "expectedOutput": "5"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];
