import React from 'react';
import { Link } from 'react-router-dom';

import '../../../../grid.css';
import './tourscategory.css';

const ToursTet = ({ toursTetIVIVU }) => {
  return (
    <div className="tourtet-container">
      <div className="grid wide">
        <div className="row">
          {/* Breadcrumbs */}
          <nav className="col l-12 m-12 c-12">
            <ul className="tourtet-navbar">
              <li className="tourtet-item">
                <Link className="tourtet-link" to="/du-lich">
                  <i className="fas fa-home"></i>
                  <span>Trang chủ</span>
                </Link>
              </li>
              <li className="tourtet-item">
                <Link className="tourtet-link" to="/ha-long">
                  <span>Hạ Long</span>
                </Link>
              </li>
              {/* <li className="tourtet-item">
                <Link className="tourtet-choose" to={`${toursTetIVIVU.map(tour => tour.to)}`}>
                  <span>{toursTetIVIVU.map(tour => tour.name)}</span>
                </Link>
              </li> */}
            </ul>
          </nav>

          {/* Description */}
          <div className="col l-12 m-12 c-12">
            {/* <h1 className="tourtet-name">{toursTetIVIVU.map(tour => tour.name)}</h1>
            <p className="tourtet-rating">{toursTetIVIVU.map(tour =>
              <span key={tour.id}>{tour.rating}</span>)}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursTet;