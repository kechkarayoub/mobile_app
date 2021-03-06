import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { StyleSheet, Image } from 'react-native';
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
      items: [
        {
          value: "ar",
          label: t("Arabic"),
          icon: () => <Image source={require('../../../assets/flags/flag-ar-16.png')} style={styles.iconStyle} />,
        },
        {
          value: "en",
          label: t("English"),
          icon: () => <Image source={require('../../../assets/flags/flag-en-16.png')} style={styles.iconStyle} />,
        },
        {
          value: "fr",
          label: t("French"),
          icon: () => <Image source={require('../../../assets/flags/flag-fr-16.png')} style={styles.iconStyle} />,
        },
      ],
    };
    if(!t("Arabic")){
      setTimeout(() => {
        this.setState({
          items: this.state.items.map(item => {
            if(item.value === "ar"){
              item.label = t("Arabic");
            }
            if(item.value === "en"){
              item.label = t("English");
            }
            if(item.value === "fr"){
              item.label = t("French");
            }
            return item;
          }),
        });
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
        this.setState({
          items: this.state.items.map(item => {
            if(item.value === "ar"){
              item.label = t("Arabic");
            }
            if(item.value === "en"){
              item.label = t("English");
            }
            if(item.value === "fr"){
              item.label = t("French");
            }
            return item;
          }),
        });
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
    const { open, current_language, items } = this.state;
    return(
      <DropDownPicker
        open={open}
        value={current_language}
        items={items}
        setOpen={this.setOpen}
        setValue={this.setValue}
        setItems={this.setItems}
        dropDownContainerStyle={styles.dropDownContainerStyle}
        style={styles.style}
        selectedItemLabelStyle={styles.selectedItemLabelStyle}
        selectedItemContainerStyle={styles.selectedItemContainerStyle}
      />
    )
  }
}
const styles = StyleSheet.create({
    iconStyle: {
      width: 36,
      height: 20,
    },
    style: {
      borderColor: 'transparent',
      borderRadius: 0,
      borderBottomColor: '#1fa1cf'
    },
    dropDownContainerStyle: {
      borderColor: '#1fa1cf',
    },
    selectedItemLabelStyle: {
      color: '#1fa1cf',
      fontWeight: "bold",
    },
    selectedItemContainerStyle: {
    },
});
const mapStateToProps = (state) => {
  return {
    current_language: state.current_language,
  }
}
export default connect(mapStateToProps)(LanguagePicker);
