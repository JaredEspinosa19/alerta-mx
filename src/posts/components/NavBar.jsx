import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuthStore } from '../../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export const NavBar = () => {

  const {user} = useSelector(state => state.auth);
  const {startLogOut} = useAuthStore();

  const nameUser = user.name === null ? 'User' : user.name;
  return (
    <nav className="navbar  sticky-top navbar-expand-lg navbar-dark bg-dark shadow-lg">
      <div className="container">
        
        <NavLink className="navbar-brand ms-lg-5" to='/home'>
          <img src="../../../AlertaMx.svg" alt="Alerta-MX" />
        </NavLink>
      
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavDropdown" 
          aria-controls="navbarNavDropdown" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse me-5" id="navbarNavDropdown">
          <ul className="ms-lg-auto navbar-nav">

            <li className="nav-item">
              <NavLink className={ ({isActive}) => ` nav-link ${isActive ? 'active':''}`} to='/home'>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={ ({isActive}) => ` nav-link ${isActive ? 'active':''}`} to='/publicar'>
                Publicar
              </NavLink>
            </li>
            

            <li className="nav-item ">
              <NavLink className={ ({isActive}) => ` align-items-center nav-link ${isActive ? 'active':''}`} 
                to='/datosUsuario'>
                Mi Perfil
              </NavLink>
            </li>

            <li className="nav-item">
              <button className="nav-item nav-link button-nav position-relative" 
                onClick={startLogOut}
                style={{height: '100%', width: '100%', margin: '0px 2px 0px 0px'}}>
              <FontAwesomeIcon 
                icon={faRightFromBracket}
                size='lg'
                className='position-absolute top-50 start-0 translate-middle-y ps-2'
                />
              </button>

            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
