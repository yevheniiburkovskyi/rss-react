import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => {
  it('Header should have navigation', async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const footer = screen.getByRole('navigation');
    expect(footer).toBeInTheDocument();
  });
});
