import React, { useState, } from 'react';
import { Link, link } from 'react-router-dom';
import { connect } from 'react-redux';

import '../assets/styles/components/LoginReg.scss'
import googleIcon from '../assets/images/google-icon.svg'
import facebookIcon from '../assets/images/facebook-icon.svg'
import { loginRequest } from '../actions';

const Login = props => {
   const [form, setValues] = useState({
      email: '',
   })

   const handleInput = event => {
      console.log(event.target.value)
      console.log(form)
      setValues({
         ...form,
         [event.target.name]: event.target.value
      })
   }

   const handleSubmit = event => {
      event.preventDefault();
      props.loginRequest(form);
      console.log(form);
      console.log(props);
      props.history.push('/')
   }
   return(
   <section className="login">
      <section className="login__container">
         <h2 className="login__container--title">Login</h2>
         <form className="login__container--form" onSubmit={handleSubmit}>
            <input name="email" className="login--input" placeholder="Email" type="text" onChange={handleInput} />
            <input name="password" className="login--input" placeholder="Password" type="password" onChange={handleInput} />
            <label className="login--checkbox" htmlFor="remember">Remember me<input type="checkbox" name="remember" id="remember" /></label>
            <br />
            <button className="login--buton">Login</button>
            <div className="login__container--remember-section">
            <a href="/">Forgot my password</a>
            </div>
         </form>
         <section className="login__container--social-media">
            <div>
            <img src={googleIcon} alt="google-login" />
            <span>Login with Google</span>
            </div>
            <div>
            <img src={facebookIcon} alt="facebook-login" /><span>Login with Facebook</span>
            </div>
         </section>
         <p className="login__container--register"><Link to="/register">Create a new account</Link></p>
      </section>
   </section>
)}

const mapDispatchToProps = {
   loginRequest,
}

export default connect(null,mapDispatchToProps)(Login);