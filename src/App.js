import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './big projects/header/Header';
import ErrorPage from './big projects/ErrorPage';
import Footer from './big projects/footer/Footer';
import Navbar from './big projects/navbar/Navbar';
import Tours from './big projects/navbar/Tours';
import PlaneTicket from './big projects/navbar/PlaneTicket';
import Eat from './big projects/navbar/Eat';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Header />
          <Footer />
        </Route>
        <Route path="/du-lich/" children={<Tours />}></Route>
        <Route path="/ve-may-bay/" children={<PlaneTicket />}></Route>
        <Route path="/an-uong/" children={<Eat />}></Route>
        <Route path="/dieu-kien-dieu-khoan/"></Route>
        <Router path="*">
          <ErrorPage />
        </Router>
      </Switch>
    </Router>
  );
};

export default App;