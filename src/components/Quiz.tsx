import { nextQuestion, selectQuizState } from "@/store/slices/quizSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Answer from "./Answer";
import Question from "./Question";

function Quiz() {
  const quizState = useSelector(selectQuizState);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center w-full space-y-3">
      <p className="text-center ">
        Question {quizState.currentQuestionIndex + 1} /{" "}
        {quizState.questions.length}
      </p>

      <Question />

      <div className="grid grid-cols-3 gap-3">
        {quizState.answers.map((answer, i) => (
          <Answer text={answer} key={i} />
        ))}
      </div>

      <button
        onClick={() => dispatch(nextQuestion())}
        className="bg-blue-600 text-white uppercase px-4 py-1 rounded-md"
      >
        Next Question
      </button>
    </div>
  );
}

export default Quiz;
