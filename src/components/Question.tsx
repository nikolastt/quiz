import { selectQuizState } from "@/store/slices/quizSlice";
import React from "react";
import { useSelector } from "react-redux";

function Question() {
  const quizState = useSelector(selectQuizState);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  return (
    <div className="bg-blue-400 w-full p-3 text-center text-white font-bold text-2xl font-serif">
      {currentQuestion.question}
    </div>
  );
}

export default Question;
