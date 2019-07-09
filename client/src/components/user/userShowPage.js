import React from "react";
import { View, ScrollView, Text, StyleSheet, FlatList } from "react-native";
import {connect} from "react-redux"

import WorkoutCard from '../workout/workoutCard'

function Profile(props){

    return (
      <View style={styles.page}>
        <Text style={styles.header} >{`${props.user.firstName} ${props.user.lastName}`}</Text>
        <Text style={styles.att} >{`${props.user.city}, ${props.user.state}`}</Text>
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
  page: {
    flex: 1,
    padding: '5%',
    flexDirection: 'column',
    alignItems: "stretch",
    justifyContent: "center",
    color:'white',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color:'white'
  },
  text: {
    fontSize: 15,
    color:'white'
  },
  att: {
    fontSize: 15,
    fontStyle: 'italic',
    color:'white'
  },
});

const mstp = (state) => {
  return {
    user: state.user.user,
    workouts: state.workouts.myWorkouts,
    scores: state.score.myScores,
    environment: state.environment
  }
}

export default connect(mstp)(Profile)
