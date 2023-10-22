import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

function CountryDetails() {
  const params = useParams();
  const [countryData, setCountryData] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://ih-countries-api.herokuapp.com/countries/${params.alpha3Code}`
      )
      .then((response) => {
        console.log(response);
        setCountryData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.alpha3Code]);

  if (!countryData) {
    return <div>Loading...</div>;
  }

  const { name, capital, area, borders } = countryData;

  return (
    <div>
      <Navbar />
      <h1>Country Details</h1>
      <p>Name: {name.common}</p>
      <p>Capital: {capital}</p>
      <p>Area: {area} square kilometers</p>
      <p>Borders: </p>
      <ul>
        {borders.map((border) => (
          <li key={border}>
            <Link to={`/${border}`}>{border}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryDetails;
