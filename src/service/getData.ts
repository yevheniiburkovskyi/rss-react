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

export default async function getData(query = '') {
  const url = encodeURI(`https://rickandmortyapi.com/api/character/?name=${query}`);
  const response = await fetch(url);
  if (response.status === 404) {
    return null;
  }
  const result: Promise<IData> = response.json();
  return result;
}

export async function getCharacter(id: string) {
  const url = encodeURI(`https://rickandmortyapi.com/api/character/${id}`);
  const result: ICharacter = await fetch(url).then((res) => res.json());
  return result;
}
