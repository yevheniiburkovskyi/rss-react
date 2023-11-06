import { act, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import Home from './Home';
import StoreProvider from '../../../tests/test-utils';

describe('FormPage', () => {
  it('shoult render', async () => {
    await act(async () => {
      render(
        <StoreProvider>
          <Home />
        </StoreProvider>
      );
    });
    await waitFor(() => {
      const list = screen.getByRole('list');
      const cards = screen.getAllByRole('listitem');
      expect(list).toBeInTheDocument();
      expect(cards.length).toBe(2);
    });
  });
});
