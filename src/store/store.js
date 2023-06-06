import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authSlice, postsSlice, uiSlice } from "./";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    posts: postsSlice.reducer,
    ui: uiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
});