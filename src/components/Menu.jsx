import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import iconFlechita from '/src/assets/icons/flechita.svg';
import '../styles/Menu.css';

const Menu = ({ setDesktopMenu }) => {

  const { user, manageLogout } = React.useContext(AppContext);

	return (
		<div className="Menu">
      <img src={iconFlechita} className="icon__flechita" alt="arrow" onClick={() => setDesktopMenu(p => !p)} />
			<ul>
				<li>
					<NavLink className="title" to="/orders">My orders</NavLink>
				</li>
				<li>
					<NavLink to={!user ? "/login" : "/account"}>{!user ? "Login" : "My account" }</NavLink>
				</li>
				<li>
					<NavLink onClick={manageLogout} to={!user ? "/register" : "/"}>{!user ? "Sign up" : "Sign out"}</NavLink>
				</li>
			</ul>
		</div>
	);
}

export { Menu };
