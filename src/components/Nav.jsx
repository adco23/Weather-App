import React from 'react';
import {NavLink} from 'react-router-dom';
import SearchBar from './SearchBar.jsx';
import Logo from '../assets/Logo.png'

import style from './Nav.module.css'

export default function Nav({onSearch}) {
  return <nav className={style.Navbar}>
    <NavLink to='/'>
      <div className={style.NavTitle}>
        <img src={Logo} alt="Logo clima" className={style.imgWeather}/>
        <h5>Weather App</h5>
      </div>
    </NavLink>
    <NavLink to='/about'>
      <span>About</span>
    </NavLink>
      <SearchBar onSearch={onSearch}/>
  </nav>
}