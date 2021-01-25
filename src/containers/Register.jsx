import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/components/Register.scss';

const Register = () => (
  <section className="register">
    <div className="register__container">
      <h2 className="register__container--title">Register</h2>
      <form className="register__container--form">
        <input className="input" type="text" placeholder="Username" />
        <input className="input" type="text" placeholder="Email" />
        <input className="input" type="password" placeholder="Password" />
        <input
          className="input"
          type="password"
          placeholder="Confirm password"
        />
        <button className="button">Register</button>
      </form>
      <p className="register__container--login">
        <Link to="/login">Login in</Link>
      </p>
    </div>
  </section>
);

export default Register;
