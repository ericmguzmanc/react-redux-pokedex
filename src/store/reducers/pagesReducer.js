import { SET_SCROLL_HEIGHT } from '../../utils/constants/actions.constants';

export function general (
  state = {
    scrollHeight: 0
  },
  action
) {
  switch (action.type) {
    case SET_SCROLL_HEIGHT:
      return {
        scrollHeight: action.payload,
      };
    default:
      return state;
  }
}