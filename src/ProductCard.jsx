import { useContext } from "react";
import { useNavigate } from "react-router";
import { ThemeStore } from "./utils/ThemeController";
import { useDispatch } from "react-redux";
import { addCart } from "./utils/Store/CartSlice";

const ProductCard = ({ item }) => {
  const { id, thumbnail, title, brand, category, price, rating, description } =
    item;

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const { theme } = useContext(ThemeStore);

  const darkTheme =
    "card card-compact h-[30rem] w-96 bg-base-100 shadow-xl my-2  cursor-pointer";
  const lightTheme =
    "card card-compact h-[30rem] w-96 bg-gray-300 shadow-xl my-2  cursor-pointer text-black";

  const handleProductRouting = () => {
    Navigate(`/products/${id}`);
  };

  const handleAddToCart = (event) => {
    dispatch(addCart(item));
    event.stopPropagation();
  };

  const checkBrand = () => {
    if (brand != undefined) {
      return (
        <div className="badge badge-primary h-8 font-bold text-lg p-5 mr-3">
          {brand}
        </div>
      );
    }
  };
  return (
    <div
      className={theme === "light" ? lightTheme : darkTheme}
      onClick={handleProductRouting}
    >
      <figure>
        <img src={thumbnail} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div>
          {/* <div className="badge badge-primary h-8 font-bold text-lg p-5 mr-3">
            {brand}
          </div> */}
          {checkBrand()}
          <div className="badge badge-secondary h-8 font-bold text-lg p-5">
            {category}
          </div>
        </div>
        <div>
          <p className="text-xl font-bold">₹{price}</p>
          <p className="font-bold">Rating : {rating}</p>
          {/* <p>{description}</p> */}
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={handleAddToCart}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
