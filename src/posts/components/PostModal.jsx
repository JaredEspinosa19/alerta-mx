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

export const PostModal = () => {

  const {activeHomePost} = usePostsStore();

  const [post, setPost] = useState({});
  const {isModalOpen, closeModal} = useUiStore();

  useEffect(() => {
    setPost(activeHomePost);
  }, [activeHomePost])
  
  const onCloseModal = () => {
    closeModal();
  }

  if (isModalOpen === false) {
    return(<Modal
      className={'mt-4 modal'}
      overlayClassName={'modal-fondo'}
      closeTimeoutMS={200}
      isOpen={isModalOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
    >
      No hay información
    </Modal>)
  }

  return (
    <Modal
      className={'mt-4 modal'}
      overlayClassName={'modal-fondo'}
      closeTimeoutMS={200}
      isOpen={isModalOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
    >
      <div className='row g-4'>
        <div className='col-12 border-bottom'>
          <span className='fw-semibold'>Usuario:</span>
          <span className='m-2'>{ post.isAnonymus === true
            ? 'Anónimo'
            : post?.user.name}</span>
        </div>
        
        <div className="col-12 border-bottom">
          <div className='row'>
            <div className='col-6'>
              <span className='fw-semibold'>Fecha:</span>
              <span className='m-2'>{post.date}</span>
            </div>
            <div className="col-6">
              <span className='fw-semibold'>Hora:</span>
              <span className='m-2'>{post.hour}</span>
            </div>
          </div>
        </div>

        <div 
          className="col-12 border-bottom"
          >
          <span className='fw-semibold'>Dirección:</span>
          <span className='m-2'>{
            `${post.address}, ${post.town}, Ciudad de México`
            }</span>
        </div>

        <div className="col-12 border-bottom">
          <span className='fw-semibold'>Delito:</span>
          <span className='m-2'>{post.crime}</span>
        </div>

        <div className="col-12">
          <div className='fw-semibold w-100'>Descripción:</div>
          <span className=''>{post.description}</span>
        </div>

      </div>

    </Modal>
  )
}
