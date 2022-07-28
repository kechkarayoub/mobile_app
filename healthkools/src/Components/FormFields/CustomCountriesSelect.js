import React from 'react';
import { StyleSheet, View, TextInput, Image, Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {get_contries_select_options} from "../../utils/countries_list";
import {COLORS} from "../../variables/colors";
class CustomCountriesSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries_options: get_contries_select_options(props.current_language),
      current_language: props.current_language,
      disabled: props.disabled,
      icon_url: props.icon_url,
      placeholder: props.placeholder,
      open: false,
      test_id: props.test_id,
      value: props.value,
    }
  }
  static getDerivedStateFromProps(props, state) {
    var new_state = {};
    var return_new_state = false;
    if(props.current_language !== state.current_language) {
      new_state.current_language = props.current_language;
      return_new_state = true;
    }
    if(props.placeholder !== state.placeholder) {
      new_state.placeholder = props.placeholder;
      return_new_state = true;
    }
    if(props.value !== state.value) {
      new_state.value = props.value;
      return_new_state = true;
    }
    if(props.disabled !== state.disabled) {
      new_state.disabled = props.disabled;
      return_new_state = true;
    }
    return return_new_state ? new_state : null;
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.current_language !== this.state.current_language){
      this.setState({
        current_language: this.state.current_language,
        countries_options: get_contries_select_options(props.current_language),
      });
    }
  }
  handleChangeCountry = new_country => {
    if(this.props.onSelect){
      this.props.onSelect(new_country);
    }
    else{
      this.setState({value: new_country});
    }
  }
  setOpen = (open)=> {
    this.setState({
      open: open,
    });
  }

  // setValue =(callback) => {
  // }

  setItems = (callback) => {
    // Modify or add new items
    this.setState(state => ({
      items: callback(state.countries_options),
    }));
  }
  render() {
    const {current_language, icon_url, disabled, open, placeholder, countries_options, test_id, value} = this.state;
    return(
      <DropDownPicker
        containerStyle={styles.containerStyle}
        dropDownContainerStyle={styles.dropDownContainerStyle}
        items={countries_options}
        language={current_language}
        onChangeValue={(value) => {
          this.handleChangeCountry(value);
        }}
        open={open}
        searchable={true}
        selectedItemLabelStyle={styles.selectedItemLabelStyle}
        selectedItemContainerStyle={styles.selectedItemContainerStyle}
        setItems={this.setItems}
        setOpen={this.setOpen}
        style={styles.style}
        value={value}
        // setValue={this.setValue}
      />
    )
  }
}
const styles = StyleSheet.create({
    // iconStyle: {
    //   width: 36,
    //   height: 20,
    // },
    style: {
      elevation: 30, // works on android
      borderColor: '#FFFFFF',
      borderRadius:30,
      zIndex: 30, // works on ios
    },
    containerStyle: {
      backgroundColor: '#FFFFFF',
      borderColor: '#FFFFFF',
      borderBottomColor: '#F5FCFF',
      borderRadius: 30,
      elevation: 300, // works on android
      marginBottom: 20,
      width: 300,
      zIndex: 300, // works on ios
    },
    dropDownContainerStyle: {
      borderColor: COLORS.default_color,
      elevation: 300, // works on android
      zIndex: 300, // works on ios
    },
    selectedItemLabelStyle: {
      color: COLORS.default_color,
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
export default CustomCountriesSelect;
