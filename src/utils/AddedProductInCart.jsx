import React from "react";

const AddedProductInCart = (Component) => {
  return (props) => {
    return (
      <>
        <div className="bg-orange-500 rounded-2xl absolute p-2 text-black font-bold top-5 left-4"></div>
        ;
        <Component {...props} />;{console.log("AddedProductInCart")}
      </>
    );
  };
};

export default AddedProductInCart;
