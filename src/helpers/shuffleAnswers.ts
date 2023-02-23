import { Answer } from "@/types/types";

export const shuffleAnswers = (question: Answer) => {
  const unsuffledAnswer = [
    question.correctAnswer,
    ...question.incorrectAnswers,
  ];

  return unsuffledAnswer
    .map((answer) => ({ sort: Math.random(), value: answer }))
    .sort((a, b) => a.sort - b.sort)
    .map((obj) => obj.value);
};
