import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';
import {User} from '../../../../util/interface';

interface UserSlice {
  value: User | null;
}

const initialState: UserSlice = {
  value: null,
};

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.value = action.payload;
    },
    removeUser: state => {
      state.value = null;
    },
  },
});

export const {setUser, removeUser} = userSlice.actions;

export const getUser = (state: RootState) => state.user.value;

export default userSlice.reducer;
