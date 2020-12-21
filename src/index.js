import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from './big projects/context';
import App from './App';

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>
  , document.getElementById('root')
);


