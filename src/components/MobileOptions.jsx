import React from "react";
import { NavLink } from 'react-router-dom';
import { AppContext } from "../context/AppContext";
import { links } from "../utils/navlinks";

function MobileOptions({ closeAll }){

  const { setActual } = React.useContext(AppContext);

  return(
    <>
      {links.map(c => (
			  <li className="MobileMenu__links" key={c.text}>
			  	<NavLink
          style={({isActive}) => ({ color: isActive ? "purple" : "black"})}
          to={c.path} onClick={() => {
            setActual(c.text);
            closeAll()
          }}
          >{c.text}</NavLink>
			  </li>
      ))}
    </>
  )

}

export { MobileOptions }
