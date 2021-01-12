import React from 'react';
import { useGlobalContext } from '../context';
import './loginregis.css';

const Login = () => {
  const {
    setShowLogin,
    password, setPassword,
    name, setName,
    checkName, setCheckName,
    checkPassword, setCheckPassword,
    checkLengthPassword, setCheckLengthPassword
  } = useGlobalContext();

  const handleSubmit = () => {
    if (!name) {
      setCheckName(false)
    }
    if (name && !password) {
      setCheckPassword(false)
    }
    if (password && password.length < 6) {
      setCheckLengthPassword(false)
    }
  }

  // Function display none Error Message
  const handleNameDown = () => {
    setCheckName(true)
  }
  const handlePasswordDown = () => {
    setCheckPassword(true)
    setCheckLengthPassword(true)
  }

  const handleCloseForm = () => {
    setShowLogin(false)
    setName('')
    setPassword('')
    setCheckName(true)
    setCheckPassword(true)
    setCheckLengthPassword(true)
  }

  return (
    <div className="login-container">
      <h5>Đăng nhập bằng:</h5>
      <button
        className="close-modal-btn"
        onClick={handleCloseForm}
      >
        <i className="fas fa-times times-icon"></i>
      </button>

      {/* Social icon */}
      <div className="socials-icon">
        <button className="facebook-icon">
          <i className="fab fa-facebook-square"></i>
          <p>Facebook</p>
        </button>
        <button className="google-icon">
          <i className="fab fa-google"></i>
          <p>Google</p>
        </button>
      </div>

      <div>
        {/* Line-through */}
        <div className="line-through">
          <div><hr /></div>
          <span>Hoặc</span>
          <div><hr /></div>
        </div>

        {/* Input */}
        <div className="input-login">
          <div className="input-name">
            <label htmlFor="">Email / Số điện thoại</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} onKeyDown={handleNameDown} />
            {checkName ? '' : <p className="error-name">Vui lòng điền vào trường này</p>}
          </div>
          <div className="input-password">
            <label htmlFor="">Mật khẩu</label>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={handlePasswordDown} />
            {checkPassword ? '' : <p className="error-password">Vui lòng điền vào trường này</p>}
            {checkLengthPassword ? '' : <p className="error-password">Mật khẩu tối thiểu 6 kí tự</p>}
          </div>
          <div className="input-login-btn">
            <button className="forget-pass-btn">Quên mật khẩu?</button>
          </div>
        </div>
        <button type="submit" className="login-btn" onClick={handleSubmit}>Đăng nhập</button>
      </div>
    </div>
  );
};

export default Login;