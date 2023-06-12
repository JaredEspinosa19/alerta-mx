import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { usePostsStore, useUiStore } from '../../hooks';



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ConfirmationModal = () => {

  const {isUserModalOpen, closeUserModal} = useUiStore();
  const { startDeletePost, startLoadingPosts } = usePostsStore();

  const cancelAction = (event) => {
    event.preventDefault();
    closeUserModal();
  }

  const confirmAction = (event) => {
    event.preventDefault()
    startDeletePost();
    // startLoadingPosts(); Se realiza una consulta para traer nuevos post
    closeUserModal();
  }

  return (
    <Modal
      className={'mt-4 modal modal-3'}
      overlayClassName={'modal-fondo'}
      closeTimeoutMS={200}
      isOpen={isUserModalOpen}
      onRequestClose={closeUserModal}
      style={customStyles}
    >
      <div className='row'>
        
        <div className='col-12  text-center text-break '>
          <h4 className='fw-semibold'>¿Seguro que quieres eliminar tu reporte?</h4>
        </div>



        <div className='col-12 mt-4'>
          <div className='row'>
            <div className='col-6 position-relative'>
              <div className='position-absolute top-50 start-50 translate-middle'>
                <button 
                  className='btn btn-primary'
                  style={{width: '8rem'}}
                  onClick={cancelAction}>
                  Cancelar
                </button>   
              </div>     
            </div>

            <div className='col-6 position-relative'>
              <div className='position-absolute top-50 start-50 translate-middle'>
                <button 
                  className='btn btn-primary'
                  style={{width: '8rem'}}
                  onClick={confirmAction}>
                  Confirmar
                </button>   
              </div>
            </div>

          </div>
        </div>
      </div>

    </Modal>
  )
}
