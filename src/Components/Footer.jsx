import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <body>
        <footer>
          <div className="footer-content">
            <h3>3J Coder</h3>

            <ul className="socials">
              <li>
                <a href="#"><img src="/images/facebook.png" alt="facebook" /></a>
              </li>
              <li><a href="#"><img src="/images/twitter.png" alt="twitter" /></a>
              </li>
              <li>
                <a href="#"><img src="/images/linkedin.png" alt="linkedin" /></a>
              </li>
              <li>
                <a href="#"><img src="/images/youtube.png" alt="youtube" /></a>
              </li>
            </ul>
          </div>
        </footer>
      </body>
    </div>
  );
};

export default Footer;
