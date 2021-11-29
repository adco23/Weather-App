import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.css';

function Label({temp, value}) {
  return <div>
    <label>{temp}</label>
    <p>{value}°C</p>
  </div>
}

export default function Card({max, min, name, img, onClose, id}) {
  // acá va tu código
  let URL = `http://openweathermap.org/img/wn/${img}@2x.png`
  return (<div className={style.container}>
    <button onClick={onClose} className={style.btn}>X</button>
    <Link to={`/city/${id}`} className={style.link}>
      <h5>{name}</h5>
    </Link>
    <div className={style.infoCont}>
      <Label temp="Min" value={min}/>
      <Label temp="Max" value={max}/>
      <img src={URL} alt="imagen" />
    </div>
  </div>)
};