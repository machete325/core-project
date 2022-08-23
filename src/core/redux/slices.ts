import { combineReducers } from '@reduxjs/toolkit';
import projectReducer from '../projects/reducer';

const rootReducer = combineReducers({
  projects: projectReducer,
  //  if we need to use more reducers
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
