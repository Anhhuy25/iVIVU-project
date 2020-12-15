import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Project1 from './small projects/Project1';
import { AppProvider } from './components/project 1/context';
import './components/project 1/index.css'

ReactDOM.render(
  // <App />
  <AppProvider>
    <Project1 />
  </AppProvider>
  , document.getElementById('root')
);


