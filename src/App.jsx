import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="" element={<Home />} />
        <Route path="" element={<Home />} />
        <Route path="" element={<Home />} />
        <Route path="" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
