import React from "react";

const CartRow = ({ cartObj }) => {
  const { objData, quantity } = cartObj;
  const { thumbnail, title, rating, price } = objData;
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={thumbnail} alt="Item Image" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
          </div>
        </div>
      </td>
      <td>{rating}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <th>
        <button className="btn btn-ghost btn-xs">Delete</button>
      </th>
    </tr>
  );
};

export default CartRow;
