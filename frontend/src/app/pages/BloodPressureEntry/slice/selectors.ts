import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) =>
  state.bloodPressureEntry || initialState;

export const selectBloodPressureEntry = createSelector(
  [selectSlice],
  state => state,
);
