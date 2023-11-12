import { render, screen } from '@testing-library/react';
import UserCard from '../src/pages/FormPage/UserCard/UserCard';
import React from 'react';
import { vi } from 'vitest';
const mockUserData = {
  id: 1,
  name: 'Eugene',
  date: '03-03-2020',
  country: 'Ukraine',
  sex: 'Male',
  checkboxe: true,
  file: new File(['file contents'], 'example.png', { type: 'image/png' }),
};

describe('UserCard component', () => {
  beforeEach(() => {
    URL.createObjectURL = vi.fn().mockImplementation(() => 'http://example.com/image.png');
  });
  it('renders name correctly', () => {
    render(<UserCard userData={mockUserData} />);

    const field = screen.getByTestId('name');

    expect(/Eugene/gi.test(field.textContent as string)).toEqual(true);
  });

  it('renders image correctly', () => {
    render(<UserCard userData={mockUserData} />);
    const imageElement = screen.getByTestId<HTMLImageElement>('image');
    expect(imageElement.src).toBe('http://example.com/image.png');
  });
  it('renders src', () => {
    render(<UserCard userData={{ ...mockUserData, file: undefined }} />);
    const imageElement = screen.getByTestId<HTMLImageElement>('image');
    expect(imageElement.hasAttribute('src')).toEqual(true);
  });
});
