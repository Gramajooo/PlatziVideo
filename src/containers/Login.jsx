import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import Header from '../components/Header';
import '../assets/style/components/Login.scss';
import googleIcon from '../assets/img/icons8-google-plus-50.png';
import twitterIcon from '../assets/img/icons8-twitter-50.png';

const Login = (props) => {
  const [values, setValues] = useState({
    email: '',
  });
  const handleInput = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(values);
    props.history.push('/');
  };
  return (
    <>
      <Header isLogin />
      <section className="login">
        <div className="login__container">
          <h2 className="login__container--title">Login</h2>
          <form className="login__container--form" onSubmit={handleSubmit}>
            <input
              name="email"
              className="input"
              type="text"
              placeholder="Email"
            />
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Password"
            />
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
            You don't have any count. <Link to="/register">Register</Link>
          </p>
        </div>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
