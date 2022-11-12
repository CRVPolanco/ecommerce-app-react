import React from "react";
import { AppContext } from "../context/AppContext";
import { registeredUsers } from "../utils/registeredUsers";
import '../styles/Edit.css';

function Edit(){

  const form = React.useRef(null);

  const { user, setUser, closeAll } = React.useContext(AppContext);

  const [localState, setLocalState] = React.useState({ name: user.name, country: user.country, description: user.description, date: user.date })

  const changeName = e => setLocalState({...localState, name: e.target.value});
  const changeDate = e => setLocalState({...localState, date: e.target.value});
  const changeDescription = e => setLocalState({...localState, description: e.target.value});
  const changeCountry = e => setLocalState({...localState, country: e.target.value});

  const handleEdit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('real-name'),
      country: formData.get('country'),
      date: formData.get('date'),
      description: formData.get('description'),
    }
    editData({ data });
    closeAll();
  }

  const editData = ({ data }) => {
    const find = registeredUsers.findIndex(u => ((u.email === user.email) && (user.password === u.password)));
    const User = registeredUsers[find];
    registeredUsers[find] = { ...User, ...data };
    setUser(registeredUsers[find]);
  }

  return(
    <div className="Edit">
      <div className="Edit__logo">
        <img src="" alt="" />
        <h2>Edit profile</h2>
      </div>
      <form className="Edit__form" ref={form}>
        <label htmlFor="name">New name</label>
        <input value={localState.name} onChange={changeName} type="text" id="name" name="real-name"/>

        <label htmlFor="country">Country</label>
        <input value={localState.country} onChange={changeCountry} type="text" id="country" name="country"/>

        <label htmlFor="">Description</label>
        <input value={localState.description} onChange={changeDescription} type="text" id="description" name="description"/>


        <label htmlFor="date">Date</label>
        <input value={localState.date} onChange={changeDate} type="date" id="date" name="date"/>

        <div className="form__interaction-buttons">
          <button className="primary-button cancel-edit" onClick={closeAll}>Cancel</button>
          <button className="primary-button edit-button" onClick={handleEdit}>Edit</button>
        </div>
      </form>
    </div>
  )
}

export { Edit };
