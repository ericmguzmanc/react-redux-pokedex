import { SET_SCROLL_HEIGHT, SET_CURRENT_URL } from '../../utils/constants/actions.constants';

export function general (
  state = {
    currentUrl: '/pokemons/',
    scrollHeight: 0
  },
  action
) {
  switch (action.type) {
    case SET_SCROLL_HEIGHT:
      return {
        currentUrl: state.currentUrl,
        scrollHeight: action.payload,
      };
    case SET_CURRENT_URL:
    console.log('scu ', action.payload)
      return {
        currentUrl: action.payload,
        scrollHeight: state.scrollHeight,
      }
    default:
      return state;
  }
}