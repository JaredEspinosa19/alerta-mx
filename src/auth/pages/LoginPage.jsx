import { AuthLayout } from '../layout/AuthLayout';
import { NavLink } from 'react-router-dom';
import { useAuthStore, useForm } from '../../hooks';

const loginForm = {
  email: '',
  password: ''
}

export const LoginPage = () => {

  const {email, password, onInputChange} = useForm(loginForm);
  const { startLogIn }= useAuthStore();


  const onSubmit = (event) => {
    event.preventDefault();
    // console.log({email, password});
    startLogIn({email, password});
  }

  return (
    <AuthLayout title={'Inicio de Sesión'}>
      <form onSubmit={onSubmit} className="row g-2">

        <div className="col-12">
          <label  
            className="form-label fs-5">Correo Electrónico</label>
          <input 
            type="email" 
            className="form-control rounded-pill p-3 bg-gray" 
            placeholder="Introduce tu correo electrónico"
            name='email'
            value={email}
            onChange={onInputChange}
            required />
        </div>

        <div className="col-12">
          <label 
            className="form-label fs-5">Password</label>
          <input 
            type="password" 
            className="form-control rounded-pill p-3 bg-gray" 
            placeholder="Introduce tu contraseña"
            name='password'
            value={password}
            onChange={onInputChange}
            required />
        </div>

        <div className="col-12 d-grid gap-2 mx-auto mt-4 mb-4">
          <button 
            type="submit" 
            onClick={onSubmit}
            className="btn btn-primary rounded-pill p-2 fs-5">Iniciar Sesión</button>
        </div>
      </form>

      <div className="col-12 text-center">
        <p>¿No tienes una cuenta?
          <NavLink className={'class="link-offset-1 link-main"'} to={'/auth/register'}>
            Registrarse
          </NavLink>
        </p>
        <p>¿Olvidaste tu contraseña?
          <NavLink className={'class="link-offset-1 link-main"'} to={'/auth/reset'}>
            Cambiar contraseña
          </NavLink>
        </p>
      </div>

    </AuthLayout>
  )
}
