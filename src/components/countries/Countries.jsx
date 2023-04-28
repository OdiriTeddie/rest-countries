import React from "react";
import Country from "../country/Country";
import { Link } from "react-router-dom";

const Countries = ({ countries }) => {
  return (
    <div>
      {countries &&
        countries.map((country) => {
          return (
            <Link to={`/country/${country.name}`} key={country.name}>
              <Country country={country} />
            </Link>
          );
        })}
    </div>
  );
};

export default Countries;
