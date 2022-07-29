import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { activeFiltersI } from '../features/filters/FiltersPanel';
import type { RootState } from './store';


const initialState: filtersType<activeFiltersI> = {
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
};

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
      if (state[action.payload.filter].includes(action.payload.value)) return;
      const newValue = Array.isArray(state[action.payload.filter]) ? [...state[action.payload.filter] as string[], action.payload.value] : action.payload.value;
      state[action.payload.filter] = newValue;
    },
  },
});

export const selectFilters = (state: RootState) => state.filters;


export const { setFilters } = filtersSlice.actions;
export default filtersSlice.reducer;