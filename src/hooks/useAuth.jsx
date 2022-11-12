import React from "react";
import { registeredUsers } from '../utils/registeredUsers';

function useAuth(){

  const [user, setUser] = React.useState(null);

  const LOGIN = ({ email, password }) => {
    const findUser = registeredUsers.find(u => ((u.email === email) && (u.password === password)));
    if(!!findUser){
      setUser({ email: findUser.email, password: findUser.password, name: findUser.name ?? '' , products: [...findUser.products]});
    }
  }

  const LOGOUT = () => {
    setUser(null);
  }

  const SIGNUP = ({ email, password, name }) => {
    registeredUsers.push({ email: email, password: password, name: name, products: [], country: '', date: '', description: ''});
  }

  const manageLogout = () => {
    LOGOUT();
  }

  return { user, setUser, LOGIN, LOGOUT, SIGNUP, manageLogout };
}

export { useAuth }
