//rafce
import { useState } from "react";

const Product = (props) => {
  const { product } = props;
  const [price, setPrice] = useState(product.price);
  const updatePrice = () => {
    const newPrice = Math.floor(Math.random() * 500);
    setPrice(price - newPrice);
  };
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: {price}$</p>
      <p>Category: {product.category}</p>
      <img src="{product.image}" alt="product image" />
      <br />
      <br />
      <button onClick={updatePrice}>Change Price</button>
    </div>
  );
};

export default Product;
