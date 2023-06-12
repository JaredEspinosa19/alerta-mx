import { useDispatch, useSelector } from "react-redux"
import { onOpenHomeModal, onCloseHomeModal, onOpenUserModal, onCloseUserModal } from "../store/ui/uiSlice";


export const useUiStore = () => {

  const dispatch = useDispatch();
  const {isHomeModalOpen, isUserModalOpen} = useSelector(state => state.ui);

  const openHomeModal = () => {
    dispatch(onOpenHomeModal());
  }

  const closeHomeModal = () => {
    dispatch(onCloseHomeModal()); 
  }

  const openUserModal = () => {
    dispatch(onOpenUserModal());
  }

  const closeUserModal = () => {
    dispatch(onCloseUserModal());
  }

  return {
    isHomeModalOpen,
    isUserModalOpen,

    openHomeModal,
    closeHomeModal,
    openUserModal,
    closeUserModal,
  }
}