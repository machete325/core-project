import { combineReducers } from '@reduxjs/toolkit';
import projectReducer from './projects/reducer';
import experimentReducer from './experiments/reducer';

const rootReducer = combineReducers({
  projects: projectReducer,
  experiments: experimentReducer,
  //  if we need to use more reducers
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
