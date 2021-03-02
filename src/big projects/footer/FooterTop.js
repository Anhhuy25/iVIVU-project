import React from 'react';
import '../grid.css';
import './footer.css';

import bocongthuong from '../img/bocongthuong.png';

const FooterTop = () => {
  return (
    <div className="grid wide">
      <div className="row container-top">
        <nav className="col l-2-4 m-6 c-0">
          <h3 className="footer-top-title">Về iVIVU.com</h3>
          <ul className="footer-top-list">
            <li className="footer-top-item">
              <a href="#/" className="footer-top-link">Chúng tôi</a>
            </li>
            <li className="footer-top-item">
              <a href="#/" className="footer-top-link">iVIVU Blog</a>
            </li>
            <li className="footer-top-item">
              <a href="#/" className="footer-top-link">PMS - Miễn phí</a>
            </li>
          </ul>
        </nav>

        <nav className="col l-2-4 m-6 c-0">
          <h3 className="footer-top-title">Thông tin cần biết</h3>
          <ul className="footer-top-list">
            <li className="footer-top-item">
              <a href="#/" className="footer-top-link">Điều kiện và Điều khoản</a>
            </li>
            <li className="footer-top-item">
              <a href="#/" className="footer-top-link">Quy chế hoạt động</a>
            </li>
            <li className="footer-top-item">
              <a href="#/" className="footer-top-link">Câu hỏi thường gặp</a>
            </li>
          </ul>
        </nav>

        <nav className="col l-2-4 m-6 c-0">
          <h3 className="footer-top-title">Đối tác</h3>
          <ul className="footer-top-list">
            <li className="footer-top-item">
              <a href="#/" className="footer-top-link">Quy chế bảo hiểm Cathay</a>
            </li>
            <li className="footer-top-item">
              <a href="#/" className="footer-top-link">Yêu cầu bồi thường Cathay</a>
            </li>
            <li className="footer-top-item">
              <a href="#/" className="footer-top-link">Quy chế trả góp</a>
            </li>
          </ul>
        </nav>

        <nav className="col l-2-4 m-6 c-0">
          <h3 className="footer-top-title">Chứng nhận</h3>
          <div>
            <a href="#/" className="footer-top-link">
              <img src={bocongthuong} alt="bocongthuong" />
            </a>
          </div>
        </nav>

        <nav className="col l-2-4 m-12 c-0 center">
          <div>
            <a href="#/" className="img-member">
              <i className="sprites logo-tmg"></i>
            </a>
            <a href="#/" className="img-member">
              <img src="https://res.ivivu.com/hotel/img/vic.png" alt="vic" />
            </a>
          </div>
          <p className="footer-top-paragraph">Một thành viên của <strong>Thiên Minh Group</strong></p>
        </nav>
      </div>
    </div>
  );
};

export default FooterTop;