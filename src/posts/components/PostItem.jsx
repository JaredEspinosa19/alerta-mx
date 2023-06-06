
import { usePostsStore, useUiStore } from '../../hooks';

export const PostItem = (post) => {

  const { openModal } = useUiStore();
  const {startSetActiveHomePost} = usePostsStore();

  const onClickPost = () => {
    startSetActiveHomePost(post);
  }


  return (
    <>
    <button 
      onClick={onClickPost}
      onDoubleClick={openModal}
      >
      <div className="border rounded-4 p-2 mt-2 mb-2 text-start">
        <div className="row g-1">

          <div className="col-2">
          </div>
          
          <div className="col-10">
            <div className="row g-1">
              
              <div className="col-8">
                Emilio Jared Espinosa
              </div>
              
              <div className="col-4">
                {post.date}
              </div>

              <div className="col-12 border w-100">
                {post.address}
              </div>

            </div>
          </div>

          <div className="col-12 ">
            <p>{post.description}</p>
          </div>

        </div>
      </div>
      </button>
    </>
  )
}
