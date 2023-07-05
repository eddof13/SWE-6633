import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { bloodPressureChartSaga } from './saga';
import { BloodPressureChartState } from './types';
import { isNullishCoalesce } from 'typescript';

export const initialState: BloodPressureChartState = {
  data: [],
  error: '',
};

const slice = createSlice({
  name: 'bloodPressureChart',
  initialState,
  reducers: {
    bpData(state, action: PayloadAction<any>) {},
    bpDataList(state, action: PayloadAction<any[]>) {
      state.data = action.payload;
    },
    bpDataError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const { actions: bloodPressureChartActions } = slice;

export const useBloodPressureChartSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: bloodPressureChartSaga });
  return { actions: slice.actions };
};
