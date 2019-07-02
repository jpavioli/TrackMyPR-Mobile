import React from "react";
import { View } from "react-native";
import HomePage from "./containers/home/HomePage";
import LoginPage from './containers/login/LoginPage';
import { createDrawerNavigator, createAppContainer } from "react-navigation";

const routeConfigs = {
  Login: {
    screen: LoginPage
  },
  Home: {
    screen: HomePage
  }
}

const drawerNavigatorConfigs ={
    initialRouteName: "Login",
    unmountInactiveRoutes: true
  }

const Routes = createDrawerNavigator(routeConfigs,drawerNavigatorConfigs)

export default createAppContainer(Routes);
