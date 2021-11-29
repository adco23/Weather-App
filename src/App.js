import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav.jsx'
import Cards from './components/Cards.jsx';
import About from './components/About.jsx'
import City from './components/City';
import { Route } from 'react-router-dom';
// import data, { Cairns } from './data.js';

const APIKEY= '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);

  function onSearch(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const city = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          if(cities.find(c => c.id === city.id) === undefined) {
            setCities(oldCities => [...oldCities, city]);
          } else {
            alert("Ciudad anteriormente agregada");
          }
        } else {
          alert("Ciudad no encontrada");
        }
      });

  }
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => id !== c.id))
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
    <div className="App">
      
        <Route path='/' render={() => <Nav onSearch={onSearch}/>} />
        <Route path='/about' component={About} />
        <Route exact path='/' render={() => <Cards cities={cities} onClose={onClose}/>} />
        <Route exact path='/city/:cityId' render={() => <City />} />
        
      
      {/* <div>
        <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        />
      </div>
      <hr /> */}
      {/* <div>
        <Cards
          cities={data}
        />
      </div> */}
      {/* <hr />
      <div>
        <SearchBar
          onSearch={(city) => alert(city)}
        />
      </div> */}
    </div>
  );
}

export default App;
