import React from 'react';
import { Link } from 'react-router-dom';
import './safetytours.css';


const SafetyTours = () => {
  return (
    <div className="safety-tours">
      <div className="grid wide">
        <h1 className="safety-tours-title">Du lịch an toàn</h1>
        <p className="safety-tours-description">Nâng cao sức khỏe, cân bằng cuộc sống</p>

        {/* Topic */}
        <div className="row">
          <div className="col l-12 c-12 m-12">
            <nav className="events-category">
              <ul className="events-category-list">
                {/* New Year */}
                <li className="newyear newyear-img">
                  <Link to="/chu-de/tet-tay" className="newyear-link">
                    <p className="topic-title">Năm mới</p>
                    <p className="topic-description">Nghỉ lễ xả hơi, chào năm tươi mới -<u> 108 khách sạn</u> </p>
                    <p className="topic-background"></p>
                  </Link>
                </li>

                {/* Positive */}
                <li className="positive positive-img">
                  <Link to="/chu-de/khach-san-tich-cuc" className="positive-link">
                    <p className="topic-title">Tích cực</p>
                    <p className="topic-description">Ở villa, làm việc từ xa -<u> 28 khách sạn</u> </p>
                    <p className="topic-background"></p>
                  </Link>
                </li>

                {/* Overcome disease */}
                <li className="overcome overcome-img">
                  <Link to="/chu-de/khach-san-vuot-dich" className="overcome-link">
                    <p className="topic-title">Vượt dịch</p>
                    <p className="topic-description">Đặt sớm. Ưu đãi lớn -<u> 42 khách sạn</u></p>
                    <p className="topic-background"></p>
                  </Link>
                </li>

                {/* Voucher */}
                <li className="voucher voucher-img">
                  <Link to="/voucher-du-lich" className="voucher-link">
                    <p className="topic-title">Gift Voucher</p>
                    <p className="topic-description">Lưu giữ khoảnh khắc, trải nghiệm hành trình</p>
                    <p className="topic-background"></p>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyTours;