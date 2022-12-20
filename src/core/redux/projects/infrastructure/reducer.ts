import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInfrastructureItems } from '../../../../types/project/infrastructure';

export type InfrastructureState = {
  loading: boolean;
  hasErrors: boolean;
  fetching: boolean;
  currentPage: number;
  totalCount: number | undefined;
  data: IInfrastructureItems;
};
//
export const initialState: InfrastructureState = {
  loading: false,
  hasErrors: false,
  fetching: false,
  currentPage: 0,
  totalCount: undefined,
  data: {},
};
// A slice
export const infrastructureSlice = createSlice({
  name: 'projectInfrastructure',
  initialState,
  reducers: {
    setInfrastructure: (state, action: PayloadAction<any>) => {
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
    setCheckAllInfrastructure: (state, action: PayloadAction<boolean>) => {
      Object.keys(state.data).forEach((key: string) => {
        state.data[key].checked = action.payload;
      });
    },
    setCheckInfrastructure: (state, action: PayloadAction<string>) => {
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

const projectInfrastructureSliceReducer = infrastructureSlice.reducer;
export default projectInfrastructureSliceReducer;
