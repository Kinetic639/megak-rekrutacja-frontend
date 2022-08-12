import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUsersResponse } from 'types';

export const importStudentsFromFileAsync = createAsyncThunk(
  'students/importStudentsFromFileAsync',
  async (payload: FormData) => {
    const resp = await fetch(`http://localhost:3001/admin/create/students`, {
      method: 'POST',
      body: payload,
      credentials: 'include',
    });
    const data = await resp.json();
    return data;
  },
);

interface studentImportSliceState {
  results: createUsersResponse;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: studentImportSliceState = {
  results: { studentsIgnored: [], studentsAdded: [], studentsUpdated: [] },
  status: 'idle',
  error: null,
};

export const studentImportSlice = createSlice({
  name: 'studentsImport',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(importStudentsFromFileAsync.pending, (state) => {
        state.status = 'loading';
        state.results = initialState.results;
      })
      .addCase(importStudentsFromFileAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.results = action.payload;
      })
      .addCase(importStudentsFromFileAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default studentImportSlice.reducer;
