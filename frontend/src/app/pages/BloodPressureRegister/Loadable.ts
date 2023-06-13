/**
 *
 * Asynchronously loads the component for BloodPressureRegister
 *
 */

import { lazyLoad } from 'utils/loadable';

export const BloodPressureRegister = lazyLoad(
  () => import('./index'),
  module => module.BloodPressureRegister,
);
