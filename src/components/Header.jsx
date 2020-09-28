import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/images/logo-platzi.png';
import userIcon from '../assets/images/profile-user.svg';

const Header = () => (
   <header className="header">
      <img className="header__img" src={ logo } alt="" />
      <div className="header__menu">
         <div className="header__menu--profile">
            <img src={ userIcon } alt="user icon" />
            <p>Perfil</p>
         </div>
         <ul>
            <li><a href="/">Cuenta</a></li>
            <li><a href="/">Cerrar sesion</a></li>
         </ul>
      </div>
      
   </header>
);

export default Header