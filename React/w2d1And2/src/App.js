import "./App.css";
import Product from "./components/Product";
import ProductForm from "./components/ProductForm";

function App() {
  const products = [
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
  ];
  return (
    <div className="App">
      <ProductForm />
      {products.map((product, index) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}

export default App;