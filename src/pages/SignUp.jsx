import React from "react";
import { AppContext } from '../context/AppContext';
import logoYard from '/src/assets/logos/logo_yard_sale.svg';
import { NavLink } from 'react-router-dom';

function SignUp(){

  const { user, LOGIN, SIGNUP } = React.useContext(AppContext);

  if(!!user){
    history.back();
    return (
      <p>You have an user, redirecting...</p>
    )
  }

  const form = React.useRef(null);

  const handleSignUp = (event) => {
      event.preventDefault();
      if(!!user){
        return;
      }
      const formData = new FormData(form.current);
      const data = {
        email: formData.get('email'),
        password: formData.get('password'),
        name: formData.get('fullname'),
      };
      SIGNUP({ email: data.email, password: data.password, name: data.name ?? '' });
      LOGIN({ email: data.email, password: data.password, name: data.name ?? '' });
      console.log(user);
    }

  return(
  <div className="Login">
    <div className="Login-container">
      <img src={logoYard} alt="logo" className="logo" />
      <form action="/" className="form" ref={form}>
        <label htmlFor="name" className="label">Full Name</label>
        <input type="text" id="fullname" placeholder="Your name" className="input input-name" name="fullname"/>
        <label htmlFor="email" className="label">Email address</label>
        <input type="text" id="email" placeholder="platzi@example.cm" className="input input-email" name="email" />
        <label htmlFor="password" className="label">Password</label>
        <input type="password" id="password" placeholder="*********" className="input input-password" name="password" />
        <button className="secondary-button signup-button" onClick={handleSignUp}><NavLink to="/">Sign up</NavLink></button>
      </form>
    </div>
  </div>
  )
}
export { SignUp };
