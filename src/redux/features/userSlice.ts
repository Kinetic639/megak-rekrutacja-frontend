import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUsersResponse } from 'types';
import { User } from '../../../../megak-rekrutacja-backend/src/user/user.entity';

// export const importStudentsFromFileAsync = createAsyncThunk(
//   'user/importStudentsFromFileAsync',
//   async (payload: FormData) => {
//     const resp = await fetch(`http://localhost:3001/admin/create/students`, {
//       method: 'POST',
//       body: payload,
//     });
//     const data = await resp.json();
//     return data;
//   },
// );

interface studentImportSliceState {
  user: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: studentImportSliceState = {
  user: null,
  status: 'idle',
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder;
    // .addCase(importStudentsFromFileAsync.pending, (state) => {
    //   state.status = 'loading';
    //   state.results = initialState.results;
    // })
    // .addCase(importStudentsFromFileAsync.fulfilled, (state, action) => {
    //   state.status = 'succeeded';
    //   state.results = action.payload;
    // })
    // .addCase(importStudentsFromFileAsync.rejected, (state) => {
    //   state.status = 'failed';
    // });
  },
});

export default userSlice.reducer;
