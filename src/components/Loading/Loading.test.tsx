import { render, screen } from '@testing-library/react';
import React from 'react';
import Loading from './Loading';

describe('Header', () => {
  it('Header should have navigation', () => {
    render(<Loading />);
    const loading = screen.getByTestId('loading');
    expect(loading).toBeInTheDocument();
  });
});
