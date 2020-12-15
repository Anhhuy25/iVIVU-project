import React, { useContext, useState } from 'react';


const AppContext = React.createContext();


const AppProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [occupation, setOccupation] = useState('');
  const [city, setCity] = useState('');
  const [list, setList] = useState({});
  const [check, setCheck] = useState(true);

  return (
    <AppContext.Provider
      value={{
        step, setStep,
        firstName, setFirstName,
        lastName, setLastName,
        email, setEmail,
        occupation, setOccupation,
        city, setCity,
        list, setList,
        check, setCheck
      }}
    >
      {children}
    </AppContext.Provider>
  );
}


const useGlobalContext = () => {
  return useContext(AppContext);
}


export { AppContext, AppProvider, useGlobalContext };