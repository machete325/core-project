import { ExperimentService } from '../../../services/projects/Experiment.service';
import { AppThunk, AppDispatch } from '../../store';
import { experimentSlice } from './reducer';

const {
  setExperiments,
  startLoading,
  finishLoading,
  setCheckAllExperiments,
  setCheckExperiment,
  setFetching,
  setCurrentPage,
  clearData,
  setTotalCount,
  setErrors,
} = experimentSlice.actions;
const { getProjectExperiments } = ExperimentService;

// eslint-disable-next-line max-len
export const fetchExperiments = (
  projectId: string,
  currentPage: number,
  pageSize: number,
  signal: AbortSignal,
): AppThunk => async (dispatch: AppDispatch) => {
  try {
    if (currentPage === 0) {
      dispatch(startLoading());
    }
    const response = await getProjectExperiments(
      projectId,
      true,
      currentPage,
      pageSize,
      signal,
    );
    if (Object.keys(response.data.items).length !== 0) {
      dispatch(setExperiments(response.data.items));
      dispatch(setCurrentPage(currentPage + 1));
      dispatch(setTotalCount(response.data.metadata.totalCount));
    }
    dispatch(setErrors(false));
  } catch (e) {
    dispatch(setErrors(true));
    console.log(e);
  } finally {
    dispatch(finishLoading());
    dispatch(setFetching(false));
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

export const setExperimentsFetching = (fetching: boolean) => (dispatch: AppDispatch) => {
  dispatch(setFetching(fetching));
};

export const resetErrors = () => (dispatch: AppDispatch) => {
  dispatch(setErrors(false));
};
