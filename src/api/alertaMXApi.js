import axios from "axios";
// import { getEnvVariables } from "../helpers";

const {VITE_API_URL} = getEnvVariables();

const alertaMXApi = axios.create({
  baseURL: 'https://alerta-mx-app.herokuapp.com/api',
})


alertaMXApi.interceptors.request.use(config => {

  config.headers = {
    ...config.headers,
    'x-token': localStorage.getItem('token'),
  }
  return config;
})


export default alertaMXApi;