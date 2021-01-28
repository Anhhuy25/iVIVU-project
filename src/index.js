import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppProvider } from './big projects/context';
// import Project3 from './small projects/Project3';
// import { AppProvider } from './components/project 3/context';

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>
  // <AppProvider>
  //   <Project3 />
  // </AppProvider>
  , document.getElementById('root')
);


