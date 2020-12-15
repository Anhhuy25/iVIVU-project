import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Project2 from './small projects/Project2';
import { AppProvider } from './components/project 2/context';
import './components/project 1/index.css'

ReactDOM.render(
  // <App />
  <AppProvider>
    <Project2 />
  </AppProvider>
  , document.getElementById('root')
);


