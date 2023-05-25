import React, { useEffect, useState } from "react";
import "./filter.scss";
import { useGlobalContext } from "../../utils/context";

const Filter = ({
  countryName,
  setCountryName,
  selectedRegion,
  setSelectedRegion,
}) => {
  const { isDarkTheme } = useGlobalContext();

  const handleNameChange = (e) => {
    setCountryName(e.target.value);
  };

  const handleChangeRegion = (e) => {
    setSelectedRegion(e.target.value);
  };

  useEffect(() => {
    document
      .querySelector(".select-input")
      .classList.toggle("dark-theme", isDarkTheme);

    document
      .querySelector(".search-input")
      .classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <div className="filter-wrapper">
      <form>
        <input
          className="search-input"
          type="text"
          value={countryName}
          onChange={handleNameChange}
          placeholder="Search for a country.."
        />
      </form>

      <form>
        <select
          className="select-input"
          id="countryRegion"
          value={selectedRegion}
          onChange={handleChangeRegion}
        >
          <option value="" disabled hidden>
            Filter by Region
          </option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </form>
    </div>
  );
};

export default Filter;
