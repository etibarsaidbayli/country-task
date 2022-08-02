import HomePage from "./pages/HomePage";
import AddCity from './pages/AddCity'
import {Routes,Route} from 'react-router-dom'
import ShowCities from './pages/ShowCities'
import {useState,useEffect} from 'react'




function App() {

  const [countries,setCountries] = useState([])


  useEffect(() => {
      const getData = async () => {
          let data=await fetch(' http://localhost:7700/countries').then(response=>response.json())
          setCountries(data)
          
      }
      getData()
  },[])

  return (
    <Routes>
      <Route path="/" element={<HomePage
      countries={countries}
      />}/> 
      <Route path="/addCity" element={<AddCity
      countries={countries}
      />}/> 
      <Route path="/showCities/:countryName" element={<ShowCities
       countries={countries}
      
      />}/>
    </Routes>
  );
}

export default App;
