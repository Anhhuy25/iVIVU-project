import React from 'react';
import './maincontent.css';

const RegisterGetInfo = () => {
  return (
    <div className="RegisGetInfo">
      <h3>Đăng ký Email Nhận Thông Tin</h3>
      <form>
        <div className="RegisForm">
          <input type="text" placeholder="Email cua ban" />
          <button>Đăng ký</button>
        </div>
      </form>

    </div>
  );
};

export default RegisterGetInfo;