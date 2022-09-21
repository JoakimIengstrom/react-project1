import React, { useEffect } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HeroSection, Header, Footer } from "./components";

function App() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <Header />
      <HeroSection />
      <Footer />
    </>
  );
}

export default App;
