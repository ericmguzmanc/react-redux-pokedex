import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PokeCard from './PokeCard';


const CardWrapper = withRouter(({pokemon, history, darkMode, ...props}) => {
 
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
          darkMode={darkMode}
        />
      </div>
    </Fragment>
  );
});


export default CardWrapper;