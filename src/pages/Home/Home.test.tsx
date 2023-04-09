import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Home from './Home';

vi.mock('node-fetch');

const mockData = {
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
  it('Сard shoud be rendered', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: () => Promise.resolve(mockData),
    });
    render(<Home />);
    const user = userEvent.setup();
    const root = document.createElement('div');
    root.id = 'overlay-root';
    document.body.append(root);

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
    const input = screen.getByPlaceholderText(/Put character name.../i);
    const cardName = screen.getByText(/Rick Sanchez/i);
    expect(input).toBeInTheDocument();
    expect(cardName).toBeInTheDocument();
    user.click(cardName);
    global.fetch = vi.fn().mockResolvedValue({
      json: () => Promise.resolve(mockData.results[0]),
    });
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
    expect(screen.getByText(/location/i)).toBeInTheDocument();
  });
  it('Error shoud be rendered', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: () => Promise.resolve(null),
    });
    render(<Home />);
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
    const input = screen.getByPlaceholderText(/Put character name.../i);
    const error = screen.getByText(/nothing found/i);
    expect(input).toBeInTheDocument();
    expect(error).toBeInTheDocument();
  });
});
