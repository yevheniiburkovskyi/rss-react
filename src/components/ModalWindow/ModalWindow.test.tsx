import { render, screen } from '@testing-library/react';
import React from 'react';
import ModalWindow from './ModalWindow';

describe('ModalWindow', () => {
  beforeEach(() => {
    const root = document.createElement('div');
    root.id = 'overlay-root';
    document.body.append(root);
  });
  it('should render', () => {
    render(<ModalWindow>New window</ModalWindow>);
    const text = screen.getByText('New window');
    const closeBtn = screen.getByText('✖');

    expect(text).toBeInTheDocument();
    expect(closeBtn).toBeInTheDocument();
  });
});
