import React, {useEffect} from 'react'
import {Header, Shop, Footer} from "../components"
import "../components/shop.css"

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