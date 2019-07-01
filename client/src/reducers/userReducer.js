const defaultState = {
  user: null,
  token: 0,
  loggedIn: false
}

export default function userReducer(state = defaultState , action){
  switch(action.type){
    case 'LOG_IN':
      return {
        user: action.user,
        token: action.token,
        loggedIn: true
      }
    case 'LOG_OUT':
      return {
        user: null,
        token: 0,
        loggedIn: false
      }
    default:
      return state
  }
}
