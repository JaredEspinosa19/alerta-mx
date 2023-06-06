import { useDispatch, useSelector } from "react-redux"
import alertaMXApi from "../api/alertaMXApi";
import { setPosts, savingNewPost, setActiveHomePost, setMapPosition } from "../store";


export const usePostsStore = () => {

  const {posts, activeHomePost, activeUserPost} = useSelector(state => state.posts);
  const dispatch = useDispatch();


  const startSetActiveHomePost = (post) => {

    dispatch(setActiveHomePost(post));
    dispatch(setMapPosition({lat: post.lat, lng: post.lng}));
  
  }

  const startSavingNewPost = async (post) => {

    dispatch(savingNewPost());

    try {
      const {data} = await alertaMXApi.post('/posts/', post);
      // console.log(data);
      
    } catch (error) {
      console.log('Algo ocurrio con el evento');
    }  
  }

  const startLoadingPosts = async() => {

    try {

      const {data} = await alertaMXApi.get('/posts');
      console.log(data);
      dispatch(setPosts(data.events));
      
    } catch (error) {
      console.log('Error cargando eventos');
      console.log(error);
    }

  }

  const deletePost = async({id}) => {
 
    try {

      const {data} = alertaMXApi.delete(`/posts/${id}`,);
      console.log(data);
      
    } catch (error) {

      console.log('Error elimininado el evento');
      console.log(error);
      
    }


  }


  return {
    posts,
    activeHomePost,
    activeUserPost,

    //
    startSetActiveHomePost,
    startSavingNewPost,
    startLoadingPosts,
    deletePost,

  }

}