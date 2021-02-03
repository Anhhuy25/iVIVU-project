import React from 'react';
import { Link } from 'react-router-dom';
import './searchinfo.css';


const SearchInfo = () => {
  return (
    <div className="search-info-background">
      <Link to="/khach-san-phu-quoc/khu-nghi-duong-movenpick-waverly-phu-quoc" target="_blank">

      </Link>
      <div className="grid wide">
        <h1>Trải nghiệm kỳ nghỉ tuyệt vời</h1>
        <h2>Combo khách sạn - vé máy bay - đưa đón sân bay giá tốt nhất </h2>

        <div className="search-form">
          <div className="search-input">
            <input type="text" name="" id="" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default SearchInfo;