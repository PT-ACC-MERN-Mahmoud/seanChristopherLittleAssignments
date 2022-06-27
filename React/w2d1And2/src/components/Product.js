//rafce
import { useState } from "react";

const Product = (props) => {
  const { product, products, setProducts } = props;

  const updatePrice = () => {
    const newPrice = Math.floor(Math.random() * 500);
    const newProducts = products.maop((p) => {
      if (p.id === product.id) {
        const updatedProduct = { ...p, price: p.price - newPrice };
        return updatedProduct;
      }
      return p;
    });
    setProducts(newProducts);
  };
  const handleDelete = () => {
    const filteredProducts = products.filter((p) => p.id !== product.id);
    setProducts(filteredProducts);
  };
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: {product.price}$</p>
      <p>Category: {product.category}</p>
      <img src="{product.image}" alt="product image" />
      <br />
      <br />
      <button onClick={updatePrice}>Change Price</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Product;
