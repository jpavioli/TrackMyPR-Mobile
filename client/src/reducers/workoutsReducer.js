const defaultState = {
  workouts: [],
  myWorkouts: []
}

export default function workoutsReducer(state = defaultState , action){
  switch(action.type){
    case 'FETCH_WORKOUTS':
      return {
        ...state,
        workouts: action.workouts
      }
    case 'FETCH_MY_WORKOUTS':
      return {
        ...state,
        myWorkouts: action.workouts
      }
    case 'ADD_WORKOUT':
      return {
        ...state,
        workouts: [...state.myWorkouts, action.workout],
        myWorkouts: [...state.myWorkouts, action.workout]
      }
    case 'EDIT_WORKOUT':
      let newWorkouts = state.workouts.filter(w => w.id !== action.workout.id)
      let newMyWorkouts = state.myWorkouts.filter(w => w.id !== action.workout.id)
      return {
        ...state,
        workouts: [...newWorkouts, action.workout],
        myWorkouts: [...newMyWorkouts, action.workout]
      }
    case 'DELETE_WORKOUT':
      let newWorkoutArr = state.workouts.filter(w => w.id !== action.workoutId)
      let newMyWorkoutArr = state.myWorkouts.filter(w => w.id !== action.workoutId)
      return {
        ...state,
        workouts: newWorkoutArr,
        myWorkouts: newMyWorkoutArr
      }
    case 'CLEAR_WORKOUTS':
      return {
        workouts: [],
        myWorkouts: []
      }
    default:
      return state
  }
}
