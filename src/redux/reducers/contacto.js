const contacto = (state = [], action) => {
    switch (action.type) {
      case 'ADD_EMAIL':
        return [
          ...state,
          {
            email:action.email
          }
        ]
      case 'GET_EMAIL':
        return action.email
      default:
        return state
    }
  }

  export default contacto