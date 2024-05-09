import React, { useContext } from "react";
import { Context } from "../Context";
import { FaTrash } from "react-icons/fa";
import Counter from "./Counter";
import { Link } from "react-router-dom";

export default function Cart() {
  const _ = useContext(Context);
  return (
    <div className="cart">
      <h2>SHOP CART</h2>
      <span>Product count {_.cart.length} elements.</span>
      <div className="cart_container">
        <div className="cart_item">
            <span>Product Picture</span>
            <span>Product Name</span>
            <span>Price</span>
            <span></span>
            <span>Actual Price</span>
            <span></span>
        </div>
        {_.cart.map((item) => (
          <div className="cart_item" key={item.picture}>
            <img src={item.picture} alt="" />
            <h3>{item.name}</h3>
            <span>£{item.price}</span>
            <Counter item={item} />
            <span>£{item.price * item.quanity}</span>
            <FaTrash onClick={() => {
                _.removeing(_.cart, item.id, _.setCart);
                _.setTotal(_.total - (item.price * item.quanity));
                item.quanity = 1;
            }}/>
          </div>
        ))}
      </div>
      {
        _.cart.length !== 0 ? 
        <div className="grand_total">
          <div className="grand_item">
              <span>Total:</span>
              <h3>£{_.total}</h3>
          </div>
          <div className="grand_item">
              <span>Delivery:</span>
              <h3>£4</h3>
          </div>
          <div className="grand_item">
              <span>Grand Total:</span>
              <h3>£{_.total + 4}</h3>
          </div>
          <Link>Pay with card</Link>
      </div> : ''
      }
    </div>
  );
}