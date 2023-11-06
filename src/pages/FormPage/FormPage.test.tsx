import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import FormPage from './FormPage';

describe('FormPage', () => {
  beforeEach(() => {
    URL.createObjectURL = vi.fn().mockImplementation(() => 'http://example.com/image.png');
  });
  it('Form should be submited', async () => {
    const user = userEvent.setup();
    render(<FormPage />);
    const nameInput = screen.getByLabelText<HTMLInputElement>(/name/i);
    const dateInput = screen.getByLabelText<HTMLInputElement>(/date/i);
    const countryInput = screen.getByRole<HTMLSelectElement>('combobox');
    const genderInput = screen.getByLabelText<HTMLInputElement>(/female/i);
    const fileInput = screen.getByLabelText<HTMLInputElement>(/photo/i);
    const termsInput = screen.getByLabelText<HTMLInputElement>(/I consent to my personal data/i);
    const submitBtn = screen.getByText<HTMLButtonElement>(/submit/i);

    const registrationObj = {
      name: 'Nastia',
      date: '1990-01-01',
      country: 'Ukraine',
      file: new File(['hello'], 'hello.png', { type: 'image/png' }),
    };

    await user.type(nameInput, registrationObj.name);
    await user.type(dateInput, registrationObj.date);
    await user.selectOptions(countryInput, 'Ukraine');
    await user.click(genderInput);
    await user.upload(fileInput, registrationObj.file);
    await user.click(termsInput);

    const root = document.createElement('div');
    root.id = 'overlay-root';
    document.body.append(root);

    expect(nameInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(countryInput).toBeInTheDocument();
    expect(genderInput).toBeInTheDocument();
    expect(fileInput).toBeInTheDocument();
    expect(termsInput).toBeInTheDocument();

    await user.click(submitBtn);

    const modal = screen.getByText('New user successfully created!');

    expect(modal).toBeInTheDocument();

    await waitFor(
      () => {
        expect(screen.queryByText('New user successfully created!')).not.toBeInTheDocument();
      },
      { timeout: 1000 }
    );

    const card = screen.getByText(/Nastia/i);
    expect(card).toBeInTheDocument();
  });
  it(`Form shouldn't be submited because of unvalid inputs`, async () => {
    const user = userEvent.setup();
    render(<FormPage />);
    const nameInput = screen.getByLabelText<HTMLInputElement>(/name/i);
    const dateInput = screen.getByLabelText<HTMLInputElement>(/date/i);
    const submitBtn = screen.getByText<HTMLButtonElement>(/submit/i);

    const registrationObj = {
      name: 'nastia',
      date: '2030-01-01',
    };

    await user.type(nameInput, registrationObj.name);
    await user.type(dateInput, registrationObj.date);

    await user.click(submitBtn);

    const modal = screen.queryByText('New user successfully created!');

    expect(modal).not.toBeInTheDocument();

    const card = screen.queryByText(/Nastia/i);
    expect(card).not.toBeInTheDocument();
  });
  it(`Form shouldn't be submited beacuse of undefined inputs`, async () => {
    const user = userEvent.setup();
    render(<FormPage />);

    const submitBtn = screen.getByText<HTMLButtonElement>(/submit/i);

    user.click(submitBtn);
    const modal = screen.queryByText('New user successfully created!');

    expect(modal).not.toBeInTheDocument();

    const card = screen.queryByText(/Nastia/i);
    expect(card).not.toBeInTheDocument();
  });
});
