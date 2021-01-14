import React from 'react';
import FormLo from '../components/project 6/login-register/FormLo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../components/project 6/login-register/Login';
import Register from '../components/project 6/login-register/Register'

const Project6 = () => {
  return (
    <Router>
      <Route exact path="/">
        <FormLo />
      </Route>
      <Route path="/dang-nhap" children={<Login />}></Route>
      <Route path="/dang-ky" children={<Register />}></Route>
    </Router>
  );
};

export default Project6;