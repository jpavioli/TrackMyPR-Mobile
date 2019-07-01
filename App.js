import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import rootReducer from './client/src/reducers/root'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import HeaderContainer from './client/src/containers/header/headerContainer'
import FooterContainer from './client/src/containers/footer/footerContainer'
import Routes from './client/src/routes'

let store = createStore(rootReducer,applyMiddleware(thunk))

export default function App() {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <HeaderContainer />
      </View>
      <View style={styles.container}>
        <Text style={{color: 'white'}}>TEST</Text>
        <Routes />
      </View>
      <View style={styles.footer}>
        <FooterContainer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  header: {
    paddingTop:40,
    paddingLeft:20,
    height: 120,
    backgroundColor: 'steelblue'
  },
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'steelblue',
    height: 80,
  }

});
