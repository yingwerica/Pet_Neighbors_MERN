import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import { StrictMode } from 'react';

import App from './App';
import './index.css';


ReactDOM.render(
    <StrictMode>
        <BrowserRouter>
           <App />
        </BrowserRouter>
  </StrictMode>, 
    document.getElementById('root')
)