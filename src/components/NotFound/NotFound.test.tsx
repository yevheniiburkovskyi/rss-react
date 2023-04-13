import { render, screen } from '@testing-library/react';
import React from 'react';
import NotFound from './NotFound';

describe('NotFound', () => {
  it('should render', () => {
    render(<NotFound />);
    const text = screen.getByText('Nothing found');

    expect(text).toBeInTheDocument();
  });
});
