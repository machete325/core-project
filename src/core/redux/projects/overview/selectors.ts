import { RootState } from '../../slices';

export const getOverviewData = (state: RootState) => state.projectOverview.data;
