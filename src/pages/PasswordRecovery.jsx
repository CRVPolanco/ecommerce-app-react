import React from 'react';
import logoYard from '/src/assets/logos/logo_yard_sale.svg';
import '../styles/PasswordRecovery.css';
import { NavLink } from 'react-router-dom';

const PasswordRecovery = () => {

  const handleRecovery = () => {
    console.log('Soon :)');
  }

	return (
		<div className="PasswordRecovery">
			<div className="PasswordRecovery-container">
				<img src={logoYard} alt="logo" className="logo" />
				<h1 className="title">Password recovery</h1>
				<p className="subtitle">Inform the email address used to create your account</p>
				<form action="/" className="form">
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" id="email" className="input input-email" />
					<button className="primary-button login-button" onClick={handleRecovery}><NavLink to="/send-email">Confirm</NavLink></button>
				</form>
			</div>
		</div>
	);
}

export { PasswordRecovery };
