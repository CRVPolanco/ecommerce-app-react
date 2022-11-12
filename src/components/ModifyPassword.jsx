import React from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { registeredUsers } from "../utils/registeredUsers";
import '../styles/Edit.css';

function ModifyPassword(){

  const form = React.useRef(null);
  const [localState, setLocalState] = React.useState({ password: '', re_password: '', successMessage: '', errorMessage: '', error: false });
  const { user, setUser, closeAll } = React.useContext(AppContext);

  const handleModify = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = { actualpassword: formData.get('actual-password'), password: formData.get('new-password'), re_password: formData.get('re-password') };

    if(data.actualpassword !== user.password){
      setLocalState({ ...localState, error: true, errorMessage: 'Invalid password of the account' });
      return;
    }
    if((data.actualpassword === user.password) && (data.password !== data.re_password)){
      setLocalState({ ...localState, error: true, errorMessage: "New password doesn't match with the password confirmation" })
      return;
    }

    setLocalState({ ...localState, successMessage: 'Password changed succesfully', error: false, errorMessage: '' });
    registeredUsers[registeredUsers.findIndex(u => ((u.email === user.email) && (u.password === user.password)))].password = data.password;
    setUser({...user, password: data.password});
    closeAll();
  }


  return(
    <div className="Edit">
      <div className="Edit__title">
        <h2>Change password</h2>
        {!!localState.error && <h1>{localState.errorMessage}</h1> }
        {!localState.error && localState.successMessage.length > 0 && <h1>{localState.successMessage}</h1>}
      </div>
      <form className="Edit__form" ref={form}>
        <label htmlFor="actual-password">Actual password</label>
        <input type="text" id="actual-password" name="actual-password"/>

        <label htmlFor="new-password">New password</label>
        <input type="text" id="new-password" name="new-password"/>

        <label htmlFor="re-password">Re-enter new password</label>
        <input type="text" id="re-password" name="re-password"/>

        <div className="form__interaction-buttons">
          <button className="primary-button cancel-edit" onClick={closeAll}>Cancel</button>
          <button className="primary-button edit-button" onClick={handleModify}><NavLink className="edit-button--redirect" to="/account">Change password</NavLink></button>
        </div>
      </form>
    </div>
  )
}

export { ModifyPassword }
