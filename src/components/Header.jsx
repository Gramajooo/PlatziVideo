import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/style/components/Header.scss';
import logo from '../assets/img/logo-platzi-video-BW2.png';
import userIcon from '../assets/img/user-icon.png';

const Header = (props) => {
  const { user } = props;

  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };
  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt="User" />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? (
            <li>
              <a href="/">{user.name}</a>
            </li>
          ) : null}
          {hasUser ? (
            <li>
              <a href="#logout" onClick={handleLogout}>
                Cerrar sesión
              </a>
            </li>
          ) : (
            <li>
              <Link to="/login">Iniciar sesión</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchProps)(Header);
