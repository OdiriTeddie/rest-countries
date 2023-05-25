import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./country.scss";
import { useGlobalContext } from "../../utils/context";

const Country = ({
  name,
  population,
  region,
  capital,
  flags: { svg, png },
}) => {
  const { isDarkTheme } = useGlobalContext();
  useEffect(() => {
    document
      .querySelectorAll(".country")
      .forEach((item) => item.classList.toggle("dark-theme", isDarkTheme));
  }, [isDarkTheme]);
  return (
    <article className="country">
      <Link to={`/${name}`}>
        <img src={png} alt="" />
      </Link>
      <div>
        <h3> {name} </h3>
        <div>
          <p>Population: {population}</p>
          <p>Region: {region}</p>
          <p>Capital: {capital}</p>
        </div>
      </div>
    </article>
  );
};

export default Country;
