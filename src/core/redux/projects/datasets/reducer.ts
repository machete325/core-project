import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IExpandDatasets } from '../../../../types/project/Datasets';

export type DatasetsState = {
  loading: boolean;
  hasErrors: boolean;
  fetching: boolean;
  currentPage: number;
  totalCount: number | undefined;
  data: IExpandDatasets;
};
//
export const initialState: DatasetsState = {
  loading: false,
  hasErrors: false,
  fetching: false,
  currentPage: 0,
  totalCount: undefined,
  data: {},
};
// A slice
export const datasetSlice = createSlice({
  name: 'projectDatasets',
  initialState,
  reducers: {
    setDatasets: (state, action: PayloadAction<any>) => {
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
    setCheckAllDatasets: (state, action: PayloadAction<boolean>) => {
      Object.keys(state.data).forEach((key: string) => {
        state.data[key].checked = action.payload;
      });
    },
    setCheckDataset: (state, action: PayloadAction<string>) => {
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

const projectDatasetReducer = datasetSlice.reducer;
export default projectDatasetReducer;
