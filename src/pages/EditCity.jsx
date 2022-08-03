import Header from "../components/Header";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function EditCity({ countries }) {
  let { countryName, cityId } = useParams();


  const [editCity, setEditCity] = useState({
    city: "",
    country: countryName,
  });
  const [editSucsess, setEditSucsess] = useState(false);

  const handleInputChange = (event) => {
    setEditCity({ ...editCity, [event.target.name]: event.target.value });
    setEditSucsess(false);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    handleEditCity();
    setEditSucsess(true);
  };

  const handleEditCity = () => {
    fetch(`http://localhost:7700/cities/${cityId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editCity),
    });
  };

  useEffect(() => {
    fetch(`http://localhost:7700/cities/${cityId}`)
      .then((r) => r.json())
      .then((city) => {
        setEditCity(city);
      });
  }, []);

  return (
    <div className="container">
      <Header />
      <div className={editSucsess ? "form__sucsess-open " : "form__sucsess"}>
        <h5>Dəyişiliklər uğurla əlavə olundu!</h5>
      </div>
      <form
        className="addCity__form"
        onSubmit={handleSubmitForm}
        autoComplete="off"
      >
        <label className="form__label" htmlFor="countries">
          Ölkəni seçin:
        </label>
        <select
          defaultValue={countryName}
          onChange={handleInputChange}
          name="country"
          id="countries"
          form="countriesForm"
          className="form__select"
        >
          {countries.map((country) => (
            <option key={country.code} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
        <input
          onChange={handleInputChange}
          name="city"
          className="form__inputText"
          type="text"
          placeholder="sheheri elave et"
          value={editCity.city}
        />
        <button disabled={!editCity.city} className="form__addBtn">
          Redaktə et
        </button>
        
      </form>
    </div>
  );
}

export default EditCity;
