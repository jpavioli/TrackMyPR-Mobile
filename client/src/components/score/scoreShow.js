import React from "react";
import {View, Text, StyleSheet, Dimensions, TouchableHighlight } from "react-native";
import {Card, ListItem, Button, Icon } from 'react-native-elements'
import { connect } from 'react-redux';

function ScoreShow(props) {
  return (
    <Card style={styles.card}>
      <Text style={styles.header}>{props.workout.name}</Text>
      <Text style={styles.description}>Score: {props.score.results}</Text>
      <Button onPress={()=>props.close()} title='Close' />
    </Card>
  )
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
    environment:state.environment
  }
}

export default connect(mstp)(ScoreShow)
