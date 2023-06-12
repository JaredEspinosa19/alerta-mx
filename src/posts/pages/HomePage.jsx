import { PostsList, Map, PostModal } from '../components';


export const HomePage = () => {

  document.title = 'Home';

  return (
    <>
      <div 
        className="container pt-2">
        <div className="row">

          <div className="col-12 col-lg-6">
            <Map  />
          </div>

          <div 
            className="col-12 col-lg-6 mb-2 "
            style={{ height: '38rem'}}>           
            <PostsList />
          </div>
          
          <PostModal />
          
        </div>
      </div>
    </>
  )
}
