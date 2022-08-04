import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import filtersReducer from '../features/filtersSlice';
import studentsImportReducer from '../features/studentsImportSlice';
import { apiSlice } from '../features/apiSlice';

const rootReducer = combineReducers({
  filters: filtersReducer,
  studentsImport: studentsImportReducer,
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