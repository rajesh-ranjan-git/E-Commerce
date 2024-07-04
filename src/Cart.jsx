import React, { useContext } from "react";
import CartRow from "./CartRow";
import { ThemeStore } from "./utils/ThemeController";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  sortAscendingPrice,
  sortDescendingPrice,
  sortAscendingRating,
  sortDescendingRating,
} from "./utils/Store/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const { theme } = useContext(ThemeStore);
  const dispatch = useDispatch();

  const darkTheme = "bg-base-200 w-screen h-[92vh]";
  const lightTheme = "bg-white w-screen h-[92vh] text-black";

  return (
    <div className={theme === "light" ? lightTheme : darkTheme}>
      <div className="overflow-x-auto px-5">
        <table className="table">
          {/* head */}
          <thead className="text-xl text-inherit">
            <tr>
              <th>Name</th>
              <th className="text-center">
                <span
                  className="cursor-pointer"
                  onClick={() => dispatch(sortAscendingRating())}
                >
                  🔼
                </span>
                <span className="px-2 text-2xl">Rating</span>
                <span
                  className="cursor-pointer"
                  onClick={() => dispatch(sortDescendingRating())}
                >
                  🔽
                </span>
              </th>
              <th className="text-center">
                <span
                  className="cursor-pointer"
                  onClick={() => dispatch(sortAscendingPrice())}
                >
                  🔼
                </span>
                <span className="px-2 text-2xl">Price</span>
                <span
                  className="cursor-pointer"
                  onClick={() => dispatch(sortDescendingPrice())}
                >
                  🔽
                </span>
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
    </div>
  );
};

export default Cart;
