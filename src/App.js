import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

//COMPONENTS
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/ShopCart";

//CONTEXT
import ProductsContextProvider from "./Context/ProductsContextProvider";
import CartContextProvider from "./Context/CartContextProvider";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Navbar />
          <Routes>
            <Route path="/products" element={<Store />} />
            <Route path="/cart" element={<ShopCart />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/*" element={<Navigate to="/products" />} />
          </Routes>
        <Footer />
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
