import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProjectOverview } from '../../../../types/project/Project';

export type OverviewState = {
  loading: boolean;
  hasErrors: boolean;
  data: IProjectOverview | undefined;
};
//
export const initialState: OverviewState = {
  loading: false,
  hasErrors: false,
  data: undefined,
};
// A slice
export const overviewSlice = createSlice({
  name: 'projectOverview',
  initialState,
  reducers: {
    setOverview: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    setErrors: (state, action: PayloadAction<boolean>) => {
      state.hasErrors = action.payload;
    },
    startLoading: (state) => {
      state.loading = true;
    },
    finishLoading: (state) => {
      state.loading = false;
    },
    clearData: () => initialState,
  },
});

const projectOverviewReducer = overviewSlice.reducer;
export default projectOverviewReducer;
