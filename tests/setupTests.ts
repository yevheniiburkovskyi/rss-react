import matchers from '@testing-library/jest-dom/matchers';
import { store } from '../src/redux/store';
import { server } from '../src/mocks/server';
import { rickAndMortyApi } from '../src/service/rickAndMortyApi';

expect.extend(matchers);

beforeAll(() => server.listen());

afterEach(() => {
  store.dispatch(rickAndMortyApi.util.resetApiState());
  server.resetHandlers();
});

afterAll(() => server.close());
