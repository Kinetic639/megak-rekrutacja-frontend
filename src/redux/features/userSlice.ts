import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUsersResponse } from 'types';
import { User } from '../../../../megak-rekrutacja-backend/src/user/user.entity';

export const validateCurrUserAsync = createAsyncThunk(
  'user/importStudentsFromFileAsync',
  async () => {
    const res = await fetch('http://localhost:3001/auth/check-user', {
      credentials: 'include',
    });
    const data = await res.json();
    return data;
  },
);

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
    builder
      .addCase(validateCurrUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(validateCurrUserAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
      })
      .addCase(validateCurrUserAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default userSlice.reducer;
