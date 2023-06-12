import { useDispatch, useSelector } from "react-redux"
import alertaMXApi from "../api/alertaMXApi";
import { setPosts, savingNewPost, setActiveHomePost, setMapPosition, setActiveUserPost, deletingPost, deletePost, addNewPost } from "../store";
import { getCoordinates } from "../helpers";


export const usePostsStore = () => {

  const { user } = useSelector(state => state.auth);
  const { posts, activeHomePost, activeUserPost } = useSelector(state => state.posts);
  const dispatch = useDispatch();

  const startSetActiveHomePost = (post) => { //Post homepage

    dispatch(setActiveHomePost(post));
    dispatch(setMapPosition({lat: post.lat, lng: post.lng}));
  
  }

  const startSetActiveUserPost = (post) => {
    dispatch(setActiveUserPost(post));
  }


  const startSavingNewPost = async (post) => {

    dispatch(savingNewPost());

    try {
      
      const { address, town } = post;
      const { lat, lng } = await getCoordinates({ address, town });
      console.log(lat, lng);
      const finalPost = {
        ...post,
        lat,
        lng,
      };

      const {data} = await alertaMXApi.post('/posts/', finalPost);
      dispatch(addNewPost({...post, id: data.post.id, user: { _id: user.uid, name: user.name} }))

    } catch (error) {
      console.log(error);
    }  
  }

  const startLoadingPosts = async() => {

    try {

      const {data} = await alertaMXApi.get('/posts');
      dispatch(setPosts(data.events));
      
    } catch (error) {
      console.log('Error cargando eventos');
      console.log(error);
    }

  }

  const startDeletePost = async() => {
    
    const {id} = activeUserPost;
    try {

      const {data} = await alertaMXApi.delete(`/posts/${id}`,);
      console.log(data, 'hola');
      dispatch(deletePost());

    } catch (error) {

      console.log('Error elimininado el evento');
      console.log(error);
      
    }

  }

  const setNewMapPosition = async({address, town}) => { 
    const { lat, lng } = await getCoordinates({ address, town });   
    dispatch(setMapPosition({lat, lng}));
  }


  return {
    posts,
    activeHomePost,
    activeUserPost,

    //
    startSetActiveHomePost,
    startSetActiveUserPost,
    startSavingNewPost,
    startLoadingPosts,
    startDeletePost,
    setNewMapPosition,
  }

}