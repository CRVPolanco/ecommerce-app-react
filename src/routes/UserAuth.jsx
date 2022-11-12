import React from "react";
import { AppContext } from "../context/AppContext";

function UserAuth({ children }){

  const { user } = React.useContext(AppContext);

  if(!user){
    return(
      <>
        <p>Cannot access here without an user</p>
        {children}
      </>
    )
  }

  return(
    <>
      {children}
    </>
  )
}

export { UserAuth }
