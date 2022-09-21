import React, { useEffect } from "react"
import {Header, Register, Footer} from "../components"
//import "../Components/shop.css"

const Registration = () => {
  useEffect(() => {
    document.title = "Registration";
  }, []);  

  return (
    <div>
        <Header/>
        <Register/>
        <Footer/>
    </div>
  )
}

export default Registration