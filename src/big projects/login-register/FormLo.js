import React from 'react';
import { useGlobalContext } from '../context';

import './loginregis.css';

const FormLo = () => {
  const { setShowLogin, setShowFormLoReg, setShowRegis } = useGlobalContext();

  const showLogoffForm = () => {
    setShowLogin(true)
    setShowFormLoReg(false)
  }

  const showRegisoffForm = () => {
    setShowRegis(true)
  }

  return (
    <div className="form">
      <button onClick={showLogoffForm}>
        Đăng nhập
      </button>
      <p className="form-paragraph">Chưa có tài khoản? <u onClick={showRegisoffForm}>Đăng ký</u> ngay</p>
    </div>
  );
};

export default FormLo;