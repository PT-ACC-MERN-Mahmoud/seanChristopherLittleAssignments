//rafce
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Product = (props) => {
  const { product, products, setProducts } = props;

  const updatePrice = () => {
    const newPrice = Math.floor(Math.random() * 500);
    const newProducts = products.map((p) => {
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
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="{product.image}" height="150px" />
      <Card.Title>{product.name}</Card.Title>
      <Card.Body>
        <Card.Text>
          <p>Price: {product.price}$</p>
          <p>Category: {product.category}</p>
        </Card.Text>
        <Button variant="primary" onClick={updatePrice} className="mx-4">
          Change Price
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
