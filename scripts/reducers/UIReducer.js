import { FETCHING } from '../actions/types'

const UIReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetching: action.fetching }
    default:
      return state
  }
}

export default UIReducer
