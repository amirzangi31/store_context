import React, { useContext } from "react";

//CONTEXT
import { ProductsContext } from "../Context/ProductsContextProvider";
import Product from "./shared/Product";

function Store() {
  const products = useContext(ProductsContext);

  return (
    <main className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 px-4 xl:container  mx-auto">
      {products && products.map((item) => <Product key={item.id} {...item} />)}
      
    </main>
  );
}

export default Store;
