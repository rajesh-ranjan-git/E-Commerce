import React from "react";
import CartRow from "./CartRow";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="overflow-x-auto px-5">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Rating</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {cartItems.map((cartObj) => (
            <CartRow key={cartObj.objData.id} cartObj={cartObj}></CartRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
