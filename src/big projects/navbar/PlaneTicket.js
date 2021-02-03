import React from 'react';

// Components
import BestTicketsFare from './planeticket/BestTicketsFare';
import InfoUseful from './planeticket/InfoUseful';
import NavbarPlaneTicket from './planeticket/NavbarPlaneTicket';
import PlaneTicketCarousel from './planeticket/PlaneTicketCarousel';
import SearchPlaneTicket from './planeticket/SearchPlaneTicket';
import FooterBottom from './tours/FooterBottom';
import FooterTop from './tours/FooterTop';


const PlaneTicket = () => {
  return (
    <>
      <NavbarPlaneTicket />
      <SearchPlaneTicket />
      <BestTicketsFare />
      <PlaneTicketCarousel />
      <InfoUseful />
      <div style={{ backgroundColor: '#f9f9f9', padding: '0 8px' }}>
        <FooterTop />
        <FooterBottom />
      </div>
    </>
  );
};

export default PlaneTicket;