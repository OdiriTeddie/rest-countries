import React, { useState } from "react";

const Filter = ({ search }) => {
  const [countryName, setCountryName] = useState("");

  const handleNameChange = (e) => {
    setCountryName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return search(countryName);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={countryName}
          onChange={handleNameChange}
          placeholder="Search for a country.."
        />
      </form>
    </div>
  );
};

export default Filter;
