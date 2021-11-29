import React from 'react';
import Card from './Card.jsx'
import style from './Cards.module.css'

// max, min, name, img, onClose
export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  return (<div className={style.container}>
    {cities.map(c => (
      <Card
        max={c.max}
        min={c.min}
        name={c.name}
        img={c.img}
        onClose={() => onClose(c.id)}
        id={c.id}
        key={c.id}
      />
    ))}
  </div>)
};