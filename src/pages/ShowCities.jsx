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
          Heleki bu olkeye sheher elave etmemisiniz !
        </p>
      ) : (
        cities.map((city) => (
          <div className="showCities__items" key={city.id}>
            <p className="showCities__p">Elave etdiyiniz sheher : {city.city}</p>
            <div className="showCities__btns">
              <button className="showCities__btn-delete" onClick={() => handleDelete(city.id)}>Delete</button>
              <Link to={`/showCities/${countryName}/editCity/${city.id}`}>
                <button className="showCities__btn-edit">Edit</button>
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
