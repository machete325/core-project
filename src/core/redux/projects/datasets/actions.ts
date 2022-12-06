import { DatasetService } from '../../../services/projects/Dataset.service';
import { AppThunk, AppDispatch } from '../../store';
import { datasetSlice } from './reducer';

const {
  setDatasets,
  startLoading,
  finishLoading,
  setCheckAllDatasets,
  setCheckDataset,
  setFetching,
  setCurrentPage,
  clearData,
  setTotalCount,
  setErrors,
} = datasetSlice.actions;
const { getProjectDatasets } = DatasetService;

// eslint-disable-next-line max-len
export const fetchDatasets = (
  projectId: string,
  currentPage: number,
  pageSize: number,
  signal: AbortSignal,
): AppThunk => async (dispatch: AppDispatch) => {
  try {
    if (currentPage === 0) {
      dispatch(startLoading());
    }
    const response = await getProjectDatasets(
      projectId,
      true,
      currentPage,
      pageSize,
      signal,
    );
    if (Object.keys(response.data.items).length !== 0) {
      dispatch(setDatasets(response.data.items));
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

export const checkAllDatasets = (checked: boolean) => (dispatch: AppDispatch) => {
  dispatch(setCheckAllDatasets(checked));
};

export const checkDataset = (id: string) => (dispatch: AppDispatch) => {
  dispatch(setCheckDataset(id));
};

export const clearDatasetsData = () => (dispatch: AppDispatch) => {
  dispatch(clearData());
};

export const setDatasetsFetching = (fetching: boolean) => (dispatch: AppDispatch) => {
  dispatch(setFetching(fetching));
};

export const resetErrors = () => (dispatch: AppDispatch) => {
  dispatch(setErrors(false));
};
