import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOverview, IRecently } from './types';

export type InitialState = {
  loading: boolean;
  overviewLoading: boolean;
  hasErrors: boolean;
  data: any;
  projectData: any;
  overviewProjectData: { [key: string]: IOverview };
  recentlyOpenedData: IRecently[];
};
//
export const initialState: InitialState = {
  loading: false,
  overviewLoading: false,
  hasErrors: false,
  data: {},
  projectData: null,
  overviewProjectData: {},
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
    startOverviewLoading: (state) => {
      state.overviewLoading = true;
    },
    finishOverviewLoading: (state) => {
      state.overviewLoading = false;
    },
    setOverviewProjectData: (
      state,
      action: PayloadAction<{ id: string; data: any }>,
    ) => {
      const project: any = { [action.payload.id]: action.payload.data };
      state.overviewProjectData = {
        ...state.overviewProjectData,
        ...project,
      };
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
