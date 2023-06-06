import { useMemo } from "react";
import { useAuthStore, usePostsStore } from "../../hooks";
import { PostItem } from "./PostItem";

export const UserPostLists = () => {

  const {user} = useAuthStore();
  const {posts} = usePostsStore();

  const newPosts = useMemo(() => posts.filter(
    (post) => post.user.id === user.id ), [posts]);
  
  return (
    <> 
      <div 
        className="row ms-3 me-3 ms-md-5 me-md-5 border"
        style={{overflow:'auto', height: '25rem'}}
        >
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