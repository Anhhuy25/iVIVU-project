import React, { useContext, useState, useEffect } from 'react';




const AppContext = React.createContext();

const getLocalStorageHotel = () => {
  let hotelAddClass = localStorage.getItem('hotelAddClass');

  if (hotelAddClass) {
    return JSON.parse(localStorage.getItem('hotelAddClass'));
  } else {
    return false;
  }
}

const getLocalStorageTour = () => {
  let tourAddClass = localStorage.getItem('tourAddClass');

  if (tourAddClass) {
    return JSON.parse(localStorage.getItem('tourAddClass'));
  } else {
    return false;
  }
}

const getLocalStorageTicket = () => {
  let ticketAddClass = localStorage.getItem('ticketAddClass');

  if (ticketAddClass) {
    return JSON.parse(localStorage.getItem('ticketAddClass'));
  } else {
    return false;
  }
}

const getLocalStorageEat = () => {
  let eatAddClass = localStorage.getItem('eatAddClass');

  if (eatAddClass) {
    return JSON.parse(localStorage.getItem('eatAddClass'));
  } else {
    return false;
  }
}

const getLocalStorageTable = () => {
  let tableArray = localStorage.getItem('tableArray');

  if (tableArray) {
    return JSON.parse(localStorage.getItem('tableArray'));
  } else {
    return [];
  }
}

const AppProvider = ({ children }) => {
  // Navbar
  const [hotelAddClass, setHotelAddClass] = useState(getLocalStorageHotel());
  const [tourAddClass, setTourAddClass] = useState(getLocalStorageTour());
  const [ticketAddClass, setTicketAddClass] = useState(getLocalStorageTicket());
  const [eatAddClass, setEatAddClass] = useState(getLocalStorageEat());

  // SubNavbar
  const [showSubNavbar, setShowSubNavbar] = useState(false);

  // Form Login-Register
  const [showFormLoReg, setShowFormLoReg] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegis, setShowRegis] = useState(false);

  // Login 
  const [name, setName] = useState('');
  const [checkName, setCheckName] = useState(true);
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState(true);
  const [checkLengthPassword, setCheckLengthPassword] = useState(true);

  // Register
  const [repassword, setRepassword] = useState('');
  const [checkRePassword, setCheckRepassword] = useState(true);
  const [checkPassRepass, setCheckPassRepass] = useState(true);
  const [checkBox, setCheckBox] = useState(false);
  const [showErrorMess, setShowErrorMess] = useState(true)
  const [checkAfterAt, setCheckAfterAt] = useState(true); // check after @

  // Show Table Location-Phonenumber
  const [showTableLP, setShowTableLP] = useState(false);
  const [tableArray, setTableArray] = useState(getLocalStorageTable());

  // Function add ClassName for Navbar
  const hotel = () => {
    setHotelAddClass(true)
    setTourAddClass(false)
    setTicketAddClass(false)
    setEatAddClass(false)
  }
  const tour = () => {
    setHotelAddClass(false)
    setTourAddClass(true)
    setTicketAddClass(false)
    setEatAddClass(false)
  }
  const ticket = () => {
    setHotelAddClass(false)
    setTourAddClass(false)
    setTicketAddClass(true)
    setEatAddClass(false)
  }
  const eat = () => {
    setHotelAddClass(false)
    setTourAddClass(false)
    setTicketAddClass(false)
    setEatAddClass(true)
  }

  useEffect(() => {
    localStorage.setItem('hotelAddClass', JSON.stringify(hotelAddClass));
    localStorage.setItem('tourAddClass', JSON.stringify(tourAddClass));
    localStorage.setItem('ticketAddClass', JSON.stringify(ticketAddClass));
    localStorage.setItem('eatAddClass', JSON.stringify(eatAddClass));
    localStorage.setItem('tableArray', JSON.stringify(tableArray));
  }, [hotelAddClass, tourAddClass, ticketAddClass, eatAddClass, tableArray])

  return (
    <AppContext.Provider
      value={{
        showSubNavbar, setShowSubNavbar,
        hotelAddClass, tourAddClass,
        ticketAddClass, eatAddClass,
        hotel, tour, ticket, eat,
        showFormLoReg, setShowFormLoReg,
        showLogin, setShowLogin,
        name, setName,
        checkName, setCheckName,
        password, setPassword,
        checkPassword, setCheckPassword,
        checkLengthPassword, setCheckLengthPassword,
        showRegis, setShowRegis,
        repassword, setRepassword,
        checkRePassword, setCheckRepassword,
        checkPassRepass, setCheckPassRepass,
        checkBox, setCheckBox,
        showErrorMess, setShowErrorMess,
        checkAfterAt, setCheckAfterAt,
        showTableLP, setShowTableLP,
        tableArray, setTableArray
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