export const fetchAllWorkouts = () => {
  const URL = `http://localhost:6969/workouts`
  return dispatch => {
      fetch(URL)
        .then(res=>res.json())
        .then(data=>{
          dispatch({
            type: 'FETCH_WORKOUTS',
            workouts: data.workouts
          })
        })
      }
}

export const fetchMyWorkouts = (userID) => {
  const URL = `http://localhost:6969/workouts/user/${userID}`
  return dispatch => {
      fetch(URL)
        .then(res=>res.json())
        .then(data=>{
          dispatch({
            type: 'FETCH_MY_WORKOUTS',
            workouts: data.workouts
          })
        })
      }
}

export const newWorkout = (obj,token) => {
  const URL = `http://localhost:6969/workouts`
  return dispatch => {
      fetch(URL, {
        method: 'POST',
        headers: {
          'content-type':'application.json',
          'auth-token': token
        },
        body: JSON.stringify({
          warmup: obj.warmup,
          name: obj.name,
          description: obj.description,
          format: obj.format,
          coolDown: obj.coolDown
        })
      })
        .then(res=>res.json())
        .then(data=>{
          dispatch({
            type: 'ADD_WORKOUT',
            workout: data.workout
          })
        })
      }
}

export const editWorkout = (obj,token) => {
  const URL = `http://localhost:6969/workouts/${obj.id}`
  return dispatch => {
      fetch(URL, {
        method: 'PATCH',
        headers: {
          'content-type':'application.json',
          'auth-token': token
        },
        body: JSON.stringify({
          warmup: obj.warmup,
          name: obj.name,
          description: obj.description,
          format: obj.format,
          coolDown: obj.coolDown
        })
      })
        .then(res=>res.json())
        .then(data=>{
          dispatch({
            type: 'EDIT_WORKOUT',
            workoutId: data.workout
          })
        })
      }
}

export const deleteWorkout = (workoutID,token) => {
  const URL = `http://localhost:6969/workouts/${workoutID}`
  return dispatch => {
      fetch(URL, {
        method: 'DELETE',
        headers: {
          'content-type':'application.json',
          'auth-token': token
        }
      })
        .then(res=>res.json())
        .then(data=>{
          dispatch({
            type: 'DELETE_WORKOUT',
            workoutId: data.id
          })
        })
      }
}

export const clearScores = () => {
  return {
    type: 'CLEAR_WORKOUTS'
  }
}
