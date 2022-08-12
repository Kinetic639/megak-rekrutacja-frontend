import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { StudentData } from '../../components/studentCV/StudentCV';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3001/`, mode: "cors" }),
  reducerPath: 'apiSlice',
  endpoints: (build) => ({
    getStudents: build.query<any, string>({
      query: (queryString: string) => `student/students${queryString}`,
    }),
    getStudent: build.query<StudentData, string>({
      query: (id: string) => `user/student/${id}`,
    }),
  }),
});

export const { useGetStudentsQuery, useGetStudentQuery } = apiSlice;

