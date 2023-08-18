// ./src/test-utils.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
