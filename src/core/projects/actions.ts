import api from '../api';
import { AppThunk, AppDispatch } from '../redux/store';
import { projectSlice } from './reducer';

const { setProjects, startLoading } = projectSlice.actions;

export const fetchProjects = (): AppThunk => async (dispatch: AppDispatch) => {
  try {
    dispatch(startLoading);
    const responce = await api('GET', [], '/projects');
    console.log(responce);
    dispatch(setProjects(responce.data));
  } catch (e) {
    console.log(e);
  }
};
