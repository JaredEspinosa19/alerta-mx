import { useMemo } from "react";
import { useAuthStore, usePostsStore } from "../../hooks";
import { PostItem } from "./PostItem";
import { UserPostItem } from "./UserPostItem";

export const UserPostLists = () => {

  const {user} = useAuthStore();
  const {posts} = usePostsStore();

  const newPosts = useMemo(() => posts.filter(
    (post) => post.user._id === user.uid ), [posts]);
  
  return (
    <> 
      <div 
        className="row g-1 mt-2 vertical-scroll"
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
