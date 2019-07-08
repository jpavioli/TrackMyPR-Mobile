import React from "react";
import { View } from "react-native";
import HomePage from "./containers/home/HomePage";
import Workouts from "./containers/workouts/workoutContainer"
import MyWorkouts from "./containers/workouts/myWorkoutContainer"
import NewWorkout from "./components/workout/newWorkoutForm"
import Scores from "./containers/scores/scoresContainer"
import Profile from './containers/profile/Profile'
import { createDrawerNavigator, createAppContainer } from "react-navigation";

const routeConfigs = {
  Home: {
    screen: HomePage
  },
  'All Workouts': {
    screen: Workouts
  },
  'My Workouts': {
    screen: MyWorkouts
  },
  'New Workout': {
    screen: NewWorkout
  },
  Profile: {
    screen: Profile
  }
}

const drawerNavigatorConfigs ={
    initialRouteName: "Home",
    unmountInactiveRoutes: true
  }

const Routes = createDrawerNavigator(routeConfigs,drawerNavigatorConfigs)

export default createAppContainer(Routes);
