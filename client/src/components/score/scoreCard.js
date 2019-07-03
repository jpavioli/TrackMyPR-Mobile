import React from "react";
import { View, Text } from "react-native";

export default function ScoreCard(props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", color:'white' }}>
      <Text style={{color:'white'}} >Workout: {props.workout.name} || Score: {props.results}</Text>
    </View>
  )
}
