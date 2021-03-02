import React from 'react';

// Components
import NavbarEating from './eating/NavbarEating';
import FooterTop from './tours/FooterTop';
import FooterBottom from './eating/FooterBottom';
import EatingTitle from './eating/EatingTitle';

const Eat = () => {
  return (
    <>
      <NavbarEating />
      <EatingTitle />
      <div style={{ backgroundColor: '#f9f9f9', padding: '0 8px' }}>
        <FooterTop />
        <FooterBottom />
      </div>
    </>
  );
};

export default Eat;