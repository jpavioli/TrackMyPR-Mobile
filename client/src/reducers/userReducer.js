const defaultState = {
  user: null,
  token: 0
}

export default function userReducer(state = defaultState , action){
  switch(action.type){
    case 'LOG_IN':
      return {
        user: action.user,
        token: action.token
      }
    case 'LOG_OUT':
      return {
        user: null,
        token: 0
      }
    default:
      return state
  }
}
