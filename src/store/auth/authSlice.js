import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking',
    user: {},
    errorMessage: 'null',
  },
  reducers: {
    onChecking: (state) => {
      state.status = 'checking';
      state.user = {};
      state.errorMessage = null;
    },
    onLogIn: (state, action) => {
      state.status = 'authenticated',
      state.user = action.payload;
      state.errorMessage = null;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    onLogout: (state, action) => {
      state.status = 'not-authenticated';
      state.user = {};
      state.errorMessage = action?.payload || null;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = null;
    }
 }
});

export const { 
  onChecking,
  onLogIn,
  onLogout,
  clearErrorMessage,
  setErrorMessage
 
 } = authSlice.actions;