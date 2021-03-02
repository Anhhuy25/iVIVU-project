import React, { useEffect, useState } from 'react';
import { listBannerTicket } from './listTicket';
import { useGlobalContext } from '../../context';

import '../../grid.css';
import './planeticket.css';

const PlaneTicketCarousel = () => {
  const [bannerIndex, setBannerIndex] = useState(0);
  const { showNoteCarousel, setShowNoteCarousel } = useGlobalContext();
  // let id = listBannerTicket.map(item => item.id);


  useEffect(() => {
    const lastIndex = listBannerTicket.length - 1;
    if (bannerIndex > lastIndex) {
      setBannerIndex(0)
    }
    if (bannerIndex < 0) {
      setBannerIndex(lastIndex)
    }
  }, [bannerIndex])

  useEffect(() => {
    let slide = setInterval(() => {
      setBannerIndex(bannerIndex + 1)
    }, 3000);

    return () => {
      clearInterval(slide)
    }
  }, [bannerIndex])

  // Show Note when click carousel
  const handleShowNote = () => {
    setShowNoteCarousel(true)
  }

  return (
    <div className="planeticket-carousel">
      <div className="grid wide">
        <h1 className="planeticket-carousel-title">Khuyến mãi và ưu đãi</h1>
        <p className="planeticket-carousel-description">Tận hưởng ưu đãi – Trải nghiệm thoải mái</p>
        <div className="row">
          <div className="col l-12 m-12 c-12">
            <div className="planeticket-carousel-list">
              {listBannerTicket.map((item, imgIndex) => {
                let position = 'nextSlide';
                if (bannerIndex === imgIndex) {
                  position = 'activeSlide';
                }
                if (imgIndex === bannerIndex - 1 || (bannerIndex === 0 && imgIndex === listBannerTicket.length - 1)) {
                  position = 'lastSlide';
                }

                return (
                  <article key={item.id} className={position}>
                    <img onClick={handleShowNote} src={item.img} alt="" className="planeticket-carousel-img" />
                  </article>
                )
              })}
              <div className="bannerticket-dot-icon">
                <span onClick={() => setBannerIndex(0)} className="bannerticket-dot"></span>
                <span onClick={() => setBannerIndex(1)} className="bannerticket-dot"></span>
                <span onClick={() => setBannerIndex(2)} className="bannerticket-dot"></span>
                <span onClick={() => setBannerIndex(3)} className="bannerticket-dot"></span>
                <span onClick={() => setBannerIndex(4)} className="bannerticket-dot"></span>
                <span onClick={() => setBannerIndex(5)} className="bannerticket-dot"></span>
                <span onClick={() => setBannerIndex(6)} className="bannerticket-dot"></span>
              </div>
            </div>

            {showNoteCarousel ? (
              <div className={`modal-overlay ${showNoteCarousel ? 'show-modal' : ''}`}>
                {bannerIndex === 0 && <h1>Hello</h1>}
                {bannerIndex === 1 && <h1>World</h1>}
                {bannerIndex === 2 && <h1>Huy</h1>}
              </div>
            ) : ''}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaneTicketCarousel;