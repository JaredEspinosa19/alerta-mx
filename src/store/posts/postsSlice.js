import { createSlice } from '@reduxjs/toolkit';

// TODO: DEFINIR LO QUE VA TENER LAS NOTAS

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
   isSaving: false,
   isDeleting: false,
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
    deletingPost: (state) => {
      state.isDeleting = true;
    },
    stopDeletingPost: (state) => {
      state.isDeleting = false;
    },
    addNewPost: (state, action) => { //Agregar una nota
      state.posts.unshift(action.payload);
      state.isSaving = false;
    },
    setActiveHomePost: (state, action) => { //La nota que se seleciona es la activa en el area del home
      state.activeHomePost = action.payload;
    },
    setActiveUserPost: (state, action) => { //La nota que se seleciona es la activa en la pagina del usuario
      state.activeUserPost = action.payload;
    },
    deletePost: (state) =>{//Borra el post
      state.posts = state.posts.filter(post => post.id !== state.activeUserPost.id)
      state.activeUserPost = null;      
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
  deletingPost,
  stopDeletingPost,
  addNewPost,
  deletePost,
  setActiveHomePost,
  setActiveUserPost,
  setPosts,
  setMapPosition,

 } = postsSlice.actions;