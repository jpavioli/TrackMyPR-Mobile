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
            Alert.alert('Welcome to Track My PR!', "Swipe Right to get Started!", [{text: 'OK', onPress: () => console.log('OK Pressed')}])
          }
        })
      }
}

export const newScore = (obj,token) => {
  const URL = `http://localhost:6969/scores`
  return dispatch => {
      fetch(URL, {
        method: 'POST',
        headers: {
          'content-type':'application/json',
          'auth-token': token
        },
        body: JSON.stringify({
          workout:obj.workout,
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
      }
}

export const editScore = (obj,token) => {
  const URL = `http://localhost:6969/workouts/${obj.id}`
  return dispatch => {
      fetch(URL, {
        method: 'PATCH',
        headers: {
          'content-type':'application/json',
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
      }
}

export const deleteScore = (scoreID,token) => {
  const URL = `http://localhost:6969/scores/${scoreID}`
  return dispatch => {
      fetch(URL, {
        method: 'DELETE',
        headers: {
          'content-type':'application/json',
          'auth-token': token
        }
      })
        .then(res=>res.json())
        .then(data=>{
          if (data.success){
            dispatch({
              type: 'DELETE_WORKOUT',
              scoreId: data.id
            })
          }
          else{
            Alert.alert('Error', data.message, [{text: 'OK', onPress: () => console.log('OK Pressed')}])
          }
        })
      }
}

export const clearScores = () => {
  return {
    type: 'CLEAR_SCORES'
  }
}
