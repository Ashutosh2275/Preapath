import { Question, SectionType, TargetTrack, DifficultyLevel } from '../../types';
import { CODING_QUESTIONS_PART1 } from './codingDataPart1';
import { CODING_QUESTIONS_PART2 } from './codingDataPart2';
import { CODING_QUESTIONS_PART3 } from './codingDataPart3';
import { CODING_QUESTIONS_PART4 } from './codingDataPart4';
import { NUMERICAL_QUESTIONS } from './numericalQuestions';
import { REASONING_QUESTIONS } from './reasoningQuestions';
import { VERBAL_QUESTIONS } from './verbalQuestions';
import { PROGRAMMING_QUESTIONS } from './programmingQuestions';
import { ADVANCED_QUANT_QUESTIONS } from './advancedQuantQuestions';
import { MCQ_ANSWER_KEYS } from './mcqAnswerKeys';

export const ALL_QUESTIONS: Question[] = [
  ...CODING_QUESTIONS_PART1,
  ...CODING_QUESTIONS_PART2,
  ...CODING_QUESTIONS_PART3,
  ...CODING_QUESTIONS_PART4,
  ...NUMERICAL_QUESTIONS,
  ...REASONING_QUESTIONS,
  ...VERBAL_QUESTIONS,
  ...PROGRAMMING_QUESTIONS,
  ...ADVANCED_QUANT_QUESTIONS,
];

// Helper functions for question discovery
export function getQuestionById(id: string): Question | undefined {
  return ALL_QUESTIONS.find((q) => q.id === id);
}

export function getQuestionByCatalogNumber(num: number): Question | undefined {
  return ALL_QUESTIONS.find((q) => q.catalogNumber === num);
}

export function getQuestionBySlug(slug: string): Question | undefined {
  return ALL_QUESTIONS.find(
    (q) => q.slug === slug || q.id === slug || (q.catalogNumber !== undefined && String(q.catalogNumber) === slug)
  );
}

export function getQuestionsBySection(section: SectionType): Question[] {
  return ALL_QUESTIONS.filter((q) => q.sections.includes(section));
}

export function getQuestionsByTrack(track: TargetTrack): Question[] {
  return ALL_QUESTIONS.filter((q) => q.targetTracks.includes(track));
}

export function getQuestionsByDifficulty(diff: DifficultyLevel): Question[] {
  return ALL_QUESTIONS.filter((q) => q.difficulty === diff);
}

export {
  CODING_QUESTIONS_PART1,
  CODING_QUESTIONS_PART2,
  CODING_QUESTIONS_PART3,
  CODING_QUESTIONS_PART4,
  NUMERICAL_QUESTIONS,
  REASONING_QUESTIONS,
  VERBAL_QUESTIONS,
  PROGRAMMING_QUESTIONS,
  ADVANCED_QUANT_QUESTIONS,
  MCQ_ANSWER_KEYS,
};
