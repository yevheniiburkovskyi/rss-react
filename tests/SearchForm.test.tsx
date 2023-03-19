import { render, screen } from '@testing-library/react';
import React from 'react';
import SearchForm from '../src/components/SearchForm/SearchForm';
import { vi } from 'vitest';

describe('SearchForm', () => {
  it('should be in document', () => {
    render(<SearchForm inputValue="" setInput={vi.fn()} />);
    const searchItem = screen.getByRole('search');
    expect(searchItem).toBeInTheDocument();
  });
});
