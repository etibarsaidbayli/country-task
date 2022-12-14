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
      <div className="showCities">
        <h1 className="showCities__name">{countryName}</h1>
        {cities.length === 0 ? (
          <p className="showCities__p">
            Hələki {countryName} ölkəsinə şəhər əlavə edilməyib !
          </p>
        ) : (
          cities.map((city) => (
            <div className="showCities__items" key={city.id}>
              <p className="showCities__p">
                Əlavə etdiyiniz şəhər :  {city.city}
              </p>
              <div className="showCities__btns">
                <button className="showCities__btn-delete" onClick={() => handleDelete(city.id)}>
                  Sil
                </button>
                <Link to={`/showCities/${countryName}/editCity/${city.id}`}>
                  <button className="showCities__btn-edit">Redaktə et</button>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default ShowCities;
