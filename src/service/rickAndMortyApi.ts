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
