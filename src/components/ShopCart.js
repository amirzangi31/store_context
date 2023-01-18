/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext } from "react";

//CONTEXT
import { CartContext } from "../Context/CartContextProvider";
//FUNCTIONS
import {
  isInCart,
  priceProduct,
  quantityCount,
  shorthen,
} from "../helper/functions";

//ICONS
import { BsFillTrashFill } from "react-icons/bs";
import {AiOutlinePlus ,AiOutlineMinus , AiOutlineClear  } from "react-icons/ai";
import {IoBagCheckOutline } from "react-icons/io5";


import { Link } from "react-router-dom";

function ShopCart() {
  const cart = useContext(CartContext);

  const { state } = cart;
  const { dispatch } = cart;

  if (state.itemsCounter === 0 && !state.checkout)
    return (
      <div className="text-center">
        <h5 className="text-3xl font-bold">cart is empty ....</h5>
        <Link to="/" className="badge bg-green-500 my-6 inline-block">
          back to shop  
        </Link>
      </div>
    );
  if (state.checkout)
    return (
      <div className="text-center">
        <h5 className="text-3xl font-bold">Checkout was done successfully</h5>
        <Link to="/" className="badge bg-green-500 my-6 inline-block">
          Buy more 
        </Link>
      </div>
    );

  return (
    <main className="flex justify-between items-start  flex-col-reverse md:flex-row gap-4 w-full xl:container p-4">
      <div className=" w-full md:w-9/12 ">
        {state.selectedItems.map((item) => (
          <div
            className="flex justify-between items-center border mb-3 rounded-lg p-1 shadow-lg"
            key={item.id}
          >
            <div>
              <img
                src={item.image}
                alt="image-product"
                className="w-20 h-20 object-contain"
              />
            </div>
            <div className="font-bold"><Link to={`/products/${item.id}`} >{shorthen(item.title)}</Link></div>
            <div className="hidden sm:block">
              <span className="badge ">{item.quantity}</span>{" "}
              <strong className="">*</strong>{" "}
              <span className="badge ">{item.price}</span>{" "}
              <strong className="">=</strong>{" "}
              <span className="badge bg-green-400 ">
                {priceProduct(item.quantity, item.price)} $
              </span>
            </div>
            <div>
              <div className="flex justify-center">
                {isInCart(state, item.id) ? (
                  <button
                    type="button"
                    onClick={() =>
                      dispatch({ type: "INCREASE", payload: item })
                    }
                    className="btn-product"
                  >
                    <AiOutlinePlus /> 
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() =>
                      dispatch({ type: "ADD_ITEM", payload: item })
                    }
                    className="w-full border bg-blue-800 text-white py-1 rounded-full"
                  >
                    add to cart
                  </button>
                )}
                {quantityCount(state, item.id) > 0 && (
                  <span className="btn-product bg-pink-500">
                    {quantityCount(state, item.id)}
                  </span>
                )}
                {quantityCount(state, item.id) === 1 && (
                  <button
                    type="button"
                    onClick={() =>
                      dispatch({ type: "REMOVE_ITEM", payload: item })
                    }
                    className="btn-product"
                  >
                    <BsFillTrashFill />{" "}
                  </button>
                )}

                {quantityCount(state, item.id) > 1 && (
                  <button
                    type="button"
                    onClick={() =>
                      dispatch({ type: "DECREASE", payload: item })
                    }
                    className="btn-product"
                  >
                    <AiOutlineMinus />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border p-2 w-full md:w-3/12 shadow-lg rounded-lg">
        <h3 className="text-lg">Your shopping cart :</h3>
        <h4 className="my-4">
          Total products :{" "}
          <span className="badge bg-green-400">{state.itemsCounter}</span>
        </h4>
        <h4 className="my-4">
          Total price :{" "}
          <span className="badge bg-green-400">{state.total} $</span>{" "}
        </h4>
        <div className="flex justify-between items-center">
          <button
            type="button"
            className="badge bg-green-600 flex items-center"
            onClick={() => dispatch({ type: "CHECKOUT" })}
          >
            Checkout <IoBagCheckOutline className="mx-1" /> 
          </button>
          <button
            type="button"
            className="badge bg-red-600 flex items-center"
            onClick={() => dispatch({ type: "CLEAR" })}
          >
            Clear <AiOutlineClear className="mx-1" /> 
          </button>
        </div>
      </div>
    </main>
  );
}

export default ShopCart;
