import React from "react";
import { View, Text } from "react-native";

export default class Profile extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", color:'white' }}>
        <Text style={{color:'white'}} >Profile Screen</Text>
      </View>
    );
  }
}
