import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {Card, ListItem, Button, Icon } from 'react-native-elements'

export default function WorkoutCard(props) {
  return (
    <Card style={styles.card}>
      <Text style={styles.header} >{props.workout.name}</Text>
      <Text style={styles.description} >{props.workout.description}</Text>
      <Text style={styles.att} >Times Attempted: {props.workout.scores.length}</Text>
      {props.editWorkout ?
        <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
          <Button
            style={{width:100}}
            onPress={() => props.editWorkout(props.workout)}
            title='Edit'
          />
          <Button
            style={{width:100}}
            onPress={() => props.deleteWorkout(props.workout)}
            title='Delete'
          />
        </View>
        : null}
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
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
