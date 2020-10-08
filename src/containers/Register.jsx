import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/LoginReg.scss'

const Register = () => {

   const [form, setRegister] = useState({
      name: '',
      email: '',
   })

   const handleInput = event => {
      console.log(event.target.value)
      setRegister({
         ...form,
         [event.target.name]: event.target.value
      })
   }

   const handleSubmit = event => {
      event.preventDefault()
      console.log(form)
   }


   return(
      <section className="login">
         <section className="login__container">
            <h2 className="login__container--title">Create new account</h2>
            <form className="login__container--form" onSubmit={handleSubmit} >
               <input className="login--input" placeholder="Name" type="text" name='name' onChange={handleInput} />
               <input className="login--input" placeholder="Email" type="text" name='email' onChange={handleInput} />
               <input className="login--input" placeholder="Password" type="password" name='password' onChange={handleInput} />
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
}

export default Register;