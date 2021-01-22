import React from 'react';
import '../assets/style/components/Header.scss';

const Header = () => (
  <header className="header">
    <img
      className="header__img"
      src="img/logo-platzi-video-BW2.png"
      alt="Platzi Video"
    />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src="img/user-icon.png" alt="User" />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <a href="/">Cuenta</a>
        </li>
        <li>
          <a href="/">Cerrar sesión</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
