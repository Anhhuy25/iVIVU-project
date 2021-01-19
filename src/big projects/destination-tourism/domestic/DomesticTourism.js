import React from 'react';
import { Link } from 'react-router-dom';
import '../../grid.css';
import '../destinationtourism.css';

import phuquoc from '../../img/destination/phuquoc-755x190.jpg';
import nhatrang from '../../img/destination/nhatrang_1-370x190.jpg';
import quynhon from '../../img/destination/quynhon_2-370x190.jpg';
import vungtau from '../../img/destination/vungtau_2-370x395.jpg';
import danang from '../../img/destination/danang_2-370x395.png';
import dalat from '../../img/destination/da-lat-755x190.jpg';
import phanthiet from '../../img/destination/undefined-8-370x190.jpg';
import sapa from '../../img/destination/sa-pa-370x190.jpg';

const DomesticTourism = () => {
  return (
    <div className="domestic-tourism">
      <div className="grid wide">
        <div className="row">
          <div className="col l-12 m-12 c-12">
            <h1 className="domestic-tourism-title">Điểm đến yêu thích trong nước</h1>
            <p className="domestic-tourism-description">Lên rừng xuống biển. Trọn vẹn Việt Nam</p>

            {/* Top */}
            <div className="domestic-tourism-top">
              <div className="domestic-tourism-top-left">
                <div className="domestic-tourism-top-left-up">
                  <Link to="/khach-san-phu-quoc" className="domestic-tourism-link-top-left">
                    <img src={phuquoc} alt="phuquoc" className="domestic-phuquoc-img" />
                    <div className="domestic-tourism-info-top">
                      <h1>Phú Quốc</h1>
                      <p>216 khách sạn</p>
                    </div>
                    <p className="domestic-tourism-background-top"></p>
                  </Link>
                </div>

                <div className="domestic-tourism-top-left-down">
                  <div className="domestic-nhatrang">
                    <Link to="/khach-san-nha-trang" className="domestic-tourism-link-top-left">
                      <img src={nhatrang} alt="nhatrang" className="domestic-nhatrang-img" />
                      <div className="domestic-tourism-info-top">
                        <h1>Nha Trang</h1>
                        <p>112 khách sạn</p>
                      </div>
                      <p className="domestic-tourism-background-top"></p>
                    </Link>
                  </div>
                  <div className="domestic-quynhon">
                    <Link to="/khach-san-quy-nhon" className="domestic-tourism-link-top-left">
                      <img src={quynhon} alt="quynhon" className="domestic-quynhon-img" />
                      <div className="domestic-tourism-info-top">
                        <h1>Quy Nhơn</h1>
                        <p>112 khách sạn</p>
                      </div>
                      <p className="domestic-tourism-background-top"></p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="domestic-tourism-top-right">
                <Link to="/khach-san-vung-tau" className="domestic-tourism-link-top-right">
                  <img src={vungtau} alt="vungtau" className="domestic-vungtau-img" />
                  <div className="domestic-tourism-info-top">
                    <h1>Vũng Tàu</h1>
                    <p>99 khách sạn</p>
                  </div>
                  <p className="domestic-tourism-background-top"></p>
                </Link>
              </div>
            </div>

            {/* Bottom */}
            <div className="domestic-tourism-bottom">
              <div className="domestic-tourism-bottom-left">
                <Link to="/khach-san-da-nang" className="domestic-tourism-link-bottom-left">
                  <img src={danang} alt="danang" className="domestic-danang-img" />
                  <div className="domestic-tourism-info-bottom">
                    <h1>Đà Nẵng</h1>
                    <p>184 khách sạn</p>
                  </div>
                  <p className="domestic-tourism-background-bottom"></p>
                </Link>
              </div>

              <div className="domestic-tourism-bottom-right">
                <div className="domestic-tourism-bottom-right-up">
                  <Link to="/khach-san-da-lat" className="domestic-tourism-link-bottom-right">
                    <img src={dalat} alt="dalat" className="domestic-dalat-img" />
                    <div className="domestic-tourism-info-bottom">
                      <h1>Đà Lạt</h1>
                      <p>145 khách sạn</p>
                    </div>
                    <p className="domestic-tourism-background-bottom"></p>
                  </Link>
                </div>

                <div className="domestic-tourism-bottom-right-down">
                  <div className="domestic-phanthiet">
                    <Link to="/khach-san-phan-thiet" className="domestic-tourism-link-bottom-right">
                      <img src={phanthiet} alt="phanthiet" className="domestic-phanthiet-img" />
                      <div className="domestic-tourism-info-bottom">
                        <h1>Phan Thiết</h1>
                        <p>93 khách sạn</p>
                      </div>
                      <p className="domestic-tourism-background-bottom"></p>
                    </Link>
                  </div>
                  <div className="domestic-sapa">
                    <Link to="/khach-san-sapa" className="domestic-tourism-link-bottom-right">
                      <img src={sapa} alt="sapa" className="domestic-sapa-img" />
                      <div className="domestic-tourism-info-bottom">
                        <h1>Sapa</h1>
                        <p>57 khách sạn</p>
                      </div>
                      <p className="domestic-tourism-background-bottom"></p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomesticTourism;