import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

import './navbar.css';
import '../grid.css';
import '../login-register/loginregis.css';
import SubNavbar from './SubNavbar';
import FormLo from '../login-register/FormLo';
import Login from '../login-register/Login';
import Register from '../login-register/Register';
import TableLP from './TableLP';
import Sidebar from './Sidebar';

const Navbar = () => {
  const {
    hotelAddClass, tourAddClass,
    ticketAddClass, eatAddClass,
    showSubNavbar, setShowSubNavbar,
    hotel, tour, ticket, eat,
    showFormLoReg, setShowFormLoReg,
    showLogin, showRegis,
    showTableLP, setShowTableLP,
    tableArray, showSidebar, setShowSidebar
  } = useGlobalContext();

  // Prevent Scrollbar when Modal appear
  useEffect(() => {
    if (showRegis) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }
  }, [showRegis])
  useEffect(() => {
    if (showLogin) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }
  }, [showLogin])

  return (
    <div className="navbar">
      <div className="grid wide">
        <div className="container-main">
          <div className="bars-icon" onClick={() => setShowSidebar(!showSidebar)}>
            <i className="fas fa-bars"></i>
          </div>
          {showSidebar && <div
            className={`sidebar-overlay ${showSidebar ? 'show-sidebar' : ''}`}><Sidebar /></div>}

          <div className="navbar-left m-8">
            <Link to="/">
              <img onClick={hotel} className="navbar-logo" src="https://res.ivivu.com/hotel/img/logo-newyear-2021.svg?v=2021" alt="ivivu" />
            </Link>
            <nav>
              <ul className="navbar-list">
                <Link to="/">
                  <li
                    onClick={hotel}
                    className={`${hotelAddClass ? 'active' : ''}`}
                  >
                    Khách sạn
                    </li>
                </Link>
                <Link to="/du-lich">
                  <li
                    onClick={tour}
                    className={`${tourAddClass ? 'active' : ''}`}
                  >
                    Tours
                    </li>
                </Link>
                <Link to="/ve-may-bay">
                  <li
                    onClick={ticket}
                    className={`${ticketAddClass ? 'active' : ''}`}
                  >
                    Vé máy bay
                    </li>
                </Link>
                <Link to="/an-uong">
                  <li
                    onClick={eat}
                    className={`${eatAddClass ? 'active' : ''}`}
                  >
                    Ăn uống
                    </li>
                </Link>
                <li className="navbar-dot" onClick={() => setShowSubNavbar(!showSubNavbar)}>
                  ...
                  {showSubNavbar && <div className="subnavbar"><SubNavbar /></div>}
                </li>
              </ul>
            </nav>
          </div>

          <div className="navbar-right m-4">
            <div className="navbar-account" onClick={() => setShowFormLoReg(!showFormLoReg)}>
              <i className="fas fa-user-circle"></i>
              <div className="navbar-nameaccount">
                <p>Tài khoản</p>
                <i className="fas fa-angle-down"></i>
              </div>
              {showFormLoReg && <div className="form-log-reg"><FormLo /></div>}
            </div>
            {showLogin && <div
              className={`modal-overlay ${showLogin ? 'show-modal' : ''}`}><Login /></div>}
            {showRegis && <div
              className={`modal-overlay ${showRegis ? 'show-modal' : ''}`}> <Register /></div>}

            <div className="navbar-contact">
              <p className="navbar-phonenumber">
                <i className="fas fa-phone-alt"></i>
                {tableArray.length === 0 ? '1900 1870' : <span>{tableArray.map(item => item.phone)}</span>}
              </p>

              <div className="navbar-time" onClick={() => setShowTableLP(!showTableLP)}>
                <p className="navbar-clock">
                  <i className="fas fa-clock"></i>
                  {tableArray.length === 0 ? '7h30 - 21h' : <span>{tableArray.map(item => item.time)}</span>}
                </p>
                <p className="navbar-location">
                  <i className="fas fa-map-marker-alt"></i>
                  {tableArray.length === 0 ? 'Hồ Chí Minh' : <span>{tableArray.map(item => item.city)}</span>}
                </p>
                <i className="fas fa-angle-down"></i>
                {showTableLP && <TableLP />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;