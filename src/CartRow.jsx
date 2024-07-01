import React from "react";

const CartRow = ({ cartObj }) => {
  const { objData, quantity } = cartObj;
  const { thumbnail, title, rating, price } = objData;
  return (
    <tr className="text-xl">
      <td>
        <div className="flex items-center gap-3">
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
      <td>{rating}</td>
      <td>$ {price}</td>
      <td>{quantity}</td>
      <th>
        <button className="btn btn-outline btn-error">Remove Item</button>
      </th>
    </tr>ss
  );
};

export default CartRow;
