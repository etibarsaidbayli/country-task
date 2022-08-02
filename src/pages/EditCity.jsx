import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useState } from "react";
function EditCity({ countries }) {
  let { countryName } = useParams();

  const [editCity, setEditCity] = useState({
    city: "",
    country: countryName,
    // id: countries.findIndex((a) => a.name === countryName) + 1, burda cities arraydan gelen indexnen eyni olmalidi... cities de showCities dedi onu da ordan cixardib App a sala bilmirem her shey dagilir ...
  });

  console.log(editCity);

  const handleInputChange = (event) => {
    setEditCity({ ...editCity, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    handleEditCity(editCity.id);
  };

  const handleEditCity = (id) => {
    fetch(`http://localhost:7700/cities/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editCity),
    });
  };

  return (
    <div className="container">
      <Header />

      <form onSubmit={handleSubmitForm} autoComplete="off">
        <label className="form__label" htmlFor="countries">
          Olkeni sechin:
        </label>
        <select
          defaultValue={countryName}
          onChange={handleInputChange}
          name="country"
          id="countries"
          form="countriesForm"
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
        />
        <button className="form__addBtn">Edit</button>
      </form>
    </div>
  );
}

export default EditCity;
