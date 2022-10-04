import { ProjectService } from '../../services/Project.service';
import { AppThunk, AppDispatch } from '../store';
import { projectSlice } from './reducer';
import { getFromLocalStorage } from '../../helpers/localStorageMethods';

const { setProjects, startLoading, setRecentlyData } = projectSlice.actions;
const { getAllProjects } = ProjectService;

export const fetchProjects = (): AppThunk => async (dispatch: AppDispatch) => {
  try {
    dispatch(startLoading);
    const responce = await getAllProjects();
    console.log(responce);
    dispatch(setProjects(responce.data));
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
