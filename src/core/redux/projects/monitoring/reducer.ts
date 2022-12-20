import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMonitoringItems } from '../../../../types/project/monitoring';

export type MonitoringState = {
  loading: boolean;
  hasErrors: boolean;
  fetching: boolean;
  currentPage: number;
  totalCount: number | undefined;
  data: IMonitoringItems;
};
//
export const initialState: MonitoringState = {
  loading: false,
  hasErrors: false,
  fetching: false,
  currentPage: 0,
  totalCount: undefined,
  data: {},
};
// A slice
export const monitoringSlice = createSlice({
  name: 'projectMonitoring',
  initialState,
  reducers: {
    setMonitoring: (state, action: PayloadAction<any>) => {
      const data = action.payload;
      Object.keys(data).forEach((key: string) => {
        data[key].checked = false;
      });
      state.data = { ...state.data, ...action.payload };
    },
    startLoading: (state) => {
      state.loading = true;
    },
    finishLoading: (state) => {
      state.loading = false;
    },
    setTotalCount: (state, action: PayloadAction<number>) => {
      state.totalCount = action.payload;
    },
    setCheckAllMonitoring: (state, action: PayloadAction<boolean>) => {
      Object.keys(state.data).forEach((key: string) => {
        state.data[key].checked = action.payload;
      });
    },
    setCheckMonitoring: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.data[id].checked = !state.data[id].checked;
    },
    setFetching: (state, action: PayloadAction<boolean>) => {
      state.fetching = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setErrors: (state, action: PayloadAction<boolean>) => {
      state.hasErrors = action.payload;
    },
    clearData: () => initialState,
  },
});

const projectMonitoringSliceReducer = monitoringSlice.reducer;
export default projectMonitoringSliceReducer;
