import { 
  SELECT_POKEMON,
  REQUEST_POKEMONS,
  RECEIVE_POKEMONS
} from '../../utils/constants/actions.constants';

export function selectedPokemon(state = '', action) {
  switch(action.type) {
    case SELECT_POKEMON:
      return action.id;
    default:
      return state;
  }
}

export function pokemons(
  state = {
    isFetching: false,
    pokemon: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_POKEMONS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_POKEMONS:
      return Object.assign({}, state, {
        isFetching: false,
        pokemon: action.pokemon
      });
    default:
      return state;
  }
}