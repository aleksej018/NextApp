import {configureStore} from '@reduxjs/toolkit';
import userReducer from './state/userSlice';
import tokenSlice from './state/tokenSlice';

export const store = configureStore({
  reducer: {user: userReducer, token: tokenSlice},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
