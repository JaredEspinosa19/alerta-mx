import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

export const UserPagePostItem = (post) => {


  return (
    <>
      <div 
        className='col-12 text-break overflow-hidden pt-1 '
        style={{ textOverflow: 'revert-layer'}}>
        <button 
          style={{width: '100%', height: '100%', backgroundColor: 'transparent'}}>
          <div 
            className="rounded-4 p-2 mt-2 mb-2 text-start "
            >
            <div className="row g-1">
              
              <div className="col-2 position-relative">
                <FontAwesomeIcon 
                  icon={faCircleUser}
                  className='position-absolute top-50 start-50 translate-middle'
                  size='2xl'/>
              </div>
              
              <div className="col-10">
                <div className="row g-1">
                  
                  <div className="col-md-4 col-6">
                    <b>{post.crime}</b>
                  </div>

                  <div className="col-md-4 col-6">
                    {post.hour}
                  </div>

                  <div className="col-md-4 col-12" >
                    {post.date}
                  </div>



                  <div className="col-12">
                    {`${post.address}, ${post.town}, CDMX, México`}
                  </div>

                </div>
              </div>

              <div className="col-12">
                {post.description}
              </div>

            </div>
          </div>
        </button>
      </div>
    </>
  )
}