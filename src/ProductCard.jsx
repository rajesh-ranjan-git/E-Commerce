const ProductCard = ({ item }) => {
  const { thumbnail, title, brand, category, price, rating, description } =
    item;
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
    <div className="card card-compact h-[30rem] w-96 bg-base-100 shadow-xl my-2">
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
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
