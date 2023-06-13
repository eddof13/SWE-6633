/**
 *
 * Asynchronously loads the component for BloodPressureEntry
 *
 */

import { lazyLoad } from 'utils/loadable';

export const BloodPressureEntry = lazyLoad(
  () => import('./index'),
  module => module.BloodPressureEntry,
);
