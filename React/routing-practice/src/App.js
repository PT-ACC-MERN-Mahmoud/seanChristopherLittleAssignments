import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Four from "./components/Four";
import Hello from "./components/Hello";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/four" element={<Four />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/hello/:a/:b" element={<Hello />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
