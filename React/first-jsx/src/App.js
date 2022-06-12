import logo from "./logo.svg";
import "./App.css";

// const Header = (props) => {
//   const { title, subtitle } = props;
//   return (
//     <>
//       <h2>{title}</h2>
//       <p>{subtitle}</p>
//       <ul>{list}</ul>
//     </>
//   );
// };

const App = () => {
  return (
    <div className="App">
      {/* <Header title={"Hello Dojo!"} subtitle={"Things I need to do:"} list={}/> */}
      <h2>Hello Dojo!</h2>
      <h3>Things I need to do:</h3>
      <ul>
        <li>Learn React</li>
        <li>Climb 14 Peaks</li>
        <li>Do an Ironman</li>
        <li>Buy pet monkey</li>
      </ul>
    </div>
  );
};

export default App;
