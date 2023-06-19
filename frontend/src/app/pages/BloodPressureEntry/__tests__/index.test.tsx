import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { BloodPressureEntry } from '..';

describe('BloodPressureEntry', () => {
  const testPage = (
    <Router>
      <BloodPressureEntry />
    </Router>
  );

  it('should render the entry form fields', async () => {
    const { getByLabelText, getByText } = render(testPage);

    const systolicInput = getByLabelText(/systolic/i);
    const diastolicInput = getByLabelText(/diastolic/i);
    const dateTimeInput = getByLabelText(/date and time/i);
    const submitButton = getByText(/submit/i);

    expect(systolicInput).toBeInTheDocument();
    expect(diastolicInput).toBeInTheDocument();
    expect(dateTimeInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('should navigate to the menu page when home icon is clicked', () => {
    const { getByTestId } = render(testPage);

    const homeIcon = getByTestId('HomeIcon');
    fireEvent.click(homeIcon);
    expect(window.location.pathname).toBe('/menu');
  });
});
