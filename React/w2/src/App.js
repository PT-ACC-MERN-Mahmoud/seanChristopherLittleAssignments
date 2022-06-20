import "./App.css";
import Person from "./components/Person";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Person firstName={"Ricky"} lastName={"Bobby"} />
      <Product
        title={"Dehydrated Water"}
        desc={"Just add 2 cups for a tasty refreshing drink!"}
        cost={49.99}
      />
      <Product
        title={"Bubbly Water"}
        desc={"Perfect water for blowing bubbles!"}
        cost={59.99}
      />
      <Product
        title={"Glacier Water"}
        desc={"It will be worth the hike!"}
        cost={999.99}
      />
    </div>
  );
}

export default App;
