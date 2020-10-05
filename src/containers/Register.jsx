import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/LoginReg.scss'

const Register = () => (
   <section className="login">
      <section className="login__container">
         <h2 className="login__container--title">Create new account</h2>
         <form className="login__container--form" action=''>
            <input className="login--input" placeholder="Name" type="text" />
            <input className="login--input" placeholder="Email" type="text" />
            <input className="login--input" placeholder="Password" type="password" />
            <br />
            <button className="login--buton">Register</button>
         </form>
         <div className="existing-account">
            <p>Do you have an existing account?</p>
            <p className="login__container--register"><Link to="/login">Login</Link></p>
         </div>
      </section>
   </section>
);

export default Register;