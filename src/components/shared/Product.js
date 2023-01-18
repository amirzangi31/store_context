import React, { useContext } from "react";
import { Link } from "react-router-dom";

//FUNCTIONS
import { shorthen, isInCart, quantityCount } from "../../helper/functions";

//ICON
import { BsFillTrashFill  } from "react-icons/bs";
import {AiOutlinePlus ,AiOutlineMinus } from "react-icons/ai";

//CONTEXT
import { CartContext } from "../../Context/CartContextProvider";

function Product(props) {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className="shadow-lg border text-center pt-1 rounded-md">
      <img
        src={props.image}
        alt="product"
        className="w-full h-60 object-contain"
      />
      <p className="text-center text-gray-500 mt-2 text-sm">{props.category}</p>
      <h3 className="text-center my-2 font-bold ">{shorthen(props.title)}</h3>
      <div className="flex justify-around items-center">
        <p className="font-bold ">Price :  <span className="badge">{props.price} $</span></p>
        <Link to={`/products/${props.id}`} className="bg-black/20 p-1 rounded-md">Deatials</Link>
      </div>
      <div className="my-4 px-2">
        <div className="flex justify-center">
          {isInCart(state, props.id) ? (
            <button
              type="button"
              onClick={() => dispatch({ type: "INCREASE", payload: props })}
              className="btn-product"
            >
              <AiOutlinePlus /> 
            </button>
          ) : (
            <button
              type="button"
              onClick={() => dispatch({ type: "ADD_ITEM", payload: props })}
              className="w-full border bg-blue-800 transition-all duration-500 text-white py-1 rounded-full hover:shadow-lg hover:bg-pink-500"
            >
              add to cart
            </button>
          )}
          {quantityCount(state, props.id) > 0 && <span className="btn-product bg-pink-500">{quantityCount(state, props.id)}</span>}

          {quantityCount(state, props.id) === 1 && (
            <button
              type="button"
              onClick={() => dispatch({ type: "REMOVE_ITEM", payload: props })}
              className="btn-product"
            >
              <BsFillTrashFill />{" "}
            </button>
          )}
          {quantityCount(state, props.id) > 1 && (
            <button
              type="button"
              onClick={() => dispatch({ type: "DECREASE", payload: props })}
              className="btn-product"
            >
              <AiOutlineMinus />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
