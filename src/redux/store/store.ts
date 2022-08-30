import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import studentsImportReducer from '../features/studentsImportSlice';
import hrListReducer from '../features/hrListSlice';
import userReducer from '../features/userSlice';
import filtersReducer from '../features/filtersSlice';
import { apiSlice } from '../features/apiSlice';

const rootReducer = combineReducers({
  user: userReducer,
  hrList: hrListReducer,
  studentsImport: studentsImportReducer,
  filters: filtersReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
