import { render, screen } from '@testing-library/react';
import React from 'react';
import FormModal from './FormModal';

describe('FormModal', () => {
  it('should render', () => {
    const root = document.createElement('div');
    root.id = 'overlay-root';
    document.body.append(root);

    render(<FormModal />);

    const text = screen.getByText('New user successfully created!');
    expect(text).toBeInTheDocument();
  });
});
