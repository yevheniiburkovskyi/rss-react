import { render, screen } from '@testing-library/react';
import React from 'react';
import ErrorPage from './ErrorPage';

describe('ErrorPage', () => {
  it('should have text', () => {
    render(<ErrorPage />);
    const mainText = screen.getByText(/404/i);
    expect(mainText).toBeInTheDocument();
  });
});
