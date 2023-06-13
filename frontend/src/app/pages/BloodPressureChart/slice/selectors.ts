import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) =>
  state.bloodPressureChart || initialState;

export const selectBloodPressureChart = createSelector(
  [selectSlice],
  state => state,
);
