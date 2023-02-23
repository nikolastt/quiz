import React from "react";

interface IAnswer {
  text: string;
}

function Answer({ text }: IAnswer) {
  return (
    <button className="bg-blue-400 rounded-md px-6 text-white">{text}</button>
  );
}

export default Answer;
