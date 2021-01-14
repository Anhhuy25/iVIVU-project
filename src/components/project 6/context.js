import React, { useContext, useState } from 'react';




const AppContext = React.createContext();


const AppProvider = ({ children }) => {



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





  return (
    <AppContext.Provider
      value={{

        name, setName,
        checkName, setCheckName,
        password, setPassword,
        checkPassword, setCheckPassword,
        checkLengthPassword, setCheckLengthPassword,
        repassword, setRepassword,
        checkRePassword, setCheckRepassword,
        checkPassRepass, setCheckPassRepass,
        checkBox, setCheckBox,
        showErrorMess, setShowErrorMess,
        checkAfterAt, setCheckAfterAt,

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