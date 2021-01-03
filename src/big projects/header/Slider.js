import React, { useEffect } from 'react';
import { useGlobalContext } from '../context';
import './header.css';

const Slider = () => {
  const { images, index, setIndex } = useGlobalContext();

  useEffect(() => {
    const lastIndex = images.length - 1;

    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }

  }, [images, index])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 3000);

    return () => clearInterval(slider);
  }, [index])

  return (

    <>
      <div className="l-12 m-12 c-12 slider-main">
        {/* Slider left */}
        <div className="slider-left">
          <div className="img-container">
            <a href="#/" className="img-link">
              <img alt="" src="https://nxbkimdong.com.vn/sites/default/files/banner_370x370_-_nhap_ma.jpg" className="img-left" />
            </a>

            <a href="#/" className="img-link">
              <img alt="" src="https://nxbkimdong.com.vn/sites/default/files/bnwgiang-sinh-2020-wings-370px.jpg" className="img-left" />
            </a>
          </div>
        </div>

        {/* Slider center */}
        <div className="slider-center">
          <div className="img-container-center">
            {/* {images.map((image, imageIndex) => {
              const { id, img } = image;

              let position = "nextSlide";
              if (imageIndex === index) {
                position = "activeSlide";
              }
              if (imageIndex === index - 1 || (index === 0 && imageIndex === images.length - 1)) {
                position = "lastSlide";
              }

              return (
                <a href="#/" key={id} className={`mySlides ${position} img-link`}>
                  <img alt="" src={img} className="img-center" />
                </a>

              );
            })} */}

            <button className="prev" onClick={() => setIndex(index - 1)}>
              <i className="fas fa-arrow-circle-left"></i>
            </button>

            <button className="next" onClick={() => setIndex(index + 1)}>
              <i className="fas fa-arrow-circle-right"></i>
            </button>
          </div>
        </div>

        {/* Slider-right */}
        <div className="slider-right">
          <div className="img-container">
            <a href="#/" className="img-link">
              <img alt="" src="https://nxbkimdong.com.vn/sites/default/files/bnkd-370x370_t12.jpg" className="img-right" />
            </a>

            <a href="#/" className="img-link">
              <img alt="" src="https://nxbkimdong.com.vn/sites/default/files/bngiaiquyettrongai370x370_t11.jpg" className="img-right" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;