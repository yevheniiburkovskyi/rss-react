import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Form from '../src/components/Form/Form';
import { vi } from 'vitest';

describe('Form component', () => {
  it('submits form with valid data', () => {
    const mockUpdateArr = vi.fn();
    render(<Form updateArr={mockUpdateArr} />);

    const nameInput = screen.getByLabelText<HTMLInputElement>('Name');
    fireEvent.change(nameInput, { target: { value: 'John' } });

    const dateInput = screen.getByLabelText<HTMLInputElement>('Date');
    fireEvent.change(dateInput, { target: { value: '1990-01-01' } });

    const countryInput = screen.getByLabelText<HTMLSelectElement>('Country');
    fireEvent.change(countryInput, { target: { value: 'Poland' } });

    const genderInput = screen.getByLabelText<HTMLInputElement>('Male');
    fireEvent.click(genderInput);

    const fileInput = screen.getByLabelText<HTMLInputElement>('Photo');
    fireEvent.change(fileInput, {
      target: { files: [new File(['test'], 'test.png', { type: 'image/png' })] },
    });

    const termsInput = screen.getByLabelText<HTMLInputElement>('I consent to my personal data');
    fireEvent.click(termsInput);

    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    expect(nameInput.value).toBe('John');
    expect(dateInput.value).toBe('1990-01-01');
    expect(countryInput.value).toBe('Poland');
    expect(genderInput.value).toBe('Male');
    expect(termsInput.checked).toBe(true);
  });
});
