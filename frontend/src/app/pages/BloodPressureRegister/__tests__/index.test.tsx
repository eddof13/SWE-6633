import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { BloodPressureRegister } from '..';

describe('BloodPressureRegister', () => {
  const testPage = (
    <Router>
      <BloodPressureRegister />
    </Router>
  );

  it('should render the register form fields', () => {
    const { getByRole, getByText, getByTestId } = render(testPage);

    const firstnameInput = getByRole('textbox', { name: /first name/i });
    const lastnameInput = getByRole('textbox', { name: /last name/i });
    const emailInput = getByRole('textbox', { name: /email/i });
    const passwordInput = getByTestId('password-input');
    const rePasswordInput = getByTestId('repassword-input');
    const registerButton = getByRole('button', { name: /register/i });
    const loginLink = getByText(/login/i);

    expect(firstnameInput).toBeInTheDocument();
    expect(lastnameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(rePasswordInput).toBeInTheDocument();

    expect(registerButton).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
  });

  it('should update state when input values change', () => {
    const { getByRole, getByTestId } = render(testPage);

    const firstnameInput = getByRole('textbox', {
      name: /first name/i,
    }) as HTMLInputElement;
    const lastnameInput = getByRole('textbox', {
      name: /last name/i,
    }) as HTMLInputElement;
    const emailInput = getByRole('textbox', {
      name: /email/i,
    }) as HTMLInputElement;
    const passwordInput = getByTestId('password-input') as HTMLInputElement;
    const rePasswordInput = getByTestId('repassword-input') as HTMLInputElement;

    fireEvent.change(firstnameInput, { target: { value: 'arb' } });
    fireEvent.change(lastnameInput, { target: { value: 'lim' } });
    fireEvent.change(emailInput, { target: { value: 'arb@lim.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(rePasswordInput, { target: { value: 'password123' } });

    expect(firstnameInput.value).toBe('arb');
    expect(lastnameInput.value).toBe('lim');
    expect(emailInput.value).toBe('arb@lim.com');
    expect(passwordInput.value).toBe('password123');
    expect(rePasswordInput.value).toBe('password123');
  });
});
