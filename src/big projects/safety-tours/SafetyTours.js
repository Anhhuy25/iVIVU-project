import React from "react";
import { Link } from "react-router-dom";
import "./safetytours.css";
import "../discount-today/discounttoday.css";

const SafetyTours = () => {
  return (
    <div className="safety-tours">
      <div className="grid wide">
        {/* Topic */}
        <div className="row">
          {/* Images Stand Pull Left-Right */}
          <div className="col l-0 m-0 c-12">
            <h1 className="discount-today-title">Ưu đãi tốt nhất hôm nay</h1>
            <p className="discount-today-description">
              Nhanh tay đặt ngay. Để mai sẽ lỡ
            </p>

            <nav className="discount-today-category">
              <ul className="discount-today-list">
                <li className="movenpick-phuquoc movenpick-phuquoc-img">
                  <Link to="" className="discount-today-link-mobile"></Link>
                </li>

                <li className="novotel-phuquoc novotel-phuquoc-img">
                  <Link to="" className="discount-today-link-mobile"></Link>
                </li>

                <li className="amanoi-ninhthuan amanoi-ninhthuan-img">
                  <Link to="" className="discount-today-link-mobile"></Link>
                </li>

                <li className="mercure-vungtau mercure-vungtau-img">
                  <Link to="" className="discount-today-link-mobile"></Link>
                </li>

                <li className="imperial-vungtau imperial-vungtau-img">
                  <Link to="" className="discount-today-link-mobile"></Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col l-12 c-12 m-12">
            <h1 className="safety-tours-title">Du lịch an toàn</h1>
            <p className="safety-tours-description">
              Nâng cao sức khỏe, cân bằng cuộc sống
            </p>

            <nav className="events-category">
              <ul className="events-category-list">
                {/* New Year */}
                <li className="newyear newyear-img">
                  <Link to="" className="newyear-link">
                    <p className="topic-title">Năm mới</p>
                    <p className="topic-description">
                      Nghỉ lễ xả hơi, chào năm tươi mới -<u> 108 khách sạn</u>{" "}
                    </p>
                    <p className="topic-background"></p>
                  </Link>
                </li>

                {/* Positive */}
                <li className="positive positive-img">
                  <Link to="" className="positive-link">
                    <p className="topic-title">Tích cực</p>
                    <p className="topic-description">
                      Ở villa, làm việc từ xa -<u> 28 khách sạn</u>{" "}
                    </p>
                    <p className="topic-background"></p>
                  </Link>
                </li>

                {/* Overcome disease */}
                <li className="overcome overcome-img">
                  <Link to="" className="overcome-link">
                    <p className="topic-title">Vượt dịch</p>
                    <p className="topic-description">
                      Đặt sớm. Ưu đãi lớn -<u> 42 khách sạn</u>
                    </p>
                    <p className="topic-background"></p>
                  </Link>
                </li>

                {/* Voucher */}
                <li className="voucher voucher-img">
                  <Link to="" className="voucher-link">
                    <p className="topic-title">Gift Voucher</p>
                    <p className="topic-description">
                      Lưu giữ khoảnh khắc, trải nghiệm hành trình
                    </p>
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
