import { authValidations } from '../../helpers';
import { useAuthStore, useForm } from '../../hooks';
import { AuthLayout } from '../layout/AuthLayout';
import { NavLink, useNavigate } from 'react-router-dom';

const registerForm = {
  name: '',
  email: '',
  password: '',
}

export const RegisterPage = () => {

  const navigate = useNavigate();
  const { name, email, password, onInputChange, 
          isFormValid, nameValid, emailValid, passwordValid, 
          nameFocus, emailFocus, passwordFocus, onFocusChange } = useForm(registerForm, authValidations);
  const { startSignUp } = useAuthStore();

  const onRegisterSubmit = (event) => {
    event.preventDefault();
    if( !isFormValid) return;

    // console.log({name, email, password});
    // navigate('/auth/login');
    startSignUp({name, email, password});

  }
  
  return (
    <AuthLayout title={'Registro'}>
      
      <form onSubmit={onRegisterSubmit} className="row g-2">

        <div className="col-12">
          <label  
            className="form-label fs-5">Nombre</label>
          <input                      
            type="text" 
            className={`form-control rounded-pill p-3 bg-gray ${(nameFocus && nameValid)? 'form-unvalidated': ''}`} 
            placeholder="Introduzca su nombre"
            name='name'
            value={name}
            onBlur={onFocusChange}
            onChange={onInputChange}
            required />
        </div>

        <div className="col-12">
          <label 
            className="form-label fs-5">Correo</label>
          <input 
            type="email" 
            className={`form-control rounded-pill p-3 bg-gray ${(emailFocus && emailValid)? 'form-unvalidated': ''}`} 
            placeholder="Introduzca su correo electrónico"
            name='email'
            value={email}
            onBlur={onFocusChange}
            onChange={onInputChange}
            required />
        </div>

        <div className="col-12">
          <label 
            className="form-label fs-5">Password</label>
          <input 
            type="password" 
            className={`form-control rounded-pill p-3 bg-gray ${(passwordFocus && passwordValid)? 'form-unvalidated': ''}`}  
            placeholder="Introduzca su contraseña"
            name='password'
            value={password}
            onBlur={onFocusChange}
            onChange={onInputChange}
            required />
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
        </div>

        <div className="col-12 d-grid gap-2 mx-auto mt-4 mb-4">
          <button 
            type="submit"
            disabled={!isFormValid}
            onClick={onRegisterSubmit} 
            className="btn btn-primary rounded-pill p-2 fs-5">
            Regístrarse
          </button>
        </div>
      </form>

      <div className="col-12 text-center">
        <p>¿Ya tienes cuenta?
          <NavLink className={'class="link-offset-1 "'} to={'/auth/login'}>
            Iniciar Sesión
          </NavLink>
        </p>
      </div>

    </AuthLayout>
  )
}
