import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, I18nManager as RNI18nManager } from 'react-native';
import Home from './Components/Home';
import i18n, {t} from './i18n';
import { Updates } from 'expo';
import { Provider } from 'react-redux'
import Store from './Store/configureStore'
import { connect } from 'react-redux'
import {set, get} from './Store/locale';
import {get_current_languages} from './utils'
import { I18nextProvider } from 'react-i18next';
class AppInit extends Component{
  constructor(props) {
    super(props);
    this.state = {
      current_language: props.current_language,
    };
    get_current_languages(current_language => {
      const action = { type: "CHANGE_LANGUAGE", value: current_language }
      this.props.dispatch(action);
    });
  }
  componentDidMount() {
    this.handleInitLanguage();
  }
  static getDerivedStateFromProps(props, state) {
    var new_state = {};
    var return_new_state = false;
    if (props.current_language !== state.current_language) {
      new_state.current_language = props.current_language;
      return_new_state = true;
    }
    return return_new_state ? new_state : null;
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.current_language != this.state.current_language){
      this.handleInitLanguage();
    }
  }
  handleInitLanguage = () => {
      i18n.init(this.state.current_language)
          .then(() => {
              const RNDir = RNI18nManager.isRTL ? 'RTL' : 'LTR';
              // RN doesn't always correctly identify native
              // locale direction, so we force it here.
              if (i18n.dir !== RNDir) {
                  const isLocaleRTL = i18n.dir === 'RTL';
                  RNI18nManager.forceRTL(isLocaleRTL);
                  // RN won't set the layout direction if we
                  // don't restart the app's JavaScript.
                  // Updates.reloadFromCache();
              }
              i18n.services.pluralResolver.addRule('pl', {
                numbers: [1, 2, 3],
                plurals: function (n) {
                  return Number(
                    n === 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2
                  );
                },
              });
              this.setState({ isI18nInitialized: true });
          })
          .catch((error) => console.warn(error));
  }
  render(){
    return (
      <I18nextProvider i18n={i18n}>
        <View style={styles.container}>
          <Home t={t}/>
        </View>
      </I18nextProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
const mapStateToProps = (state) => {
  return {
    current_language: state.current_language
  }
}
export default connect(mapStateToProps)(AppInit);
