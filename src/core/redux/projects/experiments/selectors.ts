import { RootState } from '../../slices';

export const experimentsSelector = (state: RootState) => state.projectExperiments;
export const getTotalCountExperiments = (state: RootState) => state.projectExperiments.totalCount;
export const getErrors = (state: RootState) => state.projectExperiments.hasErrors;
