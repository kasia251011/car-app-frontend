import { configureStore } from '@reduxjs/toolkit';
import { compareCarsApi } from './services/carApi';
import currentSessionReducer from './currentSession/currentSession';

export const store = configureStore({
  reducer: {
    [compareCarsApi.reducerPath]: compareCarsApi.reducer,
    currentSession: currentSessionReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(compareCarsApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
