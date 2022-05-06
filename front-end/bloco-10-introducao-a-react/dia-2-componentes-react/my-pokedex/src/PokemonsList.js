import React, { Component } from 'react';
import Pokemon from './Pokemon';
import data from './data';

class PokemonList extends Component {
  render() {
    return (
      <section className='pokelist-container'>
        {data.map((pokemon) => {
          return <Pokemon pokemon={pokemon} key={pokemon.id} />;
        })}
      </section>
    )
  }
}

export default PokemonList
