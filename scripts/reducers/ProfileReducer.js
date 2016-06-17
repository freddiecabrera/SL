import { FETCH_PROFILE, GET_MONTHS } from '../actions/types'

const initialState = {
  month: 9
}

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE:
      return { ...state, profile: action.profile }
    case GET_MONTHS:
      return { ...state, month: action.month }
    default:
      return state
  }
}

export default ProfileReducer
