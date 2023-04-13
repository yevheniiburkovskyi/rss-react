import { render, screen } from '@testing-library/react';
import React from 'react';
import Container from './Container';

describe('Container', () => {
  it('should render', () => {
    render(<Container>Hello world</Container>);
    const text = screen.getByText('Hello world');
    expect(text).toBeInTheDocument();
  });
});
