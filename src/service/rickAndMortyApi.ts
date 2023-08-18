import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export interface IData {
  results: ICharacter[];
}
export interface ICharacter {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  url: string;
}

export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query<IData, string>({
      query: (name = '') => `character/?name=${name}`,
    }),
    getSingleCharacter: builder.query<ICharacter, string>({
      query: (id: string) => `character/${id}`,
    }),
  }),
});

export const { useGetAllCharactersQuery, useGetSingleCharacterQuery } = rickAndMortyApi;
