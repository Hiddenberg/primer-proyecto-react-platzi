import React from 'react';

import '../assets/styles/components/LoginReg.scss'
import googleIcon from '../assets/images/google-icon.svg'
import facebookIcon from '../assets/images/facebook-icon.svg'

const Login = () => (
   <section className="login">
      <section className="login__container">
         <h2 className="login__container--title">Login</h2>
         <form className="login__container--form" action=''>
            <input className="login--input" placeholder="Email" type="text" />
            <input className="login--input" placeholder="Password" type="password" />
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
         <p className="login__container--register"><a href="/">Create a new account</a></p>
      </section>
   </section>
)

export default Login;