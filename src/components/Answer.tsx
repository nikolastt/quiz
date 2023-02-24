import { pushResult } from "@/store/slices/resultQuizSlice";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface IAnswer {
  text: string;
  index: number;
}

const push = (dispatch: Dispatch<AnyAction>, index: number) => {
  dispatch(pushResult(index));
};

function Answer({ text, index }: IAnswer) {
  const [answer, setAnswer] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    setAnswer(text);
  }, [text]);

  return (
    <li>
      <input
        type="radio"
        onClick={() => push(dispatch, index)}
        id={`option-${index}`}
        className=" border border-blue-400 rounded-md px-6 bg-gray-100 "
        name="options"
      />
      <label htmlFor={`option-${index}`}>{answer}</label>

      {/* <input
        type="radio"
        value="Casa"
        name="options"
        id={`q${index}-option`}
        // onChange={() => onSelect(i)}
      />

      <label className="text-primary" htmlFor={`q${index}-option`}>
        {text}
      </label> */}
    </li>
  );
}

export default Answer;
