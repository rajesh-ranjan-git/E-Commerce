import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeStore } from "./utils/ThemeController";
import ReviewComponent from "./ReviewComponent";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "./utils/Store/CartSlice";
import useSingleProductData from "./utils/useSingleProductData";

const SingleProductPage = () => {
  const [showIdx, setShowIdx] = useState(null);

  const { id } = useParams();

  const { theme } = useContext(ThemeStore);

  const darkTheme = "bg-base-200 w-screen h-[91vh]";
  const lightTheme = "bg-white w-screen h-[91vh]";

  const obj = useSingleProductData(id);

  const { thumbnail, title, brand, category, price, rating, stock, reviews } =
    obj;

  const checkBrand = () => {
    return brand ? (
      <div>
        <button className="btn cursor-default">
          Brand
          <div className="badge badge-primary h-8 font-bold text-lg p-5 mr-3">
            {brand}
          </div>
        </button>
      </div>
    ) : null;
  };

  const dispatch = useDispatch();

  const handleAddToCart = (event) => {
    dispatch(addCart(obj));
  };

  const cartItems = useSelector((store) => store.cart.items);

  const checkInCart = () => {
    const objIdx = cartItems.findIndex((cartObj) => cartObj.objData.id == id);
    return objIdx;
  };

  return (
    <div className={theme === "light" ? lightTheme : darkTheme}>
      <div className="card card-side shadow-xl w-1/2 mx-auto pt-6">
        {checkInCart() != -1 ? (
          <div className="bg-orange-500 rounded-2xl absolute p-2 text-black font-bold top-5 left-4">
            Added to cart
          </div>
        ) : null}
        <figure>
          <img src={thumbnail} alt="Product" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {checkBrand()}
          <div>
            <button className="btn cursor-default">
              Category
              <div className="badge badge-secondary h-8 font-bold text-lg p-5">
                {category}
              </div>
            </button>
          </div>
          <div>
            <button className="btn cursor-default">
              Price
              <div className="badge badge-secondary h-8 font-bold text-lg p-5">
                {price}
              </div>
            </button>
          </div>
          <div>
            <button className="btn cursor-default">
              Rating
              <div className="badge badge-secondary h-8 font-bold text-lg p-5">
                {rating}
              </div>
            </button>
          </div>
          <div>
            <button className="btn cursor-default">
              Stock
              <div className="badge badge-secondary h-8 font-bold text-lg p-5">
                {stock}
              </div>
            </button>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={handleAddToCart}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      {/* Accordion */}
      <div className="box w-2/4 bg-gray-300 mx-auto mt-5 pt-5 pb-5 rounded-3xl">
        {reviews.map((obj, idx) => {
          return (
            <ReviewComponent
              obj={obj}
              idx={idx}
              showIdx={showIdx}
              setShowIdx={setShowIdx}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SingleProductPage;
