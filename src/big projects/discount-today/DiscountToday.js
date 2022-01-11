import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { listImages } from "./data";
import "./discounttoday.css";

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
  }, [index]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="discount-today">
      <div className="grid wide">
        <div className="row">
          {/* Images Carousel */}
          <div className="col l-12 m-0 c-0">
            <h1 className="discount-today-title">Ưu đãi tốt nhất hôm nay</h1>
            <p className="discount-today-description">
              Nhanh tay đặt ngay. Để mai sẽ lỡ
            </p>
            <div className="discount-today-img-carousel">
              {listImages.map((img, imgIndex) => {
                let position = "nextSlide";
                if (imgIndex === index) {
                  position = "activeSlide";
                }
                if (
                  imgIndex === index - 1 ||
                  (index === 0 && imgIndex === listImages.length - 1)
                ) {
                  position = "lastSlide";
                }

                return (
                  <Link to={img.to} key={img.id} className={position}>
                    <img src={img.url} alt="" className="discount-today-img" />
                  </Link>
                );
              })}

              <div className="dot-icon">
                <span className="dot" onClick={() => setIndex(0)}></span>
                <span className="dot" onClick={() => setIndex(1)}></span>
                <span className="dot" onClick={() => setIndex(2)}></span>
              </div>
            </div>
          </div>

          {/* Images Pull Left-Right */}
          <div className="col l-0 m-12 c-0">
            <h1 className="discount-today-title">Ưu đãi tốt nhất hôm nay</h1>
            <p className="discount-today-description">
              Nhanh tay đặt ngay. Để mai sẽ lỡ
            </p>

            <nav className="discount-today-category">
              <ul className="discount-today-list">
                <li className="phuquoc phuquoc-img">
                  <Link to="" className="discount-today-link"></Link>
                </li>

                <li className="vungtau vungtau-img">
                  <Link to="" className="discount-today-link"></Link>
                </li>

                <li className="ninhthuan ninhthuan-img">
                  <Link to="" className="discount-today-link"></Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountToday;
