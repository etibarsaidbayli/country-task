import Header from "../components/Header";
import { useState } from "react";

function AddCity({ countries }) {
  const [newCity, setNewCity] = useState({
    city: "",
    country: "",
  });

  const [sucsess,setSucsess] = useState(false)

  const handleInput = (event) => {
    setNewCity({ ...newCity, [event.target.name]: event.target.value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(' http://localhost:7700/cities',{
        method:"POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body:JSON.stringify(newCity)
    })
    setSucsess(true)
   
  };
 


  return (
    <div className="container">
      <Header />
      <div className={sucsess ? "form__sucsess-open " : "form__sucsess"}>
        <h5>Secdiyiniz olkeye  dahil etdiyiniz sheher elave olundu !</h5>
      </div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label className="form__label" htmlFor="countries">
          Olkeni sechin:
        </label>
        <select
          onChange={handleInput}
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
          onChange={handleInput}
          name="city"
          className="form__inputText"
          type="text"
          placeholder="sheheri elave et"
        />
        <button className="form__addBtn">Elave et</button>
      </form>
    </div>
  );
}

export default AddCity;
