import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureAppStore } from 'store/configureStore';
import { BloodPressureMenu } from '..';

afterEach(cleanup);

describe('<BloodPressureMenu />', () => {
  it('renders and matches the snapshot', () => {
    const store = configureAppStore();

    const { container } = render(
      <Provider store={store}>
        <Router>
          <BloodPressureMenu />
        </Router>
      </Provider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
