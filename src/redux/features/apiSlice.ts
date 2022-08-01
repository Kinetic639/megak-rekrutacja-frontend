import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createUsersResponse } from 'types';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3001`,
  }),
  reducerPath: 'apiSlice',
  endpoints: (build) => ({
    // createStudents: build.query<createUsersResponse, FormData>({
    //   query: (payload: FormData) => ({
    //     url: '/user/create/students',
    //     method: 'POST',
    //     body: payload,
    //   }),
    // }),
  }),
});

export const {} = apiSlice;
