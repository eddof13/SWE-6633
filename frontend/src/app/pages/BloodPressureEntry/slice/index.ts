import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { bloodPressureEntrySaga } from './saga';
import { BloodPressureEntryState } from './types';

export const initialState: BloodPressureEntryState = {
  createDate: '',
  error: '',
};

const slice = createSlice({
  name: 'bloodPressureEntry',
  initialState,
  reducers: {
    entryData(state, action: PayloadAction<any>) {},
    entryCreateDate(state, action: PayloadAction<string>) {
      state.createDate = action.payload;
    },
    entryError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const { actions: bloodPressureEntryActions } = slice;

export const useBloodPressureEntrySlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: bloodPressureEntrySaga });
  return { actions: slice.actions };
};
