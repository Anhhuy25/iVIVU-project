import React from 'react';
import NavbarTours from './tours/NavbarTours';
import FooterTop from './tours/FooterTop';
import FooterBottom from './tours/FooterBottom';
import SearchInfo from './tours/SearchInfo';
import ToursHome from './tours/ToursHome';


const Tours = () => {
  return (
    <>
      <NavbarTours />
      <SearchInfo />
      <ToursHome />
      <div style={{
        backgroundColor: '#f9f9f9',
      }}>
        <FooterTop />
        <FooterBottom />
      </div>
    </>

  );
};

export default Tours;