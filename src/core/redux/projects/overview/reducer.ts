import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProjectOverview } from '../../../../types/project/project';

export type OverviewState = {
  loading: boolean;
  hasErrors: boolean;
  data: IProjectOverview | null;
};
//
export const initialState: OverviewState = {
  loading: false,
  hasErrors: false,
  data: null,
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
