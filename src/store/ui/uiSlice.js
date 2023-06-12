import { createSlice } from '@reduxjs/toolkit'

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
   isHomeModalOpen: false,
   isUserModalOpen: false,
  },
  reducers: {
    onOpenHomeModal: (state) => {
      state.isHomeModalOpen = true;
    },
    onCloseHomeModal: (state) => {
      state.isHomeModalOpen = false;
    },
    onOpenUserModal: (state) => {
      state.isUserModalOpen = true;
    },
    onCloseUserModal: (state) => {
      state.isUserModalOpen = false;
    },
 }
})

export const { 
  onOpenHomeModal,
  onCloseHomeModal,
  onOpenUserModal,
  onCloseUserModal,
  
 } = uiSlice.actions;