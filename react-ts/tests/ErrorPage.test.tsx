import { render, screen } from '@testing-library/react';
import React from 'react';
import ErrorPage from '../src/pages/ErrorPage/ErrorPage';

describe('ErrorPage', () => {
  it('should have title', () => {
    render(<ErrorPage />);
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
});
