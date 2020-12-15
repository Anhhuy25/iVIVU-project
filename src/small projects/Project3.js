import React from 'react';
import { useGlobalContext } from './components/project 3/context';

function Project3() {
  const { search, setSearch, searchData, realTime, weather } = useGlobalContext();

  const handleSubmit = () => {
    searchData();
    setSearch('')
  }

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type='submit'
        onClick={handleSubmit}
      >
        Search
      </button>
      {(typeof weather.main !== 'undefined') ? (
        <div>
          <h2>{weather.name}, {weather.sys.country}</h2>
          <h3>{realTime(new Date())}</h3>
          <h4>{Math.round(weather.main.temp)}</h4>
        </div>
      ) : ('')}
    </div>
  );
}

export default Project3;