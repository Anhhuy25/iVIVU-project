import React, { useEffect } from 'react';
import { useGlobalContext } from '../context';
import './header.css';

const Register = () => {
  const {
    showModal, setShowModal, setLoadingRegister,
    name, setName,
    email, setEmail,
    passwordRegister, setPasswordRegister,
    checkName, setCheckName,
    checkEmail, setCheckEmail,
    checkPassRegis, setCheckPassRegis,
  } = useGlobalContext();

  const handleCloseModal = () => {
    setShowModal(false)

    setTimeout(() => {
      setLoadingRegister(false)
      setShowModal(true)
    }, 500);
  };

  const handleSubmitRegister = () => {
    if (!name) {
      setCheckName(false)
    }

    if (!email) {
      setCheckEmail(false)
    }

    if (!passwordRegister) {
      setCheckPassRegis(false)
    }
  }

  const handleNameKeyPress = () => {
    if (name) {
      setCheckName(true)
    }
  }

  const handleEmailKeyPress = () => {
    if (email) {
      setCheckEmail(true)
    }
  }

  const handlePassKeyPress = () => {
    if (passwordRegister) {
      setCheckPassRegis(true)
    }
  }

  useEffect(() => {
    handleNameKeyPress()
    handleEmailKeyPress()
    handlePassKeyPress()
  }, [name, email, passwordRegister])

  return (
    <div className="grid wide">
      <div className="row">
        <div className="col l-12 m-12 c-12">
          <div className={`modal ${showModal ? 'show-modal' : ''}`}>
            <div className="modal-container">
              <div className="modal-header">
                <h3 className="modal-title">Dang ki</h3>
                <button
                  className="close-modal-btn"
                  onClick={handleCloseModal}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <hr />
              <div className="modal-content">
                {/* name */}
                <div className="modal-name">
                  <label htmlFor="name">Ho ten</label>
                  <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} onKeyPress={handleNameKeyPress} />
                  <p className="modal-check">
                    {checkName ? undefined : `Nhap ho ten`}
                  </p>
                </div>

                {/* email */}
                <div className="modal-email">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} onKeyPress={handleEmailKeyPress} />
                  <p className="modal-check">
                    {checkEmail ? undefined : `Nhap email`}
                  </p>
                </div>

                {/* password */}
                <div className="modal-password">
                  <label htmlFor="password">Mat khau</label>
                  <input type="password" name="password" value={passwordRegister} onChange={(e) => setPasswordRegister(e.target.value)} onKeyPress={handlePassKeyPress} />
                  <p className="modal-check">
                    {checkPassRegis ? undefined : `Nhap mat khau`}
                  </p>
                </div>

                {/* register-btn */}
                <button
                  className="register-btn"
                  onClick={handleSubmitRegister}
                >
                  Tao tai khoan moi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;