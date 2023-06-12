import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthStore, useForm } from "../../hooks"
import { AuthLayout } from "../layout/AuthLayout"
import { authValidations } from '../../helpers';


const onResetPasswordForm = {
  email: '',
  password: '',
}

export const ResetPasswordPage = () => {

  const navigate = useNavigate();
  const { email, password, onInputChange, onResetForm, 
          emailValid, passwordValid, isFormValid,
          emailFocus, passwordFocus, onFocusChange} = useForm(onResetPasswordForm, {email: authValidations.email, password: authValidations.password});

  const { changePassword } = useAuthStore();

  const onResetPasswordSubmit = (event) => {
    event.preventDefault();
    changePassword({email, password});
    onResetForm();
    navigate('/auth/login');
  }

  return (
    <AuthLayout title={'Cambiar Contraseña'}>
            
      <form onSubmit={onResetPasswordSubmit} className="row  g-3">
        
        
        <div className="col-12 ">
      
          <label  
            className="form-label fs-5 ">Correo electrónico de la cuenta</label>
          <input 
            type="text" 
            className={`form-control  p-3 bg-white ${(emailFocus && emailValid)? 'form-unvalidated': ''}`} 
            placeholder="Introduzca su correo electrónico"
            name='email'
            value={email}
            onBlur={onFocusChange}
            onChange={onInputChange}
            required />
        </div>
        {(emailFocus && emailValid!== null) 
              ? <div className='unvalidated ps-2 pt-2 '>{ emailValid }</div> 
              : <></>}

        <div className="col-12">
          <label 
            className="form-label fs-5">Nueva Contraseña</label>
          <input 
            type="text" 
            className={`form-control  p-3 bg-white ${(passwordFocus && passwordValid)? 'form-unvalidated': ''}`} 
            placeholder="Introduzca su nueva contraseña"
            name='password'
            value={password}
            onBlur={onFocusChange}
            onChange={onInputChange}
            required />
        </div>
        {(passwordFocus && passwordValid!== null) 
              ? <div className='unvalidated ps-2 pt-2 '>{ passwordValid }</div> 
              : <></>}

        <div className="col-12 d-grid gap-2 mx-auto mt-4 mb-4">
          <button 
            type="submit"
            disabled={!isFormValid}
            onClick={onResetPasswordSubmit} 
            className="btn btn-auth p-2 fs-5">Confirmar</button>
        </div>

        <div className="col-12 text-center">
        <p>¿Recuerdas tu contraseña?
          <NavLink className={'link-offset-1 link-main fw-semibold'} to={'/auth/login'}>
            Iniciar Sesión
          </NavLink>
        </p>
      </div>

      </form>
    </AuthLayout>
  )
}
