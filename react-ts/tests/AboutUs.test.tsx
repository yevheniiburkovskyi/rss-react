import { render, screen } from '@testing-library/react';
import React from 'react';
import AboutUs from '../src/pages/AboutUs/AboutUs';

describe('AboutUs', () => {
  it('should have title', () => {
    render(<AboutUs />);
    expect(screen.getByText(/about us/i)).toBeInTheDocument();
  });
});
