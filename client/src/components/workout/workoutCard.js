import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {Card, ListItem, Button, Icon } from 'react-native-elements'
import { Colors, Spacing, Typography, Buttons, Cards} from '../../styles/index'

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
