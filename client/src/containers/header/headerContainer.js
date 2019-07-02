import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "react-native-elements"

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
      <View style={styles.main}>
        <Icon name='menu' iconStyle={styles.icon} iconSize='30'/>
        <Icon name='account-circle' iconStyle={styles.icon} iconSize='40'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})
