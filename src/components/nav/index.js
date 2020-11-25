import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return(
    <nav>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/pokemons">
          <li>Pokemons</li>
        </Link>
      </ul>
    </nav>
  ) 
}

export default Nav;