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
  clearProjectData,
} = projectSlice.actions;
const { getAllProjects, getOneProject } = ProjectService;

const mockProjectsData: any = {
  items: {
    SalesPredictionKaggle: {
      id: 'SalesPredictionKaggle',
      name: 'DevOps Services',
      description: 'DevOps Services',
      created: '2022-10-05T10:20:58.935480',
      isArchived: false,
    },
    Apifix: {
      id: 'Apifix',
      name: 'Apifix Services',
      description: 'Apifix Services',
      created: '2022-10-05T10:20:58.935480',
      isArchived: false,
    },
    ChurnPrediction: {
      id: 'ChurnPrediction',
      name: 'ChurnPrediction Services',
      description: 'ChurnPrediction Services',
      created: '2022-10-05T10:20:58.935480',
      isArchived: false,
    },
  },
};

export const fetchProjects = (): AppThunk => async (dispatch: AppDispatch) => {
  try {
    dispatch(startLoading);
    const response = await getAllProjects();
    if (process.env.NODE_ENV === 'production') {
      dispatch(setProjects(mockProjectsData.items));
    } else {
      dispatch(setProjects(response.data.items));
    }
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
    if (process.env.NODE_ENV === 'production') {
      dispatch(setProjectData(mockProjectsData.items[id]));
    } else {
      dispatch(setProjectData(response.data));
    }
  } catch (e) {
    console.log(e);
  }
};

export const clearOneProjectData = () => (dispatch: AppDispatch) => {
  dispatch(clearProjectData());
};
