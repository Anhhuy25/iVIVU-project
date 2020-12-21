import React from 'react';
import './footer.css';

const Account = () => {
  return (
    <>
      <h3>Tai khoan cua toi</h3>
      <ul>
        <li className="account-item">
          <a href="/#" className="account-link">
            Dang nhap
          </a>
        </li>
        <li className="account-item">
          <a href="/#" className="account-link">
            Tao tai khoan moi
          </a>
        </li>
      </ul>
    </>
  );
};

export default Account;