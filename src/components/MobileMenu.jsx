import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { MobileOptions } from './MobileOptions';
import iconFlechita from '/src/assets/icons/flechita.svg';
import '../styles/MobileMenu.css';

function MobileMenu(){

  const { user, handleMobileMenu, manageLogout, closeAll } = React.useContext(AppContext);

  return(
    <aside className='MobileMenu'>
      <div className="MobileMenu__title">
        <img onClick={handleMobileMenu} className='title__close' src={iconFlechita} alt="close menu" />
        <h2 className='title__title'>Menu list</h2>
      </div>
      <ul className='MobileMenu__list'>
        {!!user && <li className='MobileMenu__links'><NavLink to="/account" onClick={closeAll}>My account</NavLink></li>}
        {!user && (
        <>
          <li className='MobileMenu__links'>
            <NavLink to="/register" onClick={closeAll}>Sign up</NavLink>
          </li>
          <li className='MobileMenu__links'>
            <NavLink to="/login" onClick={closeAll}>Log in</NavLink>
          </li>
        </>
        )}
        <MobileOptions closeAll={closeAll}/>
      </ul>
      {!!user && (
        <div className='MobileMenu__account'>
          <p className='MobileMenu__email'>{user.email}</p>
          <NavLink to="/" onClick={manageLogout}>Log out</NavLink>
        </div>
      )}
    </aside>
  )
}

export { MobileMenu };
