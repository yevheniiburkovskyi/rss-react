import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ICharacter } from '../service/rickAndMortyApi';

export const fetchCharacterDetails = createAsyncThunk<ICharacter, string>(
  'search/fetchCharactersDetails',
  async function (id: string) {
    const url = encodeURI(`https://rickandmortyapi.com/api/character/${id}`);
    const response = await fetch(url);
    if (response.status === 404) {
      throw new Error('Server Error!');
    }
    const data: Promise<ICharacter> = await response.json();
    return data;
  }
);

interface fetchState {
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  data: ICharacter | null;
}

export const detailsSlice = createSlice({
  name: 'details',
  initialState: <fetchState>{
    status: 'idle',
    data: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacterDetails.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'succeeded';
    });
    builder.addCase(fetchCharacterDetails.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(fetchCharacterDetails.rejected, (state) => {
      state.status = 'failed';
    });
  },
});

export default detailsSlice.reducer;
