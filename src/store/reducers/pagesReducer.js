import { SET_SCROLL_HEIGHT, SET_CURRENT_URL, DARK_MODE, SEARCH_MODE_ON, SEARCH_TERM } from '../../utils/constants/actions.constants';

export function general (
  state = {
    currentUrl: '/pokemons/',
    scrollHeight: 0,
    darkMode: false,
    searchMode: false,
    searchTerm: ''
  },
  action
) {
  switch (action.type) {
    case SET_SCROLL_HEIGHT:
      return Object.assign({}, state, {scrollHeight: action.payload});

    case SET_CURRENT_URL:
      return Object.assign({}, state, {currentUrl: action.payload});

    case DARK_MODE:
      return Object.assign({}, state, {darkMode: !state.darkMode});

    case SEARCH_MODE_ON:
      return Object.assign({}, state, {searchMode: action.payload});

    case SEARCH_TERM:
      return Object.assign({}, state, {searchTerm: action.payload});
      
    default:
      return state;
  }
}