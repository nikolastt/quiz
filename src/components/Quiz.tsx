import {
  nextQuestion,
  prevQuestion,
  selectQuizState,
} from "@/store/slices/quizSlice";
import { RootState } from "@/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Answer from "./Answer";
import Question from "./Question";

function Quiz() {
  const quizState = useSelector(selectQuizState);
  const dispatch = useDispatch();

  const question = useSelector(
    (state: RootState) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  return (
    <div className="flex flex-col items-center w-full space-y-3">
      <p className="text-center ">
        Question {quizState.currentQuestionIndex + 1} /{" "}
        {quizState.questions.length}
      </p>

      <Question />

      <ul key={question.id} className="grid gap-3 w-full px-3">
        {question.options.map((answer, i) => (
          <Answer text={answer} index={i} key={i} />
        ))}
      </ul>
      <div className="flex justify-between w-full ">
        <button
          onClick={() => dispatch(prevQuestion())}
          className="bg-blue-600 text-white uppercase px-4 py-1 rounded-md"
        >
          Prev Question
        </button>

        <button
          onClick={() => dispatch(nextQuestion())}
          className="bg-blue-600 text-white uppercase px-4 py-1 rounded-md"
        >
          Next Question
        </button>
      </div>
    </div>
  );
}

export default Quiz;
