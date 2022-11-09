import { OverviewService } from '../../../services/projects/Overview.service';
import { AppThunk, AppDispatch } from '../../store';
import { overviewSlice } from './reducer';

const {
  setOverview, startLoading, finishLoading, setErrors, clearData,
} = overviewSlice.actions;
const { getProjectOverview } = OverviewService;

export const fetchOverview = (projectId: string): AppThunk => async (dispatch: AppDispatch) => {
  try {
    dispatch(startLoading());
    const response = await getProjectOverview(projectId, false);
    dispatch(setOverview(response.data));
    dispatch(finishLoading());
    dispatch(setErrors(false));
  } catch (e) {
    console.log(e);
    dispatch(setErrors(true));
    dispatch(finishLoading());
  }
};

export const clearOverview = () => (dispatch: AppDispatch) => {
  dispatch(clearData());
};
