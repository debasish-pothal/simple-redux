const userReducer = (state = {name: 'Debasish'}, action) => {
    switch(action.type) {
      case 'CHANGE':
          state = {
              ...state,
              name: action.payload
          }
          break;
      case 'DEFAULT':
          state = {
              ...state,
              name: 'Debasish'
          }
          break;
      dafault:
          state = {
              ...state,
              name: 'Debasish'
          }
          break;
    }
  
    return state;
  }

export default userReducer;