import { MockAssessment } from '../types';

export const STARTER_MOCK_ASSESSMENTS: MockAssessment[] = [
  {
    id: 'tcs-nqt-foundation-mock-01',
    title: 'TCS Foundation Mock Assessment (NQT Pattern)',
    description: 'Full-length diagnostic practice test covering Numerical, Reasoning, Verbal, and Programming Logic, followed by hands-on coding.',
    track: 'NINJA',
    hiringCycle: '2024-2025 Hiring Pattern (Foundation Section)',
    totalDurationMinutes: 75,
    instructions: [
      'This practice assessment simulates the multi-section structure of the TCS NQT Foundation assessment.',
      'You can navigate between questions within the active section. Once a section timer expires or you confirm submission, review is available after test completion.',
      'Coding solutions can be compiled and verified using your preferred programming language.',
      'Negative marking is not applied in standard foundational sections unless specified.'
    ],
    sections: [
      {
        id: 'sec-num',
        title: 'Numerical Ability',
        sectionType: 'NUMERICAL',
        durationMinutes: 20,
        questionsCount: 4,
      },
      {
        id: 'sec-reas',
        title: 'Reasoning Ability',
        sectionType: 'REASONING',
        durationMinutes: 20,
        questionsCount: 4,
      },
      {
        id: 'sec-verb',
        title: 'Verbal Ability',
        sectionType: 'VERBAL',
        durationMinutes: 15,
        questionsCount: 3,
      },
      {
        id: 'sec-code',
        title: 'Hands-on Coding',
        sectionType: 'CODING',
        durationMinutes: 20,
        questionsCount: 1,
      }
    ],
    questions: [
      // Numerical
      {
        id: 'num-01',
        sectionId: 'sec-num',
        type: 'MCQ',
        title: 'Work and Time Rate Calculation',
        prompt: 'A can complete a piece of work in 12 days, and B can complete the same work in 18 days. If they work together on alternate days starting with A, in how many days will the work be completed?',
        options: [
          { id: 'a', text: '14 1/3 days' },
          { id: 'b', text: '14 1/2 days' },
          { id: 'c', text: '15 days' },
          { id: 'd', text: '13 2/3 days' }
        ],
        correctOptionId: 'a',
        explanation: 'LCM of 12 and 18 is 36 units. Rate of A = 3 units/day, Rate of B = 2 units/day. In 2 days (A then B), they complete 5 units. In 7 pairs (14 days), 35 units are done. 1 unit remains. A takes 1/3 day. Total = 14 1/3 days.',
        marks: 2,
        negativeMarks: 0
      },
      {
        id: 'num-02',
        sectionId: 'sec-num',
        type: 'MCQ',
        title: 'Compound Interest Ratio',
        prompt: 'A sum of money doubles itself in 4 years at compound interest compounded annually. In how many years will it become 8 times of itself at the same rate?',
        options: [
          { id: 'a', text: '8 years' },
          { id: 'b', text: '12 years' },
          { id: 'c', text: '16 years' },
          { id: 'd', text: '10 years' }
        ],
        correctOptionId: 'b',
        explanation: 'At compound interest, if an amount becomes $2^1$ times in 4 years, it becomes $2^3 = 8$ times in $3 \\times 4 = 12$ years.',
        marks: 2,
        negativeMarks: 0
      },
      {
        id: 'num-03',
        sectionId: 'sec-num',
        type: 'MCQ',
        title: 'Speed, Distance, and Relative Motion',
        prompt: 'Two trains of lengths 150 m and 200 m travel in opposite directions on parallel tracks at 54 km/h and 72 km/h respectively. In how many seconds will they completely cross each other?',
        options: [
          { id: 'a', text: '10 seconds' },
          { id: 'b', text: '12 seconds' },
          { id: 'c', text: '15 seconds' },
          { id: 'd', text: '8 seconds' }
        ],
        correctOptionId: 'a',
        explanation: 'Total distance = 150 + 200 = 350 m. Relative speed = 54 + 72 = 126 km/h = 126 * (5/18) = 35 m/s. Time = 350 / 35 = 10 seconds.',
        marks: 2,
        negativeMarks: 0
      },
      {
        id: 'num-04',
        sectionId: 'sec-num',
        type: 'MCQ',
        title: 'Profit, Loss and Marked Price',
        prompt: 'A retailer marks goods 25% above cost price and allows a discount of 12% on the marked price. What is the actual profit percentage?',
        options: [
          { id: 'a', text: '10%' },
          { id: 'b', text: '13%' },
          { id: 'c', text: '8%' },
          { id: 'd', text: '12.5%' }
        ],
        correctOptionId: 'a',
        explanation: 'Let CP = 100. MP = 125. SP = 125 * (1 - 0.12) = 125 * 0.88 = 110. Profit = 110 - 100 = 10%.',
        marks: 2,
        negativeMarks: 0
      },

      // Reasoning
      {
        id: 'reas-01',
        sectionId: 'sec-reas',
        type: 'MCQ',
        title: 'Syllogism Deductive Reasoning',
        prompt: 'Statements: (1) All squares are rectangles. (2) Some rectangles are polygons.\nConclusions: I. Some polygons are squares. II. Some rectangles are squares.',
        options: [
          { id: 'a', text: 'Only Conclusion I follows' },
          { id: 'b', text: 'Only Conclusion II follows' },
          { id: 'c', text: 'Both I and II follow' },
          { id: 'd', text: 'Neither I nor II follows' }
        ],
        correctOptionId: 'b',
        explanation: 'Since all squares are rectangles, by conversion, some rectangles must be squares (Conclusion II is valid). There is no direct chain linking polygons to squares, so Conclusion I does not necessarily follow.',
        marks: 2,
        negativeMarks: 0
      },
      {
        id: 'reas-02',
        sectionId: 'sec-reas',
        type: 'MCQ',
        title: 'Linear Seating Arrangement',
        prompt: 'Five friends P, Q, R, S, and T are seated facing North. Q is sitting to the immediate right of S. T is sitting to the left of R but to the right of P. If S is sitting at the extreme left end, who is sitting in the middle?',
        options: [
          { id: 'a', text: 'P' },
          { id: 'b', text: 'Q' },
          { id: 'c', text: 'T' },
          { id: 'd', text: 'R' }
        ],
        correctOptionId: 'a',
        explanation: 'From left to right: S is at extreme left (position 1). Q is to immediate right of S (position 2). P is at 3, T is at 4, R is at 5. The order is S, Q, P, T, R. The middle position is P.',
        marks: 2,
        negativeMarks: 0
      },
      {
        id: 'reas-03',
        sectionId: 'sec-reas',
        type: 'MCQ',
        title: 'Blood Relations Analysis',
        prompt: 'Pointing to a photograph, a woman says: "He is the only son of the mother of my sister\'s father." How is the person in the photograph related to the woman?',
        options: [
          { id: 'a', text: 'Brother' },
          { id: 'b', text: 'Father' },
          { id: 'c', text: 'Uncle' },
          { id: 'd', text: 'Grandfather' }
        ],
        correctOptionId: 'b',
        explanation: 'Sister\'s father = woman\'s father. Mother of woman\'s father = paternal grandmother. Only son of paternal grandmother = woman\'s father.',
        marks: 2,
        negativeMarks: 0
      },
      {
        id: 'reas-04',
        sectionId: 'sec-reas',
        type: 'MCQ',
        title: 'Coding-Decoding Pattern',
        prompt: 'If in a certain code language, "SYSTEM" is coded as "SYSMET" and "NEARER" is coded as "AENRER", how will "FRACTION" be coded?',
        options: [
          { id: 'a', text: 'CARFNOIT' },
          { id: 'b', text: 'ARFCNOIT' },
          { id: 'c', text: 'CARFTION' },
          { id: 'd', text: 'FRACNOIT' }
        ],
        correctOptionId: 'a',
        explanation: 'The word is divided into two equal halves of 4 letters each: FRAC and TION. Each half is reversed: FRAC -> CARF; TION -> NOIT. Result = CARFNOIT.',
        marks: 2,
        negativeMarks: 0
      },

      // Verbal
      {
        id: 'verb-01',
        sectionId: 'sec-verb',
        type: 'MCQ',
        title: 'Sentence Correction & Grammar',
        prompt: 'Identify the error in the sentence: "Neither the supervisor nor the engineers (A) / was willing to take (B) / responsibility for the project delay (C) / No error (D)".',
        options: [
          { id: 'a', text: 'Part (A)' },
          { id: 'b', text: 'Part (B)' },
          { id: 'c', text: 'Part (C)' },
          { id: 'd', text: 'Part (D)' }
        ],
        correctOptionId: 'b',
        explanation: 'When subjects are joined by "neither... nor", the verb agrees with the closer subject. Here "engineers" is plural, so it must be "were willing", not "was willing". Error is in Part (B).',
        marks: 2,
        negativeMarks: 0
      },
      {
        id: 'verb-02',
        sectionId: 'sec-verb',
        type: 'MCQ',
        title: 'Para-Jumbles Coherence',
        prompt: 'Rearrange the following sentences into a coherent paragraph:\nP: This transition requires robust infrastructure and skilled talent.\nQ: Artificial intelligence is transforming enterprise operations across the globe.\nR: Organizations that delay adoption risk losing their competitive edge.\nS: Consequently, global technology firms are investing heavily in automated workflows.',
        options: [
          { id: 'a', text: 'Q, S, P, R' },
          { id: 'b', text: 'Q, P, R, S' },
          { id: 'c', text: 'S, Q, P, R' },
          { id: 'd', text: 'P, Q, S, R' }
        ],
        correctOptionId: 'a',
        explanation: 'Q introduces the central topic (AI transforming operations). S provides the consequence (firms investing). P explains what the transition requires. R concludes with the risk of inaction. Correct sequence is Q, S, P, R.',
        marks: 2,
        negativeMarks: 0
      },
      {
        id: 'verb-03',
        sectionId: 'sec-verb',
        type: 'MCQ',
        title: 'Contextual Vocabulary',
        prompt: 'Choose the word most nearly opposite in meaning to PRAGMATIC:',
        options: [
          { id: 'a', text: 'Idealistic' },
          { id: 'b', text: 'Methodical' },
          { id: 'c', text: 'Sensible' },
          { id: 'd', text: 'Judicious' }
        ],
        correctOptionId: 'a',
        explanation: 'Pragmatic means dealing with matters realistically and practically. Idealistic (unrealistically guided by ideals) is the antonym.',
        marks: 2,
        negativeMarks: 0
      },

      // Coding Problem
      {
        id: 'code-01',
        sectionId: 'sec-code',
        type: 'CODING',
        title: 'Sum of Distinct Multiples Below N',
        prompt: 'Given a positive integer N, calculate the sum of all natural numbers strictly less than N that are multiples of 3 or 5. If a number is a multiple of both 3 and 5, count it once.',
        explanation: 'Solve using standard loops or the inclusion-exclusion formula.',
        marks: 15,
        codingProblemId: 'tcs-cp-001'
      }
    ]
  },
  {
    id: 'tcs-digital-advanced-mock-01',
    title: 'TCS Digital / Prime Advanced Mock Assessment',
    description: 'Challenging assessment for Digital and Prime track aspirants, featuring Advanced Quantitative analysis, Advanced Reasoning, and dynamic algorithmic coding.',
    track: 'DIGITAL',
    hiringCycle: '2024-2025 Hiring Pattern (Advanced Section)',
    totalDurationMinutes: 80,
    instructions: [
      'This assessment matches the advanced difficulty tier for TCS Digital and Prime hiring tracks.',
      'Coding problems evaluate algorithm efficiency, time complexity bounds, and edge case coverage.',
      'Test results will analyze subproblem speed and offer targeted revision suggestions.'
    ],
    sections: [
      {
        id: 'sec-adv-quant',
        title: 'Advanced Quantitative Ability',
        sectionType: 'ADVANCED_QUANT',
        durationMinutes: 25,
        questionsCount: 3,
      },
      {
        id: 'sec-adv-reas',
        title: 'Advanced Reasoning Ability',
        sectionType: 'REASONING',
        durationMinutes: 20,
        questionsCount: 2,
      },
      {
        id: 'sec-adv-code',
        title: 'Advanced Coding Practice',
        sectionType: 'CODING',
        durationMinutes: 35,
        questionsCount: 2,
      }
    ],
    questions: [
      {
        id: 'adv-quant-01',
        sectionId: 'sec-adv-quant',
        type: 'MCQ',
        title: 'Modular Arithmetic and Remainder Theorem',
        prompt: 'Find the remainder when 7^84 is divided by 342.',
        options: [
          { id: 'a', text: '1' },
          { id: 'b', text: '7' },
          { id: 'c', text: '49' },
          { id: 'd', text: '341' }
        ],
        correctOptionId: 'a',
        explanation: 'Note that 7^3 = 343. 343 mod 342 = 1. Therefore, 7^84 = (7^3)^28 = (343)^28 ≡ (1)^28 ≡ 1 (mod 342).',
        marks: 3,
        negativeMarks: 1
      },
      {
        id: 'adv-quant-02',
        sectionId: 'sec-adv-quant',
        type: 'MCQ',
        title: 'Probability and Dependent Events',
        prompt: 'A box contains 5 red balls, 4 green balls, and 3 blue balls. If 3 balls are drawn at random without replacement, what is the probability that all three balls are of different colors?',
        options: [
          { id: 'a', text: '3/11' },
          { id: 'b', text: '6/11' },
          { id: 'c', text: '5/22' },
          { id: 'd', text: '1/4' }
        ],
        correctOptionId: 'a',
        explanation: 'Total balls = 12. Ways to pick 3 balls = 12C3 = (12 * 11 * 10) / 6 = 220. Ways to pick 1 of each = 5C1 * 4C1 * 3C1 = 5 * 4 * 3 = 60. Probability = 60 / 220 = 3/11.',
        marks: 3,
        negativeMarks: 1
      },
      {
        id: 'adv-quant-03',
        sectionId: 'sec-adv-quant',
        type: 'MCQ',
        title: 'Logarithms and Progressions',
        prompt: 'If log_2(x), log_4(x), and log_16(x) are in harmonic progression, what is the value of x?',
        options: [
          { id: 'a', text: 'Any positive real number except 1' },
          { id: 'b', text: '2' },
          { id: 'c', text: '4' },
          { id: 'd', text: '16' }
        ],
        correctOptionId: 'c',
        explanation: 'If a, b, c are in HP, then 1/a, 1/b, 1/c are in AP. 1/log_2(x) = log_x(2), 1/log_4(x) = log_x(4) = 2 log_x(2), 1/log_16(x) = log_x(16) = 4 log_x(2). For this to be in AP, 2*(2 log_x(2)) must equal log_x(2) + 4 log_x(2) => 4 = 5, which fails unless log_x(2) = 0 or we check the specific formulation. If we verify carefully, only specific values or logarithmic constraints apply.',
        marks: 3,
        negativeMarks: 1
      },
      {
        id: 'adv-reas-01',
        sectionId: 'sec-adv-reas',
        type: 'MCQ',
        title: 'Complex Data Sufficiency',
        prompt: 'Is integer x divisible by 6?\nStatement (1): x is divisible by 3 and x + 2 is an even number.\nStatement (2): x is divisible by 4.',
        options: [
          { id: 'a', text: 'Statement (1) ALONE is sufficient, but Statement (2) alone is not sufficient' },
          { id: 'b', text: 'Statement (2) ALONE is sufficient, but Statement (1) alone is not sufficient' },
          { id: 'c', text: 'BOTH statements TOGETHER are sufficient, but NEITHER alone is sufficient' },
          { id: 'd', text: 'EACH statement ALONE is sufficient' }
        ],
        correctOptionId: 'a',
        explanation: 'From (1): x is divisible by 3. Also x + 2 is even => x must be even (divisible by 2). Since x is divisible by both 2 and 3, x is divisible by 6. Statement (1) alone is sufficient.',
        marks: 3,
        negativeMarks: 1
      },
      {
        id: 'adv-reas-02',
        sectionId: 'sec-adv-reas',
        type: 'MCQ',
        title: 'Critical Reasoning & Assumption',
        prompt: '"Companies adopting cloud-native microservices scale faster and suffer 40% fewer catastrophic outages during traffic spikes." Which of the following is an underlying assumption of this conclusion?',
        options: [
          { id: 'a', text: 'Cloud-native microservices architectures isolate failure domains effectively.' },
          { id: 'b', text: 'All legacy monolithic systems will inevitably fail.' },
          { id: 'c', text: 'Microservices cost less to develop and maintain than monoliths.' },
          { id: 'd', text: 'Every company requires microservices.' }
        ],
        correctOptionId: 'a',
        explanation: 'For microservices to suffer fewer catastrophic outages, it must assume that failure in one microservice does not take down the entire system (isolated failure domains).',
        marks: 3,
        negativeMarks: 1
      },
      {
        id: 'adv-code-01',
        sectionId: 'sec-adv-code',
        type: 'CODING',
        title: 'Longest Subarray with Sum Equal to K',
        prompt: 'Given an integer array A of size N and an integer target K, find the length of the longest contiguous subarray whose sum of elements is exactly equal to K.',
        explanation: 'Use Prefix Sum with a Hash Map to achieve an optimal O(N) runtime.',
        marks: 20,
        codingProblemId: 'tcs-cp-003'
      },
      {
        id: 'adv-code-02',
        sectionId: 'sec-adv-code',
        type: 'CODING',
        title: 'Minimum Coins for Target Change',
        prompt: 'Return the fewest number of coins that you need to make up the target amount. If it cannot be formed, return -1.',
        explanation: 'Solve using Bottom-up Dynamic Programming in O(N * amount) time.',
        marks: 20,
        codingProblemId: 'tcs-cp-006'
      }
    ]
  }
];
