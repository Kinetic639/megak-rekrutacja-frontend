import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { activeFiltersI } from '../../components/filtersPanel/FiltersPanel';
import type { RootState } from '../store/store';

const initialState: filtersStateI = {
  queryString: '',
  filters: {
    courseCompletion: [],
    courseEngagement: [],
    projectDegree: [],
    teamProjectDegree: [],
    expectedTypeWork: [],
    expectedContractType: [],
    expectedSalaryFrom: '',
    expectedSalaryTo: '',
    canTakeApprenticeship: '',
    monthsOfCommercialExp: '',
  },
};

export interface filtersStateI {
  queryString: string;
  filters: filtersType<activeFiltersI>;
}

export type filterType<Type extends activeFiltersI> = keyof Type;

export type setFiltersType<Type extends activeFiltersI> = {
  filter: filterType<Type>;
  value: string;
};

type filtersType<Type extends activeFiltersI> = {
  [prop in keyof Type]: string | string[];
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (
      state,
      action: PayloadAction<setFiltersType<activeFiltersI>>,
    ) => {
      const currValues = state.filters[action.payload.filter];
      let newValue: string | string[];
      if (currValues.includes(action.payload.value)) {
        newValue = Array.isArray(currValues)
          ? currValues.filter((item) => item != action.payload.value)
          : '';
      } else {
        newValue = Array.isArray(state.filters[action.payload.filter])
          ? [
            ...(state.filters[action.payload.filter] as string[]),
            action.payload.value,
          ]
          : action.payload.value;
      }

      state.filters[action.payload.filter] = newValue;
    },
    setQuery: (state) => {
      let query = '?';
      for (const param in state.filters) {
        if (state.filters[param] && state.filters[param].length) {
          query += `${encodeURIComponent(param)}=${encodeURIComponent(
            `${state.filters[param]}`,
          )}&`;
        }
      }
      state.queryString = query;
    },
    clearAllFilters: () => initialState,
  },
});

export const selectFilters = (state: RootState) => state.filters.filters;
export const selectQueryString = (state: RootState) =>
  state.filters.queryString;

export const { setFilters, setQuery, clearAllFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
