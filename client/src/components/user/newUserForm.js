import React from "react";
import { View, Text, Button, TextInput, Picker, Dimensions, StyleSheet} from "react-native";
import {connect} from "react-redux"
import { Colors, Spacing, Typography, Buttons} from '../../styles/index'

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
      <View style={styles.main}>
        <Text style={styles.header} >Create an Account!</Text>
        <Text style={styles.inputText} >Email</Text>
        <TextInput
          style={styles.textInput}
          autoCapitalize='none'
          textAlign='center'
          placeholder = 'Enter Email...'
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
      <Text style={styles.inputText} >Password</Text>
        <TextInput
          style={styles.textInput}
          textAlign='center'
          placeholder = 'Enter Password...'
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
      <Text style={styles.inputText} >Name</Text>
        <View style={styles.inline}>
          <TextInput
            style={{...styles.textInput,width:styles.textInput.width/2}}
            textAlign='center'
            placeholder = 'First Name'
            onChangeText={(firstName) => this.setState({firstName})}
            value={this.state.firstName}
          />
          <TextInput
            style={{...styles.textInput,width:styles.textInput.width/2}}
            textAlign='center'
            placeholder = 'Last Name'
            onChangeText={(lastName) => this.setState({lastName})}
            value={this.state.lastName}
          />
        </View>
        <Text style={styles.inputText} >Birthday</Text>
        <TextInput
          style={styles.textInput}
          textAlign = 'center'
          placeholder = 'Birthday'
          onChangeText={(birthday) => this.setState({birthday})}
          value={this.state.birthday}
        />
        <Text style={styles.inputText} >Hometown</Text>
          <View style={styles.inline}>
            <TextInput
              style={{...styles.textInput,width:styles.textInput.width/3}}
              textAlign = 'center'
              placeholder = 'City'
              onChangeText={(city) => this.setState({city})}
              value={this.state.city}
            />
          <TextInput
            style={{...styles.textInput,width:styles.textInput.width/6}}
            textAlign = 'center'
            placeholder = 'ST'
            onChangeText={(state) => this.setState({state})}
            value={this.state.state}
          />
          <TextInput
            style={{...styles.textInput,width:styles.textInput.width/6}}
            textAlign = 'center'
            placeholder = 'USA'
            onChangeText={(country) => this.setState({country})}
            value={this.state.country}
          />
          </View>
        <Text style={styles.inputText} >Gender</Text>
        <View style={styles.inline}>
          <Button
            flex={1}
            title='Male'
            onPress={()=>this.setState({gender:'Male'})}
            color={this.state.gender === 'Male' ? '#841584' : 'white'}
          />
          <Button
            flex={2}
            title='Female'
            onPress={()=>this.setState({gender:'Female'})}
            color={this.state.gender === 'Female' ? '#841584' : 'white'}
          />
        </View>
        <Text style={styles.inputText} >Height</Text>
        <TextInput
          style={styles.textInput}
          textAlign = 'center'
          placeholder = 'Enter Height'
          onChangeText={(height) => this.setState({height})}
          value={this.state.height}
        />
      <Text style={styles.inputText} >Weight</Text>
        <TextInput
          style={styles.textInput}
          textAlign = 'center'
          placeholder = 'Enter Weight'
          onChangeText={(weight) => this.setState({weight})}
          value={this.state.weight} />
        <Button
          title='Sign Up'
          onPress={() => this.SignUp(this.state)}
        />
        <Button
          title='Go Back'
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    ...Colors.background,
    ...Spacing.centeredMain
  },
  header: {
    ...Colors.text,
    ...Spacing.mainHeader,
    ...Typography.mainHeader
  },
  inputText: {
    ...Spacing.input,
    ...Colors.text,
    ...Typography.sectionHead
  },
  textInput: {
    ...Colors.text,
    ...Spacing.textInput
  },
  button: {
    ...Buttons.button
  },
  inline: {
    ...Spacing.sideBySide
  }
})

const mstp = (state) => {
  return {
    environment: state.environment
  }
}

export default connect(mstp,{newUser})(SignUp)
