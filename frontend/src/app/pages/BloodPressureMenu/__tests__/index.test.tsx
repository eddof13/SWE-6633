import * as React from 'react';
import { render } from '@testing-library/react';

import { BloodPressureMenu } from '..';

describe('<BloodPressureMenu  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<BloodPressureMenu />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
