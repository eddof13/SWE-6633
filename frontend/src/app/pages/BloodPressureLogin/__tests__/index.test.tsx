import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { BloodPressureLogin } from '..';

describe('BloodPressureLogin', () => {
  const testPage = (
    <Router>
      <BloodPressureLogin />
    </Router>
  );
  it('should render the login form fields', () => {
    const { getByRole, getByText } = render(testPage);

    const emailInput = getByRole('textbox', { name: /email/i });
    const passwordInput = getByRole('textbox', { name: /password/i });
    const loginButton = getByRole('button', { name: /login/i });
    const registerLink = getByText(/register/i);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(registerLink).toBeInTheDocument();
  });

  it('should update state when input values change', () => {
    const { getByRole } = render(testPage);

    const emailInput = getByRole('textbox', {
      name: /email/i,
    }) as HTMLInputElement;
    const passwordInput = getByRole('textbox', {
      name: /password/i,
    }) as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: 'arb@lim.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(emailInput.value).toBe('arb@lim.com');
    expect(passwordInput.value).toBe('password123');
  });
});
