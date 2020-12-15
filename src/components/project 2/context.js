import React, { useContext, useState, useEffect } from 'react';



export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const APP_ID = '2e894fb1';
  const APP_KEY = 'e736324b499d60fc605cc2a50d98636f';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json()
      console.log(data.hits);
      setRecipes(data.hits)
    }
    fetchData()
  }, [query])

  const searchData = () => {
    setQuery(search)
  }
  return (
    <AppContext.Provider
      value={{
        recipes,
        setRecipes,
        search,
        setSearch,
        query,
        setQuery,
        searchData
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}
