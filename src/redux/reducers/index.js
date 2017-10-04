import { combineReducers } from 'redux'
import contacto from './contacto'
import email from './email'
import nombre from './nombre'
import apellido from './apellido'
import richEdit from './richEdit'

const contactoApp = combineReducers({
  contacto,email,nombre,apellido,richEdit
})

export default contactoApp
