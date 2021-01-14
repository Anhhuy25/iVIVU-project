import React from 'react';
import { Link } from 'react-router-dom';

import './loginregis.css';

const FormLo = () => {

  return (
    <div className="form">
      <Link to="/dang-nhap" target="_blank">
        <button
        >
          Đăng nhập
      </button>
      </Link>
      <p className="form-paragraph">Chưa có tài khoản?
        <Link to="/dang-ky" target="_blank">
          <u>Đăng ký</u>
        </Link>
       ngay</p>
    </div>
  );
};

export default FormLo;