import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const SubNavbar = () => {
  return (
    <ul className="subnavbar-list">
      <Link to="/tai-khoan-dat-phong/">Tài khoản đặt phòng</Link>
      <Link to="/cam-nang-du-lich/">Cẩm nang du lịch</Link>
      <Link to="/gioi-thieu/">Giới thiệu</Link>
      <Link to="/ho-tro/">Hỗ trợ</Link>
    </ul>
  );
};

export default SubNavbar;