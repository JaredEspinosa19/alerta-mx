import { PostItem } from './';
import { usePostsStore } from '../../hooks';
import { useEffect, useMemo } from 'react';

export const PostsList = () => {

  const {posts, startLoadingPosts} = usePostsStore();
  const newPosts = useMemo(() => posts, [posts]);

  const reloadPosts = () => {
    startLoadingPosts();
  }
  
  return (
    <>
      <div 
        className="row g-1"
        style={{height: '100%'}} >
        
        <div className='col-12 pt-3 text-center'>
          <h2 className="fw-semibold">Lista de Reportes</h2>
        </div>
        
        <div className="col-12 position-relative"
          style={{height: '2rem', width: '100%'}}>
            <button
              className='btn btn-primary load-reports' 
              style={{width: '100%'}}
              onClick={reloadPosts}>
              Cargar reportes
            </button>
        </div>

        <div 
          className='col-12 mt-3 overflow-y-auto vertical-scroll'
          style={{height: '80%'}}>
          <div className="row g-1" >
            {
              newPosts.map((post, index) =>
                (<PostItem 
                  key={index}
                  {...post}
                  />)
              )
            }
          </div>
        </div>

      </div>
    </>
  )
}
