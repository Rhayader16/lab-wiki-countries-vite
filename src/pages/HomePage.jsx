import React from "react";
import { useState, useEffect } from "react"; //store and use when the component is mounted
import axios from "axios"; //fetch the request from API
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        console.log(response.data);
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <h1>WikiCountries: Your Guide to the World</h1>
      <h2>Country List</h2>
      <ul>
        {countries
          .sort((a, b) => a.name.common.localeCompare(b.name.common))
          .map((country, index) => (
            <li key={index}>
              <Link to={country.alpha3Code}>
                <p>{country.name.common}</p>
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default HomePage;
