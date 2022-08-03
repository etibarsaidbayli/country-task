import { Link } from "react-router-dom";

function CountryItem({ name }) {
  return (
    <li className="country-item">
      {name}
      <div className="country-item__btns">
        <Link to={`/addCity/${name}`}>
          <button className="add-city">Şəhər əlavə et</button>
        </Link>
        <Link to={`showCities/${name}`}>
          <button className="show-cities">Şəhərləri Göstər</button>
        </Link>
      </div>
    </li>
  );
}

export default CountryItem;
