import React from 'react'
import Nav from '../components/nav';
import Pokemons from './pokemons';
import ShowPokemon from './show_pokemon';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return(
    <Router>
      <>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pokemons" exact component={Pokemons} />
          <Route path="/pokemons/:name" component={ShowPokemon} />
        </Switch>
      </>
    </Router>
    
  )
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App
