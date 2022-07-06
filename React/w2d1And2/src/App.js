import "./App.css";
import Product from "./components/Product";
import ProductForm from "./components/ProductForm";
import { useState } from "react";
import Contaner from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iPhone 13",
      price: "999",
      cat: "phone",
      image: "",
    },
    {
      id: 2,
      name: "iPad pro",
      price: "1099",
      cat: "tablet",
      image: "",
    },
    {
      id: 3,
      name: "MacBook Pro",
      price: "2599",
      cat: "laptop",
      image: "",
    },
    {
      id: 4,
      name: "Apple Watch",
      price: "399",
      cat: "watch",
      image: "",
    },
  ]);

  return (
    <Contaner>
      <Row>
        <Col className="mb-4">
          <ProductForm products={products} setProducts={setProducts} />
        </Col>
      </Row>
      <Row>
        {products.map((product, index) => (
          <Col>
            <Product
              product={product}
              key={product.id}
              products={products}
              setProducts={setProducts}
            />
          </Col>
        ))}
      </Row>
    </Contaner>
  );
}

export default App;
