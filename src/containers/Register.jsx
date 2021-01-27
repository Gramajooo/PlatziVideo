import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../assets/style/components/Register.scss';

const Register = (props) => {
  const [values, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(values);
    props.history.push('/');
  };
  return (
    <>
      <Header isRegister />
      <section className="register">
        <div className="register__container">
          <h2 className="register__container--title">Register</h2>
          <form className="register__container--form" onSubmit={handleSubmit}>
            <input
              name="name"
              className="input"
              type="text"
              placeholder="Username"
              onChange={handleInput}
            />
            <input
              name="email"
              className="input"
              type="text"
              placeholder="Email"
              onChange={handleInput}
            />
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Password"
              onChange={handleInput}
            />
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
    </>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
