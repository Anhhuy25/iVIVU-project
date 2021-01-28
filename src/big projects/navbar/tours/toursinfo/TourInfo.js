import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { tetTanSuu, toursCaoCap } from '../listTours';

// Components
import ToursTet from './tours-category/ToursTet';
import ToursCaoCapAd from './tours-category/ToursCaoCapAd';
import FooterTop from '../FooterTop';
import FooterBottom from '../FooterBottom';
import NavbarTours from '../NavbarTours';

const TourInfo = () => {
  const [toursTet, setToursTet] = useState(tetTanSuu);
  const [toursCaocap, setToursCaocap] = useState(toursCaoCap);
  const { url } = useParams();

  useEffect(() => {
    const tourTetChoose = toursTet.filter(tour => tour.to === url);
    const tourCaocapChoose = toursCaoCap.filter(tour => tour.to === url);
    // Bat buoc phai dung Array
    setToursTet(tourTetChoose)
    setToursCaocap(tourCaocapChoose)
  }, [])

  return (
    <>
      <NavbarTours />
      {toursTet.length > 0 && <ToursTet toursTetIVIVU={toursTet} />}
      {toursCaocap.length > 0 && <ToursCaoCapAd toursCaocapIVIVU={toursCaocap} />}
      <div style={{ backgroundColor: '#f9f9f9' }}>
        <FooterTop />
        <FooterBottom />
      </div>
    </>
  );
};

export default TourInfo;