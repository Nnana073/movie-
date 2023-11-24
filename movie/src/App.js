import { Route, Routes, BrowserRouter } from "react-router-dom";
import React from "react";

import Home from "./page/Home";
import About from "./page/About";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        {/* <Route path="/error" element={<Error />}></Route> */}
        {/* <Route path="/cocktail/:id" element={<SingleCocktail />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
