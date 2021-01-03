import React from 'react';
import { useGlobalContext } from '../../context';
import '../header.css';
import '../../grid.css';

const Navbar = () => {
  const { showNavbar, setShowNavbar } = useGlobalContext();


  return (
    <nav className="navbar-items">
      <div className="navbar-icon" onClick={() => setShowNavbar(true)}>
        <i className={`${showNavbar ? '' : 'fas fa-bars'}`} ></i>
      </div>
      <ul className={`${showNavbar ? 'nav-menu active' : 'nav-menu'}`}>
        <li className="nav-links nav-icon-items">
          <i className="fas fa-times" onClick={() => setShowNavbar(false)}></i>
        </li>
        <li className="nav-items">
          <a href="#/" className="nav-links nav-dropdown">
            SACH
            <ul className="subnav-menu">
              <li className="subnav-items"><a href="#/" className="subnav-links">SACH MOI</a></li>
              <li className="subnav-items">
                <a href="#/" className="subnav-links">
                  SACH THEO CHU DE
                  <ul className="subnav-second-menu">
                    <li className="subnav-second-items"><a href="#/" className="subnav-second-links">LICH SU - TRUYEN THONG</a></li>
                    <li className="subnav-second-items"><a href="#/" className="subnav-second-links">KIEN THUC - KHOA HOC</a></li>
                    <li className="subnav-second-items"><a href="#/" className="subnav-second-links">TRUYEN TRANH</a></li>
                  </ul>
                </a>
              </li>
              <li className="subnav-items"><a href="#/" className="subnav-links">HIEU SACH</a></li>
              <li className="subnav-items"><a href="#/" className="subnav-links">KHUYEN MAI</a></li>
            </ul>
          </a>
        </li>
        <li className="nav-items"><a href="#/" className="nav-links">TAC GIA</a></li>
        {/* <div className="">
        </div> */}
        {/* <li className="nav-logo-item l-12 m-12 c-12">
          <a href="#/">
            <img src="https://nxbkimdong.com.vn/images/kimdongnew/logo60kd.png" alt="kimdong" className="nav-logo" />
          </a>
        </li> */}
        <li className="nav-items">
          <a href="#/" className="nav-links nav-dropdown">
            GIOI THIEU
            <ul className="subnav-menu">
              <li className="subnav-items"><a href="#/" className="subnav-links">GIOI THIEU VE NHA XUAT BAN</a></li>
              <li className="subnav-items"><a href="#/" className="subnav-links">TAC GIA - TAC PHAM</a></li>
              <li className="subnav-items"><a href="#/" className="subnav-links">CONG TAC XA HOI</a></li>
              <li className="subnav-items"><a href="#/" className="subnav-links">HOP TAC QUOC TE</a></li>
            </ul>
          </a>
        </li>
        <li className="nav-items"><a href="#/" className="nav-links">TIN TUC</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;