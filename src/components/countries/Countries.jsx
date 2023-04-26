import React from "react";
import Country from "../country/Country";

const Countries = ({ countries }) => {
  return (
    <div>
      {countries.map((country) => {
        return <Country key={country.name} {...country} />;
      })}
    </div>
  );
};

export default Countries;
