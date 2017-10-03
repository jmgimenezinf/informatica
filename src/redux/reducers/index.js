import { combineReducers } from 'redux'
import contacto from './contacto'
import email from './email'
const contactoApp = combineReducers({
  contacto,email
})

export default contactoApp
