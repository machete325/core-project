import { RootState } from '../../slices';

export const monitoringSelector = (state: RootState) => state.projectMonitoring;
export const getTotalCountMonitoring = (state: RootState) => state.projectMonitoring.totalCount;
export const getErrors = (state: RootState) => state.projectMonitoring.hasErrors;
