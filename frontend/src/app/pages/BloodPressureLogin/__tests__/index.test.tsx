import * as React from 'react';
import { render } from '@testing-library/react';

import { BloodPressureLogin } from '..';

describe('<BloodPressureLogin  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<BloodPressureLogin />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
