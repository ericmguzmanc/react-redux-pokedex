import { pokemons, selectedPokemon } from './pokemonReducer';
import { general } from './pagesReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  pokemons,
  selectedPokemon,
  general,
});

export default rootReducer
