import React from 'react';
import './footer.css';

const Services = () => {
  return (
    <>
      <h3>Dich vu</h3>
      <ul>
        <li className="service-item">
          <a href="/#" className="service-link">
            Dieu khoan su dung
          </a>
        </li>
        <li className="service-item">
          <a href="/#" className="service-link">
            Chinh sach su dung
          </a>
        </li>
        <li className="service-item">
          <a href="/#" className="service-link">
            Lien he
          </a>
        </li>
        <li className="service-item">
          <a href="/#" className="service-link">
            He thong nha sach
          </a>
        </li>
      </ul>
    </>
  );
};

export default Services;