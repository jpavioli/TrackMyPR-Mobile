import React from "react";
import {View, Text, StyleSheet, Dimensions, TouchableHighlight } from "react-native";
import {Card, ListItem, Button, Icon } from 'react-native-elements'
import { connect } from 'react-redux';
import { Colors, Spacing, Typography, Buttons, Cards} from '../../styles/index'

function ScoreCard(props) {
  let workout = props.workouts.find(w => w._id === props.score.workout)
  if (workout){
    return (
      <TouchableHighlight
        onPress={()=>props.showScore(props.score,workout)}
        underlayColor='white'>
        <Card style={styles.card}>
          <Text style={styles.header}>{workout.name}</Text>
          <View style={styles.inline}>
            <Text style={styles.description}>Score: {props.score.results}</Text>
            {props.score.rx ? <Text style ={styles.att} >Rx</Text> : null}
          </View>
        </Card>
    </TouchableHighlight>
    )
  }
  else {return null}
}

const styles = StyleSheet.create({
  card: {
    ...Cards.card
  },
  header: {
    ...Colors.text,
    ...Typography.mainHeader,
    ...Spacing.mainHeader,
  },
  section:{
    ...Spacing.input,
    ...Colors.text,
    ...Typography.sectionHead
  },
  description: {
    ...Typography.text,
    ...Spacing.input,
  },
  att: {
    ...Typography.accent
  },
  inline: {
    ...Spacing.sideBySide,
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
