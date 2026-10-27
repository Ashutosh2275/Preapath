import { Question } from '../../types';
import { build12StageHints } from './hintHelper';

export const CODING_QUESTIONS_PART2: Question[] = [
  {
    id: 'prep-code-026',
    catalogNumber: 26,
    slug: 'generate-a-fibonacci-sequence',
    title: 'Generate a Fibonacci Sequence',
    problemStatement: `Given an integer \`N\`, print the first \`N\` terms of the Fibonacci sequence starting from 0 and 1, separated by a single space.
If \`N = 1\`, print \`0\`. If \`N = 2\`, print \`0 1\`.`,
    inputFormat: 'A single positive integer N.',
    outputFormat: 'Print the first N Fibonacci numbers separated by spaces.',
    constraints: ['1 <= N <= 50'],
    examples: [
      { input: '5', output: '0 1 1 2 3' },
      { input: '1', output: '0' }
    ],
    difficulty: 'EASY',
    topics: ['Math', 'Dynamic Programming', 'Basic Programming'],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 10,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers Fibonacci Sequence',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard recurrence sequence generation.'
    },
    hints: [
      'F(0) = 0, F(1) = 1, and F(i) = F(i-1) + F(i-2). Use 64-bit integer to prevent overflow for N up to 50.',
      'Review constraints and consider edge cases (e.g. boundary values or zero).'
    ],
    hintStages: build12StageHints({
      goal: 'Print the first N terms of the Fibonacci sequence.',
      result: 'Space-separated Fibonacci numbers.',
      constraints: 'N up to 50. F(50) = 12586269025 which fits in standard 64-bit integer.',
      example: 'N = 5 -> 0, 1, 1, 2, 3.',
      observation: 'Each term depends only on the immediate two previous terms.',
      bruteForce: 'Recursive function F(n) = F(n-1) + F(n-2) for each term.',
      limitation: 'Naive recursion is O(2^N) and will freeze execution.',
      pattern: 'Iterative State Update / Dynamic Programming.',
      dataStructure: 'Two integer variables (a, b).',
      outline: 'Handle N=1 and N=2. For i from 3 to N: c = a + b, print c, a = b, b = c.',
      pseudocode: 'a = 0, b = 1\nfor i in 1..N:\n  print a\n  a, b = b, a + b',
      solution: 'O(N) time and O(1) space.'
    }),
    explanation: 'Maintain two variables tracking the previous two numbers in the sequence and iterate N times.',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: `#include <stdio.h>\nint main() {\n    int n; if (scanf("%d", &n) != 1) return 0;\n    long long a = 0, b = 1;\n    for (int i = 0; i < n; i++) {\n        if (i > 0) printf(" ");\n        printf("%lld", a);\n        long long c = a + b;\n        a = b; b = c;\n    }\n    printf("\\n");\n    return 0;\n}`,
      cpp: `#include <iostream>\nusing namespace std;\nint main() {\n    int n; if (!(cin >> n)) return 0;\n    long long a = 0, b = 1;\n    for (int i = 0; i < n; i++) {\n        if (i > 0) cout << " ";\n        cout << a;\n        long long c = a + b;\n        a = b; b = c;\n    }\n    cout << "\\n";\n    return 0;\n}`,
      java: `import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        long a = 0, b = 1;\n        StringBuilder sb = new StringBuilder();\n        for (int i = 0; i < n; i++) {\n            if (sb.length() > 0) sb.append(" ");\n            sb.append(a);\n            long c = a + b;\n            a = b; b = c;\n        }\n        System.out.println(sb.toString());\n    }\n}`,
      python: `import sys\ndef main():\n    raw = sys.stdin.read().strip()\n    if not raw: return\n    n = int(raw)\n    a, b = 0, 1\n    res = []\n    for _ in range(n):\n        res.append(str(a))\n        a, b = b, a + b\n    print(" ".join(res))\nif __name__ == '__main__': main()`
    },
    publicTestCases: [
      { id: 'tc-026-1', input: '5', expectedOutput: '0 1 1 2 3' },
      { id: 'tc-026-2', input: '1', expectedOutput: '0' }
    ],
    hiddenTestCases: [
      { id: 'tc-026-h1', input: '10', expectedOutput: '0 1 1 2 3 5 8 13 21 34', isHidden: true }
    ],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-027',
    catalogNumber: 27,
    slug: 'calculate-factorial',
    title: 'Calculate Factorial',
    problemStatement: `Given a non-negative integer \`N\`, calculate \`N!\` (N factorial). \`0! = 1\`. Output the result.`,
    inputFormat: 'A single non-negative integer N.',
    outputFormat: 'Print N factorial.',
    constraints: ['0 <= N <= 20'],
    examples: [
      { input: '5', output: '120', explanation: '5! = 5 * 4 * 3 * 2 * 1 = 120.' },
      { input: '0', output: '1', explanation: '0! is defined as 1.' }
    ],
    difficulty: 'EASY',
    topics: ['Math', 'Recursion', 'Basic Programming'],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 10,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers Factorial Calculation',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Basic factorial computation.'
    },
    hints: [
      '20! fits in an unsigned 64-bit integer (`unsigned long long` in C++ / `long` in Java).',
      'Review constraints and consider edge cases (e.g. boundary values or zero).'
    ],
    hintStages: build12StageHints({
      goal: 'Compute the product of all positive integers up to N.',
      result: 'An integer.',
      constraints: 'N <= 20. 20! = 2432902008176640000 fits in standard 64-bit long long.',
      example: 'N = 4: 4 * 3 * 2 * 1 = 24.',
      observation: '0! = 1 by mathematical convention.',
      bruteForce: 'Iterate from 1 to N and multiply.',
      limitation: 'Be sure to use 64-bit integers to prevent overflow.',
      pattern: 'Iterative Accumulation.',
      dataStructure: 'Integer variable.',
      outline: 'ans = 1. For i from 1 to N: ans *= i. Return ans.',
      pseudocode: 'ans = 1\nfor i in 1..N: ans *= i\nreturn ans',
      solution: 'O(N) time and O(1) space.'
    }),
    explanation: 'Iterate from 1 to N multiplying into a 64-bit accumulator.',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: `#include <stdio.h>\nint main() {\n    int n; if (scanf("%d", &n) != 1) return 0;\n    long long ans = 1;\n    for (int i = 2; i <= n; i++) ans *= i;\n    printf("%lld\\n", ans);\n    return 0;\n}`,
      cpp: `#include <iostream>\nusing namespace std;\nint main() {\n    int n; if (!(cin >> n)) return 0;\n    long long ans = 1;\n    for (int i = 2; i <= n; i++) ans *= i;\n    cout << ans << "\\n";\n    return 0;\n}`,
      java: `import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        long ans = 1;\n        for (int i = 2; i <= n; i++) ans *= i;\n        System.out.println(ans);\n    }\n}`,
      python: `import sys, math\ndef main():\n    raw = sys.stdin.read().strip()\n    if not raw: return\n    n = int(raw)\n    print(math.factorial(n))\nif __name__ == '__main__': main()`
    },
    publicTestCases: [
      { id: 'tc-027-1', input: '5', expectedOutput: '120' },
      { id: 'tc-027-2', input: '0', expectedOutput: '1' }
    ],
    hiddenTestCases: [
      { id: 'tc-027-h1', input: '10', expectedOutput: '3628800', isHidden: true }
    ],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-028',
    catalogNumber: 28,
    slug: 'convert-decimal-to-binary',
    title: 'Convert Decimal to Binary',
    problemStatement: `Given a non-negative integer \`N\`, convert it to its binary representation. Output the binary string without leading zeroes (unless N is 0, in which case output \`0\`).`,
    inputFormat: 'A single non-negative integer N.',
    outputFormat: 'Print the binary representation of N.',
    constraints: ['0 <= N <= 10^18'],
    examples: [
      { input: '13', output: '1101', explanation: '13 in binary is 8 + 4 + 1 = 1101.' },
      { input: '0', output: '0', explanation: '0 in binary is 0.' }
    ],
    difficulty: 'EASY',
    topics: ['Math', 'Bit Manipulation'],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 10,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers Base Conversion',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Base 10 to Base 2 radix conversion.'
    },
    hints: [
      'Repeatedly divide N by 2 and collect the remainders.',
      'Review constraints and consider edge cases (e.g. boundary values or zero).'
    ],
    hintStages: build12StageHints({
      goal: 'Convert a decimal number N into its base-2 binary string.',
      result: 'Binary string.',
      constraints: 'N up to 10^18.',
      example: '13 % 2 = 1, 6 % 2 = 0, 3 % 2 = 1, 1 % 2 = 1 -> reversed: 1101.',
      observation: 'Remainders modulo 2 give bits from least to most significant.',
      bruteForce: 'Divide by 2 and store bits in a string or stack.',
      limitation: 'Reverse the bits at the end.',
      pattern: 'Radix Conversion.',
      dataStructure: 'String / Buffer.',
      outline: 'If N == 0 return "0". While N > 0: append N % 2, N /= 2. Reverse result.',
      pseudocode: 'bits = []\nwhile N > 0: bits.append(N % 2); N //= 2\nreturn "".join(reversed(bits))',
      solution: 'O(log2(N)) time and O(log2(N)) space.'
    }),
    explanation: 'Collect remainders modulo 2 and print them in reverse order.',
    timeComplexity: 'O(log2(N))',
    spaceComplexity: 'O(log2(N))',
    starterCodeByLanguage: {
      c: `#include <stdio.h>\nint main() {\n    long long n; if (scanf("%lld", &n) != 1) return 0;\n    if (n == 0) { printf("0\\n"); return 0; }\n    char buf[70]; int idx = 0;\n    while (n > 0) {\n        buf[idx++] = (n % 2) + '0';\n        n /= 2;\n    }\n    for (int i = idx - 1; i >= 0; i--) putchar(buf[i]);\n    putchar('\\n');\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\nint main() {\n    long long n; if (!(cin >> n)) return 0;\n    if (n == 0) { cout << 0 << "\\n"; return 0; }\n    string s = "";\n    while (n > 0) {\n        s += (n % 2 == 1 ? '1' : '0');\n        n /= 2;\n    }\n    reverse(s.begin(), s.end());\n    cout << s << "\\n";\n    return 0;\n}`,
      java: `import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLong()) return;\n        long n = sc.nextLong();\n        System.out.println(Long.toBinaryString(n));\n    }\n}`,
      python: `import sys\ndef main():\n    raw = sys.stdin.read().strip()\n    if not raw: return\n    n = int(raw)\n    print(bin(n)[2:])\nif __name__ == '__main__': main()`
    },
    publicTestCases: [
      { id: 'tc-028-1', input: '13', expectedOutput: '1101' },
      { id: 'tc-028-2', input: '0', expectedOutput: '0' }
    ],
    hiddenTestCases: [
      { id: 'tc-028-h1', input: '7', expectedOutput: '111', isHidden: true }
    ],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-029',
    catalogNumber: 29,
    slug: 'convert-binary-to-decimal',
    title: 'Convert Binary to Decimal',
    problemStatement: `Given a binary string \`S\`, convert it to its decimal integer representation.`,
    inputFormat: 'A single string S consisting of 0s and 1s.',
    outputFormat: 'Print the decimal representation of S.',
    constraints: ['1 <= S.length <= 60'],
    examples: [
      { input: '1101', output: '13', explanation: '1*8 + 1*4 + 0*2 + 1*1 = 13.' },
      { input: '1000', output: '8', explanation: '2^3 = 8.' }
    ],
    difficulty: 'EASY',
    topics: ['Math', 'Bit Manipulation'],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 10,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers Binary Decoding',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Base 2 to Base 10 decoding.'
    },
    hints: [
      'Iterate through the string: ans = ans * 2 + (char - \'0\').',
      'Consider boundary constraints, zero values, and potential integer overflow.'
    ],
    hintStages: build12StageHints({
      goal: 'Parse a binary string into its decimal value.',
      result: 'Decimal integer.',
      constraints: 'String length up to 60 fits in a 64-bit integer.',
      example: '"1101" -> 13.',
      observation: 'Each step shifts previous total left by 1 and adds the current bit.',
      bruteForce: 'Multiply each bit by 2^power.',
      limitation: 'Horner\'s method ans = ans * 2 + bit avoids power calculations.',
      pattern: 'Horner\'s Polynomial Evaluation.',
      dataStructure: 'Integer variable.',
      outline: 'ans = 0. For each char c: ans = ans * 2 + (c - \'0\'). Return ans.',
      pseudocode: 'ans = 0\nfor c in S: ans = ans * 2 + int(c)\nreturn ans',
      solution: 'O(N) time and O(1) space.'
    }),
    explanation: 'Evaluate using Horner\'s scheme: multiply previous sum by 2 and add current bit.',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: `#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[70]; if (scanf("%s", s) != 1) return 0;\n    long long ans = 0;\n    for (int i = 0; s[i]; i++) ans = ans * 2 + (s[i] - '0');\n    printf("%lld\\n", ans);\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s; if (!(cin >> s)) return 0;\n    long long ans = 0;\n    for (char c : s) ans = ans * 2 + (c - '0');\n    cout << ans << "\\n";\n    return 0;\n}`,
      java: `import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        String s = sc.next();\n        long ans = Long.parseLong(s, 2);\n        System.out.println(ans);\n    }\n}`,
      python: `import sys\ndef main():\n    raw = sys.stdin.read().strip()\n    if not raw: return\n    print(int(raw, 2))\nif __name__ == '__main__': main()`
    },
    publicTestCases: [
      { id: 'tc-029-1', input: '1101', expectedOutput: '13' },
      { id: 'tc-029-2', input: '1000', expectedOutput: '8' }
    ],
    hiddenTestCases: [
      { id: 'tc-029-h1', input: '0', expectedOutput: '0', isHidden: true }
    ],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-030',
    catalogNumber: 30,
    externalProblemId: 'leetcode-191',
    externalUrl: 'https://leetcode.com/problems/number-of-1-bits/',
    slug: 'count-set-bits',
    title: 'Count Set Bits',
    problemStatement: `Given a positive integer \`N\`, count the number of set bits (1s) in its binary representation. (Also known as Hamming weight).`,
    inputFormat: 'A single positive integer N.',
    outputFormat: 'Print the number of set bits in N.',
    constraints: ['1 <= N <= 10^18'],
    examples: [
      { input: '11', output: '3', explanation: '11 in binary is 1011, which has 3 set bits.' },
      { input: '128', output: '1', explanation: '128 in binary is 10000000 (1 set bit).' }
    ],
    difficulty: 'EASY',
    topics: ['Bit Manipulation'],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 10,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers Brian Kernighan Algorithm',
      hiringCycle: 'TCS Ninja Track',
      notes: 'Brian Kernighan\'s bit counting algorithm.'
    },
    hints: [
      'n = n & (n - 1) clears the lowest set bit in O(1) time.',
      'Review constraints and consider edge cases (e.g. boundary values or zero).'
    ],
    hintStages: build12StageHints({
      goal: 'Count how many 1 bits exist in the binary representation of N.',
      result: 'Integer count.',
      constraints: 'N up to 10^18.',
      example: 'N = 11 (1011): 3 set bits.',
      observation: 'N & (N - 1) always clears the lowest set bit in N.',
      bruteForce: 'Check all 64 bits one by one with N & 1 and N >>= 1.',
      limitation: 'Checking 64 bits always takes 64 operations even if only one bit is set.',
      pattern: 'Brian Kernighan\'s Algorithm.',
      dataStructure: 'Bitwise primitives.',
      outline: 'count = 0. While N > 0: N = N & (N - 1), count++. Return count.',
      pseudocode: 'count = 0\nwhile N > 0:\n  N &= (N - 1)\n  count += 1\nreturn count',
      solution: 'Runs in O(k) time where k is number of set bits.'
    }),
    explanation: 'Brian Kernighan\'s algorithm clears the lowest set bit on each iteration, looping only as many times as there are set bits.',
    timeComplexity: 'O(number of set bits)',
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: `#include <stdio.h>\nint main() {\n    long long n; if (scanf("%lld", &n) != 1) return 0;\n    int count = 0;\n    while (n > 0) { n &= (n - 1); count++; }\n    printf("%d\\n", count);\n    return 0;\n}`,
      cpp: `#include <iostream>\nusing namespace std;\nint main() {\n    long long n; if (!(cin >> n)) return 0;\n    int count = 0;\n    while (n > 0) { n &= (n - 1); count++; }\n    cout << count << "\\n";\n    return 0;\n}`,
      java: `import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLong()) return;\n        long n = sc.nextLong();\n        System.out.println(Long.bitCount(n));\n    }\n}`,
      python: `import sys\ndef main():\n    raw = sys.stdin.read().strip()\n    if not raw: return\n    n = int(raw)\n    print(bin(n).count('1'))\nif __name__ == '__main__': main()`
    },
    publicTestCases: [
      { id: 'tc-030-1', input: '11', expectedOutput: '3' },
      { id: 'tc-030-2', input: '128', expectedOutput: '1' }
    ],
    hiddenTestCases: [
      { id: 'tc-030-h1', input: '15', expectedOutput: '4', isHidden: true }
    ],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-031',
    catalogNumber: 31,
    slug: 'find-the-largest-and-smallest-array-elements',
    title: 'Find the Largest and Smallest Array Elements',
    problemStatement: `Given an array of \`N\` integers, find the smallest and largest elements in the array. Output the smallest and largest elements separated by a single space.`,
    inputFormat: 'First line contains integer N. Second line contains N integers.',
    outputFormat: 'Print min and max separated by space.',
    constraints: ['1 <= N <= 10^5', '-10^9 <= nums[i] <= 10^9'],
    examples: [
      { input: '5\n3 2 1 5 6', output: '1 6' }
    ],
    difficulty: 'EASY',
    topics: ['Array', 'Implementation'],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 10,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: { title: 'TCS NQT Array Extremes', hiringCycle: 'TCS Ninja Track' },
    hints: [
      'Initialize min and max with the first element, then scan the array once.',
      'Review constraints and consider edge cases (e.g. boundary values or zero).'
    ],
    hintStages: build12StageHints({
      goal: 'Find the minimum and maximum values in an integer array.',
      result: 'Two space-separated integers: min and max.',
      constraints: 'N up to 10^5.',
      example: '[3, 2, 1, 5, 6] -> min = 1, max = 6.',
      observation: 'A single pass can update both minimum and maximum simultaneously.',
      bruteForce: 'Sort array and take first and last elements in O(N log N).',
      limitation: 'Sorting is O(N log N). Single pass O(N) is optimal.',
      pattern: 'Single-Pass Extremes Search.',
      dataStructure: 'Scalar variables.',
      outline: 'minVal = maxVal = nums[0]. For i from 1 to N-1: update minVal and maxVal.',
      pseudocode: 'minVal = maxVal = nums[0]\nfor x in nums:\n  minVal = min(minVal, x)\n  maxVal = max(maxVal, x)\nprint(minVal, maxVal)',
      solution: 'O(N) time and O(1) space.'
    }),
    explanation: 'Scan the array once keeping track of the minimum and maximum observed values.',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: `#include <stdio.h>\nint main() {\n    int n; if (scanf("%d", &n) != 1) return 0;\n    long long x; scanf("%lld", &x);\n    long long min_v = x, max_v = x;\n    for (int i = 1; i < n; i++) {\n        scanf("%lld", &x);\n        if (x < min_v) min_v = x;\n        if (x > max_v) max_v = x;\n    }\n    printf("%lld %lld\\n", min_v, max_v);\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <algorithm>\nusing namespace std;\nint main() {\n    int n; if (!(cin >> n)) return 0;\n    long long x; cin >> x;\n    long long minV = x, maxV = x;\n    for (int i = 1; i < n; i++) {\n        cin >> x;\n        minV = min(minV, x);\n        maxV = max(maxV, x);\n    }\n    cout << minV << " " << maxV << "\\n";\n    return 0;\n}`,
      java: `import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        long x = sc.nextLong();\n        long minV = x, maxV = x;\n        for (int i = 1; i < n; i++) {\n            x = sc.nextLong();\n            minV = Math.min(minV, x);\n            maxV = Math.max(maxV, x);\n        }\n        System.out.println(minV + " " + maxV);\n    }\n}`,
      python: `import sys\ndef main():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    nums = [int(x) for x in data[1:1+n]]\n    print(f"{min(nums)} {max(nums)}")\nif __name__ == '__main__': main()`
    },
    publicTestCases: [
      { id: 'tc-031-1', input: '5\n3 2 1 5 6', expectedOutput: '1 6' }
    ],
    hiddenTestCases: [
      { id: 'tc-031-h1', input: '1\n42', expectedOutput: '42 42', isHidden: true }
    ],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-032',
    catalogNumber: 32,
    slug: 'find-the-second-largest-distinct-element',
    title: 'Find the Second-Largest Distinct Element',
    problemStatement: `Given an array of \`N\` integers, find the second-largest distinct element in the array. If no second-largest distinct element exists (e.g. all elements are identical), output -1.`,
    inputFormat: 'First line contains integer N. Second line contains N space-separated integers.',
    outputFormat: 'Print the second-largest distinct element or -1.',
    constraints: ['1 <= N <= 10^5', '-10^9 <= nums[i] <= 10^9'],
    examples: [
      { input: '6\n12 35 1 10 34 1', output: '34', explanation: 'The largest element is 35, and the second-largest distinct element is 34.' },
      { input: '3\n10 10 10', output: '-1', explanation: 'All elements are identical.' }
    ],
    difficulty: 'EASY',
    topics: ['Array', 'Sorting'],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 15,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: { title: 'TCS Placement Papers Second Largest', hiringCycle: 'TCS Ninja Track' },
    hints: [
      'Keep track of largest and secondLargest in a single pass.',
      'Review constraints and consider edge cases (e.g. boundary values or zero).'
    ],
    hintStages: build12StageHints({
      goal: 'Find the second-largest distinct value in an array.',
      result: 'The second largest value, or -1.',
      constraints: 'N up to 10^5.',
      example: '[12, 35, 1, 10, 34, 1] -> largest=35, second=34.',
      observation: 'When updating the largest, the old largest becomes the new second-largest.',
      bruteForce: 'Sort array, remove duplicates, pick second from end.',
      limitation: 'Sorting takes O(N log N). Single pass O(N) is faster.',
      pattern: 'Two Extremes Tracking.',
      dataStructure: 'Two variables.',
      outline: 'Track max1 and max2. If x > max1: max2 = max1, max1 = x. Else if x > max2 and x != max1: max2 = x.',
      pseudocode: 'max1 = max2 = -INF\nfor x in nums:\n  if x > max1: max2 = max1; max1 = x\n  else if x > max2 and x != max1: max2 = x',
      solution: 'O(N) time and O(1) space.'
    }),
    explanation: 'Maintain the largest and second largest elements in a single pass.',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: `#include <stdio.h>\n#include <limits.h>\nint main() {\n    int n; if (scanf("%d", &n) != 1) return 0;\n    long long first = LLONG_MIN, second = LLONG_MIN;\n    for (int i = 0; i < n; i++) {\n        long long x; scanf("%lld", &x);\n        if (x > first) { second = first; first = x; }\n        else if (x > second && x != first) second = x;\n    }\n    if (second == LLONG_MIN) printf("-1\\n");\n    else printf("%lld\\n", second);\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <vector>\n#include <climits>\nusing namespace std;\nint main() {\n    int n; if (!(cin >> n)) return 0;\n    long long first = LLONG_MIN, second = LLONG_MIN;\n    for (int i = 0; i < n; i++) {\n        long long x; cin >> x;\n        if (x > first) { second = first; first = x; }\n        else if (x > second && x != first) second = x;\n    }\n    if (second == LLONG_MIN) cout << -1 << "\\n";\n    else cout << second << "\\n";\n    return 0;\n}`,
      java: `import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        long first = Long.MIN_VALUE, second = Long.MIN_VALUE;\n        for (int i = 0; i < n; i++) {\n            long x = sc.nextLong();\n            if (x > first) { second = first; first = x; }\n            else if (x > second && x != first) second = x;\n        }\n        System.out.println(second == Long.MIN_VALUE ? -1 : second);\n    }\n}`,
      python: `import sys\ndef main():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    nums = list(set([int(x) for x in data[1:1+n]]))\n    if len(nums) < 2:\n        print(-1)\n    else:\n        nums.sort()\n        print(nums[-2])\nif __name__ == '__main__': main()`
    },
    publicTestCases: [
      { id: 'tc-032-1', input: '6\n12 35 1 10 34 1', expectedOutput: '34' },
      { id: 'tc-032-2', input: '3\n10 10 10', expectedOutput: '-1' }
    ],
    hiddenTestCases: [
      { id: 'tc-032-h1', input: '2\n5 10', expectedOutput: '5', isHidden: true }
    ],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-033',
    catalogNumber: 33,
    slug: 'reverse-an-array-in-place',
    title: 'Reverse an Array In-Place',
    problemStatement: `Given an array of \`N\` integers, reverse the array in-place without allocating a new array. Output the reversed array elements separated by spaces.`,
    inputFormat: 'First line contains integer N. Second line contains N space-separated integers.',
    outputFormat: 'Print the reversed array.',
    constraints: ['1 <= N <= 10^5', '-10^9 <= nums[i] <= 10^9'],
    examples: [
      { input: '5\n1 2 3 4 5', output: '5 4 3 2 1' }
    ],
    difficulty: 'EASY',
    topics: ['Array', 'Two Pointers'],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 10,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: { title: 'TCS Placement Papers In-place Array Reverse', hiringCycle: 'TCS Ninja Track' },
    hints: [
      'Swap elements at indices i and N - 1 - i using two pointers.',
      'Review constraints and consider edge cases (e.g. boundary values or zero).'
    ],
    hintStages: build12StageHints({
      goal: 'Reverse an array in-place using O(1) auxiliary memory.',
      result: 'Reversed array elements.',
      constraints: 'N up to 10^5.',
      example: '[1, 2, 3, 4, 5] -> [5, 4, 3, 2, 1].',
      observation: 'Swapping elements from both ends toward center inverts the sequence.',
      bruteForce: 'Create a new array and populate backwards.',
      limitation: 'Uses O(N) extra space instead of O(1).',
      pattern: 'Two Pointers In-Place Swap.',
      dataStructure: 'Array pointers.',
      outline: 'l = 0, r = N - 1. While l < r: swap(nums[l], nums[r]), l++, r--.',
      pseudocode: 'l = 0, r = N-1\nwhile l < r:\n  swap(a[l], a[r])\n  l++; r--',
      solution: 'O(N) time and O(1) auxiliary space.'
    }),
    explanation: 'Two pointers swap symmetric elements until they meet in the middle.',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: `#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int n; if (scanf("%d", &n) != 1) return 0;\n    long long *a = (long long*)malloc(sizeof(long long) * n);\n    for (int i = 0; i < n; i++) scanf("%lld", &a[i]);\n    for (int l = 0, r = n - 1; l < r; l++, r--) {\n        long long t = a[l]; a[l] = a[r]; a[r] = t;\n    }\n    for (int i = 0; i < n; i++) printf("%lld%c", a[i], i == n - 1 ? '\\n' : ' ');\n    free(a);\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    int n; if (!(cin >> n)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    for (int l = 0, r = n - 1; l < r; l++, r--) swap(a[l], a[r]);\n    for (int i = 0; i < n; i++) cout << a[i] << (i == n - 1 ? "" : " ");\n    cout << "\\n";\n    return 0;\n}`,
      java: `import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        long[] a = new long[n];\n        for (int i = 0; i < n; i++) a[i] = sc.nextLong();\n        for (int l = 0, r = n - 1; l < r; l++, r--) {\n            long t = a[l]; a[l] = a[r]; a[r] = t;\n        }\n        StringBuilder sb = new StringBuilder();\n        for (int i = 0; i < n; i++) sb.append(a[i]).append(i == n - 1 ? "" : " ");\n        System.out.println(sb.toString());\n    }\n}`,
      python: `import sys\ndef main():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    nums = data[1:1+n]\n    print(" ".join(reversed(nums)))\nif __name__ == '__main__': main()`
    },
    publicTestCases: [
      { id: 'tc-033-1', input: '5\n1 2 3 4 5', expectedOutput: '5 4 3 2 1' }
    ],
    hiddenTestCases: [
      { id: 'tc-033-h1', input: '2\n10 20', expectedOutput: '20 10', isHidden: true }
    ],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-034',
    catalogNumber: 34,
    externalProblemId: 'leetcode-189',
    externalUrl: 'https://leetcode.com/problems/rotate-array/',
    slug: 'rotate-an-array-by-k-positions',
    title: 'Rotate an Array by K Positions',
    problemStatement: `Given an integer array \`nums\`, rotate the array to the right by \`k\` steps, where \`k\` is non-negative. Output the rotated array.`,
    inputFormat: 'First line contains integer N and integer K. Second line contains N integers.',
    outputFormat: 'Print the rotated array separated by spaces.',
    constraints: ['1 <= N <= 10^5', '0 <= K <= 10^9', '-10^9 <= nums[i] <= 10^9'],
    examples: [
      { input: '7 3\n1 2 3 4 5 6 7', output: '5 6 7 1 2 3 4' },
      { input: '4 2\n-1 -100 3 99', output: '3 99 -1 -100' }
    ],
    difficulty: 'MEDIUM',
    topics: ['Array', 'Math', 'Two Pointers'],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA', 'DIGITAL'],
    estimatedMinutes: 20,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: { title: 'TCS Digital Array Right Rotation', hiringCycle: 'TCS Digital Track' },
    hints: [
      'Effective rotations K = K % N. Reversal algorithm: reverse whole array, reverse first K, reverse remaining N-K.',
      'Review constraints and consider edge cases (e.g. boundary values or zero).'
    ],
    hintStages: build12StageHints({
      goal: 'Shift elements to the right by K positions cyclically in O(1) extra space.',
      result: 'The rotated array.',
      constraints: 'N up to 10^5, K up to 10^9.',
      example: '[1,2,3,4,5,6,7], k=3 -> [5,6,7,1,2,3,4].',
      observation: 'Rotating by N steps results in the identical array. Effective rotation is k = K % N.',
      bruteForce: 'Rotate 1 step K times in O(K * N) time.',
      limitation: 'O(K * N) will severely timeout when K = 10^9.',
      pattern: 'Three-Reversal Algorithm.',
      dataStructure: 'Array in-place.',
      outline: 'k = K % N. 1. Reverse entire array. 2. Reverse first k elements. 3. Reverse remaining N - k elements.',
      pseudocode: 'k = k % n\nreverse(0, n - 1)\nreverse(0, k - 1)\nreverse(k, n - 1)',
      solution: 'O(N) time and O(1) extra space.'
    }),
    explanation: 'Reverse the entire array, then reverse the first k elements, and finally reverse the last n-k elements.',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: `#include <stdio.h>\n#include <stdlib.h>\nvoid rev(long long *a, int l, int r) {\n    while (l < r) { long long t = a[l]; a[l] = a[r]; a[r] = t; l++; r--; }\n}\nint main() {\n    int n; long long k; if (scanf("%d %lld", &n, &k) != 2) return 0;\n    long long *a = (long long*)malloc(sizeof(long long) * n);\n    for (int i = 0; i < n; i++) scanf("%lld", &a[i]);\n    k %= n;\n    rev(a, 0, n - 1);\n    rev(a, 0, k - 1);\n    rev(a, k, n - 1);\n    for (int i = 0; i < n; i++) printf("%lld%c", a[i], i == n - 1 ? '\\n' : ' ');\n    free(a);\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\nint main() {\n    int n; long long k; if (!(cin >> n >> k)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    k %= n;\n    reverse(a.begin(), a.end());\n    reverse(a.begin(), a.begin() + k);\n    reverse(a.begin() + k, a.end());\n    for (int i = 0; i < n; i++) cout << a[i] << (i == n - 1 ? "" : " ");\n    cout << "\\n";\n    return 0;\n}`,
      java: `import java.util.*;\npublic class Solution {\n    static void rev(long[] a, int l, int r) {\n        while (l < r) { long t = a[l]; a[l] = a[r]; a[r] = t; l++; r--; }\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        long k = sc.nextLong() % n;\n        long[] a = new long[n];\n        for (int i = 0; i < n; i++) a[i] = sc.nextLong();\n        rev(a, 0, n - 1);\n        rev(a, 0, (int)k - 1);\n        rev(a, (int)k, n - 1);\n        StringBuilder sb = new StringBuilder();\n        for (int i = 0; i < n; i++) sb.append(a[i]).append(i == n - 1 ? "" : " ");\n        System.out.println(sb.toString());\n    }\n}`,
      python: `import sys\ndef main():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, k = int(data[0]), int(data[1])\n    nums = data[2:2+n]\n    k %= n\n    res = nums[-k:] + nums[:-k] if k > 0 else nums\n    print(" ".join(res))\nif __name__ == '__main__': main()`
    },
    publicTestCases: [
      { id: 'tc-034-1', input: '7 3\n1 2 3 4 5 6 7', expectedOutput: '5 6 7 1 2 3 4' },
      { id: 'tc-034-2', input: '4 2\n-1 -100 3 99', expectedOutput: '3 99 -1 -100' }
    ],
    hiddenTestCases: [
      { id: 'tc-034-h1', input: '3 0\n1 2 3', expectedOutput: '1 2 3', isHidden: true }
    ],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-035',
    catalogNumber: 35,
    externalProblemId: 'leetcode-283',
    externalUrl: 'https://leetcode.com/problems/move-zeroes/',
    slug: 'move-zeroes-to-the-end',
    title: 'Move Zeroes to the End',
    problemStatement: `Given an integer array \`nums\`, move all \`0\`s to the end of it while maintaining the relative order of the non-zero elements. You must do this in-place without making a copy of the array.`,
    inputFormat: 'First line contains integer N. Second line contains N space-separated integers.',
    outputFormat: 'Print the array elements separated by spaces.',
    constraints: ['1 <= nums.length <= 10^5', '-2^31 <= nums[i] <= 2^31 - 1'],
    examples: [
      { input: '5\n0 1 0 3 12', output: '1 3 12 0 0' },
      { input: '1\n0', output: '0' }
    ],
    difficulty: 'EASY',
    topics: ['Array', 'Two Pointers'],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 15,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: { title: 'TCS Placement Papers Zero Compaction', hiringCycle: 'TCS Ninja Track' },
    hints: [
      'Keep a pointer nonZeroIdx where the next non-zero element should be placed.',
      'Review constraints and consider edge cases (e.g. boundary values or zero).'
    ],
    hintStages: build12StageHints({
      goal: 'Shift all zeroes to the end of the array while keeping non-zero elements in order.',
      result: 'The array in-place.',
      constraints: 'N up to 10^5.',
      example: '[0, 1, 0, 3, 12] -> [1, 3, 12, 0, 0].',
      observation: 'Non-zero elements must maintain relative order; zeroes fill remaining slots.',
      bruteForce: 'Filter non-zeroes to new array, pad with zeroes.',
      limitation: 'Allocating new array violates the in-place requirement.',
      pattern: 'Two Pointers (Fast & Slow).',
      dataStructure: 'Two pointers.',
      outline: 'nonZero = 0. Iterate i from 0 to N-1: if nums[i] != 0: swap(nums[nonZero], nums[i]), nonZero++.',
      pseudocode: 'pos = 0\nfor i in 0..N-1:\n  if a[i] != 0:\n    swap(a[pos], a[i])\n    pos++',
      solution: 'O(N) time and O(1) space.'
    }),
    explanation: 'A slow pointer tracks the position to insert the next non-zero element while a fast pointer iterates through the array.',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: `#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int n; if (scanf("%d", &n) != 1) return 0;\n    long long *a = (long long*)malloc(sizeof(long long) * n);\n    for (int i = 0; i < n; i++) scanf("%lld", &a[i]);\n    int pos = 0;\n    for (int i = 0; i < n; i++) {\n        if (a[i] != 0) {\n            long long t = a[pos]; a[pos] = a[i]; a[i] = t;\n            pos++;\n        }\n    }\n    for (int i = 0; i < n; i++) printf("%lld%c", a[i], i == n - 1 ? '\\n' : ' ');\n    free(a);\n    return 0;\n}`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    int n; if (!(cin >> n)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    int pos = 0;\n    for (int i = 0; i < n; i++) {\n        if (a[i] != 0) swap(a[pos++], a[i]);\n    }\n    for (int i = 0; i < n; i++) cout << a[i] << (i == n - 1 ? "" : " ");\n    cout << "\\n";\n    return 0;\n}`,
      java: `import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        long[] a = new long[n];\n        for (int i = 0; i < n; i++) a[i] = sc.nextLong();\n        int pos = 0;\n        for (int i = 0; i < n; i++) {\n            if (a[i] != 0) {\n                long t = a[pos]; a[pos] = a[i]; a[i] = t;\n                pos++;\n            }\n        }\n        StringBuilder sb = new StringBuilder();\n        for (int i = 0; i < n; i++) sb.append(a[i]).append(i == n - 1 ? "" : " ");\n        System.out.println(sb.toString());\n    }\n}`,
      python: `import sys\ndef main():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    nums = [int(x) for x in data[1:1+n]]\n    non_zeros = [str(x) for x in nums if x != 0]\n    zeros = ['0'] * (n - len(non_zeros))\n    print(" ".join(non_zeros + zeros))\nif __name__ == '__main__': main()`
    },
    publicTestCases: [
      { id: 'tc-035-1', input: '5\n0 1 0 3 12', expectedOutput: '1 3 12 0 0' },
      { id: 'tc-035-2', input: '1\n0', expectedOutput: '0' }
    ],
    hiddenTestCases: [
      { id: 'tc-035-h1', input: '4\n0 0 0 1', expectedOutput: '1 0 0 0', isHidden: true }
    ],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-036',
    catalogNumber: 36,
    slug: "remove-duplicates-from-sorted-array",
    title: "Remove Duplicates from Sorted Array",
    problemStatement: "Given a sorted integer array `nums`, remove the duplicates in-place such that each unique element appears only once. The relative order of elements should be kept the same. Print the count of unique elements `k`, followed by the `k` unique elements on the next line.",
    inputFormat: "First line contains N. Second line contains N sorted integers.",
    outputFormat: "First line: integer k. Second line: k unique elements separated by space.",
    constraints: [
      "1 <= N <= 10^5",
      "-10^9 <= nums[i] <= 10^9",
      "nums is sorted in non-decreasing order"
],
    examples: [
      {
            "input": "5\n1 1 2 2 3",
            "output": "3\n1 2 3",
            "explanation": "Unique elements are 1, 2, 3 (count = 3)."
      },
      {
            "input": "2\n1 1",
            "output": "1\n1",
            "explanation": "Single unique element 1."
      }
],
    difficulty: 'EASY',
    topics: ["Arrays", "Two Pointers"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Remove Duplicates from Sorted Array",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Two Pointers (Slow and Fast pointer).",
      "Since the array is sorted, duplicates are always adjacent."
    ],
    hintStages: build12StageHints({
      goal: "Remove duplicate elements in-place from a sorted array and return the count and elements.",
      result: "Unique element count k, followed by the k unique values.",
      constraints: "Array is already sorted. In-place modification required.",
      example: "[1, 1, 2] -> index 0 holds 1, index 1 holds 2 -> k=2, [1, 2].",
      observation: "Since the array is sorted, duplicates are always adjacent.",
      bruteForce: "Collect elements in a hash set, then sort.",
      limitation: "Using extra memory violates O(1) auxiliary space requirement.",
      pattern: "Two Pointers (Slow and Fast pointer).",
      dataStructure: "Two pointers (write pointer and read pointer).",
      outline: "Keep write_idx at 0. Loop i from 1 to N-1: if nums[i] != nums[write_idx], increment write_idx and set nums[write_idx] = nums[i].",
      pseudocode: "write = 0\nfor i from 1 to N-1:\n  if a[i] != a[write]:\n    write++\n    a[write] = a[i]\nreturn write + 1",
      solution: "Time complexity is O(N), auxiliary space is O(1)."
    }),
    explanation: "Since the array is sorted, duplicates are always adjacent. Time complexity is O(N), auxiliary space is O(1).",
    timeComplexity: "Time",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int n; if (scanf(\"%d\", &n) != 1 || n <= 0) return 0;\n    long long *a = (long long*)malloc(sizeof(long long) * n);\n    for (int i = 0; i < n; i++) scanf(\"%lld\", &a[i]);\n    int write = 0;\n    for (int i = 1; i < n; i++) {\n        if (a[i] != a[write]) {\n            write++;\n            a[write] = a[i];\n        }\n    }\n    int k = write + 1;\n    printf(\"%d\\n\", k);\n    for (int i = 0; i < k; i++) printf(\"%lld%c\", a[i], i == k - 1 ? '\\n' : ' ');\n    free(a);\n    return 0;\n}",
      cpp: "#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    int n; if (!(cin >> n) || n <= 0) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    int write = 0;\n    for (int i = 1; i < n; i++) {\n        if (a[i] != a[write]) a[++write] = a[i];\n    }\n    int k = write + 1;\n    cout << k << \"\\n\";\n    for (int i = 0; i < k; i++) cout << a[i] << (i == k - 1 ? \"\" : \" \");\n    cout << \"\\n\";\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        long[] a = new long[n];\n        for (int i = 0; i < n; i++) a[i] = sc.nextLong();\n        int write = 0;\n        for (int i = 1; i < n; i++) {\n            if (a[i] != a[write]) a[++write] = a[i];\n        }\n        int k = write + 1;\n        System.out.println(k);\n        StringBuilder sb = new StringBuilder();\n        for (int i = 0; i < k; i++) sb.append(a[i]).append(i == k - 1 ? \"\" : \" \");\n        System.out.println(sb.toString());\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    nums = [int(x) for x in data[1:1+n]]\n    if not nums: return\n    res = [nums[0]]\n    for x in nums[1:]:\n        if x != res[-1]: res.append(x)\n    print(len(res))\n    print(\" \".join(str(x) for x in res))\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-036-1",
            "input": "5\n1 1 2 2 3",
            "expectedOutput": "3\n1 2 3"
      },
      {
            "id": "tc-036-2",
            "input": "2\n1 1",
            "expectedOutput": "1\n1"
      }
],
    hiddenTestCases: [
      {
            "id": "tc-036-h1",
            "input": "6\n-5 -5 -1 0 0 2",
            "expectedOutput": "4\n-5 -1 0 2",
            "isHidden": true
      }
],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-037',
    catalogNumber: 37,
    slug: "missing-number-in-array",
    title: "Missing Number in Array [1..N]",
    problemStatement: "Given an array of size `N-1` containing distinct integers in the range `[1, N]`, find the single missing number.",
    inputFormat: "First line contains N. Second line contains N-1 space-separated integers.",
    outputFormat: "Print the missing integer.",
    constraints: [
      "2 <= N <= 10^6",
      "1 <= array[i] <= N"
],
    examples: [
      {
            "input": "5\n1 2 4 5",
            "output": "3",
            "explanation": "Range is 1 to 5. 3 is absent."
      },
      {
            "input": "2\n1",
            "output": "2",
            "explanation": "Range is 1 to 2. 2 is absent."
      }
],
    difficulty: 'EASY',
    topics: ["Arrays", "Math", "Bit Manipulation"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Missing Number in Array [1..N]",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Gauss summation formula or XOR bit manipulation.",
      "Sum of numbers 1..N is N*(N+1)/2. The difference between expected and actual sum is the missing number."
    ],
    hintStages: build12StageHints({
      goal: "Find the single integer from 1 to N that does not appear in the given N-1 elements.",
      result: "The missing integer.",
      constraints: "Array contains N-1 distinct values between 1 and N.",
      example: "N=5, arr=[1, 2, 4, 5]. Expected sum = 5*6/2 = 15. Actual sum = 12. 15-12 = 3.",
      observation: "Sum of numbers 1..N is N*(N+1)/2. The difference between expected and actual sum is the missing number.",
      bruteForce: "Sort the array and check for missing consecutive values.",
      limitation: "Sorting takes O(N log N) time.",
      pattern: "Gauss summation formula or XOR bit manipulation.",
      dataStructure: "Scalar accumulator variables.",
      outline: "Calculate expectedSum = N*(N+1)//2. Sum all array elements. Return expectedSum - actualSum.",
      pseudocode: "expected = N * (N + 1) // 2\nactual = sum(arr)\nreturn expected - actual",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Sum of numbers 1..N is N*(N+1)/2. The difference between expected and actual sum is the missing number. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\nint main() {\n    long long n; if (scanf(\"%lld\", &n) != 1) return 0;\n    long long expected = n * (n + 1) / 2;\n    long long actual = 0;\n    for (int i = 0; i < n - 1; i++) {\n        long long val; scanf(\"%lld\", &val);\n        actual += val;\n    }\n    printf(\"%lld\\n\", expected - actual);\n    return 0;\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    long long n; if (!(cin >> n)) return 0;\n    long long expected = n * (n + 1) / 2;\n    long long actual = 0;\n    for (int i = 0; i < n - 1; i++) {\n        long long v; cin >> v;\n        actual += v;\n    }\n    cout << (expected - actual) << \"\\n\";\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLong()) return;\n        long n = sc.nextLong();\n        long expected = n * (n + 1) / 2;\n        long actual = 0;\n        for (int i = 0; i < n - 1; i++) actual += sc.nextLong();\n        System.out.println(expected - actual);\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    nums = [int(x) for x in data[1:n]]\n    expected = n * (n + 1) // 2\n    actual = sum(nums)\n    print(expected - actual)\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-037-1",
            "input": "5\n1 2 4 5",
            "expectedOutput": "3"
      },
      {
            "id": "tc-037-2",
            "input": "2\n1",
            "expectedOutput": "2"
      }
],
    hiddenTestCases: [
      {
            "id": "tc-037-h1",
            "input": "4\n1 2 3",
            "expectedOutput": "4",
            "isHidden": true
      }
],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-038',
    catalogNumber: 38,
    slug: "find-duplicate-number",
    title: "Duplicate Value in Array [1..N]",
    problemStatement: "Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive. There is only one repeated number in `nums`, return this repeated number without modifying the array and using only constant O(1) extra space.",
    inputFormat: "First line contains N+1. Second line contains N+1 integers.",
    outputFormat: "Print the duplicate integer.",
    constraints: [
      "1 <= n <= 10^5",
      "nums.length == n + 1",
      "1 <= nums[i] <= n"
],
    examples: [
      {
            "input": "5\n1 3 4 2 2",
            "output": "2",
            "explanation": "2 appears twice."
      },
      {
            "input": "5\n3 1 3 4 2",
            "output": "3",
            "explanation": "3 is repeated."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Arrays", "Two Pointers", "Binary Search"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Duplicate Value in Array [1..N]",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Floyd's Tortoise and Hare (Cycle Detection).",
      "Treat the array values as pointers to indices. A duplicate implies two indices point to the same next node, creating a cycle."
    ],
    hintStages: build12StageHints({
      goal: "Find the duplicate number in an array of size n+1 containing numbers from 1 to n.",
      result: "The duplicated number.",
      constraints: "Do not modify the array. Use O(1) extra space.",
      example: "[1, 3, 4, 2, 2] -> 2 is the cycle entrance.",
      observation: "Treat the array values as pointers to indices. A duplicate implies two indices point to the same next node, creating a cycle.",
      bruteForce: "Sort or use a hash set.",
      limitation: "Violates the O(1) space constraint or immutable array constraint.",
      pattern: "Floyd's Tortoise and Hare (Cycle Detection).",
      dataStructure: "Two pointers (slow and fast).",
      outline: "Phase 1: slow = nums[0], fast = nums[0]. Advance slow by 1 step (nums[slow]) and fast by 2 steps (nums[nums[fast]]) until they meet. Phase 2: Reset slow to nums[0]. Advance both by 1 step until they meet at cycle entrance.",
      pseudocode: "slow = nums[0]; fast = nums[0]\ndo: slow = nums[slow]; fast = nums[nums[fast]] while slow != fast\nslow = nums[0]\nwhile slow != fast:\n  slow = nums[slow]; fast = nums[fast]\nreturn slow",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Treat the array values as pointers to indices. A duplicate implies two indices point to the same next node, creating a cycle. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int m; if (scanf(\"%d\", &m) != 1 || m <= 0) return 0;\n    int *a = (int*)malloc(sizeof(int) * m);\n    for (int i = 0; i < m; i++) scanf(\"%d\", &a[i]);\n    int slow = a[0], fast = a[0];\n    do {\n        slow = a[slow];\n        fast = a[a[fast]];\n    } while (slow != fast);\n    slow = a[0];\n    while (slow != fast) {\n        slow = a[slow];\n        fast = a[fast];\n    }\n    printf(\"%d\\n\", slow);\n    free(a);\n    return 0;\n}",
      cpp: "#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    int m; if (!(cin >> m) || m <= 0) return 0;\n    vector<int> a(m);\n    for (int i = 0; i < m; i++) cin >> a[i];\n    int slow = a[0], fast = a[0];\n    do {\n        slow = a[slow];\n        fast = a[a[fast]];\n    } while (slow != fast);\n    slow = a[0];\n    while (slow != fast) {\n        slow = a[slow];\n        fast = a[fast];\n    }\n    cout << slow << \"\\n\";\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int m = sc.nextInt();\n        int[] a = new int[m];\n        for (int i = 0; i < m; i++) a[i] = sc.nextInt();\n        int slow = a[0], fast = a[0];\n        do {\n            slow = a[slow];\n            fast = a[a[fast]];\n        } while (slow != fast);\n        slow = a[0];\n        while (slow != fast) {\n            slow = a[slow];\n            fast = a[fast];\n        }\n        System.out.println(slow);\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if not data: return\n    m = int(data[0])\n    a = [int(x) for x in data[1:1+m]]\n    slow = a[0]\n    fast = a[0]\n    while True:\n        slow = a[slow]\n        fast = a[a[fast]]\n        if slow == fast: break\n    slow = a[0]\n    while slow != fast:\n        slow = a[slow]\n        fast = a[fast]\n    print(slow)\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-038-1",
            "input": "5\n1 3 4 2 2",
            "expectedOutput": "2"
      },
      {
            "id": "tc-038-2",
            "input": "5\n3 1 3 4 2",
            "expectedOutput": "3"
      }
],
    hiddenTestCases: [
      {
            "id": "tc-038-h1",
            "input": "2\n1 1",
            "expectedOutput": "1",
            "isHidden": true
      }
],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-039',
    catalogNumber: 39,
    slug: "count-frequency-of-each-element",
    title: "Count Frequency of Each Element",
    problemStatement: "Given an array of integers, count the frequency of each distinct element and print them in ascending order of the elements, each formatted as `element:count`.",
    inputFormat: "First line contains integer N. Second line contains N integers.",
    outputFormat: "For each distinct element in ascending order, print 'element:count' separated by space.",
    constraints: [
      "1 <= N <= 10^5",
      "-10^9 <= nums[i] <= 10^9"
],
    examples: [
      {
            "input": "6\n2 3 2 3 5 2",
            "output": "2:3 3:2 5:1",
            "explanation": "2 appears 3 times, 3 appears 2 times, 5 appears 1 time."
      },
      {
            "input": "4\n1 1 1 1",
            "output": "1:4",
            "explanation": "1 appears 4 times."
      }
],
    difficulty: 'EASY',
    topics: ["Arrays", "Hash Table"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Count Frequency of Each Element",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Frequency map / Hash table or Sort + Group.",
      "A hash map or sorted frequency map directly aggregates counts."
    ],
    hintStages: build12StageHints({
      goal: "Count occurrences of every distinct value and print them sorted by value.",
      result: "Ascending formatted pairs element:count.",
      constraints: "Array may contain positive, negative, or zero values.",
      example: "[2, 3, 2] -> 2:2 3:1.",
      observation: "A hash map or sorted frequency map directly aggregates counts.",
      bruteForce: "Double loop comparing every element to all others.",
      limitation: "O(N^2) time complexity is too slow for N=10^5.",
      pattern: "Frequency map / Hash table or Sort + Group.",
      dataStructure: "Map (e.g. std::map in C++ or dict in Python).",
      outline: "Tally occurrences in a hash map or ordered map. Sort distinct keys and print key:count.",
      pseudocode: "freq = {}\nfor x in arr: freq[x] = freq.get(x, 0) + 1\nfor k in sorted(freq.keys()): print(f'{k}:{freq[k]}')",
      solution: "O(N log N) using sorting or balanced BST map."
    }),
    explanation: "A hash map or sorted frequency map directly aggregates counts. O(N log N) using sorting or balanced BST map.",
    timeComplexity: "O(N",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\n#include <stdlib.h>\nint cmp(const void *a, const void *b) {\n    long long x = *(const long long*)a, y = *(const long long*)b;\n    if (x < y) return -1;\n    if (x > y) return 1;\n    return 0;\n}\nint main() {\n    int n; if (scanf(\"%d\", &n) != 1 || n <= 0) return 0;\n    long long *a = (long long*)malloc(sizeof(long long) * n);\n    for (int i = 0; i < n; i++) scanf(\"%lld\", &a[i]);\n    qsort(a, n, sizeof(long long), cmp);\n    int i = 0, first = 1;\n    while (i < n) {\n        int j = i;\n        while (j < n && a[j] == a[i]) j++;\n        int count = j - i;\n        if (!first) printf(\" \");\n        printf(\"%lld:%d\", a[i], count);\n        first = 0;\n        i = j;\n    }\n    printf(\"\\n\");\n    free(a);\n    return 0;\n}",
      cpp: "#include <iostream>\n#include <map>\nusing namespace std;\nint main() {\n    int n; if (!(cin >> n) || n <= 0) return 0;\n    map<long long, int> freq;\n    for (int i = 0; i < n; i++) {\n        long long v; cin >> v;\n        freq[v]++;\n    }\n    bool first = true;\n    for (auto const& [k, v] : freq) {\n        if (!first) cout << \" \";\n        cout << k << \":\" << v;\n        first = false;\n    }\n    cout << \"\\n\";\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        TreeMap<Long, Integer> freq = new TreeMap<>();\n        for (int i = 0; i < n; i++) {\n            long v = sc.nextLong();\n            freq.put(v, freq.getOrDefault(v, 0) + 1);\n        }\n        StringBuilder sb = new StringBuilder();\n        boolean first = true;\n        for (Map.Entry<Long, Integer> entry : freq.entrySet()) {\n            if (!first) sb.append(\" \");\n            sb.append(entry.getKey()).append(\":\").append(entry.getValue());\n            first = false;\n        }\n        System.out.println(sb.toString());\n    }\n}",
      python: "import sys\nfrom collections import Counter\ndef main():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    nums = [int(x) for x in data[1:1+n]]\n    counts = Counter(nums)\n    res = [f\"{k}:{counts[k]}\" for k in sorted(counts.keys())]\n    print(\" \".join(res))\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-039-1",
            "input": "6\n2 3 2 3 5 2",
            "expectedOutput": "2:3 3:2 5:1"
      },
      {
            "id": "tc-039-2",
            "input": "4\n1 1 1 1",
            "expectedOutput": "1:4"
      }
],
    hiddenTestCases: [
      {
            "id": "tc-039-h1",
            "input": "5\n-3 -3 0 2 0",
            "expectedOutput": "-3:2 0:2 2:1",
            "isHidden": true
      }
],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-040',
    catalogNumber: 40,
    slug: "maximum-subarray-sum-kadanes-algorithm",
    title: "Maximum Subarray Sum (Kadane's Algorithm)",
    problemStatement: "Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    inputFormat: "First line contains N. Second line contains N integers.",
    outputFormat: "Print the maximum subarray sum.",
    constraints: [
      "1 <= N <= 10^5",
      "-10^4 <= nums[i] <= 10^4"
],
    examples: [
      {
            "input": "9\n-2 1 -3 4 -1 2 1 -5 4",
            "output": "6",
            "explanation": "The contiguous subarray [4,-1,2,1] has the largest sum = 6."
      },
      {
            "input": "1\n1",
            "output": "1",
            "explanation": "Single element."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Arrays", "Dynamic Programming"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Maximum Subarray Sum (Kadane's Algorithm)",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Kadane's Algorithm / Dynamic Programming.",
      "At index i, either extend the previous subarray sum (currentSum + nums[i]) or start a fresh subarray at nums[i]."
    ],
    hintStages: build12StageHints({
      goal: "Find the largest sum among all non-empty contiguous subarrays.",
      result: "A single integer denoting max sum.",
      constraints: "Array may contain negative numbers. At least one element must be picked.",
      example: "[-2, 1, -3, 4] -> max is 4.",
      observation: "At index i, either extend the previous subarray sum (currentSum + nums[i]) or start a fresh subarray at nums[i].",
      bruteForce: "Check all O(N^2) pairs of (start, end).",
      limitation: "O(N^2) times out on N = 10^5.",
      pattern: "Kadane's Algorithm / Dynamic Programming.",
      dataStructure: "Scalar variables (currentSum and maxSum).",
      outline: "Initialize currentSum = nums[0], maxSum = nums[0]. For i from 1 to N-1: currentSum = max(nums[i], currentSum + nums[i]); maxSum = max(maxSum, currentSum).",
      pseudocode: "cur = a[0]; best = a[0]\nfor x in a[1..]:\n  cur = max(x, cur + x)\n  best = max(best, cur)\nreturn best",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "At index i, either extend the previous subarray sum (currentSum + nums[i]) or start a fresh subarray at nums[i]. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int n; if (scanf(\"%d\", &n) != 1 || n <= 0) return 0;\n    long long *a = (long long*)malloc(sizeof(long long) * n);\n    for (int i = 0; i < n; i++) scanf(\"%lld\", &a[i]);\n    long long cur = a[0], best = a[0];\n    for (int i = 1; i < n; i++) {\n        if (cur + a[i] > a[i]) cur += a[i];\n        else cur = a[i];\n        if (cur > best) best = cur;\n    }\n    printf(\"%lld\\n\", best);\n    free(a);\n    return 0;\n}",
      cpp: "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\nint main() {\n    int n; if (!(cin >> n) || n <= 0) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    long long cur = a[0], best = a[0];\n    for (int i = 1; i < n; i++) {\n        cur = max(a[i], cur + a[i]);\n        best = max(best, cur);\n    }\n    cout << best << \"\\n\";\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        long[] a = new long[n];\n        for (int i = 0; i < n; i++) a[i] = sc.nextLong();\n        long cur = a[0], best = a[0];\n        for (int i = 1; i < n; i++) {\n            cur = Math.max(a[i], cur + a[i]);\n            best = Math.max(best, cur);\n        }\n        System.out.println(best);\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    nums = [int(x) for x in data[1:1+n]]\n    cur = best = nums[0]\n    for x in nums[1:]:\n        cur = max(x, cur + x)\n        best = max(best, cur)\n    print(best)\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-040-1",
            "input": "9\n-2 1 -3 4 -1 2 1 -5 4",
            "expectedOutput": "6"
      },
      {
            "id": "tc-040-2",
            "input": "1\n1",
            "expectedOutput": "1"
      }
],
    hiddenTestCases: [
      {
            "id": "tc-040-h1",
            "input": "5\n-5 -2 -8 -1 -9",
            "expectedOutput": "-1",
            "isHidden": true
      }
],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-041',
    catalogNumber: 41,
    slug: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    problemStatement: "You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`-th day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
    inputFormat: "First line contains N. Second line contains N space-separated non-negative integers.",
    outputFormat: "Print maximum profit.",
    constraints: [
      "1 <= N <= 10^5",
      "0 <= prices[i] <= 10^4"
],
    examples: [
      {
            "input": "6\n7 1 5 3 6 4",
            "output": "5",
            "explanation": "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5."
      },
      {
            "input": "5\n7 6 4 3 1",
            "output": "0",
            "explanation": "No profitable trade possible."
      }
],
    difficulty: 'EASY',
    topics: ["Arrays", "Dynamic Programming"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Best Time to Buy and Sell Stock",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Prefix Minimum Tracking.",
      "Track the lowest price seen so far as you iterate through prices."
    ],
    hintStages: build12StageHints({
      goal: "Find maximum difference between a future selling price and an earlier buying price.",
      result: "Maximum profit integer (minimum 0).",
      constraints: "Must buy before selling. Single transaction.",
      example: "[7, 1, 5, 3, 6, 4] -> min price seen so far is 1, max diff is 6-1=5.",
      observation: "Track the lowest price seen so far as you iterate through prices.",
      bruteForce: "Nested loops checking every pair (i, j) with i < j.",
      limitation: "O(N^2) time complexity fails on N = 10^5.",
      pattern: "Prefix Minimum Tracking.",
      dataStructure: "Single scalar min_price.",
      outline: "minPrice = INF, maxProfit = 0. For each price p: minPrice = min(minPrice, p); maxProfit = max(maxProfit, p - minPrice).",
      pseudocode: "min_p = INF; max_prof = 0\nfor p in prices:\n  min_p = min(min_p, p)\n  max_prof = max(max_prof, p - min_p)\nreturn max_prof",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Track the lowest price seen so far as you iterate through prices. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int n; if (scanf(\"%d\", &n) != 1 || n <= 0) return 0;\n    long long min_p = 1e18, max_prof = 0;\n    for (int i = 0; i < n; i++) {\n        long long p; scanf(\"%lld\", &p);\n        if (p < min_p) min_p = p;\n        long long prof = p - min_p;\n        if (prof > max_prof) max_prof = prof;\n    }\n    printf(\"%lld\\n\", max_prof);\n    return 0;\n}",
      cpp: "#include <iostream>\n#include <algorithm>\nusing namespace std;\nint main() {\n    int n; if (!(cin >> n) || n <= 0) return 0;\n    long long min_p = 1e18, max_prof = 0;\n    for (int i = 0; i < n; i++) {\n        long long p; cin >> p;\n        min_p = min(min_p, p);\n        max_prof = max(max_prof, p - min_p);\n    }\n    cout << max_prof << \"\\n\";\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        long min_p = Long.MAX_VALUE, max_prof = 0;\n        for (int i = 0; i < n; i++) {\n            long p = sc.nextLong();\n            if (p < min_p) min_p = p;\n            long prof = p - min_p;\n            if (prof > max_prof) max_prof = prof;\n        }\n        System.out.println(max_prof);\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    prices = [int(x) for x in data[1:1+n]]\n    min_p = float('inf')\n    max_prof = 0\n    for p in prices:\n        if p < min_p: min_p = p\n        diff = p - min_p\n        if diff > max_prof: max_prof = diff\n    print(max_prof)\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-041-1",
            "input": "6\n7 1 5 3 6 4",
            "expectedOutput": "5"
      },
      {
            "id": "tc-041-2",
            "input": "5\n7 6 4 3 1",
            "expectedOutput": "0"
      }
],
    hiddenTestCases: [
      {
            "id": "tc-041-h1",
            "input": "3\n2 4 1",
            "expectedOutput": "2",
            "isHidden": true
      }
],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-042',
    catalogNumber: 42,
    slug: "product-of-array-except-self",
    title: "Product of Array Except Self",
    problemStatement: "Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`. Solve it without using the division operation and in O(N) time.",
    inputFormat: "First line contains N. Second line contains N integers.",
    outputFormat: "Print the product array elements separated by space.",
    constraints: [
      "2 <= N <= 10^5",
      "-30 <= nums[i] <= 30",
      "Product of any prefix or suffix fits in a 64-bit integer"
],
    examples: [
      {
            "input": "4\n1 2 3 4",
            "output": "24 12 8 6",
            "explanation": "2*3*4=24, 1*3*4=12, 1*2*4=8, 1*2*3=6."
      },
      {
            "input": "5\n-1 1 0 -3 3",
            "output": "0 0 9 0 0",
            "explanation": "At index 2, product of other elements is (-1)*1*(-3)*3 = 9."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Arrays", "Prefix Product"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Product of Array Except Self",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Prefix and Suffix Accumulation.",
      "answer[i] = (product of elements before i) * (product of elements after i)."
    ],
    hintStages: build12StageHints({
      goal: "Compute prefix product * suffix product for each index without division.",
      result: "N integers separated by single space.",
      constraints: "Division operator is forbidden.",
      example: "[1, 2, 3, 4] -> prefix products are [1, 1, 2, 6], suffix products are [24, 12, 4, 1]. Multiply together.",
      observation: "answer[i] = (product of elements before i) * (product of elements after i).",
      bruteForce: "Nested loop computing product of all other elements for each index.",
      limitation: "O(N^2) time complexity is unacceptable.",
      pattern: "Prefix and Suffix Accumulation.",
      dataStructure: "Output array plus a running suffix accumulator.",
      outline: "Pass 1: res[i] stores product of elements to the left. Pass 2: Iterate backwards with rightProduct variable, multiplying into res[i].",
      pseudocode: "res = [1]*N\ncur = 1\nfor i in 0..N-1: res[i] = cur; cur *= nums[i]\ncur = 1\nfor i in N-1..0: res[i] *= cur; cur *= nums[i]",
      solution: "O(N) time and O(1) auxiliary space (excluding output array)."
    }),
    explanation: "answer[i] = (product of elements before i) * (product of elements after i). O(N) time and O(1) auxiliary space (excluding output array).",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int n; if (scanf(\"%d\", &n) != 1 || n <= 0) return 0;\n    long long *a = (long long*)malloc(sizeof(long long) * n);\n    long long *res = (long long*)malloc(sizeof(long long) * n);\n    for (int i = 0; i < n; i++) scanf(\"%lld\", &a[i]);\n    long long left = 1;\n    for (int i = 0; i < n; i++) {\n        res[i] = left;\n        left *= a[i];\n    }\n    long long right = 1;\n    for (int i = n - 1; i >= 0; i--) {\n        res[i] *= right;\n        right *= a[i];\n    }\n    for (int i = 0; i < n; i++) printf(\"%lld%c\", res[i], i == n - 1 ? '\\n' : ' ');\n    free(a); free(res);\n    return 0;\n}",
      cpp: "#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    int n; if (!(cin >> n) || n <= 0) return 0;\n    vector<long long> a(n), res(n, 1);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    long long left = 1;\n    for (int i = 0; i < n; i++) {\n        res[i] = left;\n        left *= a[i];\n    }\n    long long right = 1;\n    for (int i = n - 1; i >= 0; i--) {\n        res[i] *= right;\n        right *= a[i];\n    }\n    for (int i = 0; i < n; i++) cout << res[i] << (i == n - 1 ? \"\" : \" \");\n    cout << \"\\n\";\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        long[] a = new long[n];\n        long[] res = new long[n];\n        for (int i = 0; i < n; i++) a[i] = sc.nextLong();\n        long left = 1;\n        for (int i = 0; i < n; i++) {\n            res[i] = left;\n            left *= a[i];\n        }\n        long right = 1;\n        for (int i = n - 1; i >= 0; i--) {\n            res[i] *= right;\n            right *= a[i];\n        }\n        StringBuilder sb = new StringBuilder();\n        for (int i = 0; i < n; i++) sb.append(res[i]).append(i == n - 1 ? \"\" : \" \");\n        System.out.println(sb.toString());\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    a = [int(x) for x in data[1:1+n]]\n    res = [1] * n\n    left = 1\n    for i in range(n):\n        res[i] = left\n        left *= a[i]\n    right = 1\n    for i in range(n - 1, -1, -1):\n        res[i] *= right\n        right *= a[i]\n    print(\" \".join(str(x) for x in res))\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-042-1",
            "input": "4\n1 2 3 4",
            "expectedOutput": "24 12 8 6"
      },
      {
            "id": "tc-042-2",
            "input": "5\n-1 1 0 -3 3",
            "expectedOutput": "0 0 9 0 0"
      }
],
    hiddenTestCases: [
      {
            "id": "tc-042-h1",
            "input": "2\n5 2",
            "expectedOutput": "2 5",
            "isHidden": true
      }
],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-043',
    catalogNumber: 43,
    slug: "majority-element-moores-voting-algorithm",
    title: "Majority Element (Moore's Voting Algorithm)",
    problemStatement: "Given an array `nums` of size `N`, return the majority element. The majority element is the element that appears strictly more than `\u230aN / 2\u230b` times. You may assume that the majority element always exists in the array.",
    inputFormat: "First line contains N. Second line contains N integers.",
    outputFormat: "Print the majority element.",
    constraints: [
      "1 <= N <= 10^5",
      "-10^9 <= nums[i] <= 10^9",
      "Majority element always exists"
],
    examples: [
      {
            "input": "3\n3 2 3",
            "output": "3",
            "explanation": "3 appears 2 times out of 3 (> 1.5)."
      },
      {
            "input": "7\n2 2 1 1 1 2 2",
            "output": "2",
            "explanation": "2 appears 4 times out of 7 (> 3.5)."
      }
],
    difficulty: 'EASY',
    topics: ["Arrays", "Counting"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Majority Element (Moore's Voting Algorithm)",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Boyer-Moore Voting Algorithm.",
      "Pairing up distinct elements cancels out both. Since majority occurs > N/2 times, it will remain uncanceled."
    ],
    hintStages: build12StageHints({
      goal: "Identify the element appearing strictly more than N/2 times.",
      result: "The majority integer.",
      constraints: "Majority element is guaranteed to exist. Must solve in O(N) time and O(1) space.",
      example: "[2, 2, 1, 1, 1, 2, 2] -> 2 is candidate.",
      observation: "Pairing up distinct elements cancels out both. Since majority occurs > N/2 times, it will remain uncanceled.",
      bruteForce: "Count frequency using a hash map or sort and take nums[N/2].",
      limitation: "Hash map takes O(N) space; sorting takes O(N log N) time.",
      pattern: "Boyer-Moore Voting Algorithm.",
      dataStructure: "Two scalar variables (candidate and count).",
      outline: "candidate = 0, count = 0. For each num: if count == 0: candidate = num. count += (num == candidate ? 1 : -1).",
      pseudocode: "cand = 0; cnt = 0\nfor x in nums:\n  if cnt == 0: cand = x\n  cnt += (1 if x == cand else -1)\nreturn cand",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Pairing up distinct elements cancels out both. Since majority occurs > N/2 times, it will remain uncanceled. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\nint main() {\n    int n; if (scanf(\"%d\", &n) != 1 || n <= 0) return 0;\n    long long candidate = 0;\n    int count = 0;\n    for (int i = 0; i < n; i++) {\n        long long v; scanf(\"%lld\", &v);\n        if (count == 0) candidate = v;\n        count += (v == candidate ? 1 : -1);\n    }\n    printf(\"%lld\\n\", candidate);\n    return 0;\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; if (!(cin >> n) || n <= 0) return 0;\n    long long candidate = 0;\n    int count = 0;\n    for (int i = 0; i < n; i++) {\n        long long v; cin >> v;\n        if (count == 0) candidate = v;\n        count += (v == candidate ? 1 : -1);\n    }\n    cout << candidate << \"\\n\";\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        long candidate = 0;\n        int count = 0;\n        for (int i = 0; i < n; i++) {\n            long v = sc.nextLong();\n            if (count == 0) candidate = v;\n            count += (v == candidate ? 1 : -1);\n        }\n        System.out.println(candidate);\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    nums = [int(x) for x in data[1:1+n]]\n    candidate = None\n    count = 0\n    for x in nums:\n        if count == 0: candidate = x\n        count += (1 if x == candidate else -1)\n    print(candidate)\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-043-1",
            "input": "3\n3 2 3",
            "expectedOutput": "3"
      },
      {
            "id": "tc-043-2",
            "input": "7\n2 2 1 1 1 2 2",
            "expectedOutput": "2"
      }
],
    hiddenTestCases: [
      {
            "id": "tc-043-h1",
            "input": "1\n99",
            "expectedOutput": "99",
            "isHidden": true
      }
],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-044',
    catalogNumber: 44,
    slug: "binary-search",
    title: "Binary Search",
    problemStatement: "Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its 0-based index. Otherwise, return -1.",
    inputFormat: "First line contains N and target T. Second line contains N sorted integers.",
    outputFormat: "Print the index of target or -1.",
    constraints: [
      "1 <= N <= 10^5",
      "-10^9 <= nums[i], target <= 10^9",
      "All integers in nums are unique and sorted in ascending order"
],
    examples: [
      {
            "input": "6 9\n-1 0 3 5 9 12",
            "output": "4",
            "explanation": "9 exists in nums and its index is 4."
      },
      {
            "input": "6 2\n-1 0 3 5 9 12",
            "output": "-1",
            "explanation": "2 does not exist in nums so return -1."
      }
],
    difficulty: 'EASY',
    topics: ["Arrays", "Binary Search"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Binary Search",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Divide and Conquer / Binary Search.",
      "Compare target with mid element to discard half the search space."
    ],
    hintStages: build12StageHints({
      goal: "Find the index of target in sorted array nums or return -1 if absent.",
      result: "Index integer or -1.",
      constraints: "Array is sorted. O(log N) runtime expected.",
      example: "nums=[-1,0,3,5,9,12], target=9 -> mid compares 3, then 9 -> found at 4.",
      observation: "Compare target with mid element to discard half the search space.",
      bruteForce: "Linear scan checking each element.",
      limitation: "Linear search is O(N); binary search achieves O(log N).",
      pattern: "Divide and Conquer / Binary Search.",
      dataStructure: "Two index pointers (low and high).",
      outline: "low = 0, high = N - 1. While low <= high: mid = low + (high - low) / 2. If nums[mid] == target return mid; if nums[mid] < target low = mid + 1; else high = mid - 1.",
      pseudocode: "low = 0, high = N-1\nwhile low <= high:\n  mid = (low + high) // 2\n  if a[mid] == target: return mid\n  elif a[mid] < target: low = mid + 1\n  else: high = mid - 1\nreturn -1",
      solution: "O(log N) time and O(1) space."
    }),
    explanation: "Compare target with mid element to discard half the search space. O(log N) time and O(1) space.",
    timeComplexity: "O(log",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int n; long long target;\n    if (scanf(\"%d %lld\", &n, &target) != 2 || n <= 0) return 0;\n    long long *a = (long long*)malloc(sizeof(long long) * n);\n    for (int i = 0; i < n; i++) scanf(\"%lld\", &a[i]);\n    int low = 0, high = n - 1, ans = -1;\n    while (low <= high) {\n        int mid = low + (high - low) / 2;\n        if (a[mid] == target) { ans = mid; break; }\n        else if (a[mid] < target) low = mid + 1;\n        else high = mid - 1;\n    }\n    printf(\"%d\\n\", ans);\n    free(a);\n    return 0;\n}",
      cpp: "#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    int n; long long target;\n    if (!(cin >> n >> target) || n <= 0) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    int low = 0, high = n - 1, ans = -1;\n    while (low <= high) {\n        int mid = low + (high - low) / 2;\n        if (a[mid] == target) { ans = mid; break; }\n        else if (a[mid] < target) low = mid + 1;\n        else high = mid - 1;\n    }\n    cout << ans << \"\\n\";\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        long target = sc.nextLong();\n        long[] a = new long[n];\n        for (int i = 0; i < n; i++) a[i] = sc.nextLong();\n        int low = 0, high = n - 1, ans = -1;\n        while (low <= high) {\n            int mid = low + (high - low) / 2;\n            if (a[mid] == target) { ans = mid; break; }\n            else if (a[mid] < target) low = mid + 1;\n            else high = mid - 1;\n        }\n        System.out.println(ans);\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    target = int(data[1])\n    a = [int(x) for x in data[2:2+n]]\n    low, high = 0, n - 1\n    ans = -1\n    while low <= high:\n        mid = (low + high) // 2\n        if a[mid] == target:\n            ans = mid\n            break\n        elif a[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    print(ans)\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-044-1",
            "input": "6 9\n-1 0 3 5 9 12",
            "expectedOutput": "4"
      },
      {
            "id": "tc-044-2",
            "input": "6 2\n-1 0 3 5 9 12",
            "expectedOutput": "-1"
      }
],
    hiddenTestCases: [
      {
            "id": "tc-044-h1",
            "input": "1 5\n5",
            "expectedOutput": "0",
            "isHidden": true
      }
],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-045',
    catalogNumber: 45,
    slug: "search-in-rotated-sorted-array",
    title: "Search in Rotated Sorted Array",
    problemStatement: "There is an integer array `nums` sorted in ascending order with distinct values. Given the array `nums` after possible rotation and an integer `target`, return the index of `target` if it is in `nums`, or -1 if it is not in `nums`. Algorithm must run in O(log N) time.",
    inputFormat: "First line contains N and target T. Second line contains N space-separated integers.",
    outputFormat: "Print index of target or -1.",
    constraints: [
      "1 <= N <= 10^5",
      "-10^9 <= nums[i], target <= 10^9",
      "All values of nums are unique"
],
    examples: [
      {
            "input": "7 0\n4 5 6 7 0 1 2",
            "output": "4",
            "explanation": "0 is found at index 4."
      },
      {
            "input": "7 3\n4 5 6 7 0 1 2",
            "output": "-1",
            "explanation": "3 is not in array."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Arrays", "Binary Search"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Search in Rotated Sorted Array",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Modified Binary Search.",
      "In any rotated sorted array, splitting at mid always yields at least one strictly sorted half."
    ],
    hintStages: build12StageHints({
      goal: "Search for target in a rotated sorted array in O(log N) time.",
      result: "Index or -1.",
      constraints: "Array elements are distinct.",
      example: "nums=[4, 5, 6, 7, 0, 1, 2], target=0. Mid is 7. Left half [4..7] is sorted.",
      observation: "In any rotated sorted array, splitting at mid always yields at least one strictly sorted half.",
      bruteForce: "O(N) linear search.",
      limitation: "O(N) does not meet O(log N) requirement.",
      pattern: "Modified Binary Search.",
      dataStructure: "Index pointers (low, high, mid).",
      outline: "Check which half is sorted (left or right). If target falls within sorted half range, search there; otherwise search the other half.",
      pseudocode: "while low <= high:\n  mid = (low + high) // 2\n  if a[mid] == target: return mid\n  if a[low] <= a[mid]:\n    if a[low] <= target < a[mid]: high = mid - 1\n    else: low = mid + 1\n  else:\n    if a[mid] < target <= a[high]: low = mid + 1\n    else: high = mid - 1\nreturn -1",
      solution: "O(log N) time and O(1) space."
    }),
    explanation: "In any rotated sorted array, splitting at mid always yields at least one strictly sorted half. O(log N) time and O(1) space.",
    timeComplexity: "O(log",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int n; long long target;\n    if (scanf(\"%d %lld\", &n, &target) != 2 || n <= 0) return 0;\n    long long *a = (long long*)malloc(sizeof(long long) * n);\n    for (int i = 0; i < n; i++) scanf(\"%lld\", &a[i]);\n    int low = 0, high = n - 1, ans = -1;\n    while (low <= high) {\n        int mid = low + (high - low) / 2;\n        if (a[mid] == target) { ans = mid; break; }\n        if (a[low] <= a[mid]) {\n            if (a[low] <= target && target < a[mid]) high = mid - 1;\n            else low = mid + 1;\n        } else {\n            if (a[mid] < target && target <= a[high]) low = mid + 1;\n            else high = mid - 1;\n        }\n    }\n    printf(\"%d\\n\", ans);\n    free(a);\n    return 0;\n}",
      cpp: "#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    int n; long long target;\n    if (!(cin >> n >> target) || n <= 0) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    int low = 0, high = n - 1, ans = -1;\n    while (low <= high) {\n        int mid = low + (high - low) / 2;\n        if (a[mid] == target) { ans = mid; break; }\n        if (a[low] <= a[mid]) {\n            if (a[low] <= target && target < a[mid]) high = mid - 1;\n            else low = mid + 1;\n        } else {\n            if (a[mid] < target && target <= a[high]) low = mid + 1;\n            else high = mid - 1;\n        }\n    }\n    cout << ans << \"\\n\";\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        long target = sc.nextLong();\n        long[] a = new long[n];\n        for (int i = 0; i < n; i++) a[i] = sc.nextLong();\n        int low = 0, high = n - 1, ans = -1;\n        while (low <= high) {\n            int mid = low + (high - low) / 2;\n            if (a[mid] == target) { ans = mid; break; }\n            if (a[low] <= a[mid]) {\n                if (a[low] <= target && target < a[mid]) high = mid - 1;\n                else low = mid + 1;\n            } else {\n                if (a[mid] < target && target <= a[high]) low = mid + 1;\n                else high = mid - 1;\n            }\n        }\n        System.out.println(ans);\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    target = int(data[1])\n    a = [int(x) for x in data[2:2+n]]\n    low, high = 0, n - 1\n    ans = -1\n    while low <= high:\n        mid = (low + high) // 2\n        if a[mid] == target:\n            ans = mid\n            break\n        if a[low] <= a[mid]:\n            if a[low] <= target < a[mid]: high = mid - 1\n            else: low = mid + 1\n        else:\n            if a[mid] < target <= a[high]: low = mid + 1\n            else: high = mid - 1\n    print(ans)\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-045-1",
            "input": "7 0\n4 5 6 7 0 1 2",
            "expectedOutput": "4"
      },
      {
            "id": "tc-045-2",
            "input": "7 3\n4 5 6 7 0 1 2",
            "expectedOutput": "-1"
      }
],
    hiddenTestCases: [
      {
            "id": "tc-045-h1",
            "input": "1 0\n0",
            "expectedOutput": "0",
            "isHidden": true
      }
],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-046',
    catalogNumber: 46,
    slug: "find-first-and-last-position-of-element-in-sorted-array",
    title: "Find First and Last Position of Element in Sorted Array",
    problemStatement: "Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value. If `target` is not found in the array, return `[-1, -1]`. You must write an algorithm with `O(log n)` runtime complexity.",
    inputFormat: "First line contains N and target T. Second line contains N sorted integers.",
    outputFormat: "Print two space-separated integers: first_index and last_index.",
    constraints: [
      "0 <= N <= 10^5",
      "-10^9 <= nums[i], target <= 10^9",
      "nums is sorted in non-decreasing order"
],
    examples: [
      {
            "input": "6 8\n5 7 7 8 8 10",
            "output": "3 4",
            "explanation": "8 appears starting at index 3 and ending at index 4."
      },
      {
            "input": "6 6\n5 7 7 8 8 10",
            "output": "-1 -1",
            "explanation": "6 is not in the array."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Arrays", "Binary Search"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Find First and Last Position of Element in Sorted Array",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Lower Bound and Upper Bound Binary Search.",
      "Perform two separate binary searches: one searching leftmost occurrence, one searching rightmost."
    ],
    hintStages: build12StageHints({
      goal: "Find the first and last occurrence indices of target in a sorted array.",
      result: "Two integers: first and last index.",
      constraints: "Array is sorted. O(log N) runtime.",
      example: "[5, 7, 7, 8, 8, 10], target=8 -> first=3, last=4.",
      observation: "Perform two separate binary searches: one searching leftmost occurrence, one searching rightmost.",
      bruteForce: "Scan array linearly.",
      limitation: "O(N) time fails O(log N) requirement.",
      pattern: "Lower Bound and Upper Bound Binary Search.",
      dataStructure: "Standard pointers.",
      outline: "findFirst: when nums[mid] == target, save mid as candidate and search left (high = mid - 1). findLast: when nums[mid] == target, save mid and search right (low = mid + 1).",
      pseudocode: "first = binarySearchLeft(nums, target)\nlast = binarySearchRight(nums, target)\nreturn first, last",
      solution: "O(log N) time and O(1) space."
    }),
    explanation: "Perform two separate binary searches: one searching leftmost occurrence, one searching rightmost. O(log N) time and O(1) space.",
    timeComplexity: "O(log",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\n#include <stdlib.h>\nint findBound(long long *a, int n, long long target, int isFirst) {\n    int low = 0, high = n - 1, res = -1;\n    while (low <= high) {\n        int mid = low + (high - low) / 2;\n        if (a[mid] == target) {\n            res = mid;\n            if (isFirst) high = mid - 1;\n            else low = mid + 1;\n        } else if (a[mid] < target) low = mid + 1;\n        else high = mid - 1;\n    }\n    return res;\n}\nint main() {\n    int n; long long target;\n    if (scanf(\"%d %lld\", &n, &target) != 2 || n <= 0) {\n        printf(\"-1 -1\\n\");\n        return 0;\n    }\n    long long *a = (long long*)malloc(sizeof(long long) * n);\n    for (int i = 0; i < n; i++) scanf(\"%lld\", &a[i]);\n    int first = findBound(a, n, target, 1);\n    int last = findBound(a, n, target, 0);\n    printf(\"%d %d\\n\", first, last);\n    free(a);\n    return 0;\n}",
      cpp: "#include <iostream>\n#include <vector>\nusing namespace std;\nint findBound(const vector<long long>& a, long long target, bool isFirst) {\n    int low = 0, high = (int)a.size() - 1, res = -1;\n    while (low <= high) {\n        int mid = low + (high - low) / 2;\n        if (a[mid] == target) {\n            res = mid;\n            if (isFirst) high = mid - 1;\n            else low = mid + 1;\n        } else if (a[mid] < target) low = mid + 1;\n        else high = mid - 1;\n    }\n    return res;\n}\nint main() {\n    int n; long long target;\n    if (!(cin >> n >> target) || n <= 0) { cout << \"-1 -1\\n\"; return 0; }\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    cout << findBound(a, target, true) << \" \" << findBound(a, target, false) << \"\\n\";\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    static int findBound(long[] a, long target, boolean isFirst) {\n        int low = 0, high = a.length - 1, res = -1;\n        while (low <= high) {\n            int mid = low + (high - low) / 2;\n            if (a[mid] == target) {\n                res = mid;\n                if (isFirst) high = mid - 1;\n                else low = mid + 1;\n            } else if (a[mid] < target) low = mid + 1;\n            else high = mid - 1;\n        }\n        return res;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        long target = sc.nextLong();\n        long[] a = new long[n];\n        for (int i = 0; i < n; i++) a[i] = sc.nextLong();\n        System.out.println(findBound(a, target, true) + \" \" + findBound(a, target, false));\n    }\n}",
      python: "import sys\ndef findBound(a, target, isFirst):\n    low, high, res = 0, len(a) - 1, -1\n    while low <= high:\n        mid = (low + high) // 2\n        if a[mid] == target:\n            res = mid\n            if isFirst: high = mid - 1\n            else: low = mid + 1\n        elif a[mid] < target: low = mid + 1\n        else: high = mid - 1\n    return res\ndef main():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    target = int(data[1])\n    a = [int(x) for x in data[2:2+n]]\n    print(f\"{findBound(a, target, True)} {findBound(a, target, False)}\")\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-046-1",
            "input": "6 8\n5 7 7 8 8 10",
            "expectedOutput": "3 4"
      },
      {
            "id": "tc-046-2",
            "input": "6 6\n5 7 7 8 8 10",
            "expectedOutput": "-1 -1"
      }
],
    hiddenTestCases: [
      {
            "id": "tc-046-h1",
            "input": "2 2\n2 2",
            "expectedOutput": "0 1",
            "isHidden": true
      }
],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-047',
    catalogNumber: 47,
    slug: "merge-two-sorted-arrays",
    title: "Merge Two Sorted Arrays",
    problemStatement: "Given two sorted integer arrays `arr1` of size `N` and `arr2` of size `M`, merge them into a single sorted array of size `N + M` and print the merged elements.",
    inputFormat: "First line: N and M. Second line: N sorted integers. Third line: M sorted integers.",
    outputFormat: "Print the N+M sorted integers separated by spaces.",
    constraints: [
      "1 <= N, M <= 10^5",
      "-10^9 <= elements <= 10^9"
],
    examples: [
      {
            "input": "3 3\n1 3 5\n2 4 6",
            "output": "1 2 3 4 5 6",
            "explanation": "Merged sorted sequence."
      },
      {
            "input": "2 1\n4 5\n1",
            "output": "1 4 5",
            "explanation": "Sorted combined array."
      }
],
    difficulty: 'EASY',
    topics: ["Arrays", "Two Pointers", "Sorting"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Merge Two Sorted Arrays",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Two Pointers (Merge Step of Merge Sort).",
      "Compare the current smallest elements of both arrays and append the smaller one."
    ],
    hintStages: build12StageHints({
      goal: "Combine two pre-sorted arrays into one unified sorted array.",
      result: "Space-separated merged sorted sequence.",
      constraints: "Arrays are already sorted.",
      example: "[1, 3] and [2, 4] -> 1, 2, 3, 4.",
      observation: "Compare the current smallest elements of both arrays and append the smaller one.",
      bruteForce: "Concatenate both arrays then sort.",
      limitation: "Sorting takes O((N+M) log(N+M)); two pointers does it in O(N+M).",
      pattern: "Two Pointers (Merge Step of Merge Sort).",
      dataStructure: "Output array or stream.",
      outline: "i = 0, j = 0. While i < N and j < M: pick smaller and advance pointer. Append remaining elements.",
      pseudocode: "while i < N and j < M:\n  if a[i] <= b[j]: append a[i]; i++\n  else: append b[j]; j++\nappend remaining elements",
      solution: "O(N + M) time and O(N + M) space."
    }),
    explanation: "Compare the current smallest elements of both arrays and append the smaller one. O(N + M) time and O(N + M) space.",
    timeComplexity: "O(N",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int n, m;\n    if (scanf(\"%d %d\", &n, &m) != 2) return 0;\n    long long *a = (long long*)malloc(sizeof(long long) * n);\n    long long *b = (long long*)malloc(sizeof(long long) * m);\n    for (int i = 0; i < n; i++) scanf(\"%lld\", &a[i]);\n    for (int j = 0; j < m; j++) scanf(\"%lld\", &b[j]);\n    int i = 0, j = 0, first = 1;\n    while (i < n && j < m) {\n        if (!first) printf(\" \");\n        if (a[i] <= b[j]) printf(\"%lld\", a[i++]);\n        else printf(\"%lld\", b[j++]);\n        first = 0;\n    }\n    while (i < n) {\n        if (!first) printf(\" \");\n        printf(\"%lld\", a[i++]);\n        first = 0;\n    }\n    while (j < m) {\n        if (!first) printf(\" \");\n        printf(\"%lld\", b[j++]);\n        first = 0;\n    }\n    printf(\"\\n\");\n    free(a); free(b);\n    return 0;\n}",
      cpp: "#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    int n, m;\n    if (!(cin >> n >> m)) return 0;\n    vector<long long> a(n), b(m);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    for (int j = 0; j < m; j++) cin >> b[j];\n    int i = 0, j = 0;\n    bool first = true;\n    while (i < n && j < m) {\n        if (!first) cout << \" \";\n        if (a[i] <= b[j]) cout << a[i++];\n        else cout << b[j++];\n        first = false;\n    }\n    while (i < n) {\n        if (!first) cout << \" \";\n        cout << a[i++];\n        first = false;\n    }\n    while (j < m) {\n        if (!first) cout << \" \";\n        cout << b[j++];\n        first = false;\n    }\n    cout << \"\\n\";\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt(), m = sc.nextInt();\n        long[] a = new long[n], b = new long[m];\n        for (int i = 0; i < n; i++) a[i] = sc.nextLong();\n        for (int j = 0; j < m; j++) b[j] = sc.nextLong();\n        StringBuilder sb = new StringBuilder();\n        int i = 0, j = 0;\n        boolean first = true;\n        while (i < n && j < m) {\n            if (!first) sb.append(\" \");\n            if (a[i] <= b[j]) sb.append(a[i++]);\n            else sb.append(b[j++]);\n            first = false;\n        }\n        while (i < n) {\n            if (!first) sb.append(\" \");\n            sb.append(a[i++]);\n            first = false;\n        }\n        while (j < m) {\n            if (!first) sb.append(\" \");\n            sb.append(b[j++]);\n            first = false;\n        }\n        System.out.println(sb.toString());\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, m = int(data[0]), int(data[1])\n    idx = 2\n    a = [int(x) for x in data[idx:idx+n]]\n    idx += n\n    b = [int(x) for x in data[idx:idx+m]]\n    i, j = 0, 0\n    res = []\n    while i < n and j < m:\n        if a[i] <= b[j]:\n            res.append(str(a[i]))\n            i += 1\n        else:\n            res.append(str(b[j]))\n            j += 1\n    while i < n:\n        res.append(str(a[i]))\n        i += 1\n    while j < m:\n        res.append(str(b[j]))\n        j += 1\n    print(\" \".join(res))\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-047-1",
            "input": "3 3\n1 3 5\n2 4 6",
            "expectedOutput": "1 2 3 4 5 6"
      },
      {
            "id": "tc-047-2",
            "input": "2 1\n4 5\n1",
            "expectedOutput": "1 4 5"
      }
],
    hiddenTestCases: [
      {
            "id": "tc-047-h1",
            "input": "1 1\n10\n10",
            "expectedOutput": "10 10",
            "isHidden": true
      }
],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-048',
    catalogNumber: 48,
    slug: "merge-overlapping-intervals",
    title: "Merge Overlapping Intervals",
    problemStatement: "Given an array of `intervals` where `intervals[i] = [start_i, end_i]`, merge all overlapping intervals, and print the resulting non-overlapping intervals in ascending order of their start times, each formatted as `start end` on a new line.",
    inputFormat: "First line contains N. Next N lines each contain start_i and end_i.",
    outputFormat: "Print merged intervals, each as 'start end' on a new line.",
    constraints: [
      "1 <= N <= 10^5",
      "0 <= start_i <= end_i <= 10^9"
],
    examples: [
      {
            "input": "4\n1 3\n2 6\n8 10\n15 18",
            "output": "1 6\n8 10\n15 18",
            "explanation": "[1,3] and [2,6] overlap into [1,6]."
      },
      {
            "input": "2\n1 4\n4 5",
            "output": "1 5",
            "explanation": "[1,4] and [4,5] touch at 4, merging into [1,5]."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Arrays", "Sorting"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Merge Overlapping Intervals",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Sorting by Start Time + Linear Scan.",
      "Sorting intervals by their starting times makes all overlapping candidates strictly adjacent."
    ],
    hintStages: build12StageHints({
      goal: "Merge all overlapping or touching interval segments.",
      result: "Merged intervals formatted as start end per line.",
      constraints: "Intervals may be unordered in input.",
      example: "[1, 3] and [2, 6] -> overlap because 2 <= 3 -> merged to [1, max(3, 6)] = [1, 6].",
      observation: "Sorting intervals by their starting times makes all overlapping candidates strictly adjacent.",
      bruteForce: "Compare every interval with every other interval repeatedly.",
      limitation: "Unsorted comparison is O(N^2) and very hard to track.",
      pattern: "Sorting by Start Time + Linear Scan.",
      dataStructure: "Vector or List of pairs/intervals.",
      outline: "Sort intervals by start. Iterate: if current interval overlaps with last merged interval (start <= last.end), merge them (last.end = max(last.end, end)); otherwise, push current interval.",
      pseudocode: "intervals.sort(by: start)\nmerged = [intervals[0]]\nfor (s, e) in intervals[1..]:\n  if s <= merged.last.end:\n    merged.last.end = max(merged.last.end, e)\n  else: merged.append((s, e))\nreturn merged",
      solution: "O(N log N) time for sorting, O(N) space."
    }),
    explanation: "Sorting intervals by their starting times makes all overlapping candidates strictly adjacent. O(N log N) time for sorting, O(N) space.",
    timeComplexity: "O(N",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\n#include <stdlib.h>\ntypedef struct { long long s, e; } Interval;\nint cmp(const void *a, const void *b) {\n    Interval *x = (Interval*)a, *y = (Interval*)b;\n    if (x->s != y->s) return (x->s < y->s) ? -1 : 1;\n    return (x->e < y->e) ? -1 : 1;\n}\nint main() {\n    int n; if (scanf(\"%d\", &n) != 1 || n <= 0) return 0;\n    Interval *arr = (Interval*)malloc(sizeof(Interval) * n);\n    for (int i = 0; i < n; i++) scanf(\"%lld %lld\", &arr[i].s, &arr[i].e);\n    qsort(arr, n, sizeof(Interval), cmp);\n    long long cur_s = arr[0].s, cur_e = arr[0].e;\n    for (int i = 1; i < n; i++) {\n        if (arr[i].s <= cur_e) {\n            if (arr[i].e > cur_e) cur_e = arr[i].e;\n        } else {\n            printf(\"%lld %lld\\n\", cur_s, cur_e);\n            cur_s = arr[i].s;\n            cur_e = arr[i].e;\n        }\n    }\n    printf(\"%lld %lld\\n\", cur_s, cur_e);\n    free(arr);\n    return 0;\n}",
      cpp: "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\nstruct Interval { long long s, e; };\nint main() {\n    int n; if (!(cin >> n) || n <= 0) return 0;\n    vector<Interval> arr(n);\n    for (int i = 0; i < n; i++) cin >> arr[i].s >> arr[i].e;\n    sort(arr.begin(), arr.end(), [](const Interval& a, const Interval& b) {\n        return a.s == b.s ? a.e < b.e : a.s < b.s;\n    });\n    long long cur_s = arr[0].s, cur_e = arr[0].e;\n    for (int i = 1; i < n; i++) {\n        if (arr[i].s <= cur_e) {\n            cur_e = max(cur_e, arr[i].e);\n        } else {\n            cout << cur_s << \" \" << cur_e << \"\\n\";\n            cur_s = arr[i].s; cur_e = arr[i].e;\n        }\n    }\n    cout << cur_s << \" \" << cur_e << \"\\n\";\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    static class Interval { long s, e; Interval(long s, long e) { this.s = s; this.e = e; } }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        Interval[] arr = new Interval[n];\n        for (int i = 0; i < n; i++) arr[i] = new Interval(sc.nextLong(), sc.nextLong());\n        Arrays.sort(arr, (a, b) -> a.s == b.s ? Long.compare(a.e, b.e) : Long.compare(a.s, b.s));\n        long cur_s = arr[0].s, cur_e = arr[0].e;\n        for (int i = 1; i < n; i++) {\n            if (arr[i].s <= cur_e) {\n                cur_e = Math.max(cur_e, arr[i].e);\n            } else {\n                System.out.println(cur_s + \" \" + cur_e);\n                cur_s = arr[i].s; cur_e = arr[i].e;\n            }\n        }\n        System.out.println(cur_s + \" \" + cur_e);\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    intervals = []\n    idx = 1\n    for _ in range(n):\n        intervals.append((int(data[idx]), int(data[idx+1])))\n        idx += 2\n    intervals.sort()\n    cur_s, cur_e = intervals[0]\n    for s, e in intervals[1:]:\n        if s <= cur_e:\n            cur_e = max(cur_e, e)\n        else:\n            print(f\"{cur_s} {cur_e}\")\n            cur_s, cur_e = s, e\n    print(f\"{cur_s} {cur_e}\")\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-048-1",
            "input": "4\n1 3\n2 6\n8 10\n15 18",
            "expectedOutput": "1 6\n8 10\n15 18"
      },
      {
            "id": "tc-048-2",
            "input": "2\n1 4\n4 5",
            "expectedOutput": "1 5"
      }
],
    hiddenTestCases: [
      {
            "id": "tc-048-h1",
            "input": "3\n1 10\n2 3\n4 5",
            "expectedOutput": "1 10",
            "isHidden": true
      }
],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-049',
    catalogNumber: 49,
    slug: "kth-largest-element-in-an-array",
    title: "Kth Largest Element in an Array",
    problemStatement: "Given an integer array `nums` and an integer `k`, return the `k`-th largest element in the array. Note that it is the `k`-th largest element in the sorted order, not the `k`-th distinct element.",
    inputFormat: "First line contains N and K. Second line contains N space-separated integers.",
    outputFormat: "Print the K-th largest integer.",
    constraints: [
      "1 <= k <= N <= 10^5",
      "-10^4 <= nums[i] <= 10^4"
],
    examples: [
      {
            "input": "6 2\n3 2 1 5 6 4",
            "output": "5",
            "explanation": "Sorted array descending is [6, 5, 4, 3, 2, 1]. 2nd largest is 5."
      },
      {
            "input": "9 4\n3 2 3 1 2 4 5 5 6",
            "output": "4",
            "explanation": "Sorted descending: [6, 5, 5, 4, 3, 3, 2, 2, 1]. 4th largest is 4."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Arrays", "Divide and Conquer", "Sorting", "Heap"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Kth Largest Element in an Array",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Min-Heap or Quickselect.",
      "A min-heap of size K stores the K largest elements seen so far; its root is the Kth largest."
    ],
    hintStages: build12StageHints({
      goal: "Find the element that ranks k-th from the largest.",
      result: "The k-th largest value.",
      constraints: "Array may contain duplicates.",
      example: "[3, 2, 1, 5, 6, 4], k=2 -> 2nd largest is 5.",
      observation: "A min-heap of size K stores the K largest elements seen so far; its root is the Kth largest.",
      bruteForce: "Sort descending and return index k-1.",
      limitation: "Sorting takes O(N log N) time; Quickselect or Min-Heap takes O(N) average or O(N log K).",
      pattern: "Min-Heap or Quickselect.",
      dataStructure: "Min-heap / Priority Queue of capacity K.",
      outline: "Push elements into min-heap. When size exceeds K, pop the smallest. Top element at the end is the Kth largest.",
      pseudocode: "heap = []\nfor x in nums:\n  heappush(heap, x)\n  if len(heap) > k: heappop(heap)\nreturn heap[0]",
      solution: "O(N log K) time with O(K) space."
    }),
    explanation: "A min-heap of size K stores the K largest elements seen so far; its root is the Kth largest. O(N log K) time with O(K) space.",
    timeComplexity: "O(N",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\n#include <stdlib.h>\nint cmpDesc(const void *a, const void *b) {\n    long long x = *(const long long*)a, y = *(const long long*)b;\n    if (x > y) return -1;\n    if (x < y) return 1;\n    return 0;\n}\nint main() {\n    int n, k;\n    if (scanf(\"%d %d\", &n, &k) != 2 || n <= 0 || k <= 0 || k > n) return 0;\n    long long *a = (long long*)malloc(sizeof(long long) * n);\n    for (int i = 0; i < n; i++) scanf(\"%lld\", &a[i]);\n    qsort(a, n, sizeof(long long), cmpDesc);\n    printf(\"%lld\\n\", a[k - 1]);\n    free(a);\n    return 0;\n}",
      cpp: "#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\nint main() {\n    int n, k;\n    if (!(cin >> n >> k) || n <= 0) return 0;\n    priority_queue<long long, vector<long long>, greater<long long>> minHeap;\n    for (int i = 0; i < n; i++) {\n        long long v; cin >> v;\n        minHeap.push(v);\n        if (minHeap.size() > (size_t)k) minHeap.pop();\n    }\n    cout << minHeap.top() << \"\\n\";\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt(), k = sc.nextInt();\n        PriorityQueue<Long> pq = new PriorityQueue<>();\n        for (int i = 0; i < n; i++) {\n            pq.offer(sc.nextLong());\n            if (pq.size() > k) pq.poll();\n        }\n        System.out.println(pq.peek());\n    }\n}",
      python: "import sys, heapq\ndef main():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, k = int(data[0]), int(data[1])\n    nums = [int(x) for x in data[2:2+n]]\n    print(heapq.nlargest(k, nums)[-1])\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-049-1",
            "input": "6 2\n3 2 1 5 6 4",
            "expectedOutput": "5"
      },
      {
            "id": "tc-049-2",
            "input": "9 4\n3 2 3 1 2 4 5 5 6",
            "expectedOutput": "4"
      }
],
    hiddenTestCases: [
      {
            "id": "tc-049-h1",
            "input": "1 1\n42",
            "expectedOutput": "42",
            "isHidden": true
      }
],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-050',
    catalogNumber: 50,
    slug: "longest-consecutive-sequence",
    title: "Longest Consecutive Sequence",
    problemStatement: "Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in `O(N)` time.",
    inputFormat: "First line contains N. Second line contains N integers.",
    outputFormat: "Print the length of the longest consecutive sequence.",
    constraints: [
      "0 <= N <= 10^5",
      "-10^9 <= nums[i] <= 10^9"
],
    examples: [
      {
            "input": "6\n100 4 200 1 3 2",
            "output": "4",
            "explanation": "The longest consecutive elements sequence is [1, 2, 3, 4]. Its length is 4."
      },
      {
            "input": "10\n0 3 7 2 5 8 4 6 0 1",
            "output": "9",
            "explanation": "Consecutive sequence is [0, 1, 2, 3, 4, 5, 6, 7, 8] with length 9."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Arrays", "Hash Table", "Union Find"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Longest Consecutive Sequence",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Hash Set Lookup.",
      "An element x starts a consecutive sequence if and only if (x - 1) is not in the set."
    ],
    hintStages: build12StageHints({
      goal: "Find the length of the longest run of consecutive integers in an unsorted array in O(N) time.",
      result: "Maximum sequence length.",
      constraints: "O(N) runtime constraint forbids full sorting.",
      example: "[100, 4, 200, 1, 3, 2] -> 1 is start of sequence 1,2,3,4 (len 4).",
      observation: "An element x starts a consecutive sequence if and only if (x - 1) is not in the set.",
      bruteForce: "Sort array and count adjacent differences of 1.",
      limitation: "Sorting takes O(N log N) which violates the strict O(N) requirement.",
      pattern: "Hash Set Lookup.",
      dataStructure: "Hash Set (std::unordered_set / HashSet).",
      outline: "Insert all elements into a hash set. For each x in set: if x - 1 not in set, start counting x, x+1, x+2... Record max length.",
      pseudocode: "num_set = set(nums)\nmax_len = 0\nfor x in num_set:\n  if x - 1 not in num_set:\n    y = x\n    while y + 1 in num_set: y += 1\n    max_len = max(max_len, y - x + 1)\nreturn max_len",
      solution: "O(N) time because each number is visited at most twice; O(N) space."
    }),
    explanation: "An element x starts a consecutive sequence if and only if (x - 1) is not in the set. O(N) time because each number is visited at most twice; O(N) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\n#include <stdlib.h>\nint cmp(const void *a, const void *b) {\n    long long x = *(const long long*)a, y = *(const long long*)b;\n    if (x < y) return -1;\n    if (x > y) return 1;\n    return 0;\n}\nint main() {\n    int n; if (scanf(\"%d\", &n) != 1 || n <= 0) { printf(\"0\\n\"); return 0; }\n    long long *a = (long long*)malloc(sizeof(long long) * n);\n    for (int i = 0; i < n; i++) scanf(\"%lld\", &a[i]);\n    qsort(a, n, sizeof(long long), cmp);\n    int max_len = 1, cur_len = 1;\n    for (int i = 1; i < n; i++) {\n        if (a[i] == a[i - 1]) continue;\n        if (a[i] == a[i - 1] + 1) {\n            cur_len++;\n            if (cur_len > max_len) max_len = cur_len;\n        } else {\n            cur_len = 1;\n        }\n    }\n    printf(\"%d\\n\", max_len);\n    free(a);\n    return 0;\n}",
      cpp: "#include <iostream>\n#include <vector>\n#include <unordered_set>\n#include <algorithm>\nusing namespace std;\nint main() {\n    int n; if (!(cin >> n) || n <= 0) { cout << 0 << \"\\n\"; return 0; }\n    unordered_set<long long> s;\n    for (int i = 0; i < n; i++) {\n        long long v; cin >> v;\n        s.insert(v);\n    }\n    int max_len = 0;\n    for (long long x : s) {\n        if (!s.count(x - 1)) {\n            long long cur = x;\n            int len = 1;\n            while (s.count(cur + 1)) { cur++; len++; }\n            max_len = max(max_len, len);\n        }\n    }\n    cout << max_len << \"\\n\";\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) { System.out.println(0); return; }\n        int n = sc.nextInt();\n        HashSet<Long> set = new HashSet<>();\n        for (int i = 0; i < n; i++) set.add(sc.nextLong());\n        int max_len = 0;\n        for (long x : set) {\n            if (!set.contains(x - 1)) {\n                long cur = x;\n                int len = 1;\n                while (set.contains(cur + 1)) { cur++; len++; }\n                max_len = Math.max(max_len, len);\n            }\n        }\n        System.out.println(max_len);\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if not data:\n        print(0)\n        return\n    n = int(data[0])\n    if n == 0:\n        print(0)\n        return\n    nums = [int(x) for x in data[1:1+n]]\n    num_set = set(nums)\n    max_len = 0\n    for x in num_set:\n        if x - 1 not in num_set:\n            y = x\n            while y + 1 in num_set:\n                y += 1\n            max_len = max(max_len, y - x + 1)\n    print(max_len)\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-050-1",
            "input": "6\n100 4 200 1 3 2",
            "expectedOutput": "4"
      },
      {
            "id": "tc-050-2",
            "input": "10\n0 3 7 2 5 8 4 6 0 1",
            "expectedOutput": "9"
      }
],
    hiddenTestCases: [
      {
            "id": "tc-050-h1",
            "input": "1\n50",
            "expectedOutput": "1",
            "isHidden": true
      }
],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];
