import logo from "./logo.svg";
import "./App.css";

const Header = (props) => {
  const { title, subtitle } = props;
  return (
    <>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </>
  );
};

function App() {
  return (
    <div>
      <Header title={"Hello"} subtitle={"world!"} />
      <Header title={"Hi"} subtitle={"world!!!!"} />
      <Header title={"What up"} subtitle={"worldzzzz!"} />
    </div>
  );
}

export default App;
