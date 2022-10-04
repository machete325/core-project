import { RootState } from '../slices';

export const projectsSelector = (state: RootState) => state.projects;
export const recentlyOpenedData = (state: RootState) => state.projects.recentlyOpenedData;
