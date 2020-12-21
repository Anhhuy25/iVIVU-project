import React, { useContext, useState } from 'react';


const AppContext = React.createContext();


const AppProvider = ({ children }) => {
  // Header
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [accountLogin, setAccountLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [checkLogin, setCheckLogin] = useState(true);


  return (
    <AppContext.Provider
      value={{
        loading, setLoading,
        showModal, setShowModal,
        accountLogin, setAccountLogin,
        passwordLogin, setPasswordLogin,
        checkLogin, setCheckLogin
      }}
    >
      {children}
    </AppContext.Provider>
  )
}


const useGlobalContext = () => {
  return useContext(AppContext);
}


export { AppContext, AppProvider, useGlobalContext };