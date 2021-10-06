import React from 'react';
import ReactDOM from 'react-dom';

//Style
import './index.css';

//Pages
import HomePage from "./pages/HomePage";

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);