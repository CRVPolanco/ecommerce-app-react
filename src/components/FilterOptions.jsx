import React from "react";
import { AppContext } from "../context/AppContext";
import { links } from "../utils/navlinks";
import '../styles/FilterOptions.css';

function FilterOptions(){

  const { setActual } = React.useContext(AppContext);

  return(
    <div className="FilterOptions">
      <ul className="FilterOptions__list">
        {links.map(c => (
		  	  <li key={c.text}>
		  	  	<button onClick={() => setActual(c.text)}>{c.text}</button>
		  	  </li>
        ))}
		  </ul>
    </div>
  )
}

export { FilterOptions }
