import React from 'react';
import { toursCaoCap } from './listTours';
import { Link } from 'react-router-dom';

import '../../grid.css';
import './toursadvance.css'


const ToursAdvance = ({ clickToursAdvance }) => {
  return (
    <div className="toursadvance-container">
      <div className="grid wide">
        <div className="toursadvance-topic">
          <h1 className="toursadvance-topic-title">Tour Cao Cấp</h1>
          <Link to="/tour-cao-cap" className="toursadvance-topic-more">
            <span>XEM THÊM TOURS</span>
            <i className="fas fa-chevron-right"></i>
          </Link>
        </div>

        <div className="row">
          {toursCaoCap.map(item => {
            return (
              <div key={item.id} className="col l-4 m-6 c-12">
                <div onClick={() => clickToursAdvance(item)} className="toursadvance-content">
                  <Link to={`/${item.to}`}>
                    <div className="toursadvance-dis-img-loca">
                      {item.discount && <span className="toursadvance-discount">{item.discount}</span>}
                      <img src={item.img} alt={item.name} className="toursadvance-img" />
                      <span className="toursadvance-location">
                        <i className="fas fa-map-marker-alt"></i>
                        {item.location}
                      </span>
                    </div>

                    <div className="toursadvance-info">
                      <h3 className="toursadvance-name">{item.name}</h3>
                      {item.time && (
                        <div className="toursadvance-time-transportion">
                          <span className="toursadvance-time">
                            <i className="fas fa-clock"></i>
                            <span>{item.time}</span>
                          </span>
                          <span className="toursadvance-transportation">
                            <i className="fas fa-plane"></i>
                            <i className="fas fa-bus"></i>
                          </span>
                        </div>
                      )}

                      {item.rating && (
                        <div className="toursadvance-rating">
                          {item.rating.map((rate, index) => {
                            return (
                              <span key={index}>{rate}</span>
                            );
                          })}
                        </div>
                      )}

                      <ul className="toursadvance-list">
                        {item.description.map((descript, index) => {
                          return (
                            <li key={index}>
                              <i className="fas fa-circle"></i>
                              {descript}
                            </li>
                          );
                        })}
                      </ul>

                      <div className="toursadvance-price">
                        <span className="toursadvance-money">{item.price.toFixed(6)}</span>
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

export default ToursAdvance;