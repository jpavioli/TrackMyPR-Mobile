import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "react-native-elements"

export default class HeaderContainer extends React.Component {

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
