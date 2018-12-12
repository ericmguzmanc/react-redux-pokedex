import {
  RECEIVE_POKEMONS,
  RECEIVE_POKEMON_INFO,
  REQUEST_POKEMON_INFO,
  GO_NEXT_PAGE,
  SET_SCROLL_HEIGHT
} from '../../utils/constants/actions.constants';
import { reducePokeList } from '../../utils/functons/reduce-pokeObjects';
import { nextPage } from '../../utils/functons/pages';
import PokeService from '../../utils/services/poke-service';

export function receivePokemon(data) {
  return {
    type: RECEIVE_POKEMONS,
    pokemon: data,
  }
}

export function receivePokemonInfo(data) {
  return {
    type: RECEIVE_POKEMON_INFO,
    pokeInfo: data,
  }
}

export function requestPokemonInfo(pokemon) {
  return {
    type: REQUEST_POKEMON_INFO,
    pokemon: pokemon
  }
}

export function goNextPage(payload) {
  return {
    type: GO_NEXT_PAGE,
    payload: payload
  }
}

export function onScrollHeight(payload) {
  return {
    type: SET_SCROLL_HEIGHT,
    payload: payload
  }
}

export function fetchPokemon() {
  return dispatch => {
    PokeService.getPokemons()
    .then(response => { 
        const receivedPokemon = reducePokeList(response.data.results);
        dispatch(receivePokemon(receivedPokemon))
      })
  }
}

export function fetchPokemonInfo(id) {
  return dispatch => {
    dispatch(requestPokemonInfo());
    PokeService.getPokemonById(id)
    .then(response => dispatch(receivePokemonInfo(response)));
  }
}

export function onPaginatedSearch(fetchedPokemon, pokemons, page) {
  return dispatch => {
    if (page < fetchedPokemon.length - 1){ 
      dispatch(goNextPage(nextPage(fetchedPokemon, pokemons, page)));
    }
  };
}


