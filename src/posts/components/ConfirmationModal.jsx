import { useEffect, useState } from 'react';
import Modal from 'react-modal';


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

export const PostModal = () => {



  useEffect(() => {
    setPost(activeHomePost);
  }, [activeHomePost])
  



  return (
    <Modal
      className={'mt-4 modal'}
      overlayClassName={'modal-fondo'}
      closeTimeoutMS={200}
      isOpen={isModalOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
    >
    
      <div
      row>


      </div>

    </Modal>
  )
}