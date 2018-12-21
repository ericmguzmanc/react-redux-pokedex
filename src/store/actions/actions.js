import {
  RECEIVE_POKEMONS,
  RECEIVE_POKEMON_INFO,
  REQUEST_POKEMON_INFO,
  GO_NEXT_PAGE,
  SET_SCROLL_HEIGHT,
  SET_CURRENT_URL,
  DARK_MODE,
  SEARCH_POKEMON_QUERY,
  SEARCH_MODE_ON,
  SEARCH_TERM
} from '../../utils/constants/actions.constants';
import { reducePokeList, doPokeQuery } from '../../utils/functons/reduce-pokeObjects';
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

export function receivePokemonByQuery(payload) {
  return {
    type: SEARCH_POKEMON_QUERY,
    payload: payload,
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

export function setCurrentUrl(payload) {
  return {
    type: SET_CURRENT_URL,
    payload: payload
  }
}

export function setDarkMode(payload) {
  return {
    type: DARK_MODE,
    payload: payload
  }
}

export function searchModeOn(payload) {
  return {
    type: SEARCH_MODE_ON,
    payload: payload
  }
}

export function setSearchTerm(payload) {
  return {
    type: SEARCH_TERM,
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

export function toggleSearchMode(on) {
  return dispatch => {
    dispatch(searchModeOn(on));
  }
}

export function searchPokemonQuery(query, pokemon) {
  return dispatch => {
    dispatch(receivePokemonByQuery(doPokeQuery(query, pokemon)))
  }
}

export function searchTerm(query) {
  return dispatch => {
    dispatch(setSearchTerm(query));
  }
}


