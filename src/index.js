import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./routes/Products";
import AboutUs from './routes/AboutUs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
   <Route path="/" element={<App/>} />
   <Route path="about" element={<AboutUs/>} />
   <Route path="products" element={<Products/>} />
 </Routes>
</BrowserRouter>
);