import { 
  RECEIVE_POKEMONS,
  RECEIVE_POKEMON_INFO,
  REQUEST_POKEMON_INFO,
  GO_NEXT_PAGE
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
    isLoading: true,
    fetchedPokemon: [],
    pokemons: [],
    page: 0,
  },
  action
) {
  switch (action.type) {
    case RECEIVE_POKEMONS:
      return {
        fetchedPokemon: action.pokemon,
        pokemons: action.pokemon[0], 
        page: 0,
        isLoading: false,
      };
    case GO_NEXT_PAGE:
      const { fetchedPokemon, pokemons, page } = action.payload;
      return {
        fetchedPokemon: [...fetchedPokemon],
        pokemons: [...pokemons, ...fetchedPokemon[page]],
        page: page,
      };
    default:
      return state;
  }
}