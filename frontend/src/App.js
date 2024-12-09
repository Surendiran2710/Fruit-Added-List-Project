import React from "react";
import Login from "./Login";
import Addfruit from "./AddFruit"
import "./style.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/addfruit" element={<Addfruit />} />
        </Routes>

      


    </BrowserRouter>
  );
}

export default App;