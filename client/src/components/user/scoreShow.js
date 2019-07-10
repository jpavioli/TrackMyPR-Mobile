import React from "react";
import {View, Text, StyleSheet, Dimensions, TouchableHighlight } from "react-native";
import {Card, ListItem, Button, Icon } from 'react-native-elements'
import { connect } from 'react-redux';
import { Colors, Spacing, Typography, Buttons, Cards} from '../../styles/index'

function ScoreShow(props) {
  return (
    <Card style={styles.card}>
      <Text style={styles.header}>{props.workout.name}</Text>
      {props.workout.warmup?
        <View>
          <Text style={styles.section} textAlign = 'left'>
            Warmup:
          </Text>
          <Text style={styles.description}>{props.workout.warmup}</Text>
        </View>
      :null}
      {props.workout.warmup?
        <View>
          <Text style={styles.section} textAlign = 'left'>
            Description:
          </Text>
          <Text style={styles.description}>{props.workout.description}</Text>
        </View>
      :null}
      {props.workout.coolDown?
        <View>
          <Text style={styles.section} textAlign = 'left'>
            Cool Down:
          </Text>
          <Text style={styles.description}>{props.workout.coolDown}</Text>
        </View>
      :null}
      <View>
        <Text style={styles.section} textAlign = 'left'>
          Results:
        </Text>
        <Text style={styles.description}>{props.score.results}</Text>
      </View>
      <View style={styles.inline}>
        <Button
          style={{width:Spacing.textInput.width/2,padding:20}}
          onPress={()=>props.delete(props.score._id)}
          title='Delete'
        />
        <Button
          style={{width:Spacing.textInput.width/2,padding:20}}
          onPress={()=>props.close()}
          title='Close'
        />
      </View>

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

const mstp = (state) => {
  return {
    user: state.user,
    environment:state.environment
  }
}

export default connect(mstp)(ScoreShow)
