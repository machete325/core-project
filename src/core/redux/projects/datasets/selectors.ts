import { RootState } from '../../slices';

export const datasetsSelector = (state: RootState) => state.projectDatasets;
export const getTotalCountDatasets = (state: RootState) => state.projectDatasets.totalCount;
export const getErrors = (state: RootState) => state.projectDatasets.hasErrors;
