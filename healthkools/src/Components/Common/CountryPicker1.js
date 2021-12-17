import React from 'react';
import CountryPicker from 'react-native-country-picker-modal'
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux'

import i18n, {t} from '../../i18n';
import {supported_languages} from '../../config/global';

class LanguagePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_language: props.current_language,
    };
    this.languages_data = {
      "ar": {
        name: t("Arabic"),
      },
      "en": {
        name: t("English"),
      },
      "fr": {
        name: t("French"),
      },
    }
  }
  handleChangeLanguage = new_language => {
    if(new_language !== this.props.current_language){
      set("currentlanguage", new_language);
      const action = { type: "CHANGE_LANGUAGE", value: new_language };
      this.props.dispatch(action);
    }
  }
  render() {
    return(
      <CountryPicker />
     // <RNPickerSelect
     //      onValueChange={(value) => this.handleChangeLanguage(value)}
     //      items={supported_languages.map(sl => {
     //        return { label: this.languages_data[sl], value: sl };
     //      })}
     //      value={this.state.current_language}
     //      disabled={false}
     //  />
    )
  }
}
const styles = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: '#1fa1cf',
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginButton: {
      backgroundColor: "#00b5ec",
      shadowColor: "#808080",
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.50,
      shadowRadius: 12.35,
      elevation: 19,
    },
    background: {
      top: 25,
      position: 'absolute',
      width: '100%',
      height: '100%',
      opacity: 0.2
    },
});
const mapStateToProps = (state) => {
  return {
    current_language: state.current_language
  }
}
export default connect(mapStateToProps)(LanguagePicker);
