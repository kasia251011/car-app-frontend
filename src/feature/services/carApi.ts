import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Car, CarId, ParametersWeights } from './types/Car';

export const compareCarsApi = createApi({
  reducerPath: 'compareCarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
  tagTypes: ['priorities'],
  endpoints: (builder) => ({
    getBestCar: builder.mutation<CarId, Car[]>({
      query: (cars) => ({
        url: '/car/compare',
        method: 'POST',
        body: cars
      })
    }),
    getCarsForQuiz: builder.query<Car[], void>({
      query: () => ({
        url: '/quiz'
      })
    }),
    sendChosenCarFromQuiz: builder.mutation<void, CarId>({
      query: (carId) => ({
        url: '/quiz',
        method: 'PATCH',
        body: carId
      })
    }),
    cancelCurrentQuiz: builder.mutation<void, void>({
      query: () => ({
        url: '/quiz',
        method: 'DELETE'
      })
    }),
    getPriorities: builder.query<ParametersWeights, void>({
      query: () => ({
        url: '/priorities'
      }),
      providesTags: ['priorities']
    }),
    sendPriorities: builder.mutation<void, ParametersWeights>({
      query: (ParametersWeight) => ({
        url: 'priorities',
        method: 'POST',
        body: ParametersWeight
      }),
      invalidatesTags: ['priorities']
    })
  })
});

export const {
  useGetBestCarMutation,
  useCancelCurrentQuizMutation,
  useLazyGetCarsForQuizQuery,
  useGetPrioritiesQuery,
  useSendChosenCarFromQuizMutation,
  useSendPrioritiesMutation
} = compareCarsApi;
