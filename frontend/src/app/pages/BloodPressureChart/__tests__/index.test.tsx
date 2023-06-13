import * as React from 'react';
import { render } from '@testing-library/react';

import { BloodPressureChart } from '..';

describe('<BloodPressureChart  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<BloodPressureChart />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
