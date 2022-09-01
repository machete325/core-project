import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ProjectsState = {
  loading: boolean;
  hasErrors: boolean;
  data: unknown[];
};
//
export const initialState: ProjectsState = {
  loading: false,
  hasErrors: false,
  data: [],
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
  },
});

const projectReducer = projectSlice.reducer;
export default projectReducer;
