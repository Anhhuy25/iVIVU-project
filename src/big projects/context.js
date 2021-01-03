import React, { useContext, useState } from 'react';
import data from './header/data';




const AppContext = React.createContext();


const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(true);

  // Header-Login
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [accountLogin, setAccountLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [checkAccLogin, setCheckAccLogin] = useState(true);
  const [checkPassLogin, setCheckPassLogin] = useState(true);

  // Header-Register
  const [loadingRegister, setLoadingRegister] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');
  const [checkName, setCheckName] = useState(true);
  const [checkEmail, setCheckEmail] = useState(true);
  const [checkPassRegis, setCheckPassRegis] = useState(true);

  // Header-Navbar
  const [showNavbar, setShowNavbar] = useState(false);

  // Header-Slider
  const [images, setImages] = useState(data);
  const [index, setIndex] = useState(0);

  // Cart
  const [amount, setAmount] = useState(0);


  return (
    <AppContext.Provider
      value={{
        loadingLogin, setLoadingLogin,
        showModal, setShowModal,
        accountLogin, setAccountLogin,
        passwordLogin, setPasswordLogin,
        checkAccLogin, setCheckAccLogin,
        checkPassLogin, setCheckPassLogin,
        loadingRegister, setLoadingRegister,
        name, setName,
        email, setEmail,
        passwordRegister, setPasswordRegister,
        checkName, setCheckName,
        checkEmail, setCheckEmail,
        checkPassRegis, setCheckPassRegis,
        showNavbar, setShowNavbar,
        images, setImages,
        index, setIndex,
        amount, setAmount
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