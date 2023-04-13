import { render, screen } from '@testing-library/react';
import React from 'react';
import Button from './Button';

describe('Button', () => {
  it('should render', async () => {
    render(<Button />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
