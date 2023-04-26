import Countries from "./components/countries/Countries";
import data from "../data/data.json";
import { useState } from "react";

const App = () => {
  const [countries, setCountries] = useState(data);
  return (
    <div>
      <Countries countries={countries} />
    </div>
  );
};

export default App;
