import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { bloodPressureLoginSaga } from './saga';
import { BloodPressureLoginState } from './types';

export const initialState: BloodPressureLoginState = {
  error: '',
  username: '',
  accessToken: '',
  tokenType: '',
};

const slice = createSlice({
  name: 'bloodPressureLogin',
  initialState,
  reducers: {
    loginData(state, action: PayloadAction<any>) {},
    loginUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    loginAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
    loginTokenType(state, action: PayloadAction<string>) {
      state.tokenType = action.payload;
    },
    loginError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const { actions: bloodPressureLoginActions } = slice;

export const useBloodPressureLoginSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: bloodPressureLoginSaga });
  return { actions: slice.actions };
};
