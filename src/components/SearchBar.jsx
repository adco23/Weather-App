import React, {useState}from 'react';
import style from './SearchBar.module.css'


export default function SearchBar({onSearch}) {
  // acá va tu código
  const [city, setCity] = useState('');
  
  const handleInputChange = e => {
    e.preventDefault();
    setCity(e.target.value);
  };
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
    setCity("");
  };

  return <form onSubmit={handleOnSubmit}>
    <input 
      type="text"
      placeholder="Ciudad..." 
      value={city}
      onChange={handleInputChange}
      className={style.inputText}
    />
    
    <button type="submit" className={style.btn}>🔎</button>
  </form>
};