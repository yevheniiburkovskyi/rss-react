import { render, screen } from '@testing-library/react';
import React from 'react';
import FormPage from './FormPage';
import * as reduxHooks from 'react-redux';
import { mockUserDataValid } from '../../mocks/mocks';

vi.mock('react-redux');
describe('FormPage', () => {
  it('shoult render', () => {
    vi.spyOn(reduxHooks, 'useSelector').mockReturnValue([mockUserDataValid]);
    render(<FormPage />);
    const form = screen.getByRole('list');
    expect(form).toBeInTheDocument();
  });
});
