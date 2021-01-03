import React, { useEffect } from 'react';
import { useGlobalContext } from '../context';
import './header.css';

const Login = () => {
  const { showModal, setShowModal, setLoadingLogin, accountLogin, setAccountLogin,
    passwordLogin, setPasswordLogin, checkAccLogin, setCheckAccLogin, checkPassLogin, setCheckPassLogin } = useGlobalContext();

  const handleCloseModal = () => {
    setShowModal(false)
    setAccountLogin('')
    setPasswordLogin('')

    setTimeout(() => {
      setLoadingLogin(false)
      setShowModal(true)
    }, 500);
  };

  const handleSubmitLogin = () => {
    if (!accountLogin) {
      setCheckAccLogin(false)
    } else {
      setCheckAccLogin(true)
    }

    if (!passwordLogin) {
      setCheckPassLogin(false)
    } else {
      setCheckPassLogin(true)
    }
  }

  const handleAccKeyPress = () => {
    if (accountLogin) {
      setCheckAccLogin(true)
    }
  }

  const handlePassKeyPress = () => {
    if (passwordLogin) {
      setCheckPassLogin(true)
    }
  }

  useEffect(() => {
    handleAccKeyPress()
    handlePassKeyPress()
  }, [accountLogin, passwordLogin])

  return (
    <div className="grid wide">
      <div className="row">
        <div className="col l-12 m-12 c-12">
          <div className={`modal ${showModal ? 'show-modal' : ''}`}>
            <div className="modal-container">
              <div className="modal-header">
                <h3 className="modal-title">Dang nhap</h3>
                <button
                  className="close-modal-btn"
                  onClick={handleCloseModal}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <hr />
              <div className="modal-content">
                {/* account-email */}
                <div className="modal-account-email">
                  <label htmlFor="account-email">Tai khoan hoac email</label>
                  <input type="text" name="account-email" value={accountLogin} onChange={(e) => setAccountLogin(e.target.value)} onKeyPress={handleAccKeyPress} />
                  <p className="modal-check">
                    {checkAccLogin ? undefined : `Nhap tai khoan hoac email`}
                  </p>
                </div>
                {/* password */}
                <div className="modal-password">
                  <label htmlFor="password">Mat khau</label>
                  <input type="password" name="password" value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} onKeyPress={handlePassKeyPress} />
                  <p className="modal-check">
                    {checkPassLogin ? undefined : `Nhap mat khau`}
                  </p>
                </div>

                {/* login-btn */}
                <div className="modal-btn">
                  <button
                    className="login-btn"
                    onClick={handleSubmitLogin}
                  >
                    Dang nhap
                  </button>
                  <button className="new-account-btn">Tao moi tai khoan</button>
                  <button className="forget-password-btn">Bam vao day neu quen mat khau</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;