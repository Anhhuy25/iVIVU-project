import React from 'react';
import { useGlobalContext } from '../../context';
import { navbarTours } from '../listLP';

const NavbarToursTable = () => {
  const { setNavbarToursArray } = useGlobalContext();

  const handleClick = (id) => {
    const itemClicked = navbarTours.filter(item => item.id === id);

    setNavbarToursArray(itemClicked)
  }

  return (
    <ul className="navbar-table">
      {navbarTours.map(item => {
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

export default NavbarToursTable;