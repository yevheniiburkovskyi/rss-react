import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { ReducerType, initStore } from './redux/store';
import './index.scss';

type WindowInstanse = Window &
  typeof globalThis & {
    __PRELOADED_STATE__?: ReducerType;
  };

const store = initStore((window as WindowInstanse).__PRELOADED_STATE__);

delete (window as WindowInstanse).__PRELOADED_STATE__;

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
