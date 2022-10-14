import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IExperimentData } from './types';

export type ExperimentsState = {
  loading: boolean;
  hasErrors: boolean;
  data: IExperimentData;
};
//
export const initialState: ExperimentsState = {
  loading: false,
  hasErrors: false,
  data: {},
};
// A slice
export const experimentSlice = createSlice({
  name: 'experiments',
  initialState,
  reducers: {
    setExperiments: (state, action: PayloadAction<any>) => {
      const data = action.payload;
      Object.keys(data).forEach((key: string) => {
        data[key].checked = false;
      });
      state.data = action.payload;
    },
    startLoading: (state) => {
      state.loading = true;
    },
    finishLoading: (state) => {
      state.loading = false;
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
    clearData: (state) => {
      state.data = initialState.data;
    },
  },
});

const experimentReducer = experimentSlice.reducer;
export default experimentReducer;
