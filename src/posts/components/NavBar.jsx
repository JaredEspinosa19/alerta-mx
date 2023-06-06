import './navBarStyles.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuthStore } from '../../hooks';

export const NavBar = () => {

  const {user} = useSelector(state => state.auth);
  const {startLogOut} = useAuthStore();

  return (
    <nav className="navbar  navbar-expand-lg navbar-dark bg-dark shadow-lg">
      <div className="container">
        
        <NavLink className="navbar-brand ms-lg-5" to='/home'>
          <img src="../../../assets/AlertaMx.svg" alt="Alerta-Mx" />
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
            

            <li className="nav-item">
              <NavLink className={ ({isActive}) => `nav-link ${isActive ? 'active':''}`} to='/instituciones'>
                Instituciones
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={ ({isActive}) => `nav-link ${isActive ? 'active':''}`} to='/datosUsuario'>
                {user?.name.split(' ')[0]}
              </NavLink>
            </li>

            <li className="nav-item">
              <button className="nav-item nav-link " onClick={startLogOut}>
                LogOut
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
