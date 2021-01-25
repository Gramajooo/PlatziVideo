import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/components/Login.scss';
import googleIcon from '../assets/img/icons8-google-plus-50.png';
import twitterIcon from '../assets/img/icons8-twitter-50.png';

const Login = () => (
  <section className="login">
    <div className="login__container">
      <h2 className="login__container--title">Login</h2>
      <form className="login__container--form">
        <input className="input" type="text" placeholder="Email" />
        <input className="input" type="password" placeholder="Password" />
        <button className="button">Login</button>
        <div className="login__container--remember">
          <label>
            <input type="checkbox" name="rembe" id="rembe" value="rembe" />
            Remember me
          </label>
          <a href="/">Forgot the password</a>
        </div>
      </form>
      <section className="login__container--social-media">
        <div>
          <img src={googleIcon} alt="Google" />
          Login with Google
        </div>
        <div>
          <img src={twitterIcon} alt="Twitter" />
          Login with Twitter
        </div>
      </section>
      <p className="login__container--register">
        You don't have any count.
        <Link to="/register">Register</Link>
      </p>
    </div>
  </section>
);

export default Login;
