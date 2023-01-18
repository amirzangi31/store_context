import React, {  useEffect, useState } from "react";


//API
import { getProducts } from "../services/api";


export const ProductsContext = React.createContext();


function ProductsContextProvider(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await getProducts());
    };

    fetchAPI();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
        {props.children}
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;
