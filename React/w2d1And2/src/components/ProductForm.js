import { useState, useEffect } from "react";
import { v4 } from "uuid";
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
  // useEffect(() => {
  //   if (name.length > 0 && name.length < 5) {
  //     setError(true);
  //   } else {
  //     setError(false);
  //   }
  // }, [name]);

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        justifyContent: "space-around",
        height: "300px",
        width: "30%",
        margin: "0 auto",
      }}
    >
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      {name && name.length < 5 && (
        <p style={{ color: "red" }}>
          Product name must be at least 5 characters
        </p>
      )}
      {/* {name.length > 0 && name.length < 5 && ? (
        <p style={{ color: "red" }}>
          Product name must be at least 5 characters
        </p>
      ) : null} */}
      <label htmlFor="price">Price: </label>
      <input
        type="number"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <label htmlFor="category">Category: </label>
      <select
        name="category"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        <option value="iPhone">iPhone</option>
        <option value="laptop">Laptop</option>
        <option value="tablet">Tablet</option>
        <option value="watch">Watch</option>
      </select>
      <input type="submit" />
    </form>
  );
};

export default ProductForm;
