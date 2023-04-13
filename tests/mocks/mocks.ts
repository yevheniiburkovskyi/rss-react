// import { IUserData } from '../../src/pages/FormPage/FormPage';

export const mockUserDataValid = {
  name: 'Eugene',
  date: '03-04-2021',
  country: 'Poland',
  gender: 'male',
  filePath: 'mock/path',
  terms: true,
};
export const mockRegistrationData = {
  name: 'Eugene',
  date: '1990-01-01',
  country: 'Ukraine',
  file: new File(['hello'], 'hello.png', { type: 'image/png' }),
};
export const mockRegistrationDataInvalid = {
  name: 'e',
  date: '2050-01-01',
  country: 'Ukraine',
  file: new File(['hello'], 'hello.png', { type: 'image/png' }),
};

export const mockApiResponseData = {
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
