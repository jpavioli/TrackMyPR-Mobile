import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import rootReducer from './client/src/reducers/root';
import Main from './client/main';

const store = createStore(rootReducer,applyMiddleware(thunk))

export default class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
};
