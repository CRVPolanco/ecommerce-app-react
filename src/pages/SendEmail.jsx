import React from 'react';
import logoYard from '/src/assets/logos/logo_yard_sale.svg';
import iconEmail from '/src/assets/icons/email.svg';
import '../styles/SendEmail.css';
import { NavLink } from 'react-router-dom';

const SendEmail = () => {
	return (
		<div className="SendEmail">
			<div className="form-container">
				<img src={logoYard} alt="logo" className="logo" />
				<h1 className="title">Email has been sent!</h1>
				<p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
				<div className="email-image">
					<img src={iconEmail} alt="email" />
				</div>
				<button className="primary-button login-button"><NavLink to="/login">Log in</NavLink></button>
				<p className="resend">
					<span>Didn't receive the email? </span>
					<NavLink to="/">Resend</NavLink>
				</p>
			</div>
		</div>
	);
}

export { SendEmail };
