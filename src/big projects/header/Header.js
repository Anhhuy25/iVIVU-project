import React from 'react';
import "./header.css";
import "../style.css";
import Login from './Login';
import { useGlobalContext } from '../context';

const Header = () => {
  const { loading, setLoading } = useGlobalContext();

  const handleLogin = () => {
    setLoading(true)

  };

  return (
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
                {loading ? <Login /> : ''}Dang nhap
              </button>
            </div>


            <div>
              <button className="header-right-btn">Dang ki</button>
            </div>


            <a href="/#" className="header-right-btn">
              <i className="fas fa-shopping-cart"></i>
            </a>

          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;