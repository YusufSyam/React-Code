import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Inputs from "./pages/Inputs";
import ChangeBG from "./pages/ChangeBG";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/inputs' element={<Inputs />} />
          <Route path='/color' element={<ChangeBG colorArray={['red', 'blue', 'white']}/>} />
          <Route path='/color2' element={<ChangeBG colorArray={['red', 'blue', 'white', 'orange', 'yellow', 'black']}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
