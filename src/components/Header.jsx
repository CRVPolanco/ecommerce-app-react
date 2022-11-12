import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from './Menu';
import { AppContext } from '../context/AppContext';
import { MyOrder } from '../containers/MyOrder';
import { MobileMenu } from './MobileMenu';
import { FilterOptions } from './FilterOptions';
import menu from '/src/assets/icons/icon_menu.svg';
import navlogo from '/src/assets/logos/logo_yard_sale.svg';
import shoppingCart from '/src/assets/icons/icon_shopping_cart.svg';
import '../styles/Header.css';

const Header = () => {

  const [desktopMenu, setDesktopMenu] = React.useState(false);
  const { user, state, handleMobileMenu, handleOrders, closeAll } = React.useContext(AppContext);

  const closeInteraction = () => {
    closeAll();
    setDesktopMenu(false);
  }

  window.addEventListener('scroll', () => {
    closeAll();
    setDesktopMenu(false);
  })

	return (
    <header>
		<nav>
			<img src={menu} alt="menu" className="menu" onClick={handleMobileMenu}/>
			<div className="navbar-left">
        <NavLink to="/" className="redirect__nav-logo" onClick={closeInteraction}>
				  <img src={navlogo} alt="logo" className="nav-logo" />
        </NavLink>
			</div>
        <FilterOptions />
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={() => setDesktopMenu(p => !p)}>
            {!user ? <button className='LoginButton'>Log in</button> : `${user.email}`}
          </li>
					<li className="navbar-shopping-cart" onClick={handleOrders} >
						<img src={shoppingCart} alt="shopping cart"/>
						{user?.products.length > 0 ? <div>{user?.products.length}</div> : null }
					</li>
				</ul>
			</div>
      {!!desktopMenu && <Menu setDesktopMenu={setDesktopMenu} />}
      {!!state.toggleOrders && <MyOrder />}
		</nav>
    {!!state.toggleMobileMenu && <MobileMenu />}
    </header>
	);
}

export { Header };
