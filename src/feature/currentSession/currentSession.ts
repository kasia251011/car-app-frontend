import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrentSessionState {
  comparisonResultCarId: number | null;
  quizSelectedCarId: number | null;
  isQuizFinished: boolean;
}

const initialState: CurrentSessionState = {
  comparisonResultCarId: null,
  quizSelectedCarId: null,
  isQuizFinished: false
};

const currentSessionSlice = createSlice({
  name: 'currentSession',
  initialState,
  reducers: {
    setComparisonResultCarId(state, action: PayloadAction<number | null>) {
      state.comparisonResultCarId = action.payload;
    },
    setQuizSelectedCarId(state, action: PayloadAction<number | null>) {
      state.quizSelectedCarId = action.payload;
    },
    setIsQuizFinished(state, action: PayloadAction<boolean>) {
      state.isQuizFinished = action.payload;
    }
  }
});

export const { setComparisonResultCarId, setQuizSelectedCarId, setIsQuizFinished } =
  currentSessionSlice.actions;
export default currentSessionSlice.reducer;
