import {Alert} from "react-native";

export const logIn = (obj) => {
  const URL = `http://localhost:6969/auth`
  return dispatch => {
      fetch(URL, {
        method: 'POST',
        headers: {
          'content-type':'application/json'
        },
        body: JSON.stringify({
          email: obj.email,
          password: obj.password
        })
      })
        .then(res=>res.json())
        .then(data=>{
          if (data.success){
            dispatch({
              type: 'LOG_IN',
              token: data.token,
              user: data.user
            })
          }
          else {
            Alert.alert('Error', data.message, [{text: 'OK', onPress: () => console.log('OK Pressed')}])
          }
        })
      }
}

export const newUser = (obj) => {
  const URL = `http://localhost:6969/users`
  return dispatch => {
      fetch(URL, {
        method: 'POST',
        headers: {
          'content-type':'application.json'
        },
        body: JSON.stringify({
          email: obj.email,
          password: obj.password,
          firstName: obj.firstName,
          lastName: obj.lastName,
          birthday: obj.birthday,
          city: obj.city,
          state: obj.state,
          country: obj.country,
          gender: obj.gender,
          height: obj.height,
          weight: obj.weight
        })
      })
        .then(res=>res.json())
        .then(data=>{
          if (data.success){
            dispatch({
              type: 'LOG_IN',
              token: data.token,
              user: data.user
            })
          }
          else {
            Alert.alert('Error', data.message, [{text: 'OK', onPress: () => console.log('OK Pressed')}])
          }
        })
      }

}

export const logOut = () => {
  return {
    type: 'LOG_OUT'
  }
}
