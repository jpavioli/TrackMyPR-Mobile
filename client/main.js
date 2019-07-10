import React from 'react';
import { StyleSheet, View, Dimensions, Text} from 'react-native';
import { connect } from 'react-redux';
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import { adjustEnvironment } from './src/actions/environmentActions'

import WelcomeScreen from './src/containers/welcome/welcomeScreen'
import SignUp from './src/components/user/newUserForm'
import Routes from './src/routes'
import {Colors, Spacing, Typography, Buttons} from './src/styles/index'

class Main extends React.Component {

  componentDidMount() {
    this.props.adjustEnvironment(Dimensions.get('window'))
  }

  render() {
    return (
      <View style={styles.main}>
        {this.props.user.token !== 0 ?
          <View style={{flex:1,flexDirection:'column'}}>
            <Routes />
          </View>
          :
          <Welcome /> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    ...Colors.background,
    ...Spacing.main
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
