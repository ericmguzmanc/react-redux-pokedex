import { 
  RECEIVE_POKEMONS,
  RECEIVE_POKEMON_INFO,
  REQUEST_POKEMON_INFO
} from '../../utils/constants/actions.constants';

export function selectedPokemon(state = {
  isLoading: true,
  data: {}
}, 
action) {
  switch(action.type) {
    case RECEIVE_POKEMON_INFO:
      return {
        isLoading: false,
        data: action.pokeInfo
      }
    case REQUEST_POKEMON_INFO:
      return {
        isLoading: true,
        data: action.data
      }
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