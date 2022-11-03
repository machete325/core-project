import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRecently } from './types';

export type InitialState = {
  loading: boolean;
  hasErrors: boolean;
  data: any;
  projectData: any;
  recentlyOpenedData: IRecently[];
};
//
export const initialState: InitialState = {
  loading: false,
  hasErrors: false,
  data: {},
  projectData: null,
  recentlyOpenedData: [],
};
// A slice
export const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    startLoading: (state) => {
      state.loading = true;
    },
    finishLoading: (state) => {
      state.loading = false;
    },
    setRecentlyData: (state, action: PayloadAction<IRecently[]>) => {
      state.recentlyOpenedData = action.payload;
    },
    setCheckRecentlyData: (state, action: PayloadAction<any>) => {
      const stateCopy = state.recentlyOpenedData.map((item) => {
        if (item.id === action.payload) {
          item.check = !item.check;
          return item;
        }
        return item;
      });
      state.recentlyOpenedData = [...stateCopy];
    },
    setProjectData: (state, action: PayloadAction<any>) => {
      state.projectData = action.payload;
    },
    clearProjectData: (state) => {
      state.projectData = initialState.projectData;
    },
  },
});

const projectReducer = projectSlice.reducer;
export default projectReducer;
