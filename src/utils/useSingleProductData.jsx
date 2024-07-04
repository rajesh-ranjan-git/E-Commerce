import React, { useState, useEffect } from "react";

const useSingleProductData = (id) => {
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

  const getData = async () => {
    const data = await fetch(`https://dummyjson.com/products/${id}`);
    const proData = await data.json();
    setObj(proData);
  };

  useEffect(() => {
    getData();
  }, []);

  return obj;
};

export default useSingleProductData;
