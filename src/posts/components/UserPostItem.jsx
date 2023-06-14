import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { usePostsStore, useUiStore } from "../../hooks"
import { UserPagePostItem } from "./"

export const UserPostItem = (post) => {

  const {startSetActiveUserPost, isDeleting} = usePostsStore();
  const {openUserModal} = useUiStore();
  
  const onClick = (event) => {
    event.preventDefault();
    startSetActiveUserPost(post);
    openUserModal();
  }

  return (
    <>
    <div className="col-12 p-3 ">
        <div className="row">
          
          <div className="col-md-1 col-2 position-relative">
            <div className="position-absolute top-50 start-50 translate-middle">
              <button
                className="btn btn-primary delete-btn"
                onClick={onClick}
                disabled={isDeleting}
                >
                <FontAwesomeIcon 
                  icon={faXmark}
                  style={{color: 'white'}}
                  size="2xl"/>
              </button>
            </div>
          </div>
          
          <div className="col-md-11 col-10">
            <UserPagePostItem {...post} />
          </div>
        
      </div>
    </div>
    </>
  )
}
