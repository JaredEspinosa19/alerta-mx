import { useDispatch, useSelector } from "react-redux"
import alertaMXApi from "../api/alertaMXApi";
import { clearErrorMessage, onChecking, onLogIn, onLogout, setErrorMessage } from "../store";


export const useAuthStore = () => {

  const {status, user, errorMessage} = useSelector(state =>  state.auth);
  const dispatch = useDispatch();
  

  //Log in 
  const startLogIn = async({email, password}) =>{

    dispatch(onChecking());

    try {
      
      const {data} = await alertaMXApi.post('/auth', {
        email,
        password
      });

      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      
      dispatch(onLogIn({
        email: data.email,
        name: data.name,    
        uid: data.uid,
        })
      );


    } catch (error) {
      let msg = error.response.data.msg
      // console.log(msg);
      dispatch(onLogout({status: false, msg}));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 3000);     
    }
  }

  const startSignUp = async({name, email, password}) => {
    
    dispatch(onChecking());

    try {
      
      const {data} = await alertaMXApi.post('/auth/new', {
        name,
        email,
        password
      });

      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(onLogIn({
        email: data.email,
        name: data.name,
        uid: data.uid,
        })
      );

    } catch (error) {
      let msg = error.response.data.msg;
      dispatch(onLogout({status: false, msg}));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 3000);
    }
  }

  const changePassword = async({email, password}) => {

    try {
    
      const {data} = await alertaMXApi.put('/auth/change', {
        email,
        password
      });
      
      console.log(data);
      let msg = data.msg
      dispatch(setErrorMessage({status: true, msg}));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 3000);  

    } catch (error) {
      let msg = error.response.data.msg;
      // dispatch(setErrorMessage({status: true, msg}));      
      dispatch(onLogout({status: false, msg}));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 3000);
    }
  }

  const checkAuthToken = async() => {
    
    const token = localStorage.getItem('token');
  
    if(!token) return dispatch(onLogout());

    try {

      const {data} = await alertaMXApi.get('/auth/renew');   
      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(onLogIn({name: data.name, uid: data.uid, email: data.email}));
    
    } catch (error) {
     
      localStorage.clear();
      dispatch(onLogout());
    
    }
  }

  const startLogOut = () => {
    dispatch(onChecking());
    localStorage.clear();
    dispatch(onLogout());
  }
  
  return {
    //Prop
    status,
    user,
    errorMessage,

    //Métodos
    startLogIn,
    startSignUp,
    changePassword,
    checkAuthToken,
    startLogOut,
  }
}