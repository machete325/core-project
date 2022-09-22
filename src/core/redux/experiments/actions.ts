import axios from 'axios';
import { ExperimentService } from '../../services/Experiment.service';
import { AppThunk, AppDispatch } from '../store';
import { experimentSlice } from './reducer';

const { setExperiments, startLoading, setCheckExperiments } = experimentSlice.actions;
const { getProjectExperiments } = ExperimentService;

const loginHandle = async () => {
  const data = {
    username: 'evgeny',
    password: 'coreai-blabla',
  };
  const response = await axios({
    method: 'post',
    url: 'http://3.126.123.50:8000/api/v1/login',
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
    data,
  });
  console.log(response);
};

export const fetchExperiments = (projectId: string): AppThunk => async (dispatch: AppDispatch) => {
  try {
    loginHandle();
    dispatch(startLoading);
    const response = await getProjectExperiments(projectId, true);
    dispatch(setExperiments(response.data.items));
  } catch (e) {
    console.log(e);
  }
};

export const checkExperiments = (checked: boolean) => (dispatch: AppDispatch) => {
  dispatch(setCheckExperiments(checked));
};
