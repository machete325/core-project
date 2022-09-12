import { ProjectService } from '../../services/Project.service';
import { AppThunk, AppDispatch } from '../store';
import { projectSlice } from './reducer';

const { setProjects, startLoading } = projectSlice.actions;
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
