import React from 'react';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';
import './loginregis.css';

const Register = () => {
  const {
    setShowRegis,
    repassword, setRepassword,
    name, setName,
    password, setPassword,
    checkName, setCheckName,
    checkPassword, setCheckPassword,
    checkAfterAt, setCheckAfterAt,
    checkLengthPassword, setCheckLengthPassword,
    checkRePassword, setCheckRepassword,
    checkPassRepass, setCheckPassRepass,
    checkBox, setCheckBox,
    showErrorMess, setShowErrorMess
  } = useGlobalContext();

  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const handleSubmit = () => {
    if (!name) {
      setCheckName(false)
    } else if (!checkBox) {
      setShowErrorMess(false)
    }

    if (name && !regex.test(name)) {
      setCheckAfterAt(false)
    }
    if (!checkBox && name && !regex.test(name)) {
      setShowErrorMess(true)
    }

    if (regex.test(name) && !password) {
      setCheckPassword(false)
    }
    if (!checkBox && regex.test(name) && !password) {
      setShowErrorMess(true)
    }

    if (password && password.length < 6) {
      setCheckLengthPassword(false)
    }
    if (password && password.length < 6 && !checkBox) {
      setShowErrorMess(true)
    }

    if (password !== repassword && password.length >= 6) {
      setCheckRepassword(false)
    }
    if (password !== repassword && password.length >= 6 && !checkBox) {
      setShowErrorMess(true)
    }

    if (repassword && repassword.length < 6) {
      setCheckPassRepass(false)
    }
    if (repassword && repassword.length < 6 && !checkBox) {
      setShowErrorMess(true)
    }
  }

  const handleClick = () => {
    setShowErrorMess(true)
  }
  const handleCloseForm = () => {
    setShowRegis(false)
    setName('')
    setPassword('')
    setRepassword('')
    setCheckName(true)
    setCheckAfterAt(true)
    setCheckPassword(true)
    setCheckLengthPassword(true)
    setCheckRepassword(true)
    setCheckPassRepass(true)
    setShowErrorMess(true)
  }

  // Function display none Error Message
  const handleNameDown = () => {
    setCheckName(true)
    setCheckAfterAt(true)
  }

  const handlePasswordDown = () => {
    setCheckPassword(true)
    setCheckLengthPassword(true)
  }

  const handleRepasswordDown = () => {
    setCheckRepassword(true)
    setCheckPassRepass(true)
  }

  return (
    <div className="register-container">
      <h5>Đăng ký bằng:</h5>
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
        <div className="input-register">
          <div className="input-name">
            <label htmlFor="">Email</label>
            <input type="email"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={handleNameDown}
            />
            {checkName ? '' : <p className="error-name">Vui lòng điền vào trường này</p>}
            {checkAfterAt ? '' :
              <p className="error-name">Vui lòng nhập đúng định dạng email. VD: abc@gmail.com</p>
            }
          </div>
          <div className="input-password">
            <label htmlFor="">Mật khẩu</label>
            <input type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handlePasswordDown}
            />
            {checkPassword ? '' : <p className={`${showErrorMess ? 'error-password-regis' : 'error-password-regis-sub'}`}>Vui lòng điền vào trường này</p>}
            {checkLengthPassword ? '' : <p className={`${showErrorMess ? 'error-password-regis' : 'error-password-regis-sub'}`}>Mật khẩu tối thiểu 6 kí tự</p>}
          </div>
          <div className="input-repassword">
            <label htmlFor="">Xác nhận mật khẩu</label>
            <input type="text"
              value={repassword}
              onChange={(e) => setRepassword(e.target.value)}
              onKeyDown={handleRepasswordDown}
            />
            {checkRePassword ? '' : <p className={`${showErrorMess ? 'error-repassword' : 'error-repassword-sub'}`}>Vui lòng điền vào trường này</p>}
            {checkPassRepass ? '' : <p className={`${showErrorMess ? 'error-repassword' : 'error-repassword-sub'}`}>Xác nhận mật khẩu phải giống Mật khẩu</p>}
            {showErrorMess ? '' : <p className="error-checkbox">Bạn phải đồng ý điều khoản của iVIVU!</p>}
          </div>

          <div className="input-checkbox">
            <input type="checkbox" name="check" id="check"
              onClick={handleClick}
              onChange={(e) => setCheckBox(e.target.checked)} />
            <label htmlFor="check">
              Bằng việc tham gia iVIVU, tôi đồng ý tất cả
              <Link target="_blank" to="/dieu-kien-dieu-khoan/"> điều kiện va điều khoản.</Link>
            </label>
          </div>
        </div>
        <button type="submit" className="login-btn"
          onClick={handleSubmit}
        >Đăng ký</button>
      </div>
    </div>
  );
};

export default Register;