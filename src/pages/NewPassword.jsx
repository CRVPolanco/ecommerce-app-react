import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/NewPassword.css';

const NewPassword = () => {

	return (
		<div className="NewPassword">
			<div className="NewPassword-container">
				<img src="/src/assets/logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<h1 className="title">Create a new password</h1>
				<p className="subtitle">Enter a new password for your account</p>
				<form action="/" className="form" ref={form}>
					<label for="password" className="label">Enter password</label>
					<input type="password" id="password" placeholder="*********" className="input input-password" name="password" />
					<label for="new-password" className="label">Re-enter password</label>
					<input type="password" id="new-password" placeholder="*********" className="input input-password" name="repassword"/>
					<button className="primary-button login-button" onClick={handleChangePassword}>
            <NavLink to="/login">Reset password</NavLink>
          </button>
				</form>
			</div>
		</div>
	);
}

export { NewPassword };
