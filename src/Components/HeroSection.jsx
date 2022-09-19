import React from "react";
import "./heroSection.css";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      
      <div className="hero-container">
        <h1>Learn Coding With Us</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
          <Link to="/products" className="hero-btn">
            Our Courses
          </Link>
        </div>
      </div>
      
    </>
  );
};

export default HeroSection;
