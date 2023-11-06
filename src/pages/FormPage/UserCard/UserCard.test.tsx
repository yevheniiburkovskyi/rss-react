import { render, screen } from '@testing-library/react';
import React from 'react';
import { mockUserDataValid } from '../../../mocks/mocks';
import UserCard from './UserCard';

describe('UserCard', () => {
  it('should render', () => {
    render(<UserCard userData={mockUserDataValid} />);
    const name = screen.getByText(mockUserDataValid.name);
    const date = screen.getByText(mockUserDataValid.date);
    const country = screen.getByText(mockUserDataValid.country);

    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(country).toBeInTheDocument();
  });
});
