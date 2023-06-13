/**
 *
 * Asynchronously loads the component for BloodPressureLogin
 *
 */

import { lazyLoad } from 'utils/loadable';

export const BloodPressureLogin = lazyLoad(
  () => import('./index'),
  module => module.BloodPressureLogin,
);
