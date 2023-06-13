import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) =>
  state.bloodPressureRegister || initialState;

export const selectBloodPressureRegister = createSelector(
  [selectSlice],
  state => state,
);
