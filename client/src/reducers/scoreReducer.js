const defaultState = {
  scores: [],
  myScores: []
}

export default function scoreReducer(state = defaultState , action){
  switch(action.type){
    case 'FETCH_ALL_SCORES':
      return {
        ...state,
        scores: action.scores
      }
    case 'FETCH_MY_SCORES':
      return {
        ...state,
        myScores: action.scores
      }
    case 'ADD_SCORE':
      return {
        ...state,
        scores: [...state.myScores, action.score],
        myScores: [...state.myScores, action.score]
      }
    case 'EDIT_SCORE':
      let newScores = state.scores.filter(s => s.id !== action.score._id)
      return {
        ...state,
        scores: [...newScores, action.score],
      }
    case 'DELETE_SCORE':
      let newScoreArr = state.scores.filter(s => s.id !== action.scoreId)
      return {
        ...state,
        scores: newScoreArr,
      }
    case 'CLEAR_SCORES':
      return {
        ...state,
        scores: [],
      }
    default:
      return state
  }
}
