import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container" id="container">
          <Link to="/" className="navbar-brand" id="link">
            <h1>WikiCountries</h1>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
