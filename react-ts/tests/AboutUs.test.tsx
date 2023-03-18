import { render, screen } from '@testing-library/react';
import React from 'react';
import AboutUs from '../src/pages/AboutUs/AboutUs';

describe('AboutUs', () => {
  it('should have text', () => {
    render(<AboutUs />);
    const mainText = screen.getByText(/lorem/i);
    expect(mainText).toBeInTheDocument();
  });
});
