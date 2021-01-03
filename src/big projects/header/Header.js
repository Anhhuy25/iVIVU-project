import React from 'react';
import { useGlobalContext } from '../context';
import "./header.css";
import "../style.css";
import Login from './Login';
import Register from './Register';
import Slider from './Slider';
import Navbar from './Navbar/Navbar';

const Header = () => {
  const {
    loadingLogin, setLoadingLogin,
    loadingRegister, setLoadingRegister,
    amount,
  } = useGlobalContext();

  const handleLogin = () => {
    setLoadingLogin(true)
  };

  const handleRegister = () => {
    setLoadingRegister(true)
  }

  return (
    <>

      <div className="header">
        <div className="grid">
          <nav className="header-navbar">

            {/* left */}
            <ul className="header-left">
              <li>
                <input
                  type="text"
                  className="header-input"
                />
              </li>
              <li>
                <button className="header-search-icon">
                  <i className="fas fa-search"></i>
                </button>
              </li>
              <li>
                <div>
                  <button
                    className="header-btn"
                  >
                    Tim kiem
              </button>
                </div>
              </li>
            </ul>

            {/* right */}
            <div className="header-right">

              <div>
                <button className="header-right-btn" onClick={handleLogin}>
                  {loadingLogin ? <Login /> : ''}Dang nhap
              </button>
              </div>


              <div>
                <button className="header-right-btn" onClick={handleRegister}>
                  {loadingRegister ? <Register /> : ''}Dang ki
                </button>
              </div>


              <div>
                <button className="header-right-btn">
                  <i className="fas fa-shopping-cart"></i>
                  {amount}
                </button>
              </div>

            </div>
          </nav>
        </div>

      </div>

      <Navbar />

      <Slider />
    </>
  );
};

export default Header;