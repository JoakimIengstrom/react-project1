import React from "react";
import courseData from "../database/CourseData";
import { useState } from "react";
import Course from "./Course";
import Cart from "./Cart";
import "./shop.css";

const Shop = () => {
  const [course] = useState(courseData);
  const [cart, setCart] = useState([]);

  const handleCourse = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
  };

  return (
    <div className="product-container">
      <div className="course-header">
        <h1>Courses</h1>
        <p>Here you can find the courses we offer</p>
      </div>
      <div className="course-container">
        {course.map((course) => (
          <div className="card-container">
            <Course
              course={course}
              key={course.id}
              handleCourse={handleCourse}
            ></Course>
          </div>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}> </Cart>
      </div>
    </div>
  );
};

export default Shop;
