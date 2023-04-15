import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrentSessionState {
  bestCarId?: number | null;
}

const initialState: CurrentSessionState = {};

const currentSessionSlice = createSlice({
  name: 'currentSession',
  initialState,
  reducers: {
    setBestCarId(state, action: PayloadAction<number | null>) {
      state.bestCarId = action.payload;
    }
  }
});

export const { setBestCarId } = currentSessionSlice.actions;
export default currentSessionSlice.reducer;
