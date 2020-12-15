import React, { useContext, useEffect, useState } from 'react';


const AppContext = React.createContext();


const AppProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState('');
  const [amount, setAmount] = useState(5);

  const api = "19458094-4047234440d6be34e81600d45";
  const url = `https://pixabay.com/api/?key=${api}&q=${search}&image_type=photo&per_page=${amount}&safesearch=true`;


  const fetchImages = async () => {
    const response = await fetch(url);
    const data = await response.json()

    setList(data.hits)
    console.log(list);
  };

  useEffect(() => {
    fetchImages();
  }, [search, amount])


  return (
    <AppContext.Provider
      value={{
        search, setSearch,
        list, setList,
        amount, setAmount,
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