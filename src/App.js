import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "antd/dist/antd.css";

// Components
import Header from './big projects/header/Header';
import ErrorPage from './big projects/ErrorPage';
import Footer from './big projects/footer/Footer';
import Navbar from './big projects/navbar/Navbar';
import Tours from './big projects/navbar/Tours';
import PlaneTicket from './big projects/navbar/PlaneTicket';
import Eat from './big projects/navbar/Eat';
import SearchInfo from './big projects/search-destination/SearchInfo';
import PhuQuoc from './big projects/search-destination/PhuQuoc';
import AccountBooking from './big projects/navbar/subnav/AccountBooking';
import Handbook from './big projects/navbar/subnav/Handbook';
import Introduce from './big projects/navbar/subnav/Introduce';
import Support from './big projects/navbar/subnav/Support';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Header />
          <SearchInfo />
        </Route>
        <Route path="/du-lich/" children={<Tours />}></Route>
        <Route path="/ve-may-bay/" children={<PlaneTicket />}></Route>
        <Route path="/an-uong/" children={<Eat />}></Route>
        <Route path="/tai-khoan-dat-phong/" children={<AccountBooking />}></Route>
        <Route path="/cam-nang-du-lich/" children={<Handbook />}></Route>
        <Route path="/gioi-thieu/" children={<Introduce />}></Route>
        <Route path="/ho-tro/" children={<Support />}></Route>

        <Route path="/dieu-kien-dieu-khoan/"></Route>
        <Route path="/khach-san-phu-quoc/khu-nghi-duong-movenpick-waverly-phu-quoc" children={<PhuQuoc />}></Route>
        <Router path="*">
          <ErrorPage />
        </Router>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;