import { ExperimentService } from '../../../services/projects/Experiment.service';
import { AppThunk, AppDispatch } from '../../store';
import { experimentSlice } from './reducer';

const {
  setExperiments,
  startLoading,
  finishLoading,
  setCheckAllExperiments,
  setCheckExperiment,
  clearData,
} = experimentSlice.actions;
const { getProjectExperiments } = ExperimentService;

export const fetchExperiments = (projectId: string): AppThunk => async (dispatch: AppDispatch) => {
  try {
    dispatch(startLoading());
    const response = await getProjectExperiments(projectId, true);
    dispatch(setExperiments(response.data.items));
    dispatch(finishLoading());
  } catch (e) {
    console.log(e);
  }
};

export const checkAllExperiments = (checked: boolean) => (dispatch: AppDispatch) => {
  dispatch(setCheckAllExperiments(checked));
};

export const checkExperiment = (id: string) => (dispatch: AppDispatch) => {
  dispatch(setCheckExperiment(id));
};

export const clearExperimentsData = () => (dispatch: AppDispatch) => {
  dispatch(clearData());
};
