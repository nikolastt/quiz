import { shuffleAnswers } from "@/helpers/shuffleAnswers";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const questions = [
  {
    id: 1,
    question: "Javascript is an _______ language",
    options: ["Object-Oriented", "Object-Based", "Procedural"],
  },
  {
    id: 2,
    question:
      "Following methods can be used to display data in some form using Javascript",
    options: ["document.write()", "console.log()", "window.alert()"],
  },
  {
    id: 3,
    question:
      "When an operator value is NULL, the typeof returned by the unary operator is:",
    options: ["Boolean", "Undefined", "Object"],
  },
  {
    id: 4,
    question: "What does the toString() method return?",
    options: ["Return Object", "Return String", "Return Integer"],
  },
  {
    id: 5,
    question:
      "Which function is used to serialize an object into a JSON string?",
    options: ["stringify()", "parse()", "convert()"],
  },
];

const initialState = {
  questions,
  currentQuestionIndex: 0,
  showResults: false,
  correctAnswerCount: 0,
  answers: questions[0],
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
        : state.currentQuestionIndex + 1;
      const answers = state.questions[currentQuestionIndex];

      return {
        ...state,
        currentQuestionIndex,
        showResults,
        answers,
      };
    },

    prevQuestion: (state) => {
      const currentQuestionIndex =
        state.currentQuestionIndex === 0
          ? state.currentQuestionIndex
          : state.currentQuestionIndex - 1;

      const answers = state.questions[currentQuestionIndex];

      return {
        ...state,
        currentQuestionIndex,
        answers,
      };
    },
  },
});

export const { nextQuestion, prevQuestion } = quizSlice.actions;

export const selectQuizState = (state: RootState) => state.quiz;

export default quizSlice.reducer;
