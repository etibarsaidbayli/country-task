import HomePage from "./pages/HomePage";
import AddCity from "./pages/AddCity";
import ShowCities from "./pages/ShowCities";
import EditCity from "./pages/EditCity";

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let data = await fetch(" http://localhost:7700/countries").then(
        (response) => response.json()
      );
      setCountries(data);
    };
    getData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage countries={countries} />} />
      <Route
        path="/addCity/:countryName"
        element={<AddCity countries={countries} />}
      />
      <Route
        path="/showCities/:countryName"
        element={<ShowCities countries={countries} />}
      />
      <Route
        path="/showCities/:countryName/editCity/:cityId"
        element={<EditCity countries={countries} />}
      />
    </Routes>
  );
}

export default App;
