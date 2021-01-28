import React from 'react';

const TailorTour = () => {
  return (
    <>
      <h2 className="tailortour-title"><span>Tailor tour</span> - Trải nghiệm theo cách của bạn</h2>
      <p>Thiết kế lịch trình theo mong muốn. Đi đoàn riêng an toàn. Để lại thông tin chúng tôi sẽ liên lạc ngay</p>

      <div className="row">
        <div className="col l-6 m-6 c-12">
          <div className="tailortour-form">
            <div className="tailortour-name">
              <label htmlFor="">Họ Tên</label>
              <input className="tailortour-input" type="text" />
            </div>
            <div className="tailortour-phonenumber">
              <label htmlFor="">Điện thoại</label>
              <input className="tailortour-input" type="text" />
            </div>
            <div className="tailortour-email">
              <label htmlFor="">Email</label>
              <input className="tailortour-input" type="text" />
            </div>
            <div className="tailortour-experience">
              <label htmlFor="">Cách bạn trải nghiệm</label>
              <textarea className="tailortour-textarea" placeholder="Thời gian, số khách dự kiến, địa điểm yêu thích, loại hình khách sạn..." cols="30" rows="10"></textarea>
            </div>
            <div className="tailortour-button">
              <button className="tailortour-btn">Yêu cầu tư vấn</button>
            </div>
          </div>
        </div>
        <div className="col l-6 m-6 c-0">
          <div className="tailortour-avatar">
            <i className="fas fa-user-circle"></i>
          </div>
          <div className="tailortour-consultant">
            <p>Tư vấn ngay? Gọi tổng đài</p>
            <h3><i className="fas fa-phone-alt"></i> (028) 3933 8002</h3>
            <p>8h30 - 18h00 hàng ngày</p>
          </div>
          <div className="tailortour-qrcode">
            <img src="https://cdn1.ivivu.com/app-icon/iVIVUcode.png" alt="qrcode" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TailorTour;