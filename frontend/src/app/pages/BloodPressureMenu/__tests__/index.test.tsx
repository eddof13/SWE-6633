import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { BloodPressureMenu } from '..';

describe('BloodPressureMenu', () => {
  const testPage = (
    <Router>
      <BloodPressureMenu />
    </Router>
  );
  it('should render the menu with links', () => {
    const { getByText } = render(testPage);

    expect(getByText('Add Entry')).toBeInTheDocument();
    expect(getByText('View Chart')).toBeInTheDocument();
  });

  it('should navigate to the correct routes when links are clicked', () => {
    const { getByText } = render(testPage);

    const addEntryLink = getByText('Add Entry');
    fireEvent.click(addEntryLink);
    expect(window.location.pathname).toBe('/entry');

    const viewChartLink = getByText('View Chart');
    fireEvent.click(viewChartLink);
    expect(window.location.pathname).toBe('/chart');
  });

  it('should navigate to the home route when logout button is clicked', () => {
    const { getByTestId } = render(testPage);

    const logoutButton = getByTestId('LogoutIcon');
    fireEvent.click(logoutButton);
    expect(window.location.pathname).toBe('/');
  });
});
