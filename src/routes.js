import React from "react";
import { View } from "react-native";
import HomePage from "./containers/home/HomePage";
import LoginPage from './containers/home/LoginPage';
import { createStackNavigator } from "react-navigation";

const Routes = createStackNavigator(
  {
    Login: {
      screen: LoginPage
    },
    Home: {
      screen: HomePage
    },
  },
  {
    initialRouteName: "Login",
    navigationOptions: {
      header: props => <Header {...props} />,
      headerTitleStyle: {
        backgroundColor: "transparent"
      },
      headerTintColor: "#fff"
    }
  }
);

export default Routes;
