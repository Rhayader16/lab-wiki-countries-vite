import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      {/* <h1>LAB | React WikiCountries</h1> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:alpha3Code" element={<CountryDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
