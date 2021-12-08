import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, I18nManager as RNI18nManager } from 'react-native';
import Home from './Components/Home';
import i18n from './i18n';
import { Updates } from 'expo';
import { Provider } from 'react-redux'
import Store from './Store/configureStore'
import { connect } from 'react-redux'
import {set, get} from './Store/locale';
import {get_current_languages} from './utils'
class AppInit extends Component{
  constructor(props) {
    super(props);
    get_current_languages(current_language => {
      const action = { type: "CHANGE_LANGUAGE", value: current_language }
      this.props.dispatch(action);
    });
  }
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
const mapStateToProps = (state) => {
  return {}
}
export default connect(mapStateToProps)(AppInit);
