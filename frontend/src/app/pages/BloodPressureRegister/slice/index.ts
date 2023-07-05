/**
 *
 * BloodPressureRegister Slice
 *
 */

import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { bloodPressureRegisterSaga } from './saga';
import { BloodPressureRegisterState } from './types';

export const initialState: BloodPressureRegisterState = {
  message: '',
  error: '',
};

const slice = createSlice({
  name: 'bloodPressureRegister',
  initialState,
  reducers: {
    registerData(state, action: PayloadAction<any>) {},
    registerMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
    registerError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const { actions: bloodPressureRegisterActions } = slice;

export const useBloodPressureRegisterSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: bloodPressureRegisterSaga });
  return { actions: slice.actions };
};
