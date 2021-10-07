import React from "react";
import ReactDOM from "react-dom";

//Pages
import HomePage from "./pages/HomePage";

//Style
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);