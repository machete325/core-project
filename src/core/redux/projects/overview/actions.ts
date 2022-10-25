import { OverviewService } from '../../../services/projects/Overview.service';
import { AppThunk, AppDispatch } from '../../store';
import { overviewSlice } from './reducer';

const { setOverview } = overviewSlice.actions;
const { getProjectOverview } = OverviewService;

export const fetchOverview = (projectId: string): AppThunk => async (dispatch: AppDispatch) => {
  try {
    const response = await getProjectOverview(projectId, false);
    dispatch(setOverview(response.data));
  } catch (e) {
    console.log(e);
  }
};
