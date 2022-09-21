import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <body>
        <footer>
          <div className="footer-container">
            <div className="footer-links">
              <div className="footer-link-wrapper">
                <div class="footer-link-items">
                  <h2>Contact Us</h2>
                  <Link to="/">Contact</Link>
                  <Link to="/">Support</Link>
                  <Link to="/">FAQ</Link>
                </div>
              </div>
              <div className="footer-link-wrapper">
                <div class="footer-link-items">
                  <h2>Social Media</h2>
                  <Link to="/">LinkedIn</Link>
                  <Link to="/">Facebook</Link>
                  <Link to="/">Youtube</Link>
                  <Link to="/">Twitter</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </div>
  );
};

export default Footer;
