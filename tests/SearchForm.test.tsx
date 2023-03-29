import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import SearchForm from '../src/components/SearchForm/SearchForm';

describe('<SearchForm />', () => {
  it('passes inputValue prop to input element', () => {
    const inputValue = 'test';
    render(<SearchForm inputValue={inputValue} setInputValue={() => {}} />);
    const input = screen.getByRole<HTMLInputElement>('search');
    expect(input.value).toEqual(inputValue);
  });

  it('calls setInputValue function when input value changes', () => {
    const inputValue = 'test';
    const setInputValueMock = vi.fn();
    render(<SearchForm inputValue="" setInputValue={setInputValueMock} />);
    const input = screen.getByRole<HTMLInputElement>('search');
    fireEvent.change(input, { target: { value: inputValue } });
    expect(setInputValueMock).toHaveBeenCalledWith(inputValue);
  });
});
