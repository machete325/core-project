import { RootState } from '../slices';

export const projectsData = (state: RootState) => state.projects.data;
export const oneProjectData = (state: RootState) => state.projects.projectData;
export const recentlyOpenedData = (state: RootState) => state.projects.recentlyOpenedData;
export const getLoading = (state: RootState) => state.projects.loading;
export const getProjectOverview = (state: RootState) => state.projects.overviewProjectData;
export const getOverviewLoading = (state: RootState) => state.projects.overviewLoading;
