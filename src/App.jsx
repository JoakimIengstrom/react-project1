import React from "react";
//import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Store from "./Pages/Store";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import Shop from "./Components/shop/Shop";
//<Shop></Shop> 

function App() {
  return ( 
    <Router>   
      <div className="App">        
        <Header></Header>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/Store" element={<Store />} />
        </Routes>         
      </div>
    </Router>    
  );
}

export default App;
