import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./routes/Products";
import AboutUs from "./routes/AboutUs";
import Registration from "./routes/Registration";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="products" element={<Products />} />
      <Route path="registration" element={<Registration />} />
    </Routes>
  </BrowserRouter>
);
