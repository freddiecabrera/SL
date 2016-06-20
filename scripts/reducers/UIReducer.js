import { SHOW_DETAILS, MODAL_TRIGGER } from '../actions/types'

const initialState = {
  modalOn: false
}

const UIReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_DETAILS:
      return { ...state, show: action.show }
    case MODAL_TRIGGER:
      return { ...state, modalOn: action.modalOn }
    default:
      return state
  }
}

export default UIReducer
