import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import CardList from '../src/pages/Home/CardList/CardList';
import { vi } from 'vitest';

vi.mock('node-fetch');

const mockData = {
  products: [
    {
      id: 1,
      thumbnail: 'someImage1',
      title: 'title1',
      price: 10,
    },
    {
      id: 2,
      thumbnail: 'someImage2',
      title: 'title2',
      price: 20,
    },
  ],
};

describe('CardList ', () => {
  beforeEach(() => {
    global.fetch = vi.fn().mockResolvedValue({
      json: () => Promise.resolve(mockData),
    });
  });

  it('renders loading message when data is not yet loaded', () => {
    render(<CardList searchValue="" />);
    const loadingMessage = screen.getByText('Loading...');
    expect(loadingMessage).toBeInTheDocument();
  });

  it('renders card list with correct data when data is loaded', async () => {
    render(<CardList searchValue="" />);
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
    const cardTitles = screen.getAllByTestId('product-card-title');
    expect(cardTitles).toHaveLength(2);
    expect(cardTitles[0]).toHaveTextContent('title1');
    expect(cardTitles[1]).toHaveTextContent('title2');
  });

  it('renders only cards that match search value', async () => {
    render(<CardList searchValue="title2" />);
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
    const cardTitles = screen.getByTestId('product-card-title');
    expect(cardTitles).toHaveTextContent('title2');
  });
});
