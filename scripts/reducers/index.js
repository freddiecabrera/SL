import { combineReducers } from 'redux'
import ProfileReducer from './ProfileReducer'
import UIReducer from './UIReducer'

const rootReducer = combineReducers({
  ProfileReducer,
  UIReducer
})

export default rootReducer
