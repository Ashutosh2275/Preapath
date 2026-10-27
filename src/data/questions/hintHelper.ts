import { HintStage } from '../../types';

export interface HintStageInput {
  goal: string;
  result: string;
  constraints: string;
  example: string;
  observation: string;
  bruteForce: string;
  limitation: string;
  pattern: string;
  dataStructure: string;
  outline: string;
  pseudocode: string;
  solution: string;
}

export function build12StageHints(input: HintStageInput): HintStage[] {
  return [
    { stage: 1, title: 'Understand the Goal', content: input.goal },
    { stage: 2, title: 'Identify the Required Result', content: input.result },
    { stage: 3, title: 'Examine the Constraints', content: input.constraints },
    { stage: 4, title: 'Walk Through a Small Example', content: input.example },
    { stage: 5, title: 'Key Mathematical/Algorithmic Observation', content: input.observation },
    { stage: 6, title: 'Straightforward Approach', content: input.bruteForce },
    { stage: 7, title: 'Performance & Correctness Limitations', content: input.limitation },
    { stage: 8, title: 'Recognize the Algorithmic Pattern', content: input.pattern },
    { stage: 9, title: 'Choose the Optimal Data Structure', content: input.dataStructure },
    { stage: 10, title: 'Step-by-Step Algorithm Outline', content: input.outline },
    { stage: 11, title: 'Pseudocode & Critical Edge Cases', content: input.pseudocode },
    { stage: 12, title: 'Complete Validated Reference Solution', content: input.solution },
  ];
}
