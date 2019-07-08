import React from "react";
import {View, Text, StyleSheet, Dimensions, TouchableHighlight } from "react-native";
import {Card, ListItem, Button, Icon } from 'react-native-elements'
import { connect } from 'react-redux';

function ScoreCard(props) {
  let workout = props.workouts.find(w => w._id === props.score.workout)
  if (workout){
    return (
      <TouchableHighlight onPress={()=>props.showScore(props.score,workout)} underlayColor='white'>
        <Card style={styles.card}>
          <Text style={styles.header}>{workout.name}</Text>
          <Text style={styles.description}>Score: {props.score.results}</Text>
        </Card>
    </TouchableHighlight>
    )
  }
  else {return null}
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 15
  },
  att: {
    fontSize: 10,
    fontStyle: 'italic'
  },
});

const mstp = (state) => {
  return {
    user: state.user,
    environment:state.environment,
    workouts: state.workouts.workouts,
    scores: state.score.scores
  }
}

export default connect(mstp)(ScoreCard)
