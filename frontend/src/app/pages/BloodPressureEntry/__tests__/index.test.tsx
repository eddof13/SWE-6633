import * as React from 'react';
import { render } from '@testing-library/react';

import { BloodPressureEntry } from '..';

describe('<BloodPressureEntry  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<BloodPressureEntry />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
