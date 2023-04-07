import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CarsInfo } from './types/CarParameters';

export const compareCarsApi = createApi({
  reducerPath: 'compareCarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/car/' }),
  endpoints: (builder) => ({
    getBestCar: builder.mutation<number, CarsInfo>({
      query: (carsInfo) => ({
        url: '/compare',
        method: 'POST',
        body: carsInfo
      })
    })
  })
});

export const { useGetBestCarMutation } = compareCarsApi;
