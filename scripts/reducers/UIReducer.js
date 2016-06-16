import { FETCHING, SHOW_DETAILS } from '../actions/types'

const UIReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetching: action.fetching }
    case SHOW_DETAILS:
      return { ...state, show: action.show }
    default:
      return state
  }
}

export default UIReducer
