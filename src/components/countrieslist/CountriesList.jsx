import { useEffect, useState } from "react";
import data from "../../../data/data.json";
import Filter from "../filter/Filter";
import Country from "../country/Country";
import "./countrieslist.scss";

const CountriesList = () => {
  const [countriesData, setCountriesData] = useState(data);
  const [countryName, setCountryName] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const filteredCountries = (countryName) => {
    const filtered = data.filter((item) => {
      return item.name.toLowerCase().includes(countryName?.toLowerCase());
    });
    setCountriesData(filtered);
  };

  const filteredRegions = (selectedRegion) => {
    const filteredRegions = data.filter((item) => {
      return item.region.toLowerCase().includes(selectedRegion?.toLowerCase());
    });
    setCountriesData(filteredRegions);
  };

  useEffect(() => {
    filteredCountries(countryName);
  }, [countryName]);

  useEffect(() => {
    filteredRegions(selectedRegion);
  }, [selectedRegion]);

  const countries = countriesData.map((country) => {
    return <Country key={country.alpha3Code} {...country} />;
  });
  return (
    <div className="container">
      <Filter
        countryName={countryName}
        setCountryName={setCountryName}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
      <div className="countries-list">{countries}</div>
    </div>
  );
};

export default CountriesList;
