import { pokemons, selectedPokemon } from './pokemonReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  pokemons,
  selectedPokemon
});

export default rootReducer
