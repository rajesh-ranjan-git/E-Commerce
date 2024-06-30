import ProductCard from "./ProductCard";
import ShimmerUI from "./ShimmerUI";
import { useState, useEffect, useContext } from "react";
import { ThemeStore } from "./utils/ThemeController";

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [query, setQuery] = useState("");
  const { theme } = useContext(ThemeStore);

  const darkTheme = "min-h-[92vh] p-2 bg-slate-400";
  const lightTheme = "min-h-[92vh] p-2 bg-white";

  const getData = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const item = await data.json();
    setAllProducts(item.products);
    setProductsData(item.products);
  };

  useEffect(() => {
    getData();
  }, []);

  if (allProducts.length == 0) {
    return <ShimmerUI />;
  }

  const handleTopRated = () => {
    setProductsData(allProducts);
    const topRatedProducts = allProducts.filter((item) => {
      return item.rating > 4;
    });
    setProductsData(topRatedProducts);
  };

  const handleCategory = (category) => {
    const filteredProducts = allProducts.filter((item) => {
      return item.category === category;
    });
    setProductsData(filteredProducts);
  };

  const handleSearch = (event) => {
    const searchedProducts = allProducts.filter((item) => {
      return item.title.toLowerCase().includes(query.toLowerCase().trim());
    });
    setProductsData(searchedProducts);
    setQuery("");
  };

  return (
    <div className={theme === "light" ? lightTheme : darkTheme}>
      <div className="utility flex justify-between">
        <button className="btn" onClick={handleTopRated}>
          Top Rated
        </button>
        <button className="btn" onClick={() => handleCategory("beauty")}>
          Beauty
        </button>
        <div className="search flex w-96">
          <input
            type="text"
            placeholder="Search products..."
            className="input input-bordered w-full max-w-xs mx-3"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />
          <button className="btn btn-secondary" onClick={handleSearch}>
            Search
          </button>
        </div>
        <button className="btn" onClick={() => handleCategory("fragrances")}>
          Fragrances
        </button>
        <button className="btn" onClick={() => handleCategory("furniture")}>
          Furniture
        </button>
        <button className="btn" onClick={() => handleCategory("groceries")}>
          Groceries
        </button>
      </div>
      <div className="cards flex justify-around items-center flex-wrap">
        {productsData.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
