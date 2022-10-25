import { ProjectService } from '../../services/projects/Project.service';
import { AppThunk, AppDispatch } from '../store';
import { projectSlice } from './reducer';
import { getFromLocalStorage } from '../../helpers/localStorageMethods';

const {
  setProjects,
  startLoading,
  setRecentlyData,
  setCheckRecentlyData,
  setProjectData,
  clearProjectData,
} = projectSlice.actions;
const { getAllProjects, getOneProject } = ProjectService;

export const fetchProjects = (): AppThunk => async (dispatch: AppDispatch) => {
  try {
    dispatch(startLoading);
    const response = await getAllProjects();
    dispatch(setProjects(response.data.items));
  } catch (e) {
    console.log(e);
  }
};

export const getRecentlyData = (projectId: string) => (dispatch: AppDispatch) => {
  const storageData = getFromLocalStorage('recentlyOpened');
  if (typeof storageData === 'string' && !!storageData !== false) {
    dispatch(setRecentlyData(JSON.parse(storageData)[projectId]));
  }
};

export const checkRecentlyData = (id: string) => (dispatch: AppDispatch) => {
  dispatch(setCheckRecentlyData(id));
};

export const getProjectData = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(startLoading);
    const response = await getOneProject(id);
    dispatch(setProjectData(response.data));
  } catch (e) {
    console.log(e);
  }
};

export const clearOneProjectData = () => (dispatch: AppDispatch) => {
  dispatch(clearProjectData());
};
