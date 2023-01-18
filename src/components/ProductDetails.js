import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsContext } from "../Context/ProductsContextProvider";

function ProductDetails() {
  const id = useParams();

  const data = useContext(ProductsContext);

  const product = data[id.id - 1];

  const { title, price, category, description, image } = product;

  return (
    <div className="my-4 px-2">
      <div className="border grid grid-cols-12 shadow-lg rounded-lg overflow-hidden p-2">
        <div className="col-span-12  lg:col-span-3 ">
          <img
            src={image}
            alt="product"
            className="w-1/2 mx-auto lg:w-full"
          />  
        </div>
        <div className="col-span-12 lg:col-span-9 flex flex-col items-center justify-center w-10/12 mx-auto">
          <h3 className="font-bold text-center my-4 text-1xl md:text-2xl">{title}</h3>
          <p className="bg-blue-800  px-2 py-4 text-justify rounded-md text-white">
            {description}
          </p>
          <div className="flex justify-between items-center flex-col md:flex-row w-full my-2 lg:my-8">
            <div className="flex justify-between items-center flex-col sm:flex-row w-full md:w-7/12">
            <p className="flex ">
              <span className="font-bold">Category :</span>
              <span className="mx-2 badge flex justify-center items-center">
                {category}
              </span>
            </p>
            <p className="font-bold my-2 sm:my-0">
              Price : <span className="badge">{price} $</span>
            </p>
            </div>
            <div className="w-full md:w-5/12 text-center md:text-right my-2 md:my-0">
              <Link to="/" className="badge bg-green-400 w-full block text-center sm:inline sm:w-auto  ">
                back to shop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
