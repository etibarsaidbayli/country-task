import { Link } from "react-router-dom";

function CountryItem({ name }) {
  return (
    <li className="country-item">
      {name}
      <div className="country-item__btns">
        <Link to="/addCity">
          <button className="add-city">Sheher elave Et</button>
        </Link>
        <Link to={`showCities/${name}`}>
          <button className="show-cities">Sheherleri Goster</button>
        </Link>
      </div>
    </li>
  );
}

export default CountryItem;
