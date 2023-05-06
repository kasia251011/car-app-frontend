import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrentSessionState {
  comparisonResultCarId: number | null;
  quizSelectedCarId: number | null;
}

const initialState: CurrentSessionState = {
  comparisonResultCarId: null,
  quizSelectedCarId: null
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
    }
  }
});

export const { setComparisonResultCarId, setQuizSelectedCarId } = currentSessionSlice.actions;
export default currentSessionSlice.reducer;
