import { render, screen } from '@testing-library/react';
import React from 'react';
import SearchForm from './SearchForm';
import * as reduxHooks from 'react-redux';
import userEvent from '@testing-library/user-event';
import * as actions from '../../redux/searchSlice';

vi.mock('react-redux');

describe('SearchForm', () => {
  it('should render', () => {
    render(<SearchForm />);
    const placeholder = screen.getByPlaceholderText('Put character name...');
    expect(placeholder).toBeInTheDocument();
  });
  it('should get value from store', () => {
    const mockedSelector = vi.spyOn(reduxHooks, 'useSelector');
    mockedSelector.mockReturnValue('Rick');

    render(<SearchForm />);

    const search = screen.getByPlaceholderText('Put character name...');
    expect(search).toHaveValue('Rick');
  });
  it('should dispatch actions', async () => {
    const user = userEvent.setup();

    const mockedSelector = vi.spyOn(reduxHooks, 'useSelector');
    mockedSelector.mockReturnValue('');

    const mockedSetSearch = vi.spyOn(actions, 'setSearch');

    const mockedDispatch = vi.spyOn(reduxHooks, 'useDispatch');
    const dispatch = mockedDispatch.mockReturnValue(vi.fn());

    render(<SearchForm />);

    const search = screen.getByPlaceholderText('Put character name...');
    const button = screen.getByRole('button');

    await user.type(search, 'Morty');
    await user.click(button);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockedSetSearch).toHaveBeenCalledWith('Morty');
  });
});
