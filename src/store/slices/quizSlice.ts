import { shuffleAnswers } from "@/helpers/shuffleAnswers";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const questions = [
  {
    question: "Para que serve o CSS",
    incorrectAnswers: ["Javascript", "montar tags"],
    correctAnswer: "Estilizar Css",
  },
  {
    question: "Para que serve o javascript",
    incorrectAnswers: ["Estilizar Css", "montar tags"],
    correctAnswer: "Javascript",
  },
  {
    question: "Para que serve o javascript",
    incorrectAnswers: ["Estilizar Css", "montar tags"],
    correctAnswer: "Javascript",
  },
  {
    question: "Para que serve o javascript",
    incorrectAnswers: ["Estilizar Css", "montar tags"],
    correctAnswer: "Javascript",
  },
];

const initialState = {
  questions,
  currentQuestionIndex: 0,
  showResults: false,
  correctAnswerCount: 0,
  answers: shuffleAnswers(questions[0]),
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    nextQuestion: (state) => {
      const showResults =
        state.currentQuestionIndex === state.questions.length - 1;
      const currentQuestionIndex = showResults
        ? state.questions.length
        : state.questions.length + 1;
      return {
        ...state,
        currentQuestionIndex,
        showResults,
      };
    },
  },
});

export const { nextQuestion } = quizSlice.actions;

export const selectQuizState = (state: RootState) => state.quiz;

export default quizSlice.reducer;
