import { RootState } from '../../slices';

export const infrastructureSelector = (state: RootState) => state.projectInfrastructure;
export const getTotalCountInfrastructure = (state: RootState) => state.projectInfrastructure.totalCount;
export const getErrors = (state: RootState) => state.projectInfrastructure.hasErrors;
