import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import SingleProductShimmer from "./SingleProductShimmer";
import { ThemeStore } from "./utils/ThemeController";
import ReviewComponent from "./ReviewComponent";

const SingleProductPage = () => {
  const [obj, setObj] = useState({
    thumbnail:
      "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg",
    title: "Here goes title of the product...",
    brand: "Here goes brand of the product...",
    price: "Here goes price of the product...",
    rating: "Here goes rating of the product...",
    stock: "Here goes stock of the product...",
    category: "Here goes category of the product...",
    reviews: [],
  });

  const [showIdx, setShowIdx] = useState(null);

  const { id } = useParams();

  const { theme } = useContext(ThemeStore);

  const darkTheme = "bg-base-200 w-screen h-[92vh]";
  const lightTheme = "bg-white w-screen h-[92vh]";

  const getData = async () => {
    const data = await fetch(`https://dummyjson.com/products/${id}`);
    const proData = await data.json();
    setObj(proData);
  };

  useEffect(() => {
    getData();
  }, []);

  //   if (obj == null) {
  //     return <SingleProductShimmer />;
  //   }

  const { thumbnail, title, brand, category, price, rating, stock, reviews } =
    obj;

  return (
    <div className={theme === "light" ? lightTheme : darkTheme}>
      <div className="card card-side shadow-xl w-1/2 mx-auto pt-6">
        <figure>
          <img src={thumbnail} alt="Product" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div>
            <button className="btn">
              Branch
              <div className="badge badge-primary h-8 font-bold text-lg p-5 mr-3">
                {brand}
              </div>
              {/* {checkBrand()} */}
            </button>
          </div>
          <div>
            <button className="btn">
              Category
              <div className="badge badge-secondary h-8 font-bold text-lg p-5">
                {category}
              </div>
            </button>
          </div>
          <div>
            <button className="btn">
              Price
              <div className="badge badge-secondary h-8 font-bold text-lg p-5">
                {price}
              </div>
            </button>
          </div>
          <div>
            <button className="btn">
              Rating
              <div className="badge badge-secondary h-8 font-bold text-lg p-5">
                {rating}
              </div>
            </button>
          </div>
          <div>
            <button className="btn">
              Stock
              <div className="badge badge-secondary h-8 font-bold text-lg p-5">
                {stock}
              </div>
            </button>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add To Cart</button>
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
