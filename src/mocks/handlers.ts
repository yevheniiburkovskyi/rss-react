import { rest } from 'msw';
import { mockApiResponseData } from './mocks';

import { fetch, Headers, Request, Response } from 'cross-fetch';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

export const handlers = [
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    const name = req.url.searchParams.get('name') || '';
    return res(
      // ctx.status(200),
      // ctx.json(mockApiResponseData.results.filter((elem) => elem.name.includes(name)))
      ctx.json({ results: mockApiResponseData })
    );
  }),
  rest.get('https://rickandmortyapi.com/api/character/:id', (req, res, ctx) => {
    // const { id } = req.params;
    // const data = mockApiResponseData.results.find((elem) => elem.id === +id);
    // data ? res(ctx.status(200), ctx.json(data)) : res(ctx.status(404));
    return res(ctx.status(200), ctx.json(mockApiResponseData[0]));
  }),
];
