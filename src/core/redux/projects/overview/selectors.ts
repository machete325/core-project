import { RootState } from '../../slices';

export const getOverviewData = (state: RootState) => state.projectOverview.data;
export const getLoading = (state: RootState) => state.projectOverview.loading;
export const getErrors = (state: RootState) => state.projectOverview.hasErrors;
