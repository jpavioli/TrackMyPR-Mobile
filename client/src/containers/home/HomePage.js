import React from "react";
import { View, Text } from "react-native";

export default class HomePage extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", color:'white' }}>
        <Text style={{color:'white'}} >Home Screen</Text>
      </View>
    );
  }
}
