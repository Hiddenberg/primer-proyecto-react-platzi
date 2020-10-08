import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutRequest } from '../actions/'
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import logo from '../assets/images/logo-platzi.png';
import userIcon from '../assets/images/profile-user.svg';

const Header = (props) => {

   const { user } = props
   const userLogedIn = () => user.email !== undefined; /* Verificamos si nuestro usuario ya tiene un email registrado en su sesion */
   const handleLogout = () => {
      props.logoutRequest({}) /* Le pasamos un objeto vacio como payload que sera lo que se establezca en el reducer */
   }

   return(
      <header className="header">
         <Link to="/"> 
            <img className="header__img" src={ logo } alt="" />
         </Link> {/* Usamos el elemento link de react router dom, ya que nos permite poder
         desplazarnos por nuestra aplicacion sin necesidad de hacer un refresh a la pagina completa */}
         <div className="header__menu">
            <div className="header__menu--profile">
               {userLogedIn() ?
                  <img src={ gravatar(user.email) } alt="user icon" />
                  :
                  <img src={ userIcon } alt="user icon" />
               }
               <p>Perfil</p>
            </div>
            {userLogedIn() ?
               <ul>
                  <li><p>Bienvenido <b>{user.email}</b></p></li>
                  <li><p>Mi perfil</p></li>
                  <li><a onClick={handleLogout}>Cerrar sesion</a></li>
               </ul>
               :
               <ul>
                  <li><Link to="/login">Iniciar sesion</Link></li>
               </ul>
            }
         </div>
      </header>
   )};

const mapStateToProps = state => {
   return {
      user: state.user,
   }
}

const mapDispatchToProps = {
   logoutRequest
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);