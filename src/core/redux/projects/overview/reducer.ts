import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOverviewData } from './types';

export type OverviewState = {
  loading: boolean;
  hasErrors: boolean;
  data: IOverviewData;
};
//
export const initialState: OverviewState = {
  loading: false,
  hasErrors: false,
  data: {},
};
// A slice
export const overviewSlice = createSlice({
  name: 'projectOverview',
  initialState,
  reducers: {
    setOverview: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    startLoading: (state) => {
      state.loading = true;
    },
    finishLoading: (state) => {
      state.loading = false;
    },
    clearData: (state) => {
      state.data = initialState.data;
    },
  },
});

const projectOverviewReducer = overviewSlice.reducer;
export default projectOverviewReducer;
