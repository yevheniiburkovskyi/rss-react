import { render, screen } from '@testing-library/react';
import React from 'react';
import ErrorPage from '../src/pages/ErrorPage/ErrorPage';

describe('ErrorPage', () => {
  it('Should have title', () => {
    render(<ErrorPage />);
    const pageText = screen.getByText('404');
    expect(pageText).toBeInTheDocument();
  });
});
