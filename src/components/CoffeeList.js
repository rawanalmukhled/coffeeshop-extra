import React from "react";
import products from "../products";

const CoffeeList = () => {
  const productsList = products.map((product) => {
    return (
      <div>
        <h1>{product.name}</h1>
        <h3>{product.price}</h3>
        <img className="images" src={product.image} />
      </div>
    );
  });

  return (
    <div className="parentneat">
      <div className="neat">{productsList}</div>
    </div>
  );
};

export default CoffeeList;
