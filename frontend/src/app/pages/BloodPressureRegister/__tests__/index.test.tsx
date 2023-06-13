import * as React from 'react';
import { render } from '@testing-library/react';

import { BloodPressureRegister } from '..';

describe('<BloodPressureRegister  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<BloodPressureRegister />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
