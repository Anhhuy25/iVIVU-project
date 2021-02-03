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

const getLocalStorageNavbarTours = () => {
  let navbarToursArray = localStorage.getItem('navbarToursArray');

  if (navbarToursArray) {
    return JSON.parse(localStorage.getItem('navbarToursArray'));
  } else {
    return [];
  }
}

const getLocalStorageTourViewed = () => {
  let tourViewed = localStorage.getItem('tourViewed');

  if (tourViewed) {
    return JSON.parse(localStorage.getItem('tourViewed'));
  } else {
    return [];
  }
}

const getLocalStorageNavbarPlaneTicket = () => {
  let navbarPlaneTicketArr = localStorage.getItem('navbarPlaneTicketArr');

  if (navbarPlaneTicketArr) {
    return JSON.parse(localStorage.getItem('navbarPlaneTicketArr'));
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

  // Show Sidebar
  const [showSidebar, setShowSidebar] = useState(false);

  // Navbar changed when click different Content
  const [navbarToursArray, setNavbarToursArray] = useState(getLocalStorageNavbarTours());
  const [navbarPlaneTicketArr, setNavbarPlaneTicketArr] = useState(getLocalStorageNavbarPlaneTicket())

  // Tours Viewed
  const [tourViewed, setTourViewed] = useState(getLocalStorageTourViewed());
  // SGHNSPHL5N4D
  const [showTableDay1403, setShowTable1403] = useState(true);
  const [showTableDay1703, setShowTable1703] = useState(true);
  const [showTableDay2403, setShowTable2403] = useState(true);
  const [numberAdult, setNumberAdult] = useState(2);
  const [numberChildren, setNumberChildren] = useState(0);
  const [requireOrWatch, setRequireOrWatch] = useState('Yêu cầu đặt');
  const [showPriceAndTotal, setShowPriceAndTotal] = useState(true);
  const [showPriceChildren, setShowPriceChildren] = useState(false);
  const [listAge, setListAge] = useState([]);
  const [selectAge, setSelectAge] = useState('250.000');
  const [firstTerm, setFirstTerm] = useState(true);
  const [secondTerm, setSecondTerm] = useState(false);
  const [thirdTerm, setThirdTerm] = useState(false);
  const [fourthTerm, setFourthTerm] = useState(false);
  const [showSingleRoom, setShowSingleRoom] = useState(false);

  // Plane Ticket
  const [info1, setInfo1] = useState(true);
  const [info2, setInfo2] = useState(false);
  const [info3, setInfo3] = useState(false);
  const [info4, setInfo4] = useState(false);
  const [info5, setInfo5] = useState(false);
  const [showNoteCarousel, setShowNoteCarousel] = useState(false);

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
    localStorage.setItem('navbarToursArray', JSON.stringify(navbarToursArray));
    localStorage.setItem('tourViewed', JSON.stringify(tourViewed));
    localStorage.setItem('navbarPlaneTicketArr', JSON.stringify(navbarPlaneTicketArr));
  }, [hotelAddClass, tourAddClass, ticketAddClass, eatAddClass, tableArray, navbarToursArray, tourViewed, navbarPlaneTicketArr])

  return (
    <AppContext.Provider
      value={{
        showSubNavbar, setShowSubNavbar,
        hotelAddClass, tourAddClass,
        ticketAddClass, eatAddClass,
        hotel, tour, ticket, eat,
        showFormLoReg, setShowFormLoReg, showLogin, setShowLogin,
        name, setName, checkName, setCheckName, password, setPassword,
        checkPassword, setCheckPassword, checkLengthPassword, setCheckLengthPassword,
        showRegis, setShowRegis, repassword, setRepassword,
        checkRePassword, setCheckRepassword, checkPassRepass, setCheckPassRepass,
        checkBox, setCheckBox, showErrorMess, setShowErrorMess,
        checkAfterAt, setCheckAfterAt, showTableLP, setShowTableLP,
        tableArray, setTableArray, showSidebar, setShowSidebar,
        navbarToursArray, setNavbarToursArray, tourViewed, setTourViewed,
        showTableDay1403, setShowTable1403, showTableDay1703, setShowTable1703,
        showTableDay2403, setShowTable2403,
        numberAdult, setNumberAdult, numberChildren, setNumberChildren,
        requireOrWatch, setRequireOrWatch, showSingleRoom, setShowSingleRoom,
        showPriceAndTotal, setShowPriceAndTotal, showPriceChildren, setShowPriceChildren,
        listAge, setListAge, selectAge, setSelectAge,
        firstTerm, setFirstTerm, secondTerm, setSecondTerm,
        thirdTerm, setThirdTerm, fourthTerm, setFourthTerm,
        navbarPlaneTicketArr, setNavbarPlaneTicketArr,
        info1, setInfo1, info2, setInfo2, info3, setInfo3, info4, setInfo4, info5, setInfo5,
        showNoteCarousel, setShowNoteCarousel,
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