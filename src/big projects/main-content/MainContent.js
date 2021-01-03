import React from 'react';
import BestSeller from './BestSeller';
import Combo from './Combo';
import Countdown from './Countdown';
import NewBooks from './NewBooks';
import RegisterGetInfo from './RegisterGetInfo';


const MainContent = () => {

  return (
    <>
      <NewBooks />
      <Countdown />
      <BestSeller />
      <RegisterGetInfo />
      <Combo />
    </>
  );
};

export default MainContent;