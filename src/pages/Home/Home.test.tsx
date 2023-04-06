import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import Home from './Home';

vi.mock('node-fetch');

const mockData = {
  info: {
    count: 826,
    pages: 42,
    next: 'https://rickandmortyapi.com/api/character/?page=2',
    prev: null,
  },
  results: [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
        name: 'Earth',
        url: 'https://rickandmortyapi.com/api/location/1',
      },
      location: {
        name: 'Earth',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      episode: [
        'https://rickandmortyapi.com/api/episode/1',
        'https://rickandmortyapi.com/api/episode/2',
      ],
      url: 'https://rickandmortyapi.com/api/character/1',
      created: '2017-11-04T18:48:46.250Z',
    },
  ],
};

describe('Home', () => {
  beforeEach(() => {
    global.fetch = vi.fn().mockResolvedValue({
      json: () => Promise.resolve(mockData),
    });
  });
  it('Search shoud be rendered', async () => {
    render(<Home />);
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
    const input = screen.getByPlaceholderText(/Put character name.../i);
    const cardName = screen.getByText(/Rick Sanchez/i);
    expect(input).toBeInTheDocument();
    expect(cardName).toBeInTheDocument();
  });
});
