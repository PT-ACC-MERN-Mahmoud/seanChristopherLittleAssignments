import { useState, useEffect } from "react";
import { v4 } from "uuid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ProductForm = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const { products, setProducts } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && category && price) {
      const product = {
        id: v4(),
        name: name,
        price: price,
        category: category,
        image: "",
      };
      setProducts([product, ...products]);
      console.log("PRODUCT", product);
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group
        className="mb-3"
        controlId="formBasicName"
        onSubmit={handleSubmit}
      >
        <Form.Label>Name: </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Form.Text className="text-danger mt-5">
          {name && name.length < 5 && (
            <p>Product name must be at least 5 characters</p>
          )}
        </Form.Text>
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="formBasicPrice"
        onSubmit={handleSubmit}
      >
        <Form.Label>Price: </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter price"
          value={name.price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Select onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="iPhone">iPhone</option>
          <option value="laptop">Laptop</option>
          <option value="tablet">Tablet</option>
          <option value="watch">Watch</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );

  // useEffect(() => {
  //   if (name.length > 0 && name.length < 5) {
  //     setError(true);
  //   } else {
  //     setError(false);
  //   }
  // }, [name]);
};

export default ProductForm;
