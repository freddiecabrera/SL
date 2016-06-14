import axios from 'axios'
import { FETCH_PROFILE, FETCHING } from './types'

const PROFILE_URL = 'http://scalelab.com/test.json'

export function getProfile () {
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
