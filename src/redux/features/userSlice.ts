import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from '../../../../megak-rekrutacja-backend/src/user/user.entity';
import { apiUrl } from '../../config/api';
import { updateStudent } from 'types';

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

export const updateStudentAsync = createAsyncThunk(
  'updateStudent/updateStudentAsync',
  async (payload: updateStudent, thunkAPI) => {
    const resp = await fetch(`${apiUrl}/student/update`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      credentials: 'include',
    });
    const data = await resp.json();
    if (data.statusCode === 201) {
      // thunkAPI.dispatch(getHrListAsync());
      console.log(data.statusCode);
    }
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
