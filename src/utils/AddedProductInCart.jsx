import React from "react";

const AddedProductInCart = (Component) => {
  return (props) => {
    return (
      <div className="relative">
        <div className="bg-orange-500 rounded-2xl absolute p-2 text-black font-bold top-5 left-3 z-10">
          Added to Cart
        </div>
        <Component {...props}></Component>
      </div>
    );
  };
};

export default AddedProductInCart;
