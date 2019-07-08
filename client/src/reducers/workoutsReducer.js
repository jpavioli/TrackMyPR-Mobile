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
      console.log(action)
      let newWorkouts = state.workouts.filter(w => w._id !== action.workout._id)
      let newMyWorkouts = state.myWorkouts.filter(w => w._id !== action.workout._id)
      return {
        ...state,
        workouts: [action.workout,...newWorkouts],
        myWorkouts: [action.workout,...newMyWorkouts]
      }
    case 'DELETE_WORKOUT':
      let newWorkoutArr = state.workouts.filter(w => w._id !== action.workoutId)
      let newMyWorkoutArr = state.myWorkouts.filter(w => w._id !== action.workoutId)
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
