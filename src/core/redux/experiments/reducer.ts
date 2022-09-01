import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IExperimentData } from './types';

export type ExperimentsState = {
  loading: boolean;
  hasErrors: boolean;
  data: IExperimentData[];
};
//
export const initialState: ExperimentsState = {
  loading: false,
  hasErrors: false,
  data: [],
};
// A slice
export const experimentSlice = createSlice({
  name: 'experiments',
  initialState,
  reducers: {
    setExperiments: (state, action: PayloadAction<any>) => {
      action.payload.forEach((experiment: IExperimentData) => {
        experiment.checked = false;
      });
      state.data = action.payload;
    },
    startLoading: (state) => {
      state.loading = true;
    },
    setCheckExperiments: (state, action: PayloadAction<boolean>) => {
      state.data.forEach((experiment: IExperimentData) => {
        experiment.checked = action.payload;
      });
    },
  },
});

const experimentReducer = experimentSlice.reducer;
export default experimentReducer;
