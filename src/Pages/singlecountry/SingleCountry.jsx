import { Link, useParams } from "react-router-dom";
import data from "../../../data/data.json";
import "./singlecountry.scss";
import { useEffect } from "react";
import { useGlobalContext } from "../../utils/context";
import { FaArrowLeft } from "react-icons/fa";

const SingleCountry = () => {
  const { countryName } = useParams();
  const countryData = data.find((country) => {
    return country.name === countryName;
  });
  const {
    name,
    capital,
    region,
    population,
    subregion,
    currencies: { code },
    flags: { svg, png },
    borders,
    topLevelDomain,
    nativeName,
    languages,
    flag,
  } = countryData;

  const { isDarkTheme } = useGlobalContext();

  useEffect(() => {
    document
      .querySelector(".back-btn")
      .classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <div className="container">
      <div className="back">
        <Link className="back-btn" to="/">
          <FaArrowLeft />
          Back
        </Link>
      </div>
      <div className="single-wrapper">
        <div>
          <img src={flag} alt="" />
        </div>
        <div className="features">
          <h2>{name}</h2>
          <div>
            <ul className="country-features">
              <div>
                <li>Native Name: {nativeName} </li>
                <li>Population: {population} </li>
                <li>Region: {region} </li>
                <li>Sub Region: {subregion} </li>
                <li>Capital: {capital} </li>
              </div>
              <div>
                <li>Top Level Domain: {topLevelDomain} </li>
                <li>Currencies: {code} </li>
                <li className="languages">
                  Languages:
                  {languages.map((language) => {
                    return <p key={language.name}> {language.name} </p>;
                  })}
                </li>
              </div>
            </ul>
          </div>
          <div>
            <div className="borders">
              Border Countries:
              {borders?.map((border) => {
                return (
                  <p className="borders-countries" key={border}>
                    {border}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCountry;
