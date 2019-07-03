const defaultState = {
  //Default set for iPhone X
  fontScale: 1,
  height: 896,
  scale: 2,
  width: 414
}

export default function userReducer(state = defaultState , action){
  switch(action.type){
    case 'ADJUST_ENVIRONMENT':
      return {
        fontScale: action.fontScale,
        height: action.height,
        scale: action.scale,
        width: action.width
      }
    default:
      return state
  }
}
