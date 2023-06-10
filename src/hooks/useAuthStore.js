import { useDispatch, useSelector } from "react-redux"
import alertaMXApi from "../api/alertaMXApi";
import { clearErrorMessage, onChecking, onLogIn, onLogout } from "../store";


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
      console.log(data);
      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(onLogIn({
        email,
        password,
        name: data.name,    
        uid: data.uid,
        })
      );

    } catch (error) {
      msg = error.response.data.message
      dispatch(onLogout());
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
      // console.log(data);
      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(onLogIn({
        email,
        password,
        name: data.name,
        uid: data.uid,
        })
      );

    } catch (error) {
      dispatch(onLogout('Credenciales incorrectas'));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 3000);
    }
  }

  const changePassword = async({email, password}) => {
    
    dispatch(onChecking());

    try {
    
      const {data} = await alertaMXApi.put('/auth/change', {
        email,
        password
      });

      // console.log(data);

    } catch (error) {
      dispatch(onLogout('Credenciales incorrectas'));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 3000);
    }
  }

  const checkAuthToken = async() => {
    
    const token = localStorage.getItem('token');
    // console.log(token, 'token que se envia');
  
    if(!token) return dispatch(onLogout());

    try {
      const {data} = await alertaMXApi.get('/auth/renew');     
      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      // console.log(data, 'datos que recibo');
      dispatch(onLogIn({name: data.name, uid: data.uid}));
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