import { Link, useParams } from "react-router-dom";
import data from "../../../data/data.json";
import "./singlecountry.scss";

const SingleCountry = () => {
  const { countryName } = useParams();
  const countryData = data.find((country) => {
    return country.name === countryName;
    // console.log(country.name);
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

  return (
    <div className="container">
      <div className="back">
        <Link to="/">Back</Link>
      </div>
      <div className="single-wrapper">
        <div>
          <img src={svg} alt="" />
        </div>
        <div>
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
                <li>
                  Languages:
                  {languages.map((language) => {
                    return <p key={language.name}> {language.name} </p>;
                  })}
                </li>
              </div>
            </ul>
          </div>
          <div>
            <div>
              Border Countries:
              {borders?.map((border) => {
                return <p key={border}> {border} </p>;
              })}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCountry;
