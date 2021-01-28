import React from 'react';
import { Link } from 'react-router-dom';

import '../../grid.css';
import './populartourism.css';

import dalat from '../../img/tourslist/popularTourism/cathedral-of-da-lat-360x480.jpg';
import nhatrang from '../../img/tourslist/popularTourism/nha-trang-360x225.jpg';
import phuquoc from '../../img/tourslist/popularTourism/phuquoc-360x225.jpg';
import quynhon from '../../img/tourslist/popularTourism/quynhon11-360x225.jpg';
import dongbac from '../../img/tourslist/popularTourism/ivivu-thac-ban-gioc-bia-360x225.jpg';

const PopularTourism = () => {
  return (
    <div className="populartourism-container">
      <div className="grid wide">
        <div className="populartourism">
          <h1 className="populartourism-title">Các điểm du lịch phổ biến</h1>
          <Link to="/tat-ca-diem-den" className="populartourism-more">
            <span>XEM TẤT CẢ</span>
            <i className="fas fa-chevron-right"></i>
          </Link>
        </div>

        <div className="row">
          <div className="col l-4 m-6 c-12">
            <Link to="/tour-da-lat">
              <div className="populartourism-dalat">
                <img className="img-dalat" src={dalat} alt="dalat" />
                <div>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Đà Lạt</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="col l-4 m-6 c-12">
            <div className="populartourism-nhatrang-phuquoc">
              <Link to="/tour-nha-trang">
                <div className="populartourism-nhatrang">
                  <img className="img" src={nhatrang} alt="nhatrang" />
                  <div>
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Nha Trang</span>
                  </div>
                </div>
              </Link>
              <Link to="/tour-phu-quoc">
                <div className="populartourism-phuquoc">
                  <img className="img" src={phuquoc} alt="phuquoc" />
                  <div>
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Phú Quốc</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="col l-4 m-12 c-12">
            <div className="populartourism-quynhon-dongbac">
              <Link to="/tour-quy-nhon">
                <div className="populartourism-quynhon">
                  <img className="img" src={quynhon} alt="quynhon" />
                  <div>
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Quy Nhơn</span>
                  </div>
                </div>
              </Link>
              <Link to="/tour-dong-bac">
                <div className="populartourism-dongbac">
                  <img className="img" src={dongbac} alt="dongbac" />
                  <div>
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Đông Bắc</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularTourism;