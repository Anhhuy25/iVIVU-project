import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { listImages } from './data';
import './discounttoday.css';


import phuquoc from '../img/discount/1.png';
import vungtau from '../img/discount/2.png';
import ninhthuan from '../img/discount/3.png';

const DiscountToday = () => {
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = listImages.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, listImages]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="grid wide">
      <div className="row">
        <div className="col l-12 m-12 c-12">
          <h1>Ưu đãi tốt nhất hôm nay</h1>
          <p>Nhanh tay đặt ngay. Để mai sẽ lỡ</p>

          <nav className="discount-today-category">
            <div className="discount-today-list">
              {/* <li>
                <Link to="/khach-san-phu-quoc/khu-nghi-duong-movenpick-waverly-phu-quoc" className="discount-today-link">
                  <img src={phuquoc} alt="phuquoc" className="phuquoc-img" />
                </Link>
              </li>

              <li>
                <Link to="/khach-san-vung-tau/khach-san-mercure-vung-tau" className="discount-today-link">
                  <img src={vungtau} alt="vungtau" className="vungtau-img" />
                </Link>
              </li>

              <li>
                <Link to="/khach-san-ninh-thuan/khu-nghi-duong-amanoi-villas-ninh-thuan" className="discount-today-link">
                  <img src={ninhthuan} alt="ninhthuan" className="ninhthuan-img" />
                </Link>
              </li> */}
              {listImages.map((img, imgIndex) => {

                let position = 'nextSlide';
                if (imgIndex === index) {
                  position = 'activeSlide';
                }
                if (
                  imgIndex === index - 1 ||
                  (index === 0 && imgIndex === listImages.length - 1)
                ) {
                  position = 'lastSlide';
                }

                return (
                  <Link to={img.to} key={img.id} className={position}>
                    <img src={img.url} alt="" className="discount-today-img" />
                  </Link>
                );
              })}

            </div>
            <div className="dot-icon">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </nav>
          <img src={phuquoc} alt="" />
          <img src={vungtau} alt="" />
          <img src={ninhthuan} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DiscountToday;