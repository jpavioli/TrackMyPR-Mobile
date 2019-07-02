export const fetchScores = (userID) => {
  const URL = `http://localhost:6969/scores/user/${userID}`
  return dispatch => {
      fetch(URL)
        .then(res=>res.json())
        .then(data=>{
          dispatch({
            type: 'FETCH_SCORES',
            scores: data.scores
          })
        })
      }
}

export const newScore = (obj,token) => {
  const URL = `http://localhost:6969/scores`
  return dispatch => {
      fetch(URL, {
        method: 'POST',
        headers: {
          'content-type':'application.json',
          'auth-token': token
        },
        body: JSON.stringify({
          workout:obj.workoutId,
          datePerformed: obj.datePerformed,
          location: obj.location,
          results: obj.results,
          weightUnits: obj.weightUnits,
          rx: obj.rx,
          modifications: obj.modifications,
          comments: obj.comments,
        })
      })
        .then(res=>res.json())
        .then(data=>{
          dispatch({
            type: 'ADD_SCORE',
            workout: data.score
          })
        })
      }
}

export const editScore = (obj,token) => {
  const URL = `http://localhost:6969/workouts/${obj.id}`
  return dispatch => {
      fetch(URL, {
        method: 'PATCH',
        headers: {
          'content-type':'application.json',
          'auth-token': token
        },
        body: JSON.stringify({
          datePerformed: obj.datePerformed,
          location: obj.location,
          results: obj.results,
          weightUnits: obj.weightUnits,
          rx: obj.rx,
          modifications: obj.modifications,
          comments: obj.comments,
        })
      })
        .then(res=>res.json())
        .then(data=>{
          dispatch({
            type: 'EDIT_SCORE',
            workoutId: data.score
          })
        })
      }
}

export const deleteScore = (scoreID,token) => {
  const URL = `http://localhost:6969/workouts/${scoreID}`
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
            workoutId: score.id
          })
        })
      }
}

export const clearScores = () => {
  return {
    type: 'CLEAR_SCORES'
  }
}
