import { render, screen } from '@testing-library/react';
import Home from '../src/pages/Home/Home';
import React from 'react';

describe('Home', () => {
  it('search should be in document', () => {
    render(<Home />);
    const searchItem = screen.getByRole('search');
    expect(searchItem).toBeInTheDocument();
  });
});
