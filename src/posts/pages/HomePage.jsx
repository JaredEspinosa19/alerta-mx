import { PostsList, Map, PostModal } from '../components';


export const HomePage = () => {

  document.title = 'Home';

  return (
    <>
      <div className="container pt-4 pb-5">
        <div className="row">

          <div className="col-12 col-lg-6">
            <Map  />
          </div>

          <div 
            className="col-12 col-lg-6 p-3"
            style={{overflow: 'auto', height: '20rem'}}>           
            <PostsList />
          </div>
          
          <PostModal />
          
        </div>
      </div>
    </>
  )
}
