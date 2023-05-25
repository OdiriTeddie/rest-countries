import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./Pages/sharedlayout/SharedLayout";
import CountriesList from "./components/countrieslist/CountriesList";
import SingleCountry from "./Pages/singlecountry/SingleCountry";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<CountriesList />} />
          <Route path="/:countryName" element={<SingleCountry />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
