import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Grade {
  1: boolean;
  2: boolean;
  3: boolean;
  4: boolean;
  5: boolean;
}

interface filtersInt {
  courseCompletion: Grade;
  courseEngagement: Grade;
  projectDegree: Grade;
  teamProjectDegree: Grade;
  expectedTypeWork: {
    REMOTE: boolean;
    OFFICE: boolean;
    MOVE: boolean;
    HYBRID: boolean;
    DEFAULT: boolean;
  };
  expectedContractType: {
    UOP: boolean;
    B2B: boolean;
    UZ: boolean;
    UOD: boolean;
    DEFAULT: boolean;
  };
  expectedSalary: {
    from: number;
    to: number;
  };
  canTakeApprenticeship: {
    value: boolean | null;
  };
  monthsOfCommercialExp: {
    experienceValue: number | null;
  };
}

interface filtersSet {
  queryString: string;
  filters: filtersInt;
}

interface filtersSliceState {
  filtersSet: filtersSet;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: filtersSliceState = {
  filtersSet: {
    queryString: '',
    filters: {
      courseCompletion: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
      },
      courseEngagement: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
      },
      projectDegree: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
      },
      teamProjectDegree: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
      },
      expectedTypeWork: {
        REMOTE: false,
        OFFICE: false,
        MOVE: false,
        HYBRID: false,
        DEFAULT: false,
      },
      expectedContractType: {
        UOP: false,
        B2B: false,
        UZ: false,
        UOD: false,
        DEFAULT: false,
      },
      expectedSalary: {
        from: 0,
        to: 0,
      },
      canTakeApprenticeship: {
        value: null,
      },
      monthsOfCommercialExp: {
        experienceValue: null,
      },
    },
  },
  status: 'idle',
  error: null,
};

const createQueryString = (form: filtersInt) => {
  const QuerryArr: string[] = [];

  for (const [formSection, value] of Object.entries(form)) {
    if (
      formSection === 'courseCompletion' ||
      formSection === 'courseEngagement' ||
      formSection === 'projectDegree' ||
      formSection === 'teamProjectDegree'
    ) {
      // console.log(formSection, Object.entries(form[formSection]));
      const results = Object.entries(form[formSection]).filter(
        (el) => el[1] === true,
      );
      if (results.length > 0) {
        QuerryArr.push(
          `${formSection}=${results.map((el) => el[0]).join(',')}`,
          // %2C
        );
      }
    }

    if (
      formSection === 'expectedTypeWork' ||
      formSection === 'expectedContractType'
    ) {
      for (const [formSectionEl, value] of Object.entries(form[formSection])) {
        if (value) {
          QuerryArr.push(`${formSection}=${formSectionEl}`);
        }
      }
    }

    if (formSection === 'expectedSalary') {
      if (form.expectedSalary.to > 0) {
        QuerryArr.push(`${formSection}=${form.expectedSalary.to}`);
      }
    }

    if (formSection === 'canTakeApprenticeship') {
      if (form.canTakeApprenticeship.value) {
        QuerryArr.push(`${formSection}=${form.canTakeApprenticeship.value}`);
      }
    }

    if (formSection === 'monthsOfCommercialExp') {
      if (form.monthsOfCommercialExp.experienceValue) {
        QuerryArr.push(
          `${formSection}=${form.monthsOfCommercialExp.experienceValue}`,
        );
      }
    }
  }
  return QuerryArr.join('&');
};
export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    clearFilters: () => initialState,
    setFilters: (state, action) => {
      state.filtersSet.filters = action.payload;
      state.filtersSet.queryString = createQueryString(action.payload);
    },
  },
});

export const { setFilters, clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
