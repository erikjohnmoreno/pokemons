// import React, { useEffect, useState } from 'react';

// const Pokemon = () => {

//   useEffect(() => {
//     fetchPokemons();
//   }, []);

//   const [pokemons, setPokemons] = useState([]);

//   const fetchPokemons = async () => {
//     const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
//     const pokemons = await data.json();
//     console.log(pokemons);
//     setPokemons(pokemons);
//   };

//   return(
//     <div>
//       {pokemons.results.map(pokemon => (
//         <h1>{pokemon.name}</h1>
//       ))}
//     </div>
//   ) 
// }

// export default Pokemon;

import React from 'react';
import { Link } from 'react-router-dom';

class Pokemons extends React.Component {
  state = {
    pokemons: []
  }

  fetchPokemons() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
      .then(res => res.json())
      .then(data => {
        this.setState({pokemons: data.results})
      })
      .catch(error => console.log(error))
  }

  componentDidMount() {
    this.fetchPokemons();
  }

  render() {
    return (
      <div> 
        {this.state.pokemons.map(pokemon => (
          <Link to={`/pokemons/${pokemon.name}`}>
            <h1>{pokemon.name}</h1>
          </Link>
        ))}
      </div>
    )
  }
}

export default Pokemons