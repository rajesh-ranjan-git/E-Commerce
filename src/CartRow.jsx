import React from "react";
import {
  decrementQuantity,
  incrementQuantity,
  removeCart,
} from "./utils/Store/CartSlice";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

const CartRow = ({ cartObj }) => {
  const { objData, quantity } = cartObj;
  const { id, thumbnail, title, rating, price } = objData;

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const handleProductRouting = () => {
    Navigate(`/products/${id}`);
  };

  return (
    <tr className="text-xl">
      <td>
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={handleProductRouting}
        >
          <div className="avatar">
            <div className="mask mask-squircle h-20 w-20 bg-white">
              <img src={thumbnail} alt="Item Image" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
          </div>
        </div>
      </td>
      <td className="text-center">{rating}</td>
      <td className="text-center">$ {price}</td>
      <td className="text-center">
        <span
          className="cursor-pointer"
          onClick={() => dispatch(decrementQuantity(id))}
        >
          🔽
        </span>
        <span className="px-2 text-2xl">{quantity}</span>
        <span
          className="cursor-pointer"
          onClick={() => dispatch(incrementQuantity(id))}
        >
          🔼
        </span>
      </td>
      <th className="text-center">
        <button
          className="btn btn-outline btn-error"
          onClick={() => dispatch(removeCart(id))}
        >
          Remove Item
        </button>
      </th>
    </tr>
  );
};

export default CartRow;
