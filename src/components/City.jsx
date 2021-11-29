import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import style from "./City.module.css";

const APIKEY= '4ae2636d8dfbdc3044bede63951a019b';

export default function City() {
  const [city, setCity] = useState(undefined);
  const {cityId: id} = useParams();
  useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${APIKEY}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const cityAPI = {
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
          setCity(cityAPI);
        } else {
          setCity(null);
        }
      });
  }, [id]);

  return <div className={style.ciudad}>
    {city === undefined && <h2>Cargando...</h2>}
    {city === null && <h2>Ciudad no encontrada</h2>}
    {city && 
      <div className={style.container}>
        <h2>{city.name}</h2>
        <div className="info">
          <div>Temperatura: {city.temp} ºC</div>
          <div>Clima: {city.weather}</div>
          <div>Viento: {city.wind} km/h</div>
          <div>Cantidad de nubes: {city.clouds}</div>
          <div>Latitud: {city.latitud}º</div>
          <div>Longitud: {city.longitud}º</div>
        </div>
      </div>
    }
  </div>
  
}
