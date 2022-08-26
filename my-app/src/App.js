import logo from "./logo.svg";
import "./App.css";
import {routing, Routes, Route } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import NoPage from "./pages/NoPage";
import Home from "./component/Home";
import Gallary from "./component/Gallary";
import "./component/Home.css";
// import Home from "./Home"
import Shop from "../src/component/Shop";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="Gallary" element={ <Gallary/> } />
        <Route path="Shop" element={ <Shop/> } />
        <Route path="Contact" element={ <Contact/> } />
      </Routes>

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
