const defaultState = {
  scores: []
}

export default function scoreReducer(state = defaultState , action){
  switch(action.type){
    case 'FETCH_SCORES':
      return {
        ...state,
        scores: action.loading
      }
    case 'ADD_SCORE':
      return {
        ...state,
        workouts: [...state.myWorkouts, action.workout],
        myWorkouts: [...state.myWorkouts, action.workout]
      }
    case 'EDIT_SCORE':
      let newScores = state.scores.filter(s => s.id !== action.score.id)
      return {
        ...state,
        workouts: [...newScores, action.score],
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
