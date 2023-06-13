import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) =>
  state.bloodPressureLogin || initialState;

export const selectBloodPressureLogin = createSelector(
  [selectSlice],
  state => state,
);
