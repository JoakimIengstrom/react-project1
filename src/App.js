import React from "react";
//import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/header/Header";
import Shop from "./Components/shop/Shop";


function App() {
 
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;