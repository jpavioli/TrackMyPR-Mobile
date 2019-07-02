import React from 'react';
import { StyleSheet, View, Dimensions, Text} from 'react-native';
import { connect } from 'react-redux';
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import { adjustEnvironment } from './src/actions/environmentActions'

import WelcomeScreen from './src/containers/welcome/welcomeScreen'
import SignUp from './src/containers/welcome/signUpScreen'
import Routes from './src/routes'

class Main extends React.Component {
  constructor(){
    super()
  }

  componentDidMount() {
    this.props.adjustEnvironment(Dimensions.get('window'))
  }

  render() {
    console.log(this.props.user)
    return (
      <View style={{backgroundColor:'black',flexDirection:'column',justifyContent:'center',height:this.props.environment.height,width:this.props.environment.width}}>
        {this.props.user.loggedIn ? <Routes /> : <Welcome /> }
      </View>
    );
  }
}

const routeConfigs = {
  Home: {
    screen: WelcomeScreen
  },
  SignUp: {
    screen: SignUp
  }
}

const drawerNavigatorConfigs ={
    initialRouteName: "Home"
  }

const Welcome = createAppContainer(createSwitchNavigator(routeConfigs,drawerNavigatorConfigs))

const mstp = (state) => {
  return {
      environment: state.environment,
      user: state.user
  }
}

export default connect(mstp, {adjustEnvironment})(Main)
