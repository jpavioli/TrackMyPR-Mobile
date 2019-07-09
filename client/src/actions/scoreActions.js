import {Alert} from "react-native";

export const fetchAllScores = () => {
  const URL = `http://localhost:6969/scores`
  return dispatch => {
      fetch(URL)
        .then(res=>res.json())
        .then(data=>{
          if (data.success) {
            dispatch({
              type: 'FETCH_ALL_SCORES',
              scores: data.scores
            })
          }
          else{
            Alert.alert('Error', data.message, [{text: 'OK', onPress: () => console.log('OK Pressed')}])
          }
        })
        .catch(console.log('Something went wrong - IN FETCH ALL SCORES'))
      }
}

export const fetchMyScores = (userID) => {
  const URL = `http://localhost:6969/scores/user/${userID}`
  return dispatch => {
      fetch(URL)
        .then(res=>res.json())
        .then(data=>{
          if (data.success){
            dispatch({
              type: 'FETCH_MY_SCORES',
              scores: data.scores
            })
          }
          else{
            Alert.alert('Error', data.message, [{text: 'OK', onPress: () => console.log('OK Pressed')}])
          }
        })
        .catch(console.log('Something went wrong - IN FETCH MY SCORES'))
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
          if (data.success){
            dispatch({
              type: 'ADD_SCORE',
              score: data.score
            })
          }
          else{
            Alert.alert('Error', data.message, [{text: 'OK', onPress: () => console.log('OK Pressed')}])
          }
        })
        .catch(console.log('Something went wrong - IN NEW SCORE'))
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
          if (data.success){
            dispatch({
              type: 'EDIT_SCORE',
              score: data.score
            })
          }
          else{
            Alert.alert('Error', data.message, [{text: 'OK', onPress: () => console.log('OK Pressed')}])
          }
        })
        .catch(console.log('Something went wrong - IN EDIT SCORE'))
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
          if (data.success){
            dispatch({
              type: 'DELETE_WORKOUT',
              workoutId: score.id
            })
          }
          else{
            Alert.alert('Error', data.message, [{text: 'OK', onPress: () => console.log('OK Pressed')}])
          }
        })
        .catch(console.log('Something went wrong - IN DELETE SCORE'))
      }
}

export const clearScores = () => {
  return {
    type: 'CLEAR_SCORES'
  }
}
