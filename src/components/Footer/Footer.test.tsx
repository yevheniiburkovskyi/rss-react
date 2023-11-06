import { render, screen } from '@testing-library/react';
import React from 'react';
import Footer from './Footer';

describe('Footer', () => {
  it('Footer should be in document', async () => {
    render(<Footer />);
    const footer = screen.getByRole('footer');
    expect(footer).toBeInTheDocument();
  });
});
