import { Question } from '../types';

export const STARTER_QUESTIONS: Question[] = [
  {
    id: 'tcs-cp-001',
    slug: 'sum-of-multiples-of-three-and-five',
    title: 'Sum of Distinct Multiples Below N',
    problemStatement: `Given a positive integer $N$, calculate the sum of all natural numbers strictly less than $N$ that are multiples of 3 or 5. If a number is a multiple of both 3 and 5 (i.e. 15), count it only once.

If $N \le 3$, output 0 since there are no positive multiples below $N$.`,
    inputFormat: 'A single integer N on a single line.',
    outputFormat: 'Print the sum of all distinct multiples of 3 or 5 strictly less than N.',
    constraints: [
      '1 <= N <= 10^6 (for basic standard practice)',
      'Time Limit: 1.0s',
      'Memory Limit: 128 MB'
    ],
    examples: [
      {
        input: '10',
        output: '23',
        explanation: 'Natural numbers below 10 that are multiples of 3 or 5 are 3, 5, 6, and 9. Their sum is 3 + 5 + 6 + 9 = 23.'
      },
      {
        input: '16',
        output: '60',
        explanation: 'Multiples below 16 are 3, 5, 6, 9, 10, 12, 15. Their sum is 3 + 5 + 6 + 9 + 10 + 12 + 15 = 60.'
      }
    ],
    difficulty: 'EASY',
    topics: ['Math', 'Number Theory', 'Implementation'],
    sections: ['PROGRAMMING', 'CODING'],
    targetTracks: ['NINJA', 'DIGITAL'],
    estimatedMinutes: 15,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'Common Foundational Number Theory & Arithmetic Progression Patterns',
      hiringCycle: 'National Qualifier Test (NQT) Foundation',
      notes: 'Frequently tested foundational arithmetic problem verifying modulus logic and time complexity awareness.'
    },
    hints: [
      'Hint 1: Can you iterate from 1 up to N - 1 and check if each number is divisible by 3 or 5 using the modulus operator (`i % 3 === 0 || i % 5 === 0`)?',
      'Hint 2: Be careful not to double count multiples of 15 (which are divisible by both 3 and 5). An `if ... else if` structure or a combined `||` condition automatically counts each number once.',
      'Hint 3: For an optimal $O(1)$ solution, recall the sum of an Arithmetic Progression: $S_k = k \times \frac{m(m+1)}{2}$ where $m = \lfloor \frac{N-1}{k} \rfloor$. Use Principle of Inclusion-Exclusion: $S_3 + S_5 - S_{15}$.',
      'Hint 4: Make sure to use a 64-bit integer (`long` in Java/C++, `int` in Python is arbitrary precision) to prevent integer overflow when $N$ is large.'
    ],
    explanation: `There are two standard approaches:
1. **Loop Simulation ($O(N)$)**: Iterate from $i = 1$ to $N - 1$. Accumulate $i$ if $i \\% 3 == 0$ or $i \\% 5 == 0$.
2. **Formula with Inclusion-Exclusion ($O(1)$)**:
   - Sum of multiples of 3 below $N$: $S_3 = 3 \\times \\frac{m_3(m_3 + 1)}{2}$ where $m_3 = (N - 1) // 3$.
   - Sum of multiples of 5 below $N$: $S_5 = 5 \\times \\frac{m_5(m_5 + 1)}{2}$ where $m_5 = (N - 1) // 5$.
   - Sum of multiples of 15 below $N$: $S_{15} = 15 \\times \\frac{m_{15}(m_{15} + 1)}{2}$ where $m_{15} = (N - 1) // 15$.
   - Total Sum = $S_3 + S_5 - S_{15}$.`,
    timeComplexity: 'O(1) using AP formula or O(N) using loop',
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: `#include <stdio.h>

int main() {
    long long n;
    if (scanf("%lld", &n) != 1) return 0;
    
    // Write your solution here
    long long sum = 0;
    for (long long i = 1; i < n; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    printf("%lld\\n", sum);
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    long long n;
    if (!(cin >> n)) return 0;

    // Write your solution here
    long long sum = 0;
    for (long long i = 1; i < n; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    cout << sum << "\\n";
    return 0;
}`,
      java: `import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextLong()) return;
        long n = sc.nextLong();

        // Write your solution here
        long sum = 0;
        for (long i = 1; i < n; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                sum += i;
            }
        }
        System.out.println(sum);
    }
}`,
      python: `import sys

def solve():
    line = sys.stdin.read().strip()
    if not line:
        return
    n = int(line)
    
    # Write your solution here
    total = 0
    for i in range(1, n):
        if i % 3 == 0 or i % 5 == 0:
            total += i
    print(total)

if __name__ == '__main__':
    solve()
`
    },
    publicTestCases: [
      { id: 'tc-001-1', name: 'Sample 1', input: '10', expectedOutput: '23' },
      { id: 'tc-001-2', name: 'Sample 2', input: '16', expectedOutput: '60' },
      { id: 'tc-001-3', name: 'Edge Case Small N', input: '3', expectedOutput: '0' }
    ],
    hiddenTestCases: [
      { id: 'tc-001-h1', input: '100', expectedOutput: '2318' },
      { id: 'tc-001-h2', input: '1000', expectedOutput: '233168' },
      { id: 'tc-001-h3', input: '4', expectedOutput: '3' },
      { id: 'tc-001-h4', input: '15', expectedOutput: '45' }
    ],
    publicationStatus: 'PUBLISHED',
    createdAt: '2024-01-15T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
    version: 1
  },
  {
    id: 'tcs-cp-002',
    slug: 'compress-string-run-length-encoding',
    title: 'Character Frequency Run-Length Encoding',
    problemStatement: `Given a string $S$ containing only lowercase English alphabetic characters, perform run-length encoding. 

For each consecutive identical character sequence, output the character followed by the count of its occurrences. If the count is 1, still include the number 1 (e.g. \`a\` becomes \`a1\`).

If the input string is empty, output an empty line.`,
    inputFormat: 'A single non-empty string S on one line consisting of lowercase English letters.',
    outputFormat: 'Print the encoded string as specified.',
    constraints: [
      '1 <= length(S) <= 10^5',
      'S contains only lowercase English letters [a-z]',
      'Time Limit: 1.0s',
      'Memory Limit: 128 MB'
    ],
    examples: [
      {
        input: 'aaabbc',
        output: 'a3b2c1',
        explanation: '\'a\' appears 3 times consecutively, \'b\' appears 2 times, and \'c\' appears 1 time.'
      },
      {
        input: 'wwwwaaadexxxxxx',
        output: 'w4a3d1e1x6',
        explanation: '\'w\' appears 4 times, \'a\' appears 3 times, \'d\' appears 1 time, \'e\' appears 1 time, and \'x\' appears 6 times.'
      }
    ],
    difficulty: 'EASY',
    topics: ['Strings', 'Two Pointers', 'Simulation'],
    sections: ['PROGRAMMING', 'CODING'],
    targetTracks: ['NINJA', 'DIGITAL'],
    estimatedMinutes: 20,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'Run Length Encoding String Problem Pattern',
      hiringCycle: 'TCS Ninja Hands-on Coding Assessment',
      notes: 'Standard string traversal testing consecutive counter loops without out-of-bounds indexing.'
    },
    hints: [
      'Hint 1: Use a two-pointer technique or a single loop maintaining a counter for the current character.',
      'Hint 2: When the next character differs from the current character (or when you reach the end of the string), append the current character and the accumulated counter to your result, then reset the counter to 1.',
      'Hint 3: Remember boundary conditions: Make sure you do not access index `i + 1` past the string length.',
      'Hint 4: For languages like Java or C++, avoid quadratic string concatenation inside the loop; use `StringBuilder` or pre-allocated `std::string` buffer.'
    ],
    explanation: `We scan the string from left to right. Maintain two variables: \`count = 1\` and iterate with index $i$ from 0 to $N - 1$.
If $i + 1 < N$ and $S[i] == S[i + 1]$, increment \`count\`.
Otherwise, append $S[i]$ and \`count\` to the output buffer and reset \`count = 1\`.
Time complexity is $O(N)$ with a single linear pass.`,
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(N) for output buffer',
    starterCodeByLanguage: {
      c: `#include <stdio.h>
#include <string.h>

int main() {
    char s[100005];
    if (scanf("%s", s) != 1) return 0;

    int n = strlen(s);
    int count = 1;
    for (int i = 0; i < n; i++) {
        if (i + 1 < n && s[i] == s[i + 1]) {
            count++;
        } else {
            printf("%c%d", s[i], count);
            count = 1;
        }
    }
    printf("\\n");
    return 0;
}`,
      cpp: `#include <iostream>
#include <string>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    string s;
    if (!(cin >> s)) return 0;

    string result = "";
    int count = 1;
    for (size_t i = 0; i < s.length(); i++) {
        if (i + 1 < s.length() && s[i] == s[i + 1]) {
            count++;
        } else {
            result += s[i];
            result += to_string(count);
            count = 1;
        }
    }
    cout << result << "\\n";
    return 0;
}`,
      java: `import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNext()) return;
        String s = sc.next();

        StringBuilder sb = new StringBuilder();
        int count = 1;
        for (int i = 0; i < s.length(); i++) {
            if (i + 1 < s.length() && s.charAt(i) == s.charAt(i + 1)) {
                count++;
            } else {
                sb.append(s.charAt(i)).append(count);
                count = 1;
            }
        }
        System.out.println(sb.toString());
    }
}`,
      python: `import sys

def solve():
    s = sys.stdin.read().strip()
    if not s:
        return

    result = []
    count = 1
    for i in range(len(s)):
        if i + 1 < len(s) and s[i] == s[i + 1]:
            count += 1
        else:
            result.append(f"{s[i]}{count}")
            count = 1
    print("".join(result))

if __name__ == '__main__':
    solve()
`
    },
    publicTestCases: [
      { id: 'tc-002-1', name: 'Sample 1', input: 'aaabbc', expectedOutput: 'a3b2c1' },
      { id: 'tc-002-2', name: 'Sample 2', input: 'wwwwaaadexxxxxx', expectedOutput: 'w4a3d1e1x6' },
      { id: 'tc-002-3', name: 'Single Char', input: 'z', expectedOutput: 'z1' }
    ],
    hiddenTestCases: [
      { id: 'tc-002-h1', input: 'abcdef', expectedOutput: 'a1b1c1d1e1f1' },
      { id: 'tc-002-h2', input: 'aaaaaaaaaa', expectedOutput: 'a10' },
      { id: 'tc-002-h3', input: 'aabbccddeea', expectedOutput: 'a2b2c2d2e2a1' }
    ],
    publicationStatus: 'PUBLISHED',
    createdAt: '2024-01-20T00:00:00Z',
    updatedAt: '2024-01-20T00:00:00Z',
    version: 1
  },
  {
    id: 'tcs-cp-003',
    slug: 'longest-contiguous-subarray-with-target-sum',
    title: 'Longest Subarray with Sum Equal to K',
    problemStatement: `Given an integer array $A$ of size $N$ and an integer target $K$, find the length of the longest contiguous subarray whose sum of elements is exactly equal to $K$. 

If no such subarray exists, print 0.`,
    inputFormat: `The first line contains two space-separated integers: N and K.
The second line contains N space-separated integers representing the array A.`,
    outputFormat: 'Print a single integer representing the maximum length of a contiguous subarray with sum equal to K.',
    constraints: [
      '1 <= N <= 10^5',
      '-10^9 <= K <= 10^9',
      '-10^5 <= A[i] <= 10^5',
      'Time Limit: 1.5s',
      'Memory Limit: 256 MB'
    ],
    examples: [
      {
        input: `6 15
10 5 2 7 1 9`,
        output: '4',
        explanation: 'The subarray [5, 2, 7, 1] has sum 5 + 2 + 7 + 1 = 15, and its length is 4.'
      },
      {
        input: `3 5
-1 2 3`,
        output: '2',
        explanation: 'The subarray [2, 3] has sum 5, and its length is 2.'
      }
    ],
    difficulty: 'MEDIUM',
    topics: ['Arrays', 'Prefix Sum', 'Hash Map'],
    sections: ['CODING', 'ADVANCED_QUANT'],
    targetTracks: ['DIGITAL', 'PRIME'],
    estimatedMinutes: 30,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'Prefix Sum & Hash Map Equivalence Pattern',
      hiringCycle: 'TCS Digital Advanced Coding Section',
      notes: 'Classic prefix-sum problem with negative numbers testing hash map lookups.'
    },
    hints: [
      'Hint 1: If the array only contained positive integers, a sliding window (two pointers) would work in $O(N)$ time. However, because $A[i]$ can be negative, a sliding window is not monotonic.',
      'Hint 2: Use Prefix Sums: Let $P[i] = A[0] + A[1] + \\dots + A[i]$. The sum of any subarray from index $j$ to $i$ is $P[i] - P[j-1]$.',
      'Hint 3: We want $P[i] - P[j-1] = K \\implies P[j-1] = P[i] - K$. As we iterate through index $i$, check if $(P[i] - K)$ was previously recorded in a Hash Map.',
      'Hint 4: To maximize $(i - (j-1))$, you should store only the earliest index where each prefix sum appeared in your Hash Map.'
    ],
    explanation: `We maintain a running prefix sum \`current_sum\`. A Hash Map stores the mapping from \`prefix_sum\` to the \`first_seen_index\`.
Initialize the map with \`{0: -1}\` to handle subarrays starting from index 0.
As we iterate at index $i$:
1. \`current_sum += A[i]\`
2. Check if \`current_sum - K\` exists in the map. If it does, subarray length is $i - \\text{map}[\\text{current\\_sum} - K]$. Update \`max_len = \\max(\\text{max\\_len}, \\text{len})\`.
3. If \`current_sum\` is not in the map, store \`map[current_sum] = i\` (do not overwrite if already present, to maximize length).
Time complexity: $O(N)$ with $O(N)$ hash map space.`,
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(N)',
    starterCodeByLanguage: {
      c: `#include <stdio.h>
#include <stdlib.h>

// Simple hash map for prefix sum
typedef struct Node {
    long long key;
    int value;
    struct Node* next;
} Node;

#define HASH_SIZE 100003

Node* table[HASH_SIZE];

int hash(long long key) {
    long long h = key % HASH_SIZE;
    if (h < 0) h += HASH_SIZE;
    return (int)h;
}

int find(long long key, int* val) {
    int h = hash(key);
    Node* curr = table[h];
    while (curr) {
        if (curr->key == key) {
            *val = curr->value;
            return 1;
        }
        curr = curr->next;
    }
    return 0;
}

void insert(long long key, int val) {
    int h = hash(key);
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->key = key;
    newNode->value = val;
    newNode->next = table[h];
    table[h] = newNode;
}

int main() {
    int n;
    long long k;
    if (scanf("%d %lld", &n, &k) != 2) return 0;

    insert(0, -1);
    long long prefix = 0;
    int maxLen = 0;

    for (int i = 0; i < n; i++) {
        long long val;
        scanf("%lld", &val);
        prefix += val;

        int prevIdx;
        if (find(prefix - k, &prevIdx)) {
            int len = i - prevIdx;
            if (len > maxLen) maxLen = len;
        }

        if (!find(prefix, &prevIdx)) {
            insert(prefix, i);
        }
    }

    printf("%d\\n", maxLen);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    long long k;
    if (!(cin >> n >> k)) return 0;

    unordered_map<long long, int> firstSeen;
    firstSeen[0] = -1;

    long long currentSum = 0;
    int maxLen = 0;

    for (int i = 0; i < n; i++) {
        long long val;
        cin >> val;
        currentSum += val;

        if (firstSeen.find(currentSum - k) != firstSeen.end()) {
            maxLen = max(maxLen, i - firstSeen[currentSum - k]);
        }

        if (firstSeen.find(currentSum) == firstSeen.end()) {
            firstSeen[currentSum] = i;
        }
    }

    cout << maxLen << "\\n";
    return 0;
}`,
      java: `import java.util.Scanner;
import java.util.HashMap;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int n = sc.nextInt();
        long k = sc.nextLong();

        HashMap<Long, Integer> firstSeen = new HashMap<>();
        firstSeen.put(0L, -1);

        long currentSum = 0;
        int maxLen = 0;

        for (int i = 0; i < n; i++) {
            long val = sc.nextLong();
            currentSum += val;

            long target = currentSum - k;
            if (firstSeen.containsKey(target)) {
                maxLen = Math.max(maxLen, i - firstSeen.get(target));
            }

            if (!firstSeen.containsKey(currentSum)) {
                firstSeen.put(currentSum, i);
            }
        }

        System.out.println(maxLen);
    }
}`,
      python: `import sys

def solve():
    input_data = sys.stdin.read().split()
    if not input_data:
        return
    n = int(input_data[0])
    k = int(input_data[1])
    arr = [int(x) for x in input_data[2:2+n]]

    first_seen = {0: -1}
    current_sum = 0
    max_len = 0

    for i in range(n):
        current_sum += arr[i]
        target = current_sum - k
        if target in first_seen:
            max_len = max(max_len, i - first_seen[target])
        if current_sum not in first_seen:
            first_seen[current_sum] = i

    print(max_len)

if __name__ == '__main__':
    solve()
`
    },
    publicTestCases: [
      { id: 'tc-003-1', name: 'Sample 1', input: '6 15\n10 5 2 7 1 9', expectedOutput: '4' },
      { id: 'tc-003-2', name: 'Sample 2', input: '3 5\n-1 2 3', expectedOutput: '2' },
      { id: 'tc-003-3', name: 'No Match Target', input: '4 100\n1 2 3 4', expectedOutput: '0' }
    ],
    hiddenTestCases: [
      { id: 'tc-003-h1', input: '5 0\n1 -1 2 -2 3', expectedOutput: '4' },
      { id: 'tc-003-h2', input: '6 3\n1 1 1 1 1 1', expectedOutput: '3' },
      { id: 'tc-003-h3', input: '1 5\n5', expectedOutput: '1' }
    ],
    publicationStatus: 'PUBLISHED',
    createdAt: '2024-02-01T00:00:00Z',
    updatedAt: '2024-02-01T00:00:00Z',
    version: 1
  },
  {
    id: 'tcs-cp-004',
    slug: 'spiral-order-matrix-traversal',
    title: 'Clockwise Spiral Matrix Traversal',
    problemStatement: `Given a 2D integer matrix of dimensions $R \\times C$, traverse and print all elements of the matrix in clockwise spiral order starting from the top-left cell $(0, 0)$.

Print the elements separated by a single space on one line.`,
    inputFormat: `The first line contains two integers: R and C (number of rows and columns).
The next R lines each contain C space-separated integers representing the matrix rows.`,
    outputFormat: 'Print the elements in spiral order separated by a single space on a single line.',
    constraints: [
      '1 <= R, C <= 500',
      '-10^5 <= Matrix[i][j] <= 10^5',
      'Time Limit: 1.0s',
      'Memory Limit: 128 MB'
    ],
    examples: [
      {
        input: `3 3
1 2 3
4 5 6
7 8 9`,
        output: '1 2 3 6 9 8 7 4 5',
        explanation: 'Visiting boundary in clockwise order: top row (1, 2, 3), right col (6, 9), bottom row (8, 7), left col (4), and center element (5).'
      },
      {
        input: `2 4
1 2 3 4
5 6 7 8`,
        output: '1 2 3 4 8 7 6 5',
        explanation: 'Top row: 1 2 3 4, right col: 8, bottom row: 7 6 5.'
      }
    ],
    difficulty: 'MEDIUM',
    topics: ['Matrix', 'Simulation', 'Arrays'],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL', 'PRIME'],
    estimatedMinutes: 25,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: '2D Grid Boundary Traversal Patterns',
      hiringCycle: 'TCS Digital Coding Section',
      notes: 'Tests 2D array boundary management, loop invariant checks, and edge cases with single row/col.'
    },
    hints: [
      'Hint 1: Maintain four boundary pointers: `top = 0`, `bottom = R - 1`, `left = 0`, `right = C - 1`.',
      'Hint 2: Traverse from left to right on the top row, then increment `top`. Traverse from top to bottom on the right column, then decrement `right`.',
      'Hint 3: Before traversing bottom row from right to left, ensure `top <= bottom`. Similarly, before traversing left column from bottom to top, ensure `left <= right`.',
      'Hint 4: Stop when `top > bottom` or `left > right`.'
    ],
    explanation: `We simulate layer by layer using 4 boundaries:
1. Traverse \`top\` row from \`left\` to \`right\`. Advance \`top++\`.
2. Traverse \`right\` column from \`top\` to \`bottom\`. Advance \`right--\`.
3. If \`top <= bottom\`, traverse \`bottom\` row from \`right\` to \`left\`. Advance \`bottom--\`.
4. If \`left <= right\`, traverse \`left\` column from \`bottom\` to \`top\`. Advance \`left++\`.
Repeat while \`top <= bottom && left <= right\`.`,
    timeComplexity: 'O(R * C)',
    spaceComplexity: 'O(1) auxiliary',
    starterCodeByLanguage: {
      c: `#include <stdio.h>

int mat[505][505];

int main() {
    int r, c;
    if (scanf("%d %d", &r, &c) != 2) return 0;

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            scanf("%d", &mat[i][j]);
        }
    }

    int top = 0, bottom = r - 1, left = 0, right = c - 1;
    int first = 1;

    while (top <= bottom && left <= right) {
        for (int j = left; j <= right; j++) {
            if (!first) printf(" ");
            printf("%d", mat[top][j]);
            first = 0;
        }
        top++;

        for (int i = top; i <= bottom; i++) {
            if (!first) printf(" ");
            printf("%d", mat[i][right]);
            first = 0;
        }
        right--;

        if (top <= bottom) {
            for (int j = right; j >= left; j--) {
                if (!first) printf(" ");
                printf("%d", mat[bottom][j]);
                first = 0;
            }
            bottom--;
        }

        if (left <= right) {
            for (int i = bottom; i >= top; i--) {
                if (!first) printf(" ");
                printf("%d", mat[i][left]);
                first = 0;
            }
            left++;
        }
    }
    printf("\\n");
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int r, c;
    if (!(cin >> r >> c)) return 0;

    vector<vector<int>> mat(r, vector<int>(c));
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            cin >> mat[i][j];
        }
    }

    int top = 0, bottom = r - 1, left = 0, right = c - 1;
    bool first = true;

    while (top <= bottom && left <= right) {
        for (int j = left; j <= right; j++) {
            if (!first) cout << " ";
            cout << mat[top][j];
            first = false;
        }
        top++;

        for (int i = top; i <= bottom; i++) {
            if (!first) cout << " ";
            cout << mat[i][right];
            first = false;
        }
        right--;

        if (top <= bottom) {
            for (int j = right; j >= left; j--) {
                if (!first) cout << " ";
                cout << mat[bottom][j];
                first = false;
            }
            bottom--;
        }

        if (left <= right) {
            for (int i = bottom; i >= top; i--) {
                if (!first) cout << " ";
                cout << mat[i][left];
                first = false;
            }
            left++;
        }
    }
    cout << "\\n";
    return 0;
}`,
      java: `import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int r = sc.nextInt();
        int c = sc.nextInt();

        int[][] mat = new int[r][c];
        for (int i = 0; i < r; i++) {
            for (int j = 0; j < c; j++) {
                mat[i][j] = sc.nextInt();
            }
        }

        StringBuilder sb = new StringBuilder();
        int top = 0, bottom = r - 1, left = 0, right = c - 1;

        while (top <= bottom && left <= right) {
            for (int j = left; j <= right; j++) {
                sb.append(mat[top][j]).append(" ");
            }
            top++;

            for (int i = top; i <= bottom; i++) {
                sb.append(mat[i][right]).append(" ");
            }
            right--;

            if (top <= bottom) {
                for (int j = right; j >= left; j--) {
                    sb.append(mat[bottom][j]).append(" ");
                }
                bottom--;
            }

            if (left <= right) {
                for (int i = bottom; i >= top; i--) {
                    sb.append(mat[i][left]).append(" ");
                }
                left++;
            }
        }

        System.out.println(sb.toString().trim());
    }
}`,
      python: `import sys

def solve():
    data = sys.stdin.read().split()
    if not data:
        return
    r = int(data[0])
    c = int(data[1])
    
    mat = []
    idx = 2
    for _ in range(r):
        mat.append([int(x) for x in data[idx:idx+c]])
        idx += c

    top, bottom, left, right = 0, r - 1, 0, c - 1
    res = []

    while top <= bottom and left <= right:
        for j in range(left, right + 1):
            res.append(str(mat[top][j]))
        top += 1

        for i in range(top, bottom + 1):
            res.append(str(mat[i][right]))
        right -= 1

        if top <= bottom:
            for j in range(right, left - 1, -1):
                res.append(str(mat[bottom][j]))
            bottom -= 1

        if left <= right:
            for i in range(bottom, top - 1, -1):
                res.append(str(mat[i][left]))
            left += 1

    print(" ".join(res))

if __name__ == '__main__':
    solve()
`
    },
    publicTestCases: [
      { id: 'tc-004-1', name: 'Sample 3x3', input: '3 3\n1 2 3\n4 5 6\n7 8 9', expectedOutput: '1 2 3 6 9 8 7 4 5' },
      { id: 'tc-004-2', name: 'Sample 2x4', input: '2 4\n1 2 3 4\n5 6 7 8', expectedOutput: '1 2 3 4 8 7 6 5' },
      { id: 'tc-004-3', name: 'Single 1x1', input: '1 1\n42', expectedOutput: '42' }
    ],
    hiddenTestCases: [
      { id: 'tc-004-h1', input: '1 4\n10 20 30 40', expectedOutput: '10 20 30 40' },
      { id: 'tc-004-h2', input: '4 1\n5\n10\n15\n20', expectedOutput: '5 10 15 20' }
    ],
    publicationStatus: 'PUBLISHED',
    createdAt: '2024-02-10T00:00:00Z',
    updatedAt: '2024-02-10T00:00:00Z',
    version: 1
  },
  {
    id: 'tcs-cp-005',
    slug: 'prime-factors-frequency-product',
    title: 'Count of Distinct Prime Factors',
    problemStatement: `Given a positive integer $M$, count and print the total number of distinct prime factors of $M$.

For example, $M = 60 = 2^2 \\times 3^1 \\times 5^1$. The distinct prime factors are 2, 3, and 5, so the count is 3. If $M = 1$, the count is 0 because 1 has no prime factors.`,
    inputFormat: 'A single positive integer M.',
    outputFormat: 'Print the count of distinct prime factors of M.',
    constraints: [
      '1 <= M <= 10^12',
      'Time Limit: 1.0s',
      'Memory Limit: 128 MB'
    ],
    examples: [
      {
        input: '60',
        output: '3',
        explanation: 'Distinct prime factors are 2, 3, 5.'
      },
      {
        input: '17',
        output: '1',
        explanation: '17 is prime, so it has 1 distinct prime factor.'
      }
    ],
    difficulty: 'EASY',
    topics: ['Math', 'Number Theory', 'Prime Numbers'],
    sections: ['PROGRAMMING', 'NUMERICAL'],
    targetTracks: ['NINJA', 'DIGITAL'],
    estimatedMinutes: 15,
    problemFormat: 'STANDARD_IO',
    sourceType: 'ORIGINAL_PRACTICE',
    sourceReferences: {
      title: 'PrepPath Original Placement Question Bank: Number Theory Section',
      notes: 'Author-validated mathematical problem evaluating square root trial division optimization.'
    },
    hints: [
      'Hint 1: A naive factorization testing up to $M$ will result in Time Limit Exceeded when $M = 10^{12}$.',
      'Hint 2: Trial division only needs to check factors up to $\\sqrt{M}$. Why? If $M$ had two factors strictly greater than $\\sqrt{M}$, their product would exceed $M$.',
      'Hint 3: Special case for 2: check if $M$ is even, increment count once, and divide out all factors of 2. Then iterate odd integers from 3 up to $\\sqrt{M}$.',
      'Hint 4: After checking up to $\\sqrt{M}$, if the remaining $M > 1$, then that remaining value is itself a prime factor! Remember to increment your distinct counter.'
    ],
    explanation: `Trial division up to $\\sqrt{M}$:
1. If $M \\% 2 == 0$, distinct primes += 1. Divide $M$ by 2 until odd.
2. For $d = 3, 5, 7, \\dots$ while $d \\times d \\le M$:
   If $M \\% d == 0$:
     distinct primes += 1
     divide $M$ by $d$ while $M \\% d == 0$
3. If $M > 1$ after the loop, the remaining number is a prime. Increment distinct primes by 1.
Complexity: $O(\\sqrt{M})$, executing in under 0.01 seconds for $M = 10^{12}$.`,
    timeComplexity: 'O(sqrt(M))',
    spaceComplexity: 'O(1)',
    starterCodeByLanguage: {
      c: `#include <stdio.h>

int main() {
    long long m;
    if (scanf("%lld", &m) != 1) return 0;

    int count = 0;
    if (m % 2 == 0) {
        count++;
        while (m % 2 == 0) m /= 2;
    }

    for (long long d = 3; d * d <= m; d += 2) {
        if (m % d == 0) {
            count++;
            while (m % d == 0) m /= d;
        }
    }

    if (m > 1) count++;

    printf("%d\\n", count);
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    long long m;
    if (!(cin >> m)) return 0;

    int count = 0;
    if (m % 2 == 0) {
        count++;
        while (m % 2 == 0) m /= 2;
    }

    for (long long d = 3; d * d <= m; d += 2) {
        if (m % d == 0) {
            count++;
            while (m % d == 0) m /= d;
        }
    }

    if (m > 1) count++;

    cout << count << "\\n";
    return 0;
}`,
      java: `import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextLong()) return;
        long m = sc.nextLong();

        int count = 0;
        if (m % 2 == 0) {
            count++;
            while (m % 2 == 0) m /= 2;
        }

        for (long d = 3; d * d <= m; d += 2) {
            if (m % d == 0) {
                count++;
                while (m % d == 0) m /= d;
            }
        }

        if (m > 1) count++;

        System.out.println(count);
    }
}`,
      python: `import sys

def solve():
    line = sys.stdin.read().strip()
    if not line:
        return
    m = int(line)

    count = 0
    if m % 2 == 0:
        count += 1
        while m % 2 == 0:
            m //= 2

    d = 3
    while d * d <= m:
        if m % d == 0:
            count += 1
            while m % d == 0:
                m //= d
        d += 2

    if m > 1:
        count += 1

    print(count)

if __name__ == '__main__':
    solve()
`
    },
    publicTestCases: [
      { id: 'tc-005-1', name: 'Sample 60', input: '60', expectedOutput: '3' },
      { id: 'tc-005-2', name: 'Prime 17', input: '17', expectedOutput: '1' },
      { id: 'tc-005-3', name: 'Value 1', input: '1', expectedOutput: '0' }
    ],
    hiddenTestCases: [
      { id: 'tc-005-h1', input: '1000000000000', expectedOutput: '2' },
      { id: 'tc-005-h2', input: '2310', expectedOutput: '5' }
    ],
    publicationStatus: 'PUBLISHED',
    createdAt: '2024-02-15T00:00:00Z',
    updatedAt: '2024-02-15T00:00:00Z',
    version: 1
  },
  {
    id: 'tcs-cp-006',
    slug: 'coin-change-minimum-denominations',
    title: 'Minimum Coins for Target Change',
    problemStatement: `You are given an integer array $coins$ representing different coin denominations and an integer $amount$ representing a target amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.`,
    inputFormat: `The first line contains two integers: N (number of denominations) and amount.
The second line contains N space-separated integers representing the coin denominations.`,
    outputFormat: 'Print the minimum number of coins needed, or -1 if impossible.',
    constraints: [
      '1 <= N <= 100',
      '1 <= coins[i] <= 10^4',
      '0 <= amount <= 10^4',
      'Time Limit: 1.0s',
      'Memory Limit: 128 MB'
    ],
    examples: [
      {
        input: `3 11
1 2 5`,
        output: '3',
        explanation: '11 = 5 + 5 + 1 (3 coins total).'
      },
      {
        input: `1 3
2`,
        output: '-1',
        explanation: 'Amount 3 cannot be formed with only coins of value 2.'
      },
      {
        input: `1 0
1`,
        output: '0',
        explanation: 'Amount 0 requires 0 coins.'
      }
    ],
    difficulty: 'MEDIUM',
    topics: ['Dynamic Programming', 'Breadth-First Search'],
    sections: ['CODING', 'PROGRAMMING'],
    targetTracks: ['DIGITAL', 'PRIME'],
    estimatedMinutes: 30,
    problemFormat: 'STANDARD_IO',
    sourceType: 'RECURRING_PATTERN',
    sourceReferences: {
      title: 'Unbounded Knapsack & Bottom-Up DP Core Patterns',
      hiringCycle: 'TCS Prime & Digital Technical Coding Evaluation',
      notes: 'Classic Dynamic Programming problem measuring subproblem state formulation.'
    },
    hints: [
      'Hint 1: Greedy approach (picking the largest coin first) fails for arbitrary coin systems (e.g., coins [1, 3, 4] for amount 6: greedy gives 4 + 1 + 1 = 3 coins, but optimal is 3 + 3 = 2 coins).',
      'Hint 2: Formulate dynamic programming state: Let $dp[i]$ be the minimum coins needed to make amount $i$.',
      'Hint 3: Base case: $dp[0] = 0$. Initialize all other $dp[i] = \\infty$.',
      'Hint 4: Transition: For each amount $i$ from 1 to $amount$, for each coin $c$: if $i - c \\ge 0$, then $dp[i] = \\min(dp[i], dp[i - c] + 1)$.'
    ],
    explanation: `Bottom-Up Dynamic Programming:
1. Create an array $dp$ of size $amount + 1$, initialized with $\\infty$ (or $amount + 1$).
2. Set $dp[0] = 0$.
3. For $i$ from 1 to $amount$:
     For each coin in $coins$:
       If $i - coin \\ge 0$:
         $dp[i] = \\min(dp[i], dp[i - coin] + 1)$.
4. Return $dp[amount] > amount ? -1 : dp[amount]$.
Time complexity: $O(N \\times amount)$. Space complexity: $O(amount)$.`,
    timeComplexity: 'O(N * amount)',
    spaceComplexity: 'O(amount)',
    starterCodeByLanguage: {
      c: `#include <stdio.h>

int min(int a, int b) {
    return a < b ? a : b;
}

int dp[10005];

int main() {
    int n, amount;
    if (scanf("%d %d", &n, &amount) != 2) return 0;

    int coins[105];
    for (int i = 0; i < n; i++) {
        scanf("%d", &coins[i]);
    }

    int INF = amount + 1;
    dp[0] = 0;
    for (int i = 1; i <= amount; i++) {
        dp[i] = INF;
        for (int j = 0; j < n; j++) {
            if (i >= coins[j]) {
                dp[i] = min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }

    printf("%d\\n", dp[amount] > amount ? -1 : dp[amount]);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n, amount;
    if (!(cin >> n >> amount)) return 0;

    vector<int> coins(n);
    for (int i = 0; i < n; i++) {
        cin >> coins[i];
    }

    int INF = amount + 1;
    vector<int> dp(amount + 1, INF);
    dp[0] = 0;

    for (int i = 1; i <= amount; i++) {
        for (int c : coins) {
            if (i >= c) {
                dp[i] = min(dp[i], dp[i - c] + 1);
            }
        }
    }

    cout << (dp[amount] > amount ? -1 : dp[amount]) << "\\n";
    return 0;
}`,
      java: `import java.util.Scanner;
import java.util.Arrays;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int n = sc.nextInt();
        int amount = sc.nextInt();

        int[] coins = new int[n];
        for (int i = 0; i < n; i++) {
            coins[i] = sc.nextInt();
        }

        int INF = amount + 1;
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, INF);
        dp[0] = 0;

        for (int i = 1; i <= amount; i++) {
            for (int c : coins) {
                if (i >= c) {
                    dp[i] = Math.min(dp[i], dp[i - c] + 1);
                }
            }
        }

        System.out.println(dp[amount] > amount ? -1 : dp[amount]);
    }
}`,
      python: `import sys

def solve():
    data = sys.stdin.read().split()
    if not data:
        return
    n = int(data[0])
    amount = int(data[1])
    coins = [int(x) for x in data[2:2+n]]

    INF = amount + 1
    dp = [INF] * (amount + 1)
    dp[0] = 0

    for i in range(1, amount + 1):
        for c in coins:
            if i >= c:
                dp[i] = min(dp[i], dp[i - c] + 1)

    print(-1 if dp[amount] > amount else dp[amount])

if __name__ == '__main__':
    solve()
`
    },
    publicTestCases: [
      { id: 'tc-006-1', name: 'Sample 1', input: '3 11\n1 2 5', expectedOutput: '3' },
      { id: 'tc-006-2', name: 'Sample 2', input: '1 3\n2', expectedOutput: '-1' },
      { id: 'tc-006-3', name: 'Zero Amount', input: '1 0\n1', expectedOutput: '0' }
    ],
    hiddenTestCases: [
      { id: 'tc-006-h1', input: '3 6\n1 3 4', expectedOutput: '2' },
      { id: 'tc-006-h2', input: '2 7\n2 4', expectedOutput: '-1' }
    ],
    publicationStatus: 'PUBLISHED',
    createdAt: '2024-02-20T00:00:00Z',
    updatedAt: '2024-02-20T00:00:00Z',
    version: 1
  }
];
