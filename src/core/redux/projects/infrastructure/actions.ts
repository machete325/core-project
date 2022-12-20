import axios from 'axios';
import { InfrastructureService } from '../../../services/projects/Infrastructure.service';
import { AppThunk, AppDispatch } from '../../store';
import { infrastructureSlice } from './reducer';

const { CancelToken } = axios;
let cancel: any;

const {
  setInfrastructure,
  startLoading,
  finishLoading,
  setCheckAllInfrastructure,
  setCheckInfrastructure,
  setFetching,
  setCurrentPage,
  clearData,
  setTotalCount,
  setErrors,
} = infrastructureSlice.actions;
const { getProjectInfrastructure } = InfrastructureService;

// eslint-disable-next-line max-len
export const fetchInfrastructure = (
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
    const response = await getProjectInfrastructure(
      projectId,
      true,
      currentPage,
      pageSize,
      signal,
      cancelToken,
    );
    if (Object.keys(response.data.items).length !== 0) {
      dispatch(setInfrastructure(response.data.items));
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

export const checkAllInfrastructure = (checked: boolean) => (dispatch: AppDispatch) => {
  dispatch(setCheckAllInfrastructure(checked));
};

export const checkInfrastructure = (id: string) => (dispatch: AppDispatch) => {
  dispatch(setCheckInfrastructure(id));
};

export const clearInfrastructureData = () => (dispatch: AppDispatch) => {
  dispatch(clearData());
};

export const setInfrastructureFetching = (fetching: boolean) => (dispatch: AppDispatch) => {
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
