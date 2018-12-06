import { 
  RECEIVE_POKEMONS,
  RECEIVE_POKEMON_INFO
} from '../../utils/constants/actions.constants';

export function selectedPokemon(state = {}, action) {
  switch(action.type) {
    case RECEIVE_POKEMON_INFO:
      return action.pokeInfo
    default:
      return state;
  }
}

export function pokemons(
  state = {
    pokemon: []
  },
  action
) {
  switch (action.type) {
    case RECEIVE_POKEMONS:
      return {
        pokemon: action.pokemon
      };
    default:
      return state;
  }
}