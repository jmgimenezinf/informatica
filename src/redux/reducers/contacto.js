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
      case 'RICH_EDIT':
        return [
          ...state,
          {
            richEdit:action.richEdit
          }
        ]
        break;
      default:
        return state
    }
  }

  export default contacto