import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAnimalResponse, IAnimalsResponse } from '../utils/interfaces';

export const animalApi = createApi({
  reducerPath: 'animalApi',
  tagTypes: ['Animals'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://stapi.co/api/v1/rest/animal' }),
  endpoints: (builder) => ({
    getAnimalByUID: builder.mutation<IAnimalResponse, string>({
      query: (UID) => `?uid=${UID}`,
      invalidatesTags: [{ type: 'Animals', id: 'UID' }],
    }),
    getAnimals: builder.query<
      IAnimalsResponse,
      { pageNumber: number; pageSize: number; searchValue: string }
    >({
      query: ({ pageNumber, pageSize, searchValue }) => ({
        url: `search?pageNumber=${pageNumber}&pageSize=${pageSize}&name=${searchValue}`,
        method: 'POST',
      }),
      providesTags: [{ type: 'Animals', id: 'LIST' }],
    }),
  }),
});

export const { useGetAnimalByUIDMutation, useGetAnimalsQuery } = animalApi;
