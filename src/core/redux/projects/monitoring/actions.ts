import axios from 'axios';
import { MonitoringService } from '../../../services/projects/Monitoring.service';
import { AppThunk, AppDispatch } from '../../store';
import { monitoringSlice } from './reducer';

const { CancelToken } = axios;
let cancel: any;

const {
  setMonitoring,
  startLoading,
  finishLoading,
  setCheckAllMonitoring,
  setCheckDataset,
  setFetching,
  setCurrentPage,
  clearData,
  setTotalCount,
  setErrors,
} = monitoringSlice.actions;
const { getProjectMonitoring } = MonitoringService;

// eslint-disable-next-line max-len
export const fetchMonitoring = (
  projectId: string,
  currentPage: number,
  pageSize: number,
  signal: AbortSignal,
): AppThunk => async (dispatch: AppDispatch) => {
  try {
    if (currentPage === 0) {
      dispatch(startLoading());
    }
    const cancelToken = new CancelToken((c) => {
      cancel = c;
    });
    const response = await getProjectMonitoring(
      projectId,
      true,
      currentPage,
      pageSize,
      signal,
      cancelToken,
    );
    if (Object.keys(response.data.items).length !== 0) {
      dispatch(setMonitoring(response.data.items));
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

export const checkAllMonitoring = (checked: boolean) => (dispatch: AppDispatch) => {
  dispatch(setCheckAllMonitoring(checked));
};

export const checkMonitoring = (id: string) => (dispatch: AppDispatch) => {
  dispatch(setCheckDataset(id));
};

export const clearMonitoringData = () => (dispatch: AppDispatch) => {
  dispatch(clearData());
};

export const setMonitoringFetching = (fetching: boolean) => (dispatch: AppDispatch) => {
  dispatch(setFetching(fetching));
};

export const resetErrors = () => (dispatch: AppDispatch) => {
  dispatch(setErrors(false));
};

export const cancelRequest = () => () => {
  if (cancel) {
    cancel();
  }
};
