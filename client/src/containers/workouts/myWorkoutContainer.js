import React from "react";
import { View, ScrollView, Text, Button } from "react-native";
import { connect } from "react-redux"
import Workout from '../../components/workout/workoutCard'
import {fetchMyWorkouts} from '../../actions/workoutActions'

class myWorkoutContainer extends React.Component {

  componentDidMount() {
    this.props.fetchMyWorkouts(this.props.user.user._id)
  }

  render() {
    return (
      <View style={{flexContainer: 'column', padding:this.props.environment.width*0.05}}>
        <View>
          <Button title='Crate a New Workout' onPress={() => this.props.navigation.navigate('New Workout')} />
        </View>
        <ScrollView>
          {this.props.workouts.map(w=> <Workout key={w._id} workout={w} />)}
        </ScrollView>
      </View>
    );
  }
}

const mstp = (state) => {
  return {
    user: state.user,
    environment:state.environment,
    workouts: state.workouts.myWorkouts
  }
}

export default connect(mstp,{fetchMyWorkouts})(myWorkoutContainer)
