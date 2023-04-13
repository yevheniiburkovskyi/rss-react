import { rest } from 'msw';
import { mockApiResponseData } from './mocks';

export const handlers = [
  rest.get('https://rickandmortyapi.com/api/character/?', (req, res, ctx) => {
    const name = req.url.searchParams.get('name') || '';
    return res(
      ctx.status(200),
      ctx.json(mockApiResponseData.results.filter((elem) => elem.name.includes(name)))
    );
  }),
];
