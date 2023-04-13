import { render, screen } from '@testing-library/react';
import React from 'react';
import { mockApiResponseData } from '../../../../../tests/mocks/mocks';
import Card from './Card';

describe('Card', () => {
  it('should render', () => {
    render(
      <Card cardData={mockApiResponseData.results[0]} setCardId={vi.fn()} setModal={vi.fn()} />
    );
    const card = screen.getByText(mockApiResponseData.results[0].name);
    const image = screen.getByAltText(mockApiResponseData.results[0].name);
    expect(card).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
