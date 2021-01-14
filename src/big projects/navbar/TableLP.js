import React from 'react';
import { useGlobalContext } from '../context';
import { listLP } from './listLP';
import './navbar.css';


const TableLP = () => {
  const {
    setTableArray
  } = useGlobalContext();

  const handleClick = (id) => {
    const itemClicked = listLP.filter(item => item.id === id);

    setTableArray(itemClicked)
  }
  return (
    <ul className="navbar-table">
      {listLP.map(item => {
        return (
          <li className="table-item" key={item.id} onClick={() => handleClick(item.id)}>
            <span className="table-city">{item.city}</span>
            <span className="table-phone">{item.phone}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default TableLP;