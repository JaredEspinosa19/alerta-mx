import { faRectangleXmark, faSquareXmark, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PostItem } from "./PostItem"

export const UserPostItem = (post) => {

  const onClick = () => {
    console.log('Boton de eliminar objeto');
    console.log({post});
  }

  return (
    <>
    <div className="col-12">
        <div className="row">
          
          <div className="col-1 position-relative">
            <div className="position-absolute top-50 start-50 translate-middle">
              <button
                className="btn btn-primary delete-btn"
                onClick={onClick}
                >
                <FontAwesomeIcon 
                  icon={faXmark}
                  style={{color: 'white'}}
                  size="2xl"/>
              </button>
            </div>
          </div>
          
          <div className="col-11">
            <PostItem 
              {...post}/>
          </div>
        
      </div>
    </div>
    </>
  )
}
