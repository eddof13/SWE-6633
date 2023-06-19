import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { BloodPressureChart } from '..';

describe('BloodPressureChart', () => {
  const testPage = (
    <Router>
      <BloodPressureChart />
    </Router>
  );

  it('renders chart component with temporary title', () => {
    const { getByText } = render(testPage);
    expect(getByText('Chart Here')).toBeInTheDocument();
  });

  it('should navigate to the menu page when home icon is clicked', () => {
    const { getByTestId } = render(testPage);

    const homeIcon = getByTestId('HomeIcon');
    fireEvent.click(homeIcon);
    expect(window.location.pathname).toBe('/menu');
  });
});
