import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import logoYard from '/src/assets/logos/logo_yard_sale.svg';
import '../styles/Login.css';

const Login = () => {

  const [error, setError] = React.useState(false);
  const { user, LOGIN } = React.useContext(AppContext);

  const form = React.useRef(null);

  if(!!user){
    history.back();
    return(
      <p>Redirecting to home...</p>
    )
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    LOGIN({email: data.email, password: data.password});
    handleError();
  }
  const handleError = () => {
    !user ? setError(true) : setError(false);
  }

	return (
		<div className="Login">
			<div className="Login-container">
				<img src={logoYard} alt="logo" className="logo" />
				<form className="form" ref={form}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" id="email" placeholder="example@host.com" className="input input-email" name="email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" id="password" placeholder="*********" className="input input-password" name="password" />
					<button className="primary-button login-button" onClick={handleLogin}><NavLink className="redirect-button" to={!!user ? "/" : "/login"}>Log in</NavLink></button>
          {error && <p>User doesn't exists</p>}
					<NavLink to="/password-recovery">Forgot my password</NavLink>
				</form>
				<button className="secondary-button signup-button"><NavLink to="/register">Sign up</NavLink></button>
			</div>
		</div>
	);
}

export { Login };
