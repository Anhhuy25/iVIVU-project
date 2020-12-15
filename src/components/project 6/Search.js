import React from 'react';
import { useGlobalContext } from './context';

const Search = () => {
  const { search, setSearch, amount, setAmount } = useGlobalContext();

  return (
    <>
      <div className="search">
        <input
          type="text"
          name="images"
          value={search}
          onChange={(e) => { setSearch(e.target.value) }}
        />
        <label htmlFor="images">Search For Images</label>
      </div>
      <div className="select">
        <label htmlFor="amount">Amount:</label>
        <select onChange={(e) => setAmount(e.target.value)} name="amount" value={amount}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={30}>30</option>
          <option value={50}>50</option>
        </select>
      </div>
    </>

  );
};

export default Search;