import React from "react";
import CartRow from "./CartRow";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./utils/Store/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="overflow-x-auto px-5">
      <table className="table">
        {/* head */}
        <thead className="text-xl">
          <tr>
            <th>Name</th>
            <th className="text-center">
              <span>🔽</span>
              <span className="px-2 text-2xl">Rating</span>
              <span>🔼</span>
            </th>
            <th className="text-center">
              <span>🔽</span>
              <span className="px-2 text-2xl">Price</span>
              <span>🔼</span>
            </th>
            <th className="text-center">Quantity</th>
            <th className="text-center">
              <button
                className="btn btn-outline btn-warning text-xl"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            </th>
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
