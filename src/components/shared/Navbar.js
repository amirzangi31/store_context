import React, { useContext } from "react";
import { Link } from "react-router-dom";

//ICON
import {  BsFillCartFill } from 'react-icons/bs';
//CONTEXT
import { CartContext } from "../../Context/CartContextProvider";

function Navbar() {
  const { state } = useContext(CartContext);



  
  return (
    <div className="bg-blue-800 p-4 mb-4 w-full ">
      <nav className="flex justify-between items-center xl:container mx-auto text-white">
        <Link to="/" className="text-3xl">Shop</Link>
        <div className="flex items-center  relative">
          <span className="w-5 h-5 absolute -top-1 right-0 bg-pink-500 rounded-full grid place-content-center">{state.itemsCounter}</span>
          <br/>
          <Link to='/cart' className="mx-2 text-4xl"><BsFillCartFill /> </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
