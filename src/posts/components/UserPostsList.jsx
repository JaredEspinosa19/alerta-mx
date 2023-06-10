import { useMemo } from "react";
import { useAuthStore, usePostsStore } from "../../hooks";
import { PostItem } from "./PostItem";
import { UserPostItem } from "./UserPostItem";

export const UserPostLists = () => {

  const {user} = useAuthStore();
  const {posts} = usePostsStore();

  const newPosts = useMemo(() => posts.filter(
    (post) => post.user.id === user.id ), [posts]);
  
  return (
    <> 
      <div 
        className="row ms-3 me-3 ms-md-5 me-md-5 border g-3 mt-2"
        style={{overflow:'auto', height: '30rem'}}
        >
        {
          newPosts.map((post,index) =>
            (<UserPostItem key={index}
              {...post}/>)
          )
        }
      </div>
    </>
  )
  
}
