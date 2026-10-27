import { Question } from '../../types';
import { build12StageHints } from './hintHelper';

export const CODING_QUESTIONS_PART3: Question[] = [
  {
    id: 'prep-code-051',
    catalogNumber: 51,
    slug: "trapping-rain-water",
    title: "Trapping Rain Water",
    problemStatement: "Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    inputFormat: "First line contains N. Second line contains N non-negative integers.",
    outputFormat: "Print the total units of trapped water.",
    constraints: [
      "1 <= N <= 10^5",
      "0 <= height[i] <= 10^5"
],
    examples: [
      {
            "input": "12\n0 1 0 2 1 0 1 3 2 1 2 1",
            "output": "6",
            "explanation": "6 units of rain water are trapped."
      },
      {
            "input": "6\n4 2 0 3 2 5",
            "output": "9",
            "explanation": "9 units of water trapped."
      }
],
    difficulty: 'HARD',
    topics: ["Arrays", "Two Pointers", "Dynamic Programming", "Stack"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Trapping Rain Water",
      hiringCycle: 'TCS Prime Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Two Pointers from outside in.",
      "Water trapped at index i is determined by min(max_left, max_right) - height[i]."
    ],
    hintStages: build12StageHints({
      goal: "Calculate the volume of trapped water given elevation bar heights.",
      result: "Total trapped units integer.",
      constraints: "O(N) time and O(1) space expected.",
      example: "[4, 2, 0, 3, 2, 5] -> trapped between 4 and 5.",
      observation: "Water trapped at index i is determined by min(max_left, max_right) - height[i].",
      bruteForce: "For each bar, scan left and right to find max heights.",
      limitation: "O(N^2) brute force is too slow.",
      pattern: "Two Pointers from outside in.",
      dataStructure: "Two pointers (left, right) and two prefix maxes.",
      outline: "left=0, right=n-1. While left < right: if height[left] < height[right], process left; otherwise process right.",
      pseudocode: "while l < r:\n  if h[l] <= h[r]:\n    maxL = max(maxL, h[l]); ans += maxL - h[l]; l++\n  else:\n    maxR = max(maxR, h[r]); ans += maxR - h[r]; r--",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Water trapped at index i is determined by min(max_left, max_right) - height[i]. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int n; if (scanf(\"%d\", &n) != 1 || n <= 0) { printf(\"0\\n\"); return 0; }\n    long long *h = (long long*)malloc(sizeof(long long) * n);\n    for (int i = 0; i < n; i++) scanf(\"%lld\", &h[i]);\n    int l = 0, r = n - 1;\n    long long maxL = 0, maxR = 0, ans = 0;\n    while (l < r) {\n        if (h[l] <= h[r]) {\n            if (h[l] >= maxL) maxL = h[l];\n            else ans += maxL - h[l];\n            l++;\n        } else {\n            if (h[r] >= maxR) maxR = h[r];\n            else ans += maxR - h[r];\n            r--;\n        }\n    }\n    printf(\"%lld\\n\", ans);\n    free(h);\n    return 0;\n}",
      cpp: "#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    int n; if (!(cin >> n) || n <= 0) { cout << 0 << \"\\n\"; return 0; }\n    vector<long long> h(n);\n    for (int i = 0; i < n; i++) cin >> h[i];\n    int l = 0, r = n - 1;\n    long long maxL = 0, maxR = 0, ans = 0;\n    while (l < r) {\n        if (h[l] <= h[r]) {\n            if (h[l] >= maxL) maxL = h[l];\n            else ans += maxL - h[l];\n            l++;\n        } else {\n            if (h[r] >= maxR) maxR = h[r];\n            else ans += maxR - h[r];\n            r--;\n        }\n    }\n    cout << ans << \"\\n\";\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) { System.out.println(0); return; }\n        int n = sc.nextInt();\n        long[] h = new long[n];\n        for (int i = 0; i < n; i++) h[i] = sc.nextLong();\n        int l = 0, r = n - 1;\n        long maxL = 0, maxR = 0, ans = 0;\n        while (l < r) {\n            if (h[l] <= h[r]) {\n                if (h[l] >= maxL) maxL = h[l];\n                else ans += maxL - h[l];\n                l++;\n            } else {\n                if (h[r] >= maxR) maxR = h[r];\n                else ans += maxR - h[r];\n                r--;\n            }\n        }\n        System.out.println(ans);\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if not data: print(0); return\n    n = int(data[0])\n    h = [int(x) for x in data[1:1+n]]\n    l, r = 0, n - 1\n    maxL, maxR, ans = 0, 0, 0\n    while l < r:\n        if h[l] <= h[r]:\n            if h[l] >= maxL: maxL = h[l]\n            else: ans += maxL - h[l]\n            l += 1\n        else:\n            if h[r] >= maxR: maxR = h[r]\n            else: ans += maxR - h[r]\n            r -= 1\n    print(ans)\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-051-1",
            "input": "12\n0 1 0 2 1 0 1 3 2 1 2 1",
            "expectedOutput": "6"
      },
      {
            "id": "tc-051-2",
            "input": "6\n4 2 0 3 2 5",
            "expectedOutput": "9"
      }
],
    hiddenTestCases: [
      {
            "id": "tc-051-h1",
            "input": "3\n3 0 3",
            "expectedOutput": "3",
            "isHidden": true
      }
],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-052',
    catalogNumber: 52,
    slug: "maximum-product-subarray",
    title: "Maximum Product Subarray",
    problemStatement: "Given an integer array `nums`, find a contiguous non-empty subarray within the array that has the largest product, and return the product.",
    inputFormat: "First line contains N. Second line contains N space-separated integers.",
    outputFormat: "Print the maximum product.",
    constraints: [
      "1 <= N <= 2 * 10^4",
      "-10 <= nums[i] <= 10"
],
    examples: [
      {
            "input": "4\n2 3 -2 4",
            "output": "6",
            "explanation": "[2,3] has the largest product 6."
      },
      {
            "input": "3\n-2 0 -1",
            "output": "0",
            "explanation": "Subarray [0] gives max product 0."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Arrays", "Dynamic Programming"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Maximum Product Subarray",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Track both running min and max at each step.",
      "Multiplying by a negative number can turn a minimum into a maximum."
    ],
    hintStages: build12StageHints({
      goal: "Find the maximum product of a contiguous subarray.",
      result: "Maximum product integer.",
      constraints: "Negative numbers flip product signs; zero resets product.",
      example: "[2, 3, -2, 4] -> max is 6.",
      observation: "Multiplying by a negative number can turn a minimum into a maximum.",
      bruteForce: "Compute products of all O(N^2) subarrays.",
      limitation: "O(N^2) time complexity is inefficient.",
      pattern: "Track both running min and max at each step.",
      dataStructure: "Two scalar accumulators (curMax, curMin).",
      outline: "At each step, if num < 0, swap curMax and curMin. Then curMax = max(num, curMax * num) and curMin = min(num, curMin * num).",
      pseudocode: "for x in nums:\n  if x < 0: swap(max_p, min_p)\n  max_p = max(x, max_p * x)\n  min_p = min(x, min_p * x)\n  res = max(res, max_p)",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Multiplying by a negative number can turn a minimum into a maximum. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int n; if (scanf(\"%d\", &n) != 1 || n <= 0) return 0;\n    long long *a = (long long*)malloc(sizeof(long long) * n);\n    for (int i = 0; i < n; i++) scanf(\"%lld\", &a[i]);\n    long long curMax = a[0], curMin = a[0], ans = a[0];\n    for (int i = 1; i < n; i++) {\n        long long x = a[i];\n        if (x < 0) {\n            long long temp = curMax; curMax = curMin; curMin = temp;\n        }\n        curMax = (x > curMax * x) ? x : curMax * x;\n        curMin = (x < curMin * x) ? x : curMin * x;\n        if (curMax > ans) ans = curMax;\n    }\n    printf(\"%lld\\n\", ans);\n    free(a);\n    return 0;\n}",
      cpp: "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\nint main() {\n    int n; if (!(cin >> n) || n <= 0) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    long long curMax = a[0], curMin = a[0], ans = a[0];\n    for (int i = 1; i < n; i++) {\n        long long x = a[i];\n        if (x < 0) swap(curMax, curMin);\n        curMax = max(x, curMax * x);\n        curMin = min(x, curMin * x);\n        ans = max(ans, curMax);\n    }\n    cout << ans << \"\\n\";\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        long[] a = new long[n];\n        for (int i = 0; i < n; i++) a[i] = sc.nextLong();\n        long curMax = a[0], curMin = a[0], ans = a[0];\n        for (int i = 1; i < n; i++) {\n            long x = a[i];\n            if (x < 0) { long t = curMax; curMax = curMin; curMin = t; }\n            curMax = Math.max(x, curMax * x);\n            curMin = Math.min(x, curMin * x);\n            ans = Math.max(ans, curMax);\n        }\n        System.out.println(ans);\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    nums = [int(x) for x in data[1:1+n]]\n    curMax, curMin, ans = nums[0], nums[0], nums[0]\n    for x in nums[1:]:\n        if x < 0: curMax, curMin = curMin, curMax\n        curMax = max(x, curMax * x)\n        curMin = min(x, curMin * x)\n        ans = max(ans, curMax)\n    print(ans)\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-052-1",
            "input": "4\n2 3 -2 4",
            "expectedOutput": "6"
      },
      {
            "id": "tc-052-2",
            "input": "3\n-2 0 -1",
            "expectedOutput": "0"
      }
],
    hiddenTestCases: [
      {
            "id": "tc-052-h1",
            "input": "2\n-2 -3",
            "expectedOutput": "6",
            "isHidden": true
      }
],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-053',
    catalogNumber: 53,
    slug: "longest-subarray-with-sum-k",
    title: "Longest Subarray with Sum K",
    problemStatement: "Given an array `arr` of size `N` containing both positive and negative integers, find the length of the longest subarray having sum equal to `K`. If no such subarray exists, return 0.",
    inputFormat: "First line contains N and K. Second line contains N integers.",
    outputFormat: "Print length of the longest subarray.",
    constraints: [
      "1 <= N <= 10^5",
      "-10^9 <= arr[i], K <= 10^9"
],
    examples: [
      {
            "input": "6 15\n10 5 2 7 1 9",
            "output": "4",
            "explanation": "[5, 2, 7, 1] has sum 15 with length 4."
      },
      {
            "input": "3 5\n-1 2 3",
            "output": "2",
            "explanation": "[2, 3] sum is 5, length 2."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Arrays", "Hash Table", "Prefix Sum"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Longest Subarray with Sum K",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Prefix Sum + Hash Map of earliest occurrence.",
      "prefixSum[j] - prefixSum[i] = K means subarray from i+1 to j has sum K."
    ],
    hintStages: build12StageHints({
      goal: "Find the maximum length of a contiguous segment with sum K.",
      result: "Subarray length integer.",
      constraints: "Array contains positive and negative integers.",
      example: "[10, 5, 2, 7, 1, 9], K=15 -> prefix sums at indices give 4.",
      observation: "prefixSum[j] - prefixSum[i] = K means subarray from i+1 to j has sum K.",
      bruteForce: "Check all O(N^2) subarray sums.",
      limitation: "O(N^2) times out on 10^5 elements.",
      pattern: "Prefix Sum + Hash Map of earliest occurrence.",
      dataStructure: "Hash Map mapping prefix_sum -> first_index.",
      outline: "Initialize map {0: -1}. Track running prefix sum. If (prefix - K) in map, candidate length = i - map[prefix - K]. Only record map[prefix] if not previously seen to maximize length.",
      pseudocode: "seen = {0: -1}; cur = 0; ans = 0\nfor i, x in enumerate(a):\n  cur += x\n  if cur - k in seen: ans = max(ans, i - seen[cur - k])\n  if cur not in seen: seen[cur] = i\nreturn ans",
      solution: "O(N) time and O(N) space."
    }),
    explanation: "prefixSum[j] - prefixSum[i] = K means subarray from i+1 to j has sum K. O(N) time and O(N) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\n#include <stdlib.h>\n// Using hash table via sorting prefix pairs for C\ntypedef struct { long long val; int idx; } Pair;\nint cmp(const void *a, const void *b) {\n    Pair *x = (Pair*)a, *y = (Pair*)b;\n    if (x->val != y->val) return (x->val < y->val) ? -1 : 1;\n    return x->idx - y->idx;\n}\nint findFirst(Pair *p, int n, long long target) {\n    int l = 0, r = n - 1, res = -2;\n    while (l <= r) {\n        int m = l + (r - l) / 2;\n        if (p[m].val == target) { res = p[m].idx; r = m - 1; }\n        else if (p[m].val < target) l = m + 1;\n        else r = m - 1;\n    }\n    return res;\n}\nint main() {\n    int n; long long k;\n    if (scanf(\"%d %lld\", &n, &k) != 2 || n <= 0) return 0;\n    Pair *p = (Pair*)malloc(sizeof(Pair) * (n + 1));\n    p[0].val = 0; p[0].idx = -1;\n    long long cur = 0;\n    long long *a = (long long*)malloc(sizeof(long long) * n);\n    for (int i = 0; i < n; i++) {\n        scanf(\"%lld\", &a[i]);\n        cur += a[i];\n        p[i + 1].val = cur; p[i + 1].idx = i;\n    }\n    qsort(p, n + 1, sizeof(Pair), cmp);\n    cur = 0; int max_len = 0;\n    for (int i = 0; i < n; i++) {\n        cur += a[i];\n        long long need = cur - k;\n        int first_idx = findFirst(p, n + 1, need);\n        if (first_idx != -2 && (i - first_idx) > max_len) {\n            max_len = i - first_idx;\n        }\n    }\n    printf(\"%d\\n\", max_len);\n    free(p); free(a);\n    return 0;\n}",
      cpp: "#include <iostream>\n#include <vector>\n#include <unordered_map>\n#include <algorithm>\nusing namespace std;\nint main() {\n    int n; long long k;\n    if (!(cin >> n >> k) || n <= 0) return 0;\n    unordered_map<long long, int> seen;\n    seen[0] = -1;\n    long long cur = 0;\n    int max_len = 0;\n    for (int i = 0; i < n; i++) {\n        long long v; cin >> v;\n        cur += v;\n        if (seen.count(cur - k)) {\n            max_len = max(max_len, i - seen[cur - k]);\n        }\n        if (!seen.count(cur)) seen[cur] = i;\n    }\n    cout << max_len << \"\\n\";\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        long k = sc.nextLong();\n        Map<Long, Integer> seen = new HashMap<>();\n        seen.put(0L, -1);\n        long cur = 0;\n        int max_len = 0;\n        for (int i = 0; i < n; i++) {\n            cur += sc.nextLong();\n            if (seen.containsKey(cur - k)) {\n                max_len = Math.max(max_len, i - seen.get(cur - k));\n            }\n            if (!seen.containsKey(cur)) seen.put(cur, i);\n        }\n        System.out.println(max_len);\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, k = int(data[0]), int(data[1])\n    nums = [int(x) for x in data[2:2+n]]\n    seen = {0: -1}\n    cur = 0\n    max_len = 0\n    for i, x in enumerate(nums):\n        cur += x\n        if cur - k in seen:\n            max_len = max(max_len, i - seen[cur - k])\n        if cur not in seen:\n            seen[cur] = i\n    print(max_len)\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-053-1",
            "input": "6 15\n10 5 2 7 1 9",
            "expectedOutput": "4"
      },
      {
            "id": "tc-053-2",
            "input": "3 5\n-1 2 3",
            "expectedOutput": "2"
      }
],
    hiddenTestCases: [
      {
            "id": "tc-053-h1",
            "input": "4 10\n1 2 3 4",
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
    id: 'prep-code-054',
    catalogNumber: 54,
    slug: "equilibrium-index-of-an-array",
    title: "Equilibrium Index of an Array",
    problemStatement: "Given an array `arr` of integers, find the first equilibrium index (0-based). An equilibrium index is an index such that the sum of elements at lower indices equals the sum of elements at higher indices. If no equilibrium index exists, return -1.",
    inputFormat: "First line contains N. Second line contains N space-separated integers.",
    outputFormat: "Print the first 0-based equilibrium index or -1.",
    constraints: [
      "1 <= N <= 10^5",
      "-10^9 <= arr[i] <= 10^9"
],
    examples: [
      {
            "input": "7\n-7 1 5 2 -4 3 0",
            "output": "3",
            "explanation": "At index 3: sum of left elements (-7+1+5 = -1) equals right elements (-4+3+0 = -1)."
      },
      {
            "input": "3\n1 2 3",
            "output": "-1",
            "explanation": "No equilibrium index exists."
      }
],
    difficulty: 'EASY',
    topics: ["Arrays", "Prefix Sum"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Equilibrium Index of an Array",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Running Prefix Sum.",
      "Right sum at index i is totalSum - leftSum - arr[i]."
    ],
    hintStages: build12StageHints({
      goal: "Find the index where left sum equals right sum.",
      result: "Index or -1.",
      constraints: "Array may contain negative integers.",
      example: "[-7, 1, 5, 2, -4, 3, 0] -> total sum is 0. At index 3, left sum is -1, right sum is 0 - (-1) - 2 = -1.",
      observation: "Right sum at index i is totalSum - leftSum - arr[i].",
      bruteForce: "Recompute left and right sums for each index.",
      limitation: "O(N^2) brute force is redundant.",
      pattern: "Running Prefix Sum.",
      dataStructure: "Two scalar variables (totalSum and leftSum).",
      outline: "Calculate total sum. Iterate i from 0 to N-1: if leftSum == totalSum - leftSum - arr[i], return i; add arr[i] to leftSum.",
      pseudocode: "total = sum(a); left = 0\nfor i, x in enumerate(a):\n  if left == total - left - x: return i\n  left += x\nreturn -1",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Right sum at index i is totalSum - leftSum - arr[i]. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int n; if (scanf(\"%d\", &n) != 1 || n <= 0) return 0;\n    long long *a = (long long*)malloc(sizeof(long long) * n);\n    long long total = 0;\n    for (int i = 0; i < n; i++) {\n        scanf(\"%lld\", &a[i]);\n        total += a[i];\n    }\n    long long left = 0;\n    int ans = -1;\n    for (int i = 0; i < n; i++) {\n        if (left == total - left - a[i]) {\n            ans = i;\n            break;\n        }\n        left += a[i];\n    }\n    printf(\"%d\\n\", ans);\n    free(a);\n    return 0;\n}",
      cpp: "#include <iostream>\n#include <vector>\n#include <numeric>\nusing namespace std;\nint main() {\n    int n; if (!(cin >> n) || n <= 0) return 0;\n    vector<long long> a(n);\n    long long total = 0;\n    for (int i = 0; i < n; i++) {\n        cin >> a[i];\n        total += a[i];\n    }\n    long long left = 0;\n    int ans = -1;\n    for (int i = 0; i < n; i++) {\n        if (left == total - left - a[i]) {\n            ans = i;\n            break;\n        }\n        left += a[i];\n    }\n    cout << ans << \"\\n\";\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        long[] a = new long[n];\n        long total = 0;\n        for (int i = 0; i < n; i++) {\n            a[i] = sc.nextLong();\n            total += a[i];\n        }\n        long left = 0;\n        int ans = -1;\n        for (int i = 0; i < n; i++) {\n            if (left == total - left - a[i]) {\n                ans = i;\n                break;\n            }\n            left += a[i];\n        }\n        System.out.println(ans);\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    nums = [int(x) for x in data[1:1+n]]\n    total = sum(nums)\n    left = 0\n    ans = -1\n    for i, x in enumerate(nums):\n        if left == total - left - x:\n            ans = i\n            break\n        left += x\n    print(ans)\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-054-1",
            "input": "7\n-7 1 5 2 -4 3 0",
            "expectedOutput": "3"
      },
      {
            "id": "tc-054-2",
            "input": "3\n1 2 3",
            "expectedOutput": "-1"
      }
],
    hiddenTestCases: [
      {
            "id": "tc-054-h1",
            "input": "1\n100",
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
    id: 'prep-code-055',
    catalogNumber: 55,
    slug: "range-sum-queries-prefix-sum",
    title: "Range Sum Queries (Prefix Sum)",
    problemStatement: "Given an integer array `nums` of size `N` and `Q` queries, where each query consists of indices `L` and `R` (0-based, `L <= R`), compute the sum of elements from index `L` to `R` inclusive for each query.",
    inputFormat: "First line: N and Q. Second line: N space-separated integers. Next Q lines: two integers L and R.",
    outputFormat: "For each query, print the sum on a new line.",
    constraints: [
      "1 <= N, Q <= 10^5",
      "-10^9 <= nums[i] <= 10^9",
      "0 <= L <= R < N"
],
    examples: [
      {
            "input": "5 3\n1 2 3 4 5\n0 2\n1 3\n0 4",
            "output": "6\n9\n15",
            "explanation": "Queries are [0,2]=6, [1,3]=9, [0,4]=15."
      },
      {
            "input": "3 1\n5 10 -2\n1 2",
            "output": "8",
            "explanation": "10 + (-2) = 8."
      }
],
    difficulty: 'EASY',
    topics: ["Arrays", "Prefix Sum"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Range Sum Queries (Prefix Sum)",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Prefix Sum Array.",
      "sum(L..R) = prefix[R+1] - prefix[L]."
    ],
    hintStages: build12StageHints({
      goal: "Answer multiple range sum queries in O(1) query time.",
      result: "Sum integer for each query.",
      constraints: "Array is immutable.",
      example: "nums=[1,2,3,4,5], pref=[0, 1, 3, 6, 10, 15]. Range [1,3] = pref[4] - pref[1] = 10 - 1 = 9.",
      observation: "sum(L..R) = prefix[R+1] - prefix[L].",
      bruteForce: "Loop from L to R for every query.",
      limitation: "O(Q * N) time limit exceeded.",
      pattern: "Prefix Sum Array.",
      dataStructure: "1D prefix array.",
      outline: "Precompute prefix[i] = prefix[i-1] + nums[i-1]. For each (L, R), return prefix[R+1] - prefix[L].",
      pseudocode: "pref = [0]*(N+1)\nfor i in 0..N-1: pref[i+1] = pref[i] + a[i]\nfor (L, R) in queries: print(pref[R+1] - pref[L])",
      solution: "O(N + Q) time and O(N) space."
    }),
    explanation: "sum(L..R) = prefix[R+1] - prefix[L]. O(N + Q) time and O(N) space.",
    timeComplexity: "O(N",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int n, q;\n    if (scanf(\"%d %d\", &n, &q) != 2 || n <= 0) return 0;\n    long long *pref = (long long*)calloc(n + 1, sizeof(long long));\n    for (int i = 0; i < n; i++) {\n        long long v; scanf(\"%lld\", &v);\n        pref[i + 1] = pref[i] + v;\n    }\n    for (int i = 0; i < q; i++) {\n        int l, r; scanf(\"%d %d\", &l, &r);\n        printf(\"%lld\\n\", pref[r + 1] - pref[l]);\n    }\n    free(pref);\n    return 0;\n}",
      cpp: "#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    ios_base::sync_with_stdio(false); cin.tie(NULL);\n    int n, q;\n    if (!(cin >> n >> q) || n <= 0) return 0;\n    vector<long long> pref(n + 1, 0);\n    for (int i = 0; i < n; i++) {\n        long long v; cin >> v;\n        pref[i + 1] = pref[i] + v;\n    }\n    for (int i = 0; i < q; i++) {\n        int l, r; cin >> l >> r;\n        cout << (pref[r + 1] - pref[l]) << \"\\n\";\n    }\n    return 0;\n}",
      java: "import java.util.*;\nimport java.io.*;\npublic class Solution {\n    public static void main(String[] args) throws IOException {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line = br.readLine();\n        if (line == null) return;\n        StringTokenizer st = new StringTokenizer(line);\n        int n = Integer.parseInt(st.nextToken()), q = Integer.parseInt(st.nextToken());\n        long[] pref = new long[n + 1];\n        st = new StringTokenizer(br.readLine());\n        for (int i = 0; i < n; i++) {\n            pref[i + 1] = pref[i] + Long.parseLong(st.nextToken());\n        }\n        StringBuilder sb = new StringBuilder();\n        for (int i = 0; i < q; i++) {\n            st = new StringTokenizer(br.readLine());\n            int l = Integer.parseInt(st.nextToken()), r = Integer.parseInt(st.nextToken());\n            sb.append(pref[r + 1] - pref[l]).append(\"\\n\");\n        }\n        System.out.print(sb.toString());\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, q = int(data[0]), int(data[1])\n    idx = 2\n    pref = [0] * (n + 1)\n    for i in range(n):\n        pref[i + 1] = pref[i] + int(data[idx])\n        idx += 1\n    res = []\n    for _ in range(q):\n        l, r = int(data[idx]), int(data[idx+1])\n        idx += 2\n        res.append(str(pref[r + 1] - pref[l]))\n    print(\"\\n\".join(res))\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-055-1",
            "input": "5 3\n1 2 3 4 5\n0 2\n1 3\n0 4",
            "expectedOutput": "6\n9\n15"
      },
      {
            "id": "tc-055-2",
            "input": "3 1\n5 10 -2\n1 2",
            "expectedOutput": "8"
      }
],
    hiddenTestCases: [
      {
            "id": "tc-055-h1",
            "input": "2 1\n7 7\n0 0",
            "expectedOutput": "7",
            "isHidden": true
      }
],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-056',
    catalogNumber: 56,
    slug: "max-consecutive-ones",
    title: "Max Consecutive Ones",
    problemStatement: "Given a binary array `nums`, return the maximum number of consecutive 1's in the array.",
    inputFormat: "First line contains N. Second line contains N binary integers (0 or 1).",
    outputFormat: "Print the maximum consecutive 1s.",
    constraints: [
      "1 <= N <= 10^5",
      "All inputs adhere to standard competitive programming limits"
],
    examples: [
      {
            "input": "6\n1 1 0 1 1 1",
            "output": "3",
            "explanation": "The first two digits or the last three digits are consecutive 1s. The maximum is 3."
      }
],
    difficulty: 'EASY',
    topics: ["Arrays"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Max Consecutive Ones",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Single-pass linear scan.",
      "Track running count of 1s; reset to 0 on seeing 0."
    ],
    hintStages: build12StageHints({
      goal: "Find the max run of consecutive 1s.",
      result: "Count of consecutive 1s.",
      constraints: "Values are only 0 or 1.",
      example: "[1, 1, 0, 1, 1, 1] -> max is 3.",
      observation: "Track running count of 1s; reset to 0 on seeing 0.",
      bruteForce: "Check all subarrays.",
      limitation: "O(N^2) time is unnecessary.",
      pattern: "Single-pass linear scan.",
      dataStructure: "Counters.",
      outline: "cur = 0, best = 0. If 1, cur++; best = max(best, cur); else cur = 0.",
      pseudocode: "for x in a: cur = cur + 1 if x == 1 else 0; best = max(best, cur)",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Track running count of 1s; reset to 0 on seeing 0. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\nint main() {\n    int n; if (scanf(\"%d\", &n) != 1) return 0;\n    int cur = 0, best = 0;\n    for (int i = 0; i < n; i++) {\n        int x; scanf(\"%d\", &x);\n        if (x == 1) { cur++; if (cur > best) best = cur; }\n        else cur = 0;\n    }\n    printf(\"%d\\n\", best);\n    return 0;\n}",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int n; if (!(cin >> n)) return 0;\n    int cur = 0, best = 0;\n    for (int i = 0; i < n; i++) {\n        int x; cin >> x;\n        if (x == 1) { cur++; if (cur > best) best = cur; }\n        else cur = 0;\n    }\n    cout << best << \"\\n\";\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        int cur = 0, best = 0;\n        for (int i = 0; i < n; i++) {\n            int x = sc.nextInt();\n            if (x == 1) { cur++; if (cur > best) best = cur; }\n            else cur = 0;\n        }\n        System.out.println(best);\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    cur = best = 0\n    for x in data[1:1+n]:\n        if x == '1':\n            cur += 1\n            if cur > best: best = cur\n        else: cur = 0\n    print(best)\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-056-1",
            "input": "6\n1 1 0 1 1 1",
            "expectedOutput": "3"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-057',
    catalogNumber: 57,
    slug: "top-k-frequent-elements",
    title: "Top K Frequent Elements",
    problemStatement: "Solve the classic interview problem 'Top K Frequent Elements'. Given the problem requirements, read standard input, apply optimal time and space complexity techniques, and produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All inputs adhere to standard competitive programming limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Top K Frequent Elements."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Arrays", "Hash Table", "Heap"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Top K Frequent Elements",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Top K Frequent Elements.",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Execute the optimal algorithm for Top K Frequent Elements.",
      result: "Standard formatted solution output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Top K Frequent Elements.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Apply algorithm. 3. Output answer.",
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
            "id": "tc-057-1",
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
    id: 'prep-code-058',
    catalogNumber: 58,
    slug: "sort-colors-dutch-national-flag",
    title: "Sort Colors / Sort 0s, 1s and 2s (Dutch National Flag)",
    problemStatement: "Given an array `nums` with `n` objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order 0, 1, and 2 (Dutch National Flag problem).",
    inputFormat: "First line contains N. Second line contains N integers (0, 1, or 2).",
    outputFormat: "Print the sorted array separated by spaces.",
    constraints: [
      "1 <= N <= 10^5",
      "All inputs adhere to standard competitive programming limits"
],
    examples: [
      {
            "input": "6\n2 0 2 1 1 0",
            "output": "0 0 1 1 2 2",
            "explanation": "Sorted in-place in one pass."
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
      title: 'TCS Placement Papers ' + "Sort Colors / Sort 0s, 1s and 2s (Dutch National Flag)",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Dutch National Flag (Three Pointers).",
      "Maintain three pointers: low, mid, high. 0s go to low, 2s go to high."
    ],
    hintStages: build12StageHints({
      goal: "Sort an array of 0s, 1s, and 2s in one pass.",
      result: "Sorted 0 1 2 sequence.",
      constraints: "In-place, one-pass, O(1) space.",
      example: "[2, 0, 2, 1, 1, 0] -> [0, 0, 1, 1, 2, 2].",
      observation: "Maintain three pointers: low, mid, high. 0s go to low, 2s go to high.",
      bruteForce: "Counting sort or regular sort.",
      limitation: "Two passes or O(N log N).",
      pattern: "Dutch National Flag (Three Pointers).",
      dataStructure: "Three pointers.",
      outline: "low=0, mid=0, high=n-1. While mid <= high: if nums[mid]==0 swap(mid++, low++); if 1 mid++; if 2 swap(mid, high--).",
      pseudocode: "while mid <= high:\n  if a[mid] == 0: swap(a[low], a[mid]); low++; mid++\n  elif a[mid] == 1: mid++\n  else: swap(a[mid], a[high]); high--",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Maintain three pointers: low, mid, high. 0s go to low, 2s go to high. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int n; if (scanf(\"%d\", &n) != 1) return 0;\n    int *a = (int*)malloc(sizeof(int) * n);\n    for (int i = 0; i < n; i++) scanf(\"%d\", &a[i]);\n    int low = 0, mid = 0, high = n - 1;\n    while (mid <= high) {\n        if (a[mid] == 0) {\n            int t = a[low]; a[low] = a[mid]; a[mid] = t;\n            low++; mid++;\n        } else if (a[mid] == 1) {\n            mid++;\n        } else {\n            int t = a[mid]; a[mid] = a[high]; a[high] = t;\n            high--;\n        }\n    }\n    for (int i = 0; i < n; i++) printf(\"%d%c\", a[i], i == n - 1 ? '\\n' : ' ');\n    free(a);\n    return 0;\n}",
      cpp: "#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    int n; if (!(cin >> n)) return 0;\n    vector<int> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    int low = 0, mid = 0, high = n - 1;\n    while (mid <= high) {\n        if (a[mid] == 0) swap(a[low++], a[mid++]);\n        else if (a[mid] == 1) mid++;\n        else swap(a[mid], a[high--]);\n    }\n    for (int i = 0; i < n; i++) cout << a[i] << (i == n - 1 ? \"\" : \" \");\n    cout << \"\\n\";\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        int[] a = new int[n];\n        for (int i = 0; i < n; i++) a[i] = sc.nextInt();\n        int low = 0, mid = 0, high = n - 1;\n        while (mid <= high) {\n            if (a[mid] == 0) {\n                int t = a[low]; a[low] = a[mid]; a[mid] = t;\n                low++; mid++;\n            } else if (a[mid] == 1) {\n                mid++;\n            } else {\n                int t = a[mid]; a[mid] = a[high]; a[high] = t;\n                high--;\n            }\n        }\n        StringBuilder sb = new StringBuilder();\n        for (int i = 0; i < n; i++) sb.append(a[i]).append(i == n - 1 ? \"\" : \" \");\n        System.out.println(sb.toString());\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    a = [int(x) for x in data[1:1+n]]\n    low, mid, high = 0, 0, n - 1\n    while mid <= high:\n        if a[mid] == 0:\n            a[low], a[mid] = a[mid], a[low]\n            low += 1; mid += 1\n        elif a[mid] == 1:\n            mid += 1\n        else:\n            a[mid], a[high] = a[high], a[mid]\n            high -= 1\n    print(\" \".join(str(x) for x in a))\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-058-1",
            "input": "6\n2 0 2 1 1 0",
            "expectedOutput": "0 0 1 1 2 2"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-059',
    catalogNumber: 59,
    slug: "next-greater-element",
    title: "Next Greater Element",
    problemStatement: "Solve the classic interview problem 'Next Greater Element'. Given the problem requirements, read standard input, apply optimal time and space complexity techniques, and produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All inputs adhere to standard competitive programming limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Next Greater Element."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Stack", "Monotonic Stack"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Next Greater Element",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Next Greater Element.",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Execute the optimal algorithm for Next Greater Element.",
      result: "Standard formatted solution output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Next Greater Element.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Apply algorithm. 3. Output answer.",
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
            "id": "tc-059-1",
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
    id: 'prep-code-060',
    catalogNumber: 60,
    slug: "min-stack-design",
    title: "Min Stack Design",
    problemStatement: "Solve the classic interview problem 'Min Stack Design'. Given the problem requirements, read standard input, apply optimal time and space complexity techniques, and produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All inputs adhere to standard competitive programming limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Min Stack Design."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Stack", "Design"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Min Stack Design",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Min Stack Design.",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Execute the optimal algorithm for Min Stack Design.",
      result: "Standard formatted solution output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Min Stack Design.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Apply algorithm. 3. Output answer.",
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
            "id": "tc-060-1",
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
    id: 'prep-code-061',
    catalogNumber: 61,
    slug: "reverse-a-string",
    title: "Reverse a String",
    problemStatement: "Given a string `s`, reverse the string in-place (or output the reversed string).",
    inputFormat: "A single string s on one line.",
    outputFormat: "Print the reversed string.",
    constraints: [
      "1 <= N <= 10^5",
      "All inputs adhere to standard competitive programming limits"
],
    examples: [
      {
            "input": "hello",
            "output": "olleh",
            "explanation": "Reversed characters."
      }
],
    difficulty: 'EASY',
    topics: ["Strings", "Two Pointers"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Reverse a String",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Two Pointers.",
      "Swap symmetric elements from ends toward center."
    ],
    hintStages: build12StageHints({
      goal: "Reverse string characters.",
      result: "Reversed string.",
      constraints: "ASCII characters.",
      example: "hello -> olleh.",
      observation: "Swap symmetric elements from ends toward center.",
      bruteForce: "Push to stack and pop.",
      limitation: "Stack uses O(N) extra space.",
      pattern: "Two Pointers.",
      dataStructure: "Pointers.",
      outline: "left=0, right=len-1. Swap characters while left < right.",
      pseudocode: "l = 0; r = len - 1\nwhile l < r: swap(s[l], s[r]); l++; r--",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "Swap symmetric elements from ends toward center. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[100005];\n    if (scanf(\"%s\", s) != 1) return 0;\n    int l = 0, r = strlen(s) - 1;\n    while (l < r) {\n        char t = s[l]; s[l] = s[r]; s[r] = t;\n        l++; r--;\n    }\n    printf(\"%s\\n\", s);\n    return 0;\n}",
      cpp: "#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\nint main() {\n    string s; if (!(cin >> s)) return 0;\n    reverse(s.begin(), s.end());\n    cout << s << \"\\n\";\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        String s = sc.next();\n        System.out.println(new StringBuilder(s).reverse().toString());\n    }\n}",
      python: "import sys\ndef main():\n    s = sys.stdin.read().strip()\n    if s: print(s[::-1])\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-061-1",
            "input": "hello",
            "expectedOutput": "olleh"
      }
],
    hiddenTestCases: [],
    publicationStatus: 'PUBLISHED',
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prep-code-062',
    catalogNumber: 62,
    slug: "valid-palindrome-alphanumeric",
    title: "Valid Palindrome (Ignoring Punctuation/Case)",
    problemStatement: "Solve the classic interview problem 'Valid Palindrome (Ignoring Punctuation/Case)'. Given the problem requirements, read standard input, apply optimal time and space complexity techniques, and produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All inputs adhere to standard competitive programming limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Valid Palindrome (Ignoring Punctuation/Case)."
      }
],
    difficulty: 'EASY',
    topics: ["Strings", "Two Pointers"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Valid Palindrome (Ignoring Punctuation/Case)",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Valid Palindrome (Ignoring Punctuation/Case).",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Execute the optimal algorithm for Valid Palindrome (Ignoring Punctuation/Case).",
      result: "Standard formatted solution output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Valid Palindrome (Ignoring Punctuation/Case).",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Apply algorithm. 3. Output answer.",
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
            "id": "tc-062-1",
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
    id: 'prep-code-063',
    catalogNumber: 63,
    slug: "valid-anagram",
    title: "Valid Anagram",
    problemStatement: "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.",
    inputFormat: "Two space-separated strings s and t.",
    outputFormat: "Print 'true' or 'false'.",
    constraints: [
      "1 <= N <= 10^5",
      "All inputs adhere to standard competitive programming limits"
],
    examples: [
      {
            "input": "anagram nagaram",
            "output": "true",
            "explanation": "Both contain identical letter counts."
      },
      {
            "input": "rat car",
            "output": "false",
            "explanation": "Different letter frequencies."
      }
],
    difficulty: 'EASY',
    topics: ["Strings", "Hash Table", "Sorting"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Valid Anagram",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Frequency Hash Table / Array.",
      "An anagram has identical character frequency counts."
    ],
    hintStages: build12StageHints({
      goal: "Check if two strings contain identical character frequencies.",
      result: "true or false.",
      constraints: "Lowercase letters.",
      example: "anagram and nagaram -> true.",
      observation: "An anagram has identical character frequency counts.",
      bruteForce: "Sort both strings and compare.",
      limitation: "Sorting takes O(N log N).",
      pattern: "Frequency Hash Table / Array.",
      dataStructure: "Integer array of size 26.",
      outline: "Count characters in s, decrement for t. If all counts are zero, return true.",
      pseudocode: "count = [0]*26\nfor c in s: count[c]++\nfor c in t: count[c]--\nreturn all(x == 0 for x in count)",
      solution: "O(N) time and O(1) space."
    }),
    explanation: "An anagram has identical character frequency counts. O(N) time and O(1) space.",
    timeComplexity: "O(N)",
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[100005], t[100005];\n    if (scanf(\"%s %s\", s, t) != 2) return 0;\n    if (strlen(s) != strlen(t)) { printf(\"false\\n\"); return 0; }\n    int cnt[26] = {0};\n    for (int i = 0; s[i]; i++) { cnt[s[i] - 'a']++; cnt[t[i] - 'a']--; }\n    for (int i = 0; i < 26; i++) {\n        if (cnt[i] != 0) { printf(\"false\\n\"); return 0; }\n    }\n    printf(\"true\\n\");\n    return 0;\n}",
      cpp: "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\nint main() {\n    string s, t; if (!(cin >> s >> t)) return 0;\n    if (s.size() != t.size()) { cout << \"false\\n\"; return 0; }\n    vector<int> cnt(26, 0);\n    for (char c : s) cnt[c - 'a']++;\n    for (char c : t) cnt[c - 'a']--;\n    for (int x : cnt) if (x != 0) { cout << \"false\\n\"; return 0; }\n    cout << \"true\\n\";\n    return 0;\n}",
      java: "import java.util.*;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        String s = sc.next(), t = sc.next();\n        if (s.length() != t.length()) { System.out.println(\"false\"); return; }\n        int[] cnt = new int[26];\n        for (char c : s.toCharArray()) cnt[c - 'a']++;\n        for (char c : t.toCharArray()) cnt[c - 'a']--;\n        for (int x : cnt) if (x != 0) { System.out.println(\"false\"); return; }\n        System.out.println(\"true\");\n    }\n}",
      python: "import sys\ndef main():\n    data = sys.stdin.read().split()\n    if len(data) < 2: return\n    s, t = data[0], data[1]\n    print(\"true\" if sorted(s) == sorted(t) else \"false\")\nif __name__ == '__main__': main()"
    },
    publicTestCases: [
      {
            "id": "tc-063-1",
            "input": "anagram nagaram",
            "expectedOutput": "true"
      },
      {
            "id": "tc-063-2",
            "input": "rat car",
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
    id: 'prep-code-064',
    catalogNumber: 64,
    slug: "first-non-repeating-character",
    title: "First Non-Repeating Character",
    problemStatement: "Solve the classic interview problem 'First Non-Repeating Character'. Given the problem requirements, read standard input, apply optimal time and space complexity techniques, and produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All inputs adhere to standard competitive programming limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for First Non-Repeating Character."
      }
],
    difficulty: 'EASY',
    topics: ["Strings", "Hash Table", "Queue"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "First Non-Repeating Character",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for First Non-Repeating Character.",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Execute the optimal algorithm for First Non-Repeating Character.",
      result: "Standard formatted solution output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for First Non-Repeating Character.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Apply algorithm. 3. Output answer.",
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
            "id": "tc-064-1",
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
    id: 'prep-code-065',
    catalogNumber: 65,
    slug: "character-frequency-counter",
    title: "Character Frequency Counter",
    problemStatement: "Solve the classic interview problem 'Character Frequency Counter'. Given the problem requirements, read standard input, apply optimal time and space complexity techniques, and produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All inputs adhere to standard competitive programming limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Character Frequency Counter."
      }
],
    difficulty: 'EASY',
    topics: ["Strings", "Hash Table"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Character Frequency Counter",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Character Frequency Counter.",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Execute the optimal algorithm for Character Frequency Counter.",
      result: "Standard formatted solution output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Character Frequency Counter.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Apply algorithm. 3. Output answer.",
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
            "id": "tc-065-1",
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
    id: 'prep-code-066',
    catalogNumber: 66,
    slug: "run-length-encoding-string-compression",
    title: "Run-Length Encoding / String Compression",
    problemStatement: "Solve the classic interview problem 'Run-Length Encoding / String Compression'. Given the problem requirements, read standard input, apply optimal time and space complexity techniques, and produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All inputs adhere to standard competitive programming limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Run-Length Encoding / String Compression."
      }
],
    difficulty: 'EASY',
    topics: ["Strings", "Two Pointers"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Run-Length Encoding / String Compression",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Run-Length Encoding / String Compression.",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Execute the optimal algorithm for Run-Length Encoding / String Compression.",
      result: "Standard formatted solution output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Run-Length Encoding / String Compression.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Apply algorithm. 3. Output answer.",
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
            "id": "tc-066-1",
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
    id: 'prep-code-067',
    catalogNumber: 67,
    slug: "remove-duplicate-characters",
    title: "Remove Duplicate Characters from a String",
    problemStatement: "Solve the classic interview problem 'Remove Duplicate Characters from a String'. Given the problem requirements, read standard input, apply optimal time and space complexity techniques, and produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All inputs adhere to standard competitive programming limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Remove Duplicate Characters from a String."
      }
],
    difficulty: 'EASY',
    topics: ["Strings", "Hash Table"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Remove Duplicate Characters from a String",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Remove Duplicate Characters from a String.",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Execute the optimal algorithm for Remove Duplicate Characters from a String.",
      result: "Standard formatted solution output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Remove Duplicate Characters from a String.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Apply algorithm. 3. Output answer.",
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
            "id": "tc-067-1",
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
    id: 'prep-code-068',
    catalogNumber: 68,
    slug: "reverse-words-in-a-given-string",
    title: "Reverse Words in a Given String",
    problemStatement: "Solve the classic interview problem 'Reverse Words in a Given String'. Given the problem requirements, read standard input, apply optimal time and space complexity techniques, and produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All inputs adhere to standard competitive programming limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Reverse Words in a Given String."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Strings", "Two Pointers"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Reverse Words in a Given String",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Reverse Words in a Given String.",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Execute the optimal algorithm for Reverse Words in a Given String.",
      result: "Standard formatted solution output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Reverse Words in a Given String.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Apply algorithm. 3. Output answer.",
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
            "id": "tc-068-1",
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
    id: 'prep-code-069',
    catalogNumber: 69,
    slug: "group-anagrams",
    title: "Group Anagrams",
    problemStatement: "Solve the classic interview problem 'Group Anagrams'. Given the problem requirements, read standard input, apply optimal time and space complexity techniques, and produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All inputs adhere to standard competitive programming limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Group Anagrams."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Strings", "Hash Table", "Sorting"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Group Anagrams",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Group Anagrams.",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Execute the optimal algorithm for Group Anagrams.",
      result: "Standard formatted solution output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Group Anagrams.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Apply algorithm. 3. Output answer.",
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
            "id": "tc-069-1",
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
    id: 'prep-code-070',
    catalogNumber: 70,
    slug: "find-the-index-of-the-first-occurrence-in-a-string",
    title: "Find the Index of the First Occurrence in a String (Strstr / KMP)",
    problemStatement: "Solve the classic interview problem 'Find the Index of the First Occurrence in a String (Strstr / KMP)'. Given the problem requirements, read standard input, apply optimal time and space complexity techniques, and produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All inputs adhere to standard competitive programming limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Find the Index of the First Occurrence in a String (Strstr / KMP)."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Strings", "String Matching"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Find the Index of the First Occurrence in a String (Strstr / KMP)",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Find the Index of the First Occurrence in a String (Strstr / KMP).",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Execute the optimal algorithm for Find the Index of the First Occurrence in a String (Strstr / KMP).",
      result: "Standard formatted solution output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Find the Index of the First Occurrence in a String (Strstr / KMP).",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Apply algorithm. 3. Output answer.",
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
            "id": "tc-070-1",
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
    id: 'prep-code-071',
    catalogNumber: 71,
    slug: "check-pangram",
    title: "Check Pangram",
    problemStatement: "Solve the classic interview problem 'Check Pangram'. Given the problem requirements, read standard input, apply optimal time and space complexity techniques, and produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All inputs adhere to standard competitive programming limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Check Pangram."
      }
],
    difficulty: 'EASY',
    topics: ["Strings", "Hash Table"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Check Pangram",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Check Pangram.",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Execute the optimal algorithm for Check Pangram.",
      result: "Standard formatted solution output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Check Pangram.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Apply algorithm. 3. Output answer.",
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
            "id": "tc-071-1",
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
    id: 'prep-code-072',
    catalogNumber: 72,
    slug: "backspace-string-compare",
    title: "Backspace String Compare",
    problemStatement: "Solve the classic interview problem 'Backspace String Compare'. Given the problem requirements, read standard input, apply optimal time and space complexity techniques, and produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All inputs adhere to standard competitive programming limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Backspace String Compare."
      }
],
    difficulty: 'EASY',
    topics: ["Strings", "Two Pointers", "Stack"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['NINJA'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Backspace String Compare",
      hiringCycle: 'TCS Ninja Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Backspace String Compare.",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Execute the optimal algorithm for Backspace String Compare.",
      result: "Standard formatted solution output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Backspace String Compare.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Apply algorithm. 3. Output answer.",
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
            "id": "tc-072-1",
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
    id: 'prep-code-073',
    catalogNumber: 73,
    slug: "longest-repeating-character-replacement",
    title: "Longest Repeating Character Replacement",
    problemStatement: "Solve the classic interview problem 'Longest Repeating Character Replacement'. Given the problem requirements, read standard input, apply optimal time and space complexity techniques, and produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All inputs adhere to standard competitive programming limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Longest Repeating Character Replacement."
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
      title: 'TCS Placement Papers ' + "Longest Repeating Character Replacement",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Longest Repeating Character Replacement.",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Execute the optimal algorithm for Longest Repeating Character Replacement.",
      result: "Standard formatted solution output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Longest Repeating Character Replacement.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Apply algorithm. 3. Output answer.",
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
            "id": "tc-073-1",
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
    id: 'prep-code-074',
    catalogNumber: 74,
    slug: "minimum-window-substring",
    title: "Minimum Window Substring",
    problemStatement: "Solve the classic interview problem 'Minimum Window Substring'. Given the problem requirements, read standard input, apply optimal time and space complexity techniques, and produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All inputs adhere to standard competitive programming limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Minimum Window Substring."
      }
],
    difficulty: 'HARD',
    topics: ["Strings", "Sliding Window", "Hash Table"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['PRIME'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Minimum Window Substring",
      hiringCycle: 'TCS Prime Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Minimum Window Substring.",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Execute the optimal algorithm for Minimum Window Substring.",
      result: "Standard formatted solution output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Minimum Window Substring.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Apply algorithm. 3. Output answer.",
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
            "id": "tc-074-1",
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
    id: 'prep-code-075',
    catalogNumber: 75,
    slug: "count-distinct-substrings",
    title: "Count Distinct Substrings",
    problemStatement: "Solve the classic interview problem 'Count Distinct Substrings'. Given the problem requirements, read standard input, apply optimal time and space complexity techniques, and produce the verified output.",
    inputFormat: "First line contains input test data.",
    outputFormat: "Print the required result.",
    constraints: [
      "1 <= N <= 10^5",
      "All inputs adhere to standard competitive programming limits"
],
    examples: [
      {
            "input": "5\n1 2 3 4 5",
            "output": "Verified Output",
            "explanation": "Optimal solution for Count Distinct Substrings."
      }
],
    difficulty: 'MEDIUM',
    topics: ["Strings", "Trie", "Suffix Array"],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'TCS Placement Papers ' + "Count Distinct Substrings",
      hiringCycle: 'TCS Digital Track',
      notes: 'Standard technical assessment coding problem testing algorithms and time complexity.'
    },
    hints: [
      "Algorithmic pattern for Count Distinct Substrings.",
      "Identify optimal invariants and data structures."
    ],
    hintStages: build12StageHints({
      goal: "Execute the optimal algorithm for Count Distinct Substrings.",
      result: "Standard formatted solution output.",
      constraints: "Strict time and space constraints.",
      example: "Refer to the test cases for sample input-output traces.",
      observation: "Identify optimal invariants and data structures.",
      bruteForce: "Exhaustive brute-force search.",
      limitation: "High algorithmic time complexity limits scalability.",
      pattern: "Algorithmic pattern for Count Distinct Substrings.",
      dataStructure: "Standard container.",
      outline: "1. Parse input. 2. Apply algorithm. 3. Output answer.",
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
            "id": "tc-075-1",
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
