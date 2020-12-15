import React from 'react';
import Account from './Account';
import Owner from './Owner';
import Services from './Services';
import Support from './Support';
import '../grid_system.css';

const footer = () => {
  return (
    <div className="grid wide">
      <div className="row">
        <div>
          <Services />
        </div>
        <div>
          <Support />
        </div>
        <div>
          <Account />
        </div>
        <div>
          <Owner />
        </div>
      </div>
    </div>
  );
};

export default footer;



