import React from "react";
import ProductList from "./ProductList";
import CategoryMenu from "./CategoryMenu";
import Cart from "./Cart";

const Store = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Store;
