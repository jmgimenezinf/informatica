const contacto = (state = [], action) => {
    switch (action.type) {
      case 'ADD_EMAIL':
        return [
          ...state,
          {
            email:action.email
          }
        ]
        break;
      case 'ADD_NOMBRE':
        return [
          ...state,
          {
            nombre:action.nombre
          }
        ]
        break;
      default:
        return state
    }
  }

  export default contacto