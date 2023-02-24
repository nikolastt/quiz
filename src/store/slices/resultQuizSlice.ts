import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IInitialState {
  result: Array<number>;
}

const initialState: IInitialState = {
  result: [],
};

export const resultQuizSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    pushResult: (state, action: PayloadAction<number>) => {
      state.result.push(action.payload);
    },
  },
});

export const { pushResult } = resultQuizSlice.actions;

export default resultQuizSlice.reducer;
