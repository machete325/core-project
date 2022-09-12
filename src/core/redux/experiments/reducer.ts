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
    setCheckExperiments: (state, action: PayloadAction<boolean>) => {
      Object.keys(state.data).forEach((key: string) => {
        state.data[key].checked = action.payload;
      });
    },
  },
});

const experimentReducer = experimentSlice.reducer;
export default experimentReducer;
