import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, I18nManager as RNI18nManager } from 'react-native';
import Home from './components/home';
import i18n from './i18n';
import { Updates } from 'expo';
export default class App extends Component{
  state = { isI18nInitialized: false };
  componentDidMount() {
      // i18n.init()
      //     .then(() => {
      //         const RNDir = RNI18nManager.isRTL ? 'RTL' : 'LTR';
      //         // RN doesn't always correctly identify native
      //         // locale direction, so we force it here.
      //         if (i18n.dir !== RNDir) {
      //             const isLocaleRTL = i18n.dir === 'RTL';
      //             RNI18nManager.forceRTL(isLocaleRTL);
      //             // RN won't set the layout direction if we
      //             // don't restart the app's JavaScript.
      //             Updates.reloadFromCache();
      //         }
      //         this.setState({ isI18nInitialized: true });
      //     })
      //     .catch((error) => console.warn(error));
  }
  render(){
    return (
      <View style={styles.container}>
        <Home t={str => str}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
