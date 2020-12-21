import React from 'react';
import Account from './Account';
import Owner from './Owner';
import Services from './Services';
import Support from './Support';
import License from './License';
import Socials from './Socials';
import Government from './Government';
import '../grid.css';
import "../style.css";


const footer = () => {
  return (
    <div className="footer">
      <div className="grid wide footer-item">
        <div className="row">
          <div className="col l-3 m-6 c-12">
            <Services />
          </div>
          <div className="col l-3 m-6 c-12">
            <Support />
          </div>
          <div className="col l-3 m-6 c-12">
            <Account />
          </div>
          <div className="col l-3 m-6 c-12">
            <Owner />
          </div>
        </div>
        <div className="row row-item">
          <div className="col l-4 m-4 c-12">
            <License />
          </div>
          <div className="col l-4 m-4 c-12">
            <Socials />
          </div>
          <div className="col l-4 m-4 c-12">
            <Government />
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;



