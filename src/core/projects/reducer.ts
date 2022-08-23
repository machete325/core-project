import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ProjectsState = {
  loading: boolean;
  hasErrors: boolean;
  projects: unknown[];
};
//
export const initialState: ProjectsState = {
  loading: false,
  hasErrors: false,
  projects: [],
};
// A slice
export const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<any>) => {
      state.projects.push(action.payload);
    },
    startLoading: (state) => {
      state.loading = true;
    },
  },
});

const projectReducer = projectSlice.reducer;
export default projectReducer;
