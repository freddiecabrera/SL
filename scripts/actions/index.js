import axios from 'axios'
import { FETCH_PROFILE, FETCHING, SHOW_DETAILS } from './types'

const PROFILE_URL = 'http://scalelab.com/test.json'

export const getProfile = () => {
  return function (dispatch) {
    dispatch({ type: FETCHING, fetching: true })
    axios.get(PROFILE_URL)
      .then(response => {
        const data = response.data
        dispatch({ type: FETCHING, fetching: false })
        return dispatch({ type: FETCH_PROFILE, profile: data })
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}

export const showDetails = bool => ({
  type: SHOW_DETAILS,
  show: bool
})
