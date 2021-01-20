import React from 'react';
import { tetTanSuu } from './listTours';
import { Link } from 'react-router-dom';

import './tourshome.css';
import '../../grid.css';

const ToursHome = () => {
  return (
    <div className="tourshome-container">
      <div className="tourshome">
        <div className="grid wide">
          <div className="row">
            <div className="col l-4 m-4 c-12 ">
              <div className="tourshome-description">
                <i className="fas fa-check-circle"></i>
                <span>Tour chọn lọc <strong>chất lượng nhất</strong></span>
              </div>
            </div>
            <div className="col l-4 m-4 c-12">
              <div className="tourshome-description">
                <i className="fas fa-check-circle"></i>
                <span>Bảo đảm <strong>giá tốt nhất</strong></span>
              </div>
            </div>
            <div className="col l-4 m-4 c-12">
              <div className="tourshome-description">
                <i className="fas fa-check-circle"></i>
                <span>Đội ngũ tư vấn <strong>chi tiết và tận tình</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid wide">
        <div className="tourshome-topic">
          <h1 className="tourshome-topic-title">iVIVU Tết Tân Sửu</h1>
          <Link to="/du-lich/ivivu-tet-tan-suu" className="tourshome-topic-more">
            <span>XEM THÊM TOURS</span>
            <i className="fas fa-chevron-right"></i>
          </Link>
        </div>
        <div className="row">
          {tetTanSuu.map(item => {
            return (
              <div key={item.id} className="col l-4 m-6 c-12">
                <div className="tourshome-content">
                  <Link to={`/du-lich/${item.to}`}>
                    <div className="tourshome-dis-img-loca">
                      {item.discount && <span className="tourshome-discount">{item.discount}</span>}
                      <img src={item.img} alt={item.name} className="tourshome-img" />
                      <span className="tourshome-location">
                        <i className="fas fa-map-marker-alt"></i>
                        {item.location}
                      </span>
                    </div>

                    <div className="tourshome-info">
                      <h3 className="tourshome-name">{item.name}</h3>
                      {item.time && (
                        <div className="tourshome-time-transportion">
                          <span className="tourshome-time">
                            <i className="fas fa-clock"></i>
                            <span>{item.time}</span>
                          </span>
                          <span className="tourshome-transportation">
                            <i className="fas fa-plane"></i>
                            <i className="fas fa-bus"></i>
                          </span>
                        </div>
                      )}

                      {item.rating && (
                        <div className="tourshome-rating">
                          {item.rating.map((rate, index) => {
                            return (
                              <span key={index}>{rate}</span>
                            );
                          })}
                        </div>
                      )}

                      <ul className="tourshome-list">
                        {item.description.map((descript, index) => {
                          return (
                            <li key={index}>
                              <i className="fas fa-circle"></i>
                              {descript}
                            </li>
                          );
                        })}
                      </ul>

                      <div className="tourshome-price">
                        <span className="tourshome-money">{item.price.toFixed(6)}</span>
                        <span>VND</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ToursHome;