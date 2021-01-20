import React from 'react';
import { Link } from 'react-router-dom';
import './searchinfo.css';

// Date Picker
// import viVN from 'antd/lib/locale/vi_VN';
// import "antd/dist/antd.css";
// import { DatePicker, ConfigProvider } from "antd";

// const { RangePicker } = DatePicker;

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
          {/* <div className="search-rangepicker">
            <ConfigProvider locale={viVN}>
              <RangePicker />
            </ConfigProvider>
          </div> */}
        </div>

      </div>
    </div>
  );
};

export default SearchInfo;