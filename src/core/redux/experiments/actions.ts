import { ExperimentService } from '../../services/Experiment.service';
import { AppThunk, AppDispatch } from '../store';
import { experimentSlice } from './reducer';

const { setExperiments, startLoading, setCheckExperiments } = experimentSlice.actions;
const { getProjectExperiments } = ExperimentService;

export const fetchExperiments = (projectId: string): AppThunk => async (dispatch: AppDispatch) => {
  try {
    dispatch(startLoading);
    const responce = await getProjectExperiments(projectId, true);
    dispatch(setExperiments(responce.data.items));
  } catch (e) {
    console.log(e);
  }
};

export const checkExperiments = (checked: boolean) => (dispatch: AppDispatch) => {
  dispatch(setCheckExperiments(checked));
};
