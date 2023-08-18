import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import Form from './Form';
import userEvent from '@testing-library/user-event';
import { mockRegistrationData, mockRegistrationDataInvalid } from '../../mocks/mocks';
import StoreProvider from '../../../tests/test-utils';

describe('Form', () => {
  beforeEach(() => {
    URL.createObjectURL = vi.fn().mockImplementation(() => 'http://example.com/image.png');
    const root = document.createElement('div');
    root.id = 'overlay-root';
    document.body.append(root);
  });
  it('should render', () => {
    render(
      <StoreProvider>
        <Form />
      </StoreProvider>
    );
    const nameInput = screen.getByLabelText('Name');
    const dateInput = screen.getByLabelText('Date');
    const countryInput = screen.getByLabelText('Country');
    const genderInput = screen.getByLabelText('Male');
    const photoInput = screen.getByText('Photo');
    const termsInput = screen.getByLabelText('I consent to my personal data');
    const submitBtn = screen.getByText('Submit');

    expect(nameInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(countryInput).toBeInTheDocument();
    expect(genderInput).toBeInTheDocument();
    expect(photoInput).toBeInTheDocument();
    expect(termsInput).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });
  it('should submit', async () => {
    render(
      <StoreProvider>
        <Form />
      </StoreProvider>
    );
    const user = userEvent.setup();

    const nameInput = screen.getByLabelText('Name');
    const dateInput = screen.getByLabelText('Date');
    const countryInput = screen.getByLabelText('Country');
    const genderInput = screen.getByLabelText('Male');
    const photoInput = screen.getByLabelText<HTMLInputElement>('Photo');
    const termsInput = screen.getByLabelText('I consent to my personal data');
    const submitBtn = screen.getByText('Submit');

    await user.type(nameInput, mockRegistrationData.name);
    await user.type(dateInput, mockRegistrationData.date);
    await user.selectOptions(countryInput, mockRegistrationData.country);
    await user.click(genderInput);
    await user.selectOptions(countryInput, mockRegistrationData.country);
    await user.upload(photoInput, mockRegistrationData.file);
    await user.click(termsInput);

    expect(nameInput).toHaveValue(mockRegistrationData.name);
    expect(dateInput).toHaveValue(mockRegistrationData.date);
    expect(countryInput).toHaveValue(mockRegistrationData.country);
    expect(genderInput).toBeChecked();
    expect(photoInput.files?.[0]).toStrictEqual(mockRegistrationData.file);
    expect(termsInput).toBeChecked();

    await user.click(submitBtn);

    const modalWindow = screen.getByText('New user successfully created!');

    expect(modalWindow).toBeInTheDocument();

    await waitFor(
      () => {
        expect(screen.queryByText('New user successfully created!')).not.toBeInTheDocument();
      },
      { timeout: 1000 }
    );
  });
  it(`Form shouldn't be submited because of unvalid inputs`, async () => {
    render(
      <StoreProvider>
        <Form />
      </StoreProvider>
    );
    const user = userEvent.setup();

    const nameInput = screen.getByLabelText('Name');
    const dateInput = screen.getByLabelText('Date');

    const submitBtn = screen.getByText('Submit');

    await user.type(nameInput, mockRegistrationDataInvalid.name);
    await user.type(dateInput, mockRegistrationDataInvalid.date);

    await user.click(submitBtn);

    const nameError = screen.getByText(
      'Name must start with a upper letter and have at least 2 letters'
    );
    const dateError = screen.getByText('Date must be lower than current date');
    const emptyErrors = screen.getAllByText('Required field');

    expect(nameError).toBeInTheDocument();
    expect(dateError).toBeInTheDocument();
    expect(emptyErrors.length).toBe(3);
  });
});
