import Countries from "./components/countries/Countries";
import data from "../data/data.json";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountrySingle from "./components/country-single/CountrySingle";
import Filter from "./components/filter/Filter";

const App = () => {
  const [countries, setCountries] = useState(data);

  const search = (countryName) => {
    const filteredCountries = data.filter((country) => {
      if (countryName) {
        return country.name === countryName;
      }
    });
    setCountries(filteredCountries);
  };

  return (
    <>
      <Filter search={search} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Countries countries={countries} />}></Route>
          <Route
            path="/country/:id"
            element={<CountrySingle data={data} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
