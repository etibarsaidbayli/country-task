import Header from "../components/Header";

import { useState } from "react";

import { useParams } from "react-router-dom";

function AddCity({ countries }) {
  const { countryName } = useParams();

  const [newCity, setNewCity] = useState({
    city: "",
    country: countryName || "",
  });
  const [sucsess, setSucsess] = useState(false);

  const handleInput = (event) => {
    setNewCity({ ...newCity, [event.target.name]: event.target.value });
    setSucsess(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(" http://localhost:7700/cities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCity),
    });
    setSucsess(true);
  };

  return (
    <div className="container">
      <Header />
      <div className={sucsess ? "form__sucsess-open " : "form__sucsess"}>
        <h5>Seçdiyiniz ölkəyə dahil etdiyiniz şəhər əlavə edildi !</h5>
      </div>
      <form
        className="addCity__form"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <label className="form__label" htmlFor="countries">
          Ölkəni seçin:
        </label>
        <select
          onChange={handleInput}
          name="country"
          className="form__select"
          id="countries"
          form="countriesForm"
          value={newCity.country}
        >
          {countries.map((country) => (
            <option key={country.code} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
        <input
          onChange={handleInput}
          name="city"
          className="form__inputText"
          type="text"
          placeholder="şəhər adı"
        />
        <button
          disabled={!newCity.city || !newCity.city.trim()}
          className="form__addBtn"
        >
          Əlavə et
        </button>
      </form>
    </div>
  );
}

export default AddCity;
