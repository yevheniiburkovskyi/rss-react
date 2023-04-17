import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICharacter, IData } from '../service/rickAndMortyApi';

export const fetchCharacters = createAsyncThunk<IData, string>(
  'search/fetchCharacters',
  async function (name: string) {
    const url = encodeURI(`https://rickandmortyapi.com/api/character/?name=${name}`);
    const response = await fetch(url);
    if (response.status === 404) {
      throw new Error('Server Error!');
    }
    const data: Promise<IData> = await response.json();
    return data;
  }
);

interface fetchState {
  search: string;
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  results: ICharacter[];
}

export const searchSlice = createSlice({
  name: 'search',
  initialState: <fetchState>{
    search: '',
    status: 'idle',
    results: [],
  },
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.results = action.payload.results;
      state.status = 'succeeded';
    });
    builder.addCase(fetchCharacters.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(fetchCharacters.rejected, (state) => {
      state.status = 'failed';
    });
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
