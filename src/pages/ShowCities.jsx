import Header from "../components/Header";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ShowCities() {
  let { countryName } = useParams();

  const [cities, setCities] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let data = await fetch("http://localhost:7700/cities").then((response) =>
        response.json()
      );
      setCities(data.filter((a) => a.country === `${countryName}`));
    };
    getData();
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:7700/cities/${id}`, {
      method: "DELETE",
    });
    setCities(cities.filter((a) => a.id !== id));
  };

  return (
    <div className="container">
      <Header />
      <h1>{countryName}</h1>
      {cities.length === 0 ? (
        <p className="show__city-p">
          Heleki bu olkeye sheher elave etmemisiniz !
        </p>
      ) : (
        cities.map((city) => (
          <div key={city.id}>
            <p className="show__city-p">Elave etdiyiniz sheher : {city.city}</p>
            <div className="show__cities-btns">
              <button onClick={() => handleDelete(city.id)}>Delete</button>
              <Link to={`/showCities/${countryName}/editCity`}>
                <button>Edit</button>
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ShowCities;
