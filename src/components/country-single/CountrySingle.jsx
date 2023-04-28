import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const CountrySingle = ({ data }) => {
  const { id } = useParams();

  const countryData = data.find((country) => {
    return country.name === id;
  });

  const { name, capital, region, population, subregion, nativeName, flags } =
    countryData;

  const { png, svg } = flags;

  return (
    <section>
      <Link to="/">Back</Link>
      <article>
        <img src={png} alt="" />
        <h2>{name}</h2>
      </article>
    </section>
  );
};

export default CountrySingle;
