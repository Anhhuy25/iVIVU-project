import React from 'react';
import './maincontent.css';

const BestSeller = () => {
  return (
    <div className="grid wide">
      <h2 className="newbooks-title">
        <a href="#/" className="newbooks-title-link">SACH BAN CHAY</a>
      </h2>
      <div className="row newbooks-list">

        <div className="col l-3 m-4 c-6">
          <div className="newbooks-product bestseller-product">
            <div className="newbooks-discount">
              <span className="newbooks-discount-price">-30%</span>
            </div>
            <a href="#/" className="newbooks-link">
              <img className="newbooks-img" src="https://nxbkimdong.com.vn/sites/default/files/styles/158_auto/public/sinh-vat-than-thoai-khap-the-gian_bia-1.jpg?itok=0d2nDNms" alt="" />
            </a>
          </div>
          <div className="newbooks-info">
            <a href="#/" className="newbooks-info-link">Sinh vật thần thoại khắp thế gian</a>
            <div className="newbooks-author">Epic</div>
            <div className="newbooks-price-icon">
              <p>55.300 d</p>
              <div className="newbooks-icon">
                <button>
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
          <div className="newbooks-product bestseller-product">
            <div className="newbooks-discount">
              <span className="newbooks-discount-price">-15%</span>
            </div>
            <a href="#/" className="newbooks-link">
              <img className="newbooks-img bestseller-img" src="https://nxbkimdong.com.vn/sites/default/files/styles/158_auto/public/19_41.jpg?itok=H8mm4hKM" alt="" />
            </a>
          </div>
          <div className="newbooks-info">
            <a href="#/" className="newbooks-info-link">Thanh gươm diệt quỷ - Tập 19</a>
            <div className="newbooks-author">Koyoharu Gotouge</div>
            <div className="newbooks-price-icon">
              <p>21.250 d</p>
              <div className="newbooks-icon">
                <button>
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
              <span className="newbooks-discount-price">-30%</span>
            </div>
            <a href="#/" className="newbooks-link">
              <img className="newbooks-img" src="https://nxbkimdong.com.vn/sites/default/files/styles/158_auto/public/90-tre-thong-minh-nho-cach-tro-chuyen_bia-tb3-final-in-1.jpg?itok=vR_2i7Wc" alt="" />
            </a>
          </div>
          <div className="newbooks-info">
            <a href="#/" className="newbooks-info-link">90% trẻ thông minh nhờ cách trò chuyện đúng đắn của cha mẹ</a>
            <div className="newbooks-author">Urako Kanamori</div>
            <div className="newbooks-price-icon">
              <p>27.300 d</p>
              <div className="newbooks-icon">
                <button>
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
              <span className="newbooks-discount-price">-30%</span>
            </div>
            <a href="#/" className="newbooks-link">
              <img className="newbooks-img bestseller-img" src="https://nxbkimdong.com.vn/sites/default/files/styles/158_auto/public/dong-vat-xi-hoi-nhu-the-nao_bia_0.jpg?itok=ot2hYsgM" alt="" />
            </a>
          </div>
          <div className="newbooks-info">
            <a href="#/" className="newbooks-info-link">Sự thật thú vị về loài vật - Động vật xì hơi như thế
            nào?</a>
            <div className="newbooks-author">Nick Caruso</div>
            <div className="newbooks-price-icon">
              <p>39.200 d</p>
              <div className="newbooks-icon">
                <button>
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

export default BestSeller;