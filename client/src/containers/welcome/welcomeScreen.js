import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import {connect} from "react-redux"
import {logIn} from '../../actions/userActions'
import SignUp from '../../components/user/newUserForm'
import { Colors, Spacing, Typography, Buttons} from '../../styles/index'

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
      <View style={styles.main}>
        <Text style={styles.header} >TrackMyPR</Text>
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
          placeholder = 'Enter Password...'
          textAlign='center'
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Button
          title='Log In'
          onPress={this.signIn}
          style={styles.button}
        />
        <Button
          title='Sign Up'
          onPress={() => this.props.navigation.navigate('SignUp')}
          style={styles.button}
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
  }
})

const mstp = (state) => {
  return{
    environment: state.environment
  }
}

export default connect(mstp,{logIn})(LoginPage)
