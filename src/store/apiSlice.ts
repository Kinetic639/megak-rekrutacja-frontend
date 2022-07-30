import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `https://localhost:3001/` }),
  reducerPath: 'apiSlice',
  endpoints: (build) => ({
    getStudents: build.query<any, string>({
      query: (queryString: string) => `student/students${queryString}`,
    }),
  }),
})

export const { useGetStudentsQuery } = apiSlice;