import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useInitialState } from '../hooks/useInitialState';
import { useProducts } from '../hooks/useProducts';
import { useToggles } from '../hooks/useToggles';

const AppContext = React.createContext({});

function ContextProvider({ children }){

  const {
    state,
    handleMobileMenu,
    handleDesktopMenu,
    handleOrders,
    handleEdit,
    handleModifyPassword,
    closeAll,
  } = useToggles();

  const {
    user,
    setUser,
    LOGIN,
    LOGOUT,
    SIGNUP,
    manageLogout,
  } = useAuth();

  const {
    products,
    detail,
    actual,
    filtedProducts,
    toggleProductDetail,
    setDetail,
    setActual,
    setToggleProductDetail,
   } = useInitialState();

   const { sumTotal } = useProducts();

  return (
    <AppContext.Provider value=
    {{
      user,
      products,
      state,
      detail,
      toggleProductDetail,
      actual,
      filtedProducts,
      setToggleProductDetail,
      setActual,
      setDetail,
      LOGIN,
      LOGOUT,
      SIGNUP,
      sumTotal,
      setUser,
      manageLogout,
      handleMobileMenu,
      handleDesktopMenu,
      handleOrders,
      handleEdit,
      handleModifyPassword,
      closeAll,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export { ContextProvider, AppContext };
