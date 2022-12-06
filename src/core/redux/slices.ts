import { combineReducers } from '@reduxjs/toolkit';
import projectReducer from './projects/reducer';
import projectExperimentReducer from './projects/experiments/reducer';
import projectOverviewReducer from './projects/overview/reducer';
import projectDatasetReducer from './projects/datasets/reducer';
import projectMonitoringSliceReducer from './projects/monitoring/reducer';

const rootReducer = combineReducers({
  projects: projectReducer,
  projectExperiments: projectExperimentReducer,
  projectOverview: projectOverviewReducer,
  projectDatasets: projectDatasetReducer,
  projectMonitoring: projectMonitoringSliceReducer,
  //  if we need to use more reducers
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
