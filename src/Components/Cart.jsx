import React from "react";
import Button from "react-bootstrap/Button";
import "./shop.css";

const Cart = (props) => {
  const cart = props.cart;
  const coursePrice = cart.reduce((sum, course) => sum + course.price, 0);
  const tax = coursePrice / 10;
  const totalPrice = coursePrice + tax;
  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <h6>Items Ordered: {cart.length} </h6>
      <h6>Product Price: {coursePrice} </h6>
      <h6>Tax: {tax} </h6>
      <h6>
        {" "}
        <b>Total Ammount: {totalPrice}</b>
      </h6>
      <Button variant="success">Place Order</Button>
    </div>
  );
};

export default Cart;
