import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, I18nManager as RNI18nManager } from 'react-native';
import Home from './Components/Home';
import { Updates } from 'expo';
import { Provider } from 'react-redux'
import Store from './Store/configureStore'
import AppInit from './AppInit'
import { connect } from 'react-redux'
import {set, get} from './Store/locale';
class App extends Component{
  constructor(props) {
    super(props);
    this.state = { isI18nInitialized: false };
  }
  componentDidMount() {
  }
  render(){
    return (
      <Provider store={Store}>
          <AppInit/>
      </Provider>
    );
  }
}


export default App;
