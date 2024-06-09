import Data from "./Data";

let Home = () => {
  let item = Data[0];
  return (
    <div className="min-h-[92vh] w-screen p-5">
      <div className="card card-compact w-96 bg-base-100 shadow-xl mx-2">
        <figure>
          <img src={item.thumbnail} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p>
            <div className="badge badge-primary h-8 font-bold text-lg p-5 mr-3">
              {item.brand}
            </div>
            <div className="badge badge-secondary h-8 font-bold text-lg p-5">
              {item.category}
            </div>
          </p>
          <div>
            <p className="text-xl font-bold">₹{item.price}</p>
            <p className="font-bold">Rating : {item.rating}</p>
            {/* <p>{item.description}</p> */}
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
