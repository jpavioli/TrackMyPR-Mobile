import React from "react";
import { View, Text } from "react-native";

export default class FooterContainer extends React.Component {

  render() {
    return (
      <View>
        <Text style={{justifyContent: "center", color:'white', fontSize: 30, textShadowRadius:3}}>Add Workout</Text>
      </View>
    );
  }
}
