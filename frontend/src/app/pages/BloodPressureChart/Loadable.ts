/**
 *
 * Asynchronously loads the component for BloodPressureChart
 *
 */

import { lazyLoad } from 'utils/loadable';

export const BloodPressureChart = lazyLoad(
  () => import('./index'),
  module => module.BloodPressureChart,
);
