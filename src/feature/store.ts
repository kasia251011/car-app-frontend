import { configureStore } from '@reduxjs/toolkit';
import { compareCarsApi } from './services/carParametersApi';

export const store = configureStore({
  reducer: {
    [compareCarsApi.reducerPath]: compareCarsApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(compareCarsApi.middleware)
});
