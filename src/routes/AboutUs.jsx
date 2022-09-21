import React, { useEffect } from "react";
import { Header, AboutPage, Footer } from "../components";

const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us";
  }, []);
  return (
    <div>
      <Header />
      <AboutPage />
      <Footer />
    </div>
  );
};

export default AboutUs;
