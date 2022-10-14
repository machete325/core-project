import { RootState } from '../slices';

export const projectsData = (state: RootState) => state.projects.data;
export const oneProjectData = (state: RootState) => state.projects.projectData;
export const recentlyOpenedData = (state: RootState) => state.projects.recentlyOpenedData;
