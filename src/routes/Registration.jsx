import React, { useEffect } from "react"
import {Header, Footer} from "../components"
import RegistrationForm from "../components/registrationForm";
//import "../Components/shop.css"

const Registration = () => {
  useEffect(() => {
    document.title = "Registration";
  }, []);  

  return (
    <div>
        <Header/>
        <RegistrationForm/>
        <Footer/>
    </div>
  )
}

export default Registration