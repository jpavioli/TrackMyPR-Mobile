import React from "react";
import { View, Text, Button, TextInput } from "react-native";
import {connect} from "react-redux"
import {logIn} from '../../actions/userActions'
import SignUp from '../../components/user/newUserForm'

class LoginPage extends React.Component {

  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  signIn = () => {
    this.props.logIn(this.state)
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: 'black'}}>
        <Text style={{color:'white'}} >TrackMyPR</Text>
        <Text style={{color:'white'}} >Email</Text>
        <TextInput style={{height: 20, width:this.props.environment.width*0.8, borderColor:'gray', color:'white', borderWidth: 1}} autoCapitalize='none' onChangeText={(email) => this.setState({email})} value={this.state.email} />
        <Text style={{color:'white'}} >Password</Text>
        <TextInput style={{height: 20, width:this.props.environment.width*0.8, borderColor:'gray', color:'white', borderWidth: 1}} secureTextEntry={true} onChangeText={(password) => this.setState({password})} value={this.state.password} />
        <Button title='Log In' onPress={this.signIn} />
        <Button title='Sign Up' onPress={() => this.props.navigation.navigate('SignUp')} />
      </View>
    );
  }
}

const mstp = (state) => {
  return{
    environment: state.environment
  }
}

export default connect(mstp,{logIn})(LoginPage)
