import React from 'react';
import { AppContext } from '../context/AppContext';
import { Edit } from '../components/Edit';
import { ModifyPassword } from '../components/ModifyPassword';
import editIcon from '../assets/icons/edit.svg';
import '../styles/MyAccount.css';

const MyAccount = () => {

  const { user, state, handleModifyPassword, handleEdit } = React.useContext(AppContext);

	return (
    <>
    {!state.toggleEdit && !state.toggleNewPassword && (
      <div className="MyAccount">
		  	<div className="MyAccount-container">
		  		<h1 className="title">My account</h1>
            <form className="form">

		  				<label className="label">Name</label>
		  				<p className="value">{user.name}</p>

              <label className='label'>Date</label>
              <p className="value">{user.date}</p>

		  				<label className="label">Email</label>
		  				<p className="value">{user.email}</p>

              <label className='label'>Country</label>
              <p className="value">{user.country}</p>

              <label className='label'>Description</label>
              <p className="value">{user.description}</p>

		  				<label className="label modify-password">Password
              <span onClick={handleModifyPassword} className='MyAccount__form--edit-password'>
                <img src={editIcon} alt="" className='edit-password__img'/>
              </span></label>
		  				<p className="value">*********</p>

		  			  <button className="secondary-button edit-button" onClick={handleEdit}>Edit info</button>
		  		  </form>
          </div>
        </div>
      )}
    {!!state.toggleEdit && (
      <Edit />
    )}
    {!!state.toggleNewPassword && (
      <ModifyPassword />
    )}
    </>
	);
}

export { MyAccount };
