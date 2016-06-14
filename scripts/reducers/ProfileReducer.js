import { FETCH_PROFILE } from '../actions/types'

const ProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROFILE:
      return { ...state, profile: action.profile }
    default:
      return state
  }
}

export default ProfileReducer
