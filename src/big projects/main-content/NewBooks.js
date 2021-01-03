import React from 'react';
import { useGlobalContext } from '../context';
import './maincontent.css';

const NewBooks = () => {
  const { amount, setAmount } = useGlobalContext();

  return (
    <div className="grid wide">
      <h2 className="newbooks-title">
        <a href="#/" className="newbooks-title-link">SACH MOI</a>
      </h2>
      <div className="row newbooks-list">

        <div className="col l-3 m-4 c-6">
          <div className="newbooks-product">
            <div className="newbooks-discount">
              <span className="newbooks-discount-price">-30%</span>
            </div>
            <a href="#/" className="newbooks-link">
              <img className="newbooks-img img" src="https://nxbkimdong.com.vn/sites/default/files/styles/158_auto/public/ha-noi-nghin-nam-ki-uc.jpg?itok=iEse5PEt" alt="" />
            </a>
          </div>
          <div className="newbooks-info">
            <a href="#/" className="newbooks-info-link">Hà Nội ngàn năm kí ức</a>
            <div className="newbooks-author">Lê Chi</div>
            <div className="newbooks-price-icon">
              <p>199.500 d</p>
              <div className="newbooks-icon">
                <button onClick={() => setAmount(amount + 1)}>
                  <i className="fas fa-shopping-cart"></i>
                </button>
                <button>
                  <i className="fas fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col l-3 m-4 c-6">
          <div className="newbooks-product">
            <div className="newbooks-discount">
              <span className="newbooks-discount-price">-30%</span>
            </div>
            <a href="#/" className="newbooks-link">
              <img className="newbooks-img img" src="https://nxbkimdong.com.vn/sites/default/files/styles/158_auto/public/ha-noi-nghin-nam-ki-uc-englishver_1.jpg?itok=jODnimQi" alt="" />
            </a>
          </div>
          <div className="newbooks-info">
            <a href="#/" className="newbooks-info-link">Hà Nội – Reminiscences of thousand years</a>
            <div className="newbooks-author">Lê Chi</div>
            <div className="newbooks-price-icon">
              <p>199.500 d</p>
              <div className="newbooks-icon">
                <button onClick={() => setAmount(amount + 1)} >
                  <i className="fas fa-shopping-cart"></i>
                </button>
                <button>
                  <i className="fas fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col l-3 m-4 c-0">
          <div className="newbooks-product">
            <div className="newbooks-discount">
              <span className="newbooks-discount-price">-15%</span>
            </div>
            <a href="#/" className="newbooks-link">
              <img className="newbooks-img" src="https://nxbkimdong.com.vn/sites/default/files/styles/158_auto/public/1_274.jpg?itok=uPuOD2ab" alt="" />
            </a>
          </div>
          <div className="newbooks-info">
            <a href="#/" className="newbooks-info-link">Nhất quỷ nhì ma, thứ ba (vẫn là) Takagi - Tập 1</a>
            <div className="newbooks-author">Lê Chi</div>
            <div className="newbooks-price-icon">
              <p>199.500 d</p>
              <div className="newbooks-icon">
                <button onClick={() => setAmount(amount + 1)} >
                  <i className="fas fa-shopping-cart"></i>
                </button>
                <button>
                  <i className="fas fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col l-3 m-0 c-0">
          <div className="newbooks-product">
            <div className="newbooks-discount">
              <span className="newbooks-discount-price">-15%</span>
            </div>
            <a href="#/" className="newbooks-link">
              <img className="newbooks-img" src="https://nxbkimdong.com.vn/sites/default/files/styles/158_auto/public/conan-amuro.jpg?itok=PFHLFluM" alt="" />
            </a>
          </div>
          <div className="newbooks-info">
            <a href="#/" className="newbooks-info-link">Thám tử lừng danh Conan - Amuro Toru Selection</a>
            <div className="newbooks-author">Lê Chi</div>
            <div className="newbooks-price-icon">
              <p>199.500 d</p>
              <div className="newbooks-icon">
                <button onClick={() => setAmount(amount + 1)} >
                  <i className="fas fa-shopping-cart"></i>
                </button>
                <button>
                  <i className="fas fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NewBooks;