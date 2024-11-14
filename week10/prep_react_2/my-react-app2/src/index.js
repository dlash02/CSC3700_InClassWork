import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import AppBooksProps from './AppBooksProps';
import 'bootstrap/dist/css/bootstrap.min.css';
// import AppBooksWUseFetch from "./AppBooksWUseFetch";
import AppBooksUseEffect from "./AppBooksUseEffect";
import {BrowserRouter} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AppBooksUseEffect/>
  </BrowserRouter>
);

