import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import CardWrapper from './CardWrapper';
// import CardWrapper from './CardWrapper';

const PokeList = ({pokemons}) => {
  return (
    <Fragment>
      {
        pokemons.map(pokemon =>(
          <CardWrapper 
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