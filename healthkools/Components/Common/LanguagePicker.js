import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux'

import {set, get} from '../../Store/locale';
import i18n, {t} from '../../i18n';
import {supported_languages} from '../../config/global';

class LanguagePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
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
    if(!t("Arabic")){
      setTimeout(() => {
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
        };
        this.setState({current_language: this.state.current_language});
      }, 10);
    }
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
    if(prevState.current_language !== this.state.current_language){

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
  }
  handleChangeLanguage = new_language => {
    if(new_language !== this.props.current_language){
      set("currentlanguage", new_language);
      const action = { type: "CHANGE_LANGUAGE", value: new_language };
      this.props.dispatch(action);
    }
  }
  setOpen = (open)=> {
    this.setState({
      open: open
    });
  }

  setValue =(callback) => {
    this.handleChangeLanguage(callback());
  }

  setItems = (callback) => {
    this.setState(state => ({
      items: callback(state.items)
    }));
  }
  render() {
    const { open, value, items } = this.state;
    return(
      <DropDownPicker
      key={this.state.current_language}
        open={open}
        value={value}
        items={supported_languages.map(sl => {
           return { label: this.languages_data[sl].name, value: sl };
         })}
        setOpen={this.setOpen}
        setValue={this.setValue}
        setItems={this.setItems}
      />
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
    current_language: state.current_language,
  }
}
export default connect(mapStateToProps)(LanguagePicker);
