import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetHrListResponse, SingleHrElement } from 'types';
import { apiUrl } from '../../config/api';

export const getHrListAsync = createAsyncThunk(
  'hrList/getHrListAsync',
  async () => {
    const resp = await fetch(`http://localhost:3001/admin/list/hr`, {
      credentials: 'include',
    });
    return resp.json();
  },
);

export const createNewHrAsync = createAsyncThunk(
  'hrList/createNewHrAsync',
  async (payload: SingleHrElement, thunkAPI) => {
    const resp = await fetch(`${apiUrl}/admin/create/hr`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      credentials: 'include',
    });
    const data = await resp.json();
    if (data.statusCode === 201) {
      thunkAPI.dispatch(getHrListAsync());
    }
    return data;
  },
);

interface hrListSliceState {
  results: GetHrListResponse;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: hrListSliceState = {
  results: [],
  status: 'idle',
  error: null,
};

export const hrListSlice = createSlice({
  name: 'hrList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHrListAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getHrListAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.results = action.payload;
      })
      .addCase(getHrListAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default hrListSlice.reducer;
