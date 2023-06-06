import { createSlice } from '@reduxjs/toolkit';

// TODO: DEFINIR LO QUE VA TENER LAS NOTAS

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
   isSaving: false,
   messageSaved: undefined,
   posts: [],
   activeHomePost: null,
   activeUserPost: null,
   mapPosition: {
    lat: 19.4326,
    lng: -99.1332,
   }
  },

  reducers: {
    savingNewPost: (state) => {
      state.isSaving = true;
    },
    addNewPost: (state, action) => { //Agregar una nota
      state.posts.push(action.payload);
      state.isSaving = false;
    },
    setActiveHomePost: (state, action) => { //La nota que se seleciona es la activa en el area del home
      state.activeHomePost = action.payload;
    },
    setActiveUserPost: (state, action) => { //La nota que se seleciona es la activa en el area del home
      state.activeUserPost = action.payload;
    },
    setPosts: (state, action) => { //Se guardan las notas traídas mediante la request
      state.posts = action.payload;
    },
    setMapPosition: (state, action) => {//Se cambia la posición del mapa
      state.mapPosition = action.payload;
    }
 }
})

export const { 
  savingNewPost,
  addNewPost,
  setActiveHomePost,
  setActiveUserPost,
  setPosts,
  setMapPosition,

 } = postsSlice.actions;