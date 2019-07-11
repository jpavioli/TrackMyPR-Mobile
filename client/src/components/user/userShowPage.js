import React from "react";
import { View, ScrollView, Text, StyleSheet, FlatList } from "react-native";
import {connect} from "react-redux"
import { Colors, Spacing, Typography, Buttons, Cards} from '../../styles/index'

import WorkoutCard from '../workout/workoutCard'

function Profile(props){

    return (
      <View style={styles.main}>
        <View style={{height:50, allignItems:'stretch',...Colors.backgroundColor}} />
        <Text style={styles.header} >{`${props.user.firstName} ${props.user.lastName}`}</Text>
        <Text style={styles.text} >{`${props.user.location.city}, ${props.user.location.state}`}</Text>
        <Text style={styles.text} >Workouts Logged: {props.scores.length}</Text>
        <Text style={styles.text} >Workouts Created: {props.workouts.length}</Text>
        {props.workouts.length > 0 ?
          <View>
            <Text style={styles.text} >My Most Popular Workouts:</Text>
            <FlatList
              data={props.workouts.length > 0 ? props.workouts.sort((a,b)=>b.scores.length - a.scores.length).slice(0,5) : null}
              renderItem={ workout => <WorkoutCard workout={workout.item} />}
              keyExtractor={w => w._id}
            />
          </View>
          : null }
      </View>
    );
}

const styles = StyleSheet.create({
  main: {
    ...Colors.background,
    ...Spacing.main,
    justifyContent:'flex-start'
  },
  header: {
    ...Colors.text,
    ...Spacing.mainHeader,
    ...Typography.mainHeader
  },
  text: {
    ...Spacing.input,
    ...Colors.text,
    ...Typography.sectionHead
  },
  multiline: {
    ...Colors.text,
    ...Spacing.textInput,
    height: Spacing.height*0.15
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
    user: state.user.user,
    workouts: state.workouts.myWorkouts,
    scores: state.score.myScores,
    environment: state.environment
  }
}

export default connect(mstp)(Profile)
