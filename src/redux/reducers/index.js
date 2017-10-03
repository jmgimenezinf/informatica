import { combineReducers } from 'redux'
import contacto from './contacto'
import email from './email'
import nombre from './nombre'
import apellido from './apellido'

const contactoApp = combineReducers({
  contacto,email,nombre,apellido
})

export default contactoApp
