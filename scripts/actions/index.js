import axios from 'axios'
import { FETCH_PROFILE, SHOW_DETAILS, GET_MONTHS, MODAL_TRIGGER } from './types'

const PROFILE_URL = 'http://www.scalelab.com/test/channel.json'

export const getProfile = () => {
  return function (dispatch) {
    axios.get(PROFILE_URL)
      .then(response => {
        const data = response.data
        return dispatch({ type: FETCH_PROFILE, profile: data })
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const showDetails = bool => ({
  type: SHOW_DETAILS,
  show: bool
})

export const changeMonth = month => ({
  type: GET_MONTHS,
  month
})

export const modalTrigger = (bool) => ({
  type: MODAL_TRIGGER,
  modalOn: bool
})

export const updateSocial = (data) => {
  return function (dispatch) {
    axios.post(PROFILE_URL, data)
      .then(respone => {
        console.log('saved Successfully')
      })
      .catch(error => {
        console.log(error)
      })
  }
}
