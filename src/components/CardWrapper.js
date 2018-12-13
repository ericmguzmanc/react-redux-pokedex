import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PokeCard from './PokeCard';


const CardWrapper = withRouter(({pokemon, history, ...props}) => {
 
  const handleClick = () => {
    history.push(`/pokemons/${pokemon.id}`);
  };

  return(
    <Fragment>
      <div onClick={() => handleClick()} style={{ display: "inline-block", margin: "5px"}}>
        <PokeCard 
          key={pokemon.id}
          pokemon={pokemon}
          pokeTypes={false}
          pokeAnimated={false}
        />
      </div>
    </Fragment>
  );
});


export default CardWrapper;