import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { renderToPipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';
import { initStore } from './redux/store';
import { rickAndMortyApi } from './service/rickAndMortyApi';
import App from './App';

export const render = async (url: string, options: RenderToPipeableStreamOptions) => {
  const store = initStore();
  store.dispatch(rickAndMortyApi.endpoints.getAllCharacters.initiate(''));
  await Promise.all(store.dispatch(rickAndMortyApi.util.getRunningQueriesThunk()));
  const preloadedState = store.getState();
  const injectPreload = () => `
    <script>
    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
    </script>
    `;

  const stream = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    options
  );

  return { stream, injectPreload };
};
