import { ProjectService } from '../../services/Project.service';
import { AppThunk, AppDispatch } from '../store';
import { projectSlice } from './reducer';
import { getFromLocalStorage } from '../../helpers/localStorageMethods';

const {
  setProjects,
  startLoading,
  setRecentlyData,
  setCheckRecentlyData,
  setProjectData,
} = projectSlice.actions;
const { getAllProjects, getOneProject } = ProjectService;

export const fetchProjects = (): AppThunk => async (dispatch: AppDispatch) => {
  try {
    dispatch(startLoading);
    const responce = await getAllProjects();
    dispatch(setProjects(responce.data.items));
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
    const responce = await getOneProject(id);
    dispatch(setProjectData(responce.data));
  } catch (e) {
    console.log(e);
  }
};
