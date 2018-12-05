import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PokeCard from './PokeCard';

const PokeList = ({pokemons}) => {
  return (
    <Fragment>
      {
        pokemons.map(pokemon =>(
          <PokeCard 
            key={pokemon.id}
            pokemon={pokemon}
          />
        ))
      }
    </Fragment>
  );

};

const mapStateToProps = ({ pokemons: { pokemon } }) => {
  return {
    pokemons: pokemon,
  }
};

export default connect(mapStateToProps)(PokeList)