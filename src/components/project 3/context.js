import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const AppContext = React.createContext();

const api = 'ae8266b85fcd65f14db5b154c03cbaaa';

const AppProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Hanoi');
  const [weather, setWeather] = useState({});

  const realTime = (d) => {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day}, ${date} ${month} ${year}`;
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${api}`);
      const data = await response.json();

      console.log(data);
      setWeather(data)
    }

    fetchData();
  }, [query])

  const searchData = () => {
    setQuery(search)
  }

  return (
    <AppContext.Provider
      value={{
        search,
        setSearch,
        searchData,
        realTime,
        weather
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

const useGlobalContext = () => {
  return useContext(AppContext);
}


export { AppContext, AppProvider, useGlobalContext }