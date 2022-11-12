import React from "react";

function useToggles(){

  const [state, dispatch] = React.useReducer(reducer, {...initialValue});

  const handleMobileMenu = () => {
    dispatch({ type: actionType.TOGGLEMOBILEMENU, payload: !state.toggleMobileMenu })
  }
  const handleDesktopMenu = () => {
    dispatch({ type: actionType.TOGGLEDESKTOPMENU, payload: !state.toggleDesktopMenu })
  }
  const handleOrders = () => {
    dispatch({ type: actionType.TOGGLEORDERS, payload: !state.toggleOrders });
  }
  const handleEdit = () => {
    dispatch({ type: actionType.TOGGLEEDIT, payload: !state.toggleEdit });
  }
  const handleModifyPassword = () => {
    dispatch({ type: actionType.TOGGLENEWPASSWORD, payload: !state.toggleNewPassword });
  }
  const closeAll = () => {
    dispatch({ type: actionType.closeAll });
  }

  return {
    state,
    handleMobileMenu,
    handleDesktopMenu,
    handleOrders,
    handleEdit,
    handleModifyPassword,
    closeAll,
  };
}

const initialValue = {
  toggleMobileMenu: false,
  toggleDesktopMenu: false,
  toggleOrders: false,
  toggleEdit: false,
  toggleNewPassword: false,
}

const reducer = (state, action) => {

  switch(action.type){

    case actionType.TOGGLEMOBILEMENU:
    return{
      ...state,
      toggleMobileMenu: action.payload,
    }
    case actionType.TOGGLEDESKTOPMENU:
    return{
      ...state,
      toggleDesktopMenu: action.payload,
    }
    case actionType.TOGGLEORDERS:
    return{
      ...state,
      toggleOrders: action.payload,
    }
    case actionType.TOGGLEEDIT:
      return{
        ...state,
        toggleEdit: action.payload,
      }
    case actionType.TOGGLENEWPASSWORD:
      return{
        ...state,
        toggleNewPassword: action.payload,
      }
    case actionType.closeAll:
      return{
        ...state,
        toggleMobileMenu: false,
        toggleDesktopMenu: false,
        toggleOrders: false,
        toggleEdit: false,
        toggleNewPassword: false,
      }
  }
}

const actionType = {
  TOGGLEMOBILEMENU: 'TOGGLEMOBILEMENU',
  TOGGLEDESKTOPMENU: 'TOGGLEDESKTOPMENU',
  TOGGLEORDERS: 'TOGGLEORDERS',
  TOGGLEEDIT: 'TOGGLEEDIT',
  TOGGLENEWPASSWORD: 'TOGGLENEWPASSWORD',
  closeAll: 'CLOSEALL',
}

export { useToggles }
