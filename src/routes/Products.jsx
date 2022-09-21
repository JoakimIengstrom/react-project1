import React, {useEffect} from "react"
import {Header, Shop, Footer} from "../Components"
import "../Components/shop.css"

const Products = () => {
  useEffect(() => {
    document.title = "Courses";
  }, []);

  return (
    <div>
        <Header/>
        <Shop/>
        <Footer/>
    </div>
  )
}

export default Products