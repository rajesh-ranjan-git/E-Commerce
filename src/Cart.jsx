import React from "react";
import CartRow from "./CartRow";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Rating</th>
            <th>Price Color</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {cartItems.map((cartObj) => (
            <CartRow cartObj={cartObj}></CartRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
