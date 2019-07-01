import React from "react";
import { View, Text } from "react-native";

export default class HeaderContainer extends React.Component {

  currentDate = () => {
    let today = new Date;
    let dd = today.getDate()
    let mm = today.getMonth()+1
    if (dd<10) {dd='0'+dd}
    return (mm+'/'+dd)
  }

  render() {
    return (
      <View>
        <Text style={{justifyContent: "flex-start", color:'white', fontSize: 30, textShadowRadius:3}}>{this.currentDate()}</Text>
      </View>
    );
  }
}
