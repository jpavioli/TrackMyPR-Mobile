import React from 'react';
import { StyleSheet, View, Dimensions, Text} from 'react-native';
import { connect } from 'react-redux';
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import { adjustEnvironment } from './src/actions/environmentActions'
import { fetchAllWorkouts } from './src/actions/workoutActions'
import { fetchAllScores } from './src/actions/scoreActions'

import WelcomeScreen from './src/containers/welcome/welcomeScreen'
import SignUp from './src/components/user/newUserForm'
import Routes from './src/routes'
import Header from './src/containers/header/headerContainer'
import Footer from './src/containers/footer/footerContainer'

class Main extends React.Component {

  componentDidMount() {
    this.props.adjustEnvironment(Dimensions.get('window'))
    this.props.fetchAllWorkouts()
    this.props.fetchAllScores()
  }

  render() {
    return (
      <View style={{backgroundColor:'black',flexDirection:'column',justifyContent:'center',height:this.props.environment.height,width:this.props.environment.width}}>
        {this.props.user.token !== 0 ?
          <View style={{flex:1,flexDirection:'column'}}>
            <View style={{height: this.props.environment.height*0.15, backgroundColor:'#2eb7d1', justifyContent:'center', padding:this.props.environment.width*0.05}} >
              <Header />
            </View>
            <View style={{height: this.props.environment.height*0.75}} >
              <Routes />
            </View>
            <View style={{height: this.props.environment.height*0.1, backgroundColor:'#2eb7d1', justifyContent:'center'}} >
              <Footer />
            </View>
          </View>
          :
          <Welcome /> }
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

export default connect(mstp, {adjustEnvironment, fetchAllWorkouts, fetchAllScores})(Main)
