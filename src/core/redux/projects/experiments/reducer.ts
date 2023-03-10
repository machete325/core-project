import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IExperimentData } from '../../../../types/project/experiments';
import { IRecently } from '../../../../types/project/project';

export type ExperimentsState = {
  loading: boolean;
  hasErrors: boolean;
  fetching: boolean;
  currentPage: number;
  totalCount: number | undefined;
  data: IExperimentData;
};
//
export const initialState: ExperimentsState = {
  loading: false,
  hasErrors: false,
  fetching: false,
  currentPage: 0,
  totalCount: undefined,
  data: {},
};
// A slice
export const experimentSlice = createSlice({
  name: 'projectExperiments',
  initialState,
  reducers: {
    setExperiments: (state, action: PayloadAction<any>) => {
      const { data, recentlyItems } = action.payload;
      Object.keys(data).forEach((key: string) => {
        const recently = recentlyItems
          .filter((item: IRecently) => item.category === 'experiments')
          .find((item: IRecently) => item.id === key);
        data[key].checked = recently?.check || false;
      });
      state.data = { ...state.data, ...action.payload.data };
    },
    startLoading: (state) => {
      state.loading = true;
    },
    finishLoading: (state) => {
      state.loading = false;
    },
    setTotalCount: (state, action: PayloadAction<number>) => {
      state.totalCount = action.payload;
    },
    setCheckAllExperiments: (state, action: PayloadAction<boolean>) => {
      Object.keys(state.data).forEach((key: string) => {
        state.data[key].checked = action.payload;
      });
    },
    setCheckExperiment: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.data[id].checked = !state.data[id].checked;
    },
    setFetching: (state, action: PayloadAction<boolean>) => {
      state.fetching = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setErrors: (state, action: PayloadAction<boolean>) => {
      state.hasErrors = action.payload;
    },
    clearData: () => initialState,
  },
});

const projectExperimentReducer = experimentSlice.reducer;
export default projectExperimentReducer;
