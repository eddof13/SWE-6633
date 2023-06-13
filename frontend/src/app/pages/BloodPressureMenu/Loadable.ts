/**
 *
 * Asynchronously loads the component for BloodPressureMenu
 *
 */

import { lazyLoad } from 'utils/loadable';

export const BloodPressureMenu = lazyLoad(
  () => import('./index'),
  module => module.BloodPressureMenu,
);
