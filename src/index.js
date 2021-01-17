import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppProvider } from './big projects/context';
// import Project6 from './small projects/Project6';
// import { AppProvider } from './components/project 6/context';

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>
  // <AppProvider>
  //   <Project6 />
  // </AppProvider>
  , document.getElementById('root')
);


