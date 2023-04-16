import { render, screen } from '@testing-library/react';
import React from 'react';
import { mockApiResponseData } from '../../../../mocks/mocks';
import Card from './Card';

describe('Card', () => {
  it('should render', () => {
    render(<Card cardData={mockApiResponseData[0]} setCardId={vi.fn()} setModal={vi.fn()} />);
    const card = screen.getByText(mockApiResponseData[0].name);
    const image = screen.getByAltText(mockApiResponseData[0].name);
    expect(card).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
