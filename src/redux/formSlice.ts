import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserData } from 'pages/FormPage/FormPage';

const registeredUsers: IUserData[] = [];

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    registeredUsers,
  },
  reducers: {
    addUser(state, action: PayloadAction<IUserData>) {
      state.registeredUsers.push(action.payload);
    },
  },
});

export const { addUser } = formSlice.actions;
export default formSlice.reducer;
