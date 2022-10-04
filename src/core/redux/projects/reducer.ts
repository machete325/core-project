import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRecently } from './types';

export type InitialState = {
  loading: boolean;
  hasErrors: boolean;
  data: unknown[];
  recentlyOpenedData: IRecently[];
};
//
export const initialState: InitialState = {
  loading: false,
  hasErrors: false,
  data: [],
  recentlyOpenedData: [],
};
// A slice
export const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<any>) => {
      state.data.push(action.payload);
    },
    startLoading: (state) => {
      state.loading = true;
    },
    setRecentlyData: (state, action: PayloadAction<any>) => {
      state.recentlyOpenedData = action.payload;
    },
  },
});

const projectReducer = projectSlice.reducer;
export default projectReducer;
