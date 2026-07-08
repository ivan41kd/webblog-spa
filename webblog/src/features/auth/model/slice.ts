import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  isAuth: boolean;
  name: string | null;
} = {
  isAuth: !!localStorage.getItem('user'),
  name: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user') ?? '').name
    : null,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      localStorage.setItem('user', JSON.stringify(action.payload));
      if (localStorage.getItem('user')) {
        state.isAuth = true;
        state.name = JSON.parse(localStorage.getItem('user') as string).name;
      }
    },
    signout: (state) => {
      if (localStorage.getItem('user')) {
        localStorage.removeItem('user');
        state.isAuth = false;
      }
    },
  },
});

export const { login, signout } = AuthSlice.actions;

export const { reducer: authReducer } = AuthSlice;
