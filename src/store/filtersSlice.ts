import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { activeFiltersI } from '../features/filters/FiltersPanel';
import type { RootState } from './store';


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
  }

};

export interface filtersStateI {
  queryString: string,
  filters: filtersType<activeFiltersI>
}

export type filterType<Type extends activeFiltersI> = keyof Type;

export type setFiltersType<Type extends activeFiltersI> = {
  filter: filterType<Type>;
  value: string,
}

type filtersType<Type extends activeFiltersI> = {
  [prop in keyof Type]: string | string[];
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<setFiltersType<activeFiltersI>>) => {
      if (state.filters[action.payload.filter].includes(action.payload.value)) return;
      const newValue = Array.isArray(state.filters[action.payload.filter]) ? [...state.filters[action.payload.filter] as string[], action.payload.value] : action.payload.value;
      state.filters[action.payload.filter] = newValue;
    },
    setQuery: (state) => {
      let query = '?';
      for (const param in state.filters) {
        if (state.filters[param] && state.filters[param].length) {
          query += `${encodeURIComponent(param)}=${encodeURIComponent(`${state.filters[param]}`)}&`;
        }
      }
      state.queryString = query;
    }
  },
});

export const selectFilters = (state: RootState) => state.filters;


export const { setFilters, setQuery } = filtersSlice.actions;
export default filtersSlice.reducer;