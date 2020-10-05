import React from 'react';
import { Link, link } from 'react-router-dom'
import '../assets/styles/components/Header.scss';
import logo from '../assets/images/logo-platzi.png';
import userIcon from '../assets/images/profile-user.svg';

const Header = () => (
   <header className="header">
      <Link to="/"> 
         <img className="header__img" src={ logo } alt="" />
      </Link> {/* Usamos el elemento link de react router dom, ya que nos permite poder
      desplazarnos por nuestra aplicacion sin necesidad de hacer un refres a la pagina completa */}
      <div className="header__menu">
         <div className="header__menu--profile">
            <img src={ userIcon } alt="user icon" />
            <p>Perfil</p>
         </div>
         <ul>
            <li><Link to="/login">Iniciar sesion</Link></li>
         </ul>
      </div>
      
   </header>
);

export default Header;