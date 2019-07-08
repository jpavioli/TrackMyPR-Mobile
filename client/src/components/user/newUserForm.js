import React from "react";
import { View, Text, Button, TextInput, Picker, Dimensions} from "react-native";
import {connect} from "react-redux"

import {newUser} from '../../actions/userActions'

class SignUp extends React.Component {

  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      birthday: '',
      city: '',
      state: '',
      country: '',
      gender: '',
      height: '',
      weight: ''
    }
  }

  SignUp = () => {
    this.props.newUser(this.state)
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{color:'white'}} >SIGNUP Screen</Text>
        <Text style={{color:'white'}} >Email</Text>
        <TextInput style={{height: 20, borderColor:'gray', borderWidth: 1,width:this.props.environment.width*0.8,color:'white'}} onChangeText={(email) => this.setState({email})} value={this.state.email} />
        <Text style={{color:'white'}} >Password</Text>
        <TextInput style={{height: 20, borderColor:'gray', borderWidth: 1,width:this.props.environment.width*0.8,color:'white'}} onChangeText={(password) => this.setState({password})} value={this.state.password} />
        <Text style={{color:'white'}} >First Name</Text>
        <TextInput style={{height: 20, borderColor:'gray', borderWidth: 1,width:this.props.environment.width*0.8,color:'white'}} onChangeText={(firstName) => this.setState({firstName})} value={this.state.firstName} />
        <Text style={{color:'white'}} >Last Name</Text>
        <TextInput style={{height: 20, borderColor:'gray', borderWidth: 1,width:this.props.environment.width*0.8,color:'white'}} onChangeText={(lastName) => this.setState({lastName})} value={this.state.lastName} />
        <Text style={{color:'white'}} >Birthday</Text>
        <TextInput style={{height: 20, borderColor:'gray', borderWidth: 1,width:this.props.environment.width*0.8,color:'white'}} onChangeText={(birthday) => this.setState({birthday})} value={this.state.birthday} />
        <Text style={{color:'white'}} >City</Text>
        <TextInput style={{height: 20, borderColor:'gray', borderWidth: 1,width:this.props.environment.width*0.8,color:'white'}} onChangeText={(city) => this.setState({city})} value={this.state.city} />
        <Text style={{color:'white'}} >State</Text>
        <TextInput style={{height: 20, borderColor:'gray', borderWidth: 1,width:this.props.environment.width*0.8,color:'white'}} onChangeText={(state) => this.setState({state})} value={this.state.state} />
        <Text style={{color:'white'}} >Country</Text>
        <TextInput style={{height: 20, borderColor:'gray', borderWidth: 1, width:this.props.environment.width*0.8,color:'white'}} onChangeText={(contry) => this.setState({country})} value={this.state.country} />
        <Text style={{color:'white'}} >Gender</Text>
        <View style={{flexDirection:'row'}}>
          <Button flex={1} title='Male' onPress={()=>this.setState({gender:'Male'})} color={this.state.gender === 'Male' ? '#841584' : 'white'} />
          <Button flex={2} title='Female' onPress={()=>this.setState({gender:'Female'})} color={this.state.gender === 'Female' ? '#841584' : 'white'} />
        </View>
        <Text style={{color:'white'}} >Height</Text>
        <TextInput style={{height: 20, borderColor:'gray', borderWidth: 1,width:this.props.environment.width*0.8,color:'white'}} onChangeText={(height) => this.setState({height})} value={this.state.height} />
        <Text style={{color:'white'}} >Weight</Text>
        <TextInput style={{height: 20, borderColor:'gray', borderWidth: 1,width:this.props.environment.width*0.8,color:'white'}} onChangeText={(weight) => this.setState({weight})} value={this.state.weight} />
        <Button title='Sign Up' onPress={() => this.SignUp(this.state)} />
        <Button title='Go Back' onPress={() => this.props.navigation.navigate('Home')} />
      </View>
    );
  }
}

const mstp = (state) => {
  return {
    environment: state.environment
  }
}

export default connect(mstp,{newUser})(SignUp)
