import { render, screen } from '@testing-library/react';
import React from 'react';
import Card from '../src/pages/Home/CardList/Card/Card';

const mockCardData = {
  id: 1,
  title: 'iPhone Galaxy +1',
  description: 'An apple mobile which is nothing like apple',
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: 'Apple',
  category: 'smartphones',
  thumbnail: '...',
  images: ['...', '...', '...'],
};

describe('Card', () => {
  it('should be in document', () => {
    render(<Card cardData={mockCardData} />);
    const cardItem = screen.getByTestId('product-card');
    expect(cardItem).toBeInTheDocument();
  });

  it('should have title', () => {
    render(<Card cardData={mockCardData} />);
    const titleItem = screen.getByTestId('product-card-title');
    expect(titleItem).toBeInTheDocument();
    expect(titleItem).toHaveTextContent(mockCardData.title);
  });

  it('should have buy btn', () => {
    render(<Card cardData={mockCardData} />);
    const buyText = screen.getByText(/buy/i);
    expect(buyText).toBeInTheDocument();
  });

  it('truncates long titles to 20 characters', () => {
    const longTitleCardData = {
      ...mockCardData,
      title: 'This title is very looooooooooooooooooooong',
    };

    render(<Card cardData={longTitleCardData} />);
    const title = screen.getByTestId('product-card-title');
    expect(title).toHaveTextContent('This title is very l...');
  });
});
