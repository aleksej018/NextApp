import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';
import {Token} from '../../../../util/interface';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface TokenSlice {
  value: Token | null;
}

const initialState: TokenSlice = {
  value: null,
};

export const tokenSlice = createSlice({
  name: 'token',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<Token>) => {
      state.value = action.payload;
      AsyncStorage.setItem('@token', JSON.stringify(action.payload));
    },
    removeToken: state => {
      state.value = null;
      AsyncStorage.removeItem('@token');
    },
  },
});

export const {setToken, removeToken} = tokenSlice.actions;

export const getToken = (state: RootState) => state.token.value;

export default tokenSlice.reducer;
