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
      <button onClick={reloadPosts}>
        Reload Posts
      </button>
      <div className="row g-1" >
        {
          newPosts.map(post =>
            (<PostItem 
              key={post.description}
              {...post}
            />)
          )
        }
      </div>
    </>
  )
}
