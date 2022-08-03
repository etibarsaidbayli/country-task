import Header from "../components/Header";
import CountryItem from "../components/CountryItem";

function HomePage({countries}) {
  return (
      <div className="container">
        <Header />
        <main>
          <ul className="main__countries-list">
            {countries.map((country)=> (
                <CountryItem 
                key={country.code}
                name={country.name}/>
            ))}
          </ul>
        </main>
      </div>
  );
}

export default HomePage;
