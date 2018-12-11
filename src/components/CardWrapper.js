import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PokeCard from './PokeCard';


const CardWrapper = withRouter(({pokemon, history, ...props}) => {
 
  const handleClick = () => {
    console.log('where? ', window.innerHeight, ' ', window.scrollY);
    history.push(`/pokemons/${pokemon.id}`);
  };

  return(
    <Fragment>
      <div onClick={() => handleClick()} style={{width:"330px", display: "inline-block", margin: "5px"}}>
        <PokeCard 
          key={pokemon.id}
          pokemon={pokemon}
        />
      </div>
    </Fragment>
  );
});


export default CardWrapper;