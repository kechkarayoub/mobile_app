import React from 'react';
import { StyleSheet, View, TextInput, Image, Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {get_contries_select_options} from "../../utils/countries_list";
class HKACountriesSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      current_language: props.current_language,
      icon_url: props.icon_url,
      placeholder: props.placeholder,
      test_id: props.test_id,
      value: props.value,
      disabled: props.disabled,
      countries_options: get_contries_select_options(props.current_language),
    }
  }
  static getDerivedStateFromProps(props, state) {
    var new_state = {};
    var return_new_state = false;
    if (props.current_language !== state.current_language) {
      new_state.current_language = props.current_language;
      return_new_state = true;
    }
    if (props.placeholder !== state.placeholder) {
      new_state.placeholder = props.placeholder;
      return_new_state = true;
    }
    if (props.value !== state.value) {
      new_state.value = props.value;
      return_new_state = true;
    }
    if (props.disabled !== state.disabled) {
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
      })
    }
  }
  handleChangeCountry = new_language => {
    if(this.props.onSelect){
      this.props.onSelect(value);
    }
    else{
      this.setState({value: value});
    }
  }
  setOpen = (open)=> {
    this.setState({
      open: open
    });
  }

  // setValue =(callback) => {
  // }

  setItems = (callback) => {
    this.setState(state => ({
      items: callback(state.items)
    }));
  }
  render() {
    const {current_language, icon_url, disabled, open, placeholder, countries_options, test_id, value} = this.state;
    return(
      <DropDownPicker
        open={open}
        value={value}
        items={countries_options}
        setOpen={this.setOpen}
        // setValue={this.setValue}
        onChangeValue={(value) => {
          this.handleChangeCountry(value);
        }}
        searchable={true}
        language={current_language}
        setItems={this.setItems}
        containerStyle={styles.containerStyle}
        dropDownContainerStyle={styles.dropDownContainerStyle}
        style={styles.style}
        selectedItemLabelStyle={styles.selectedItemLabelStyle}
        selectedItemContainerStyle={styles.selectedItemContainerStyle}
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
      borderColor: '#FFFFFF',
      borderRadius:30,
      zIndex: 30, // works on ios
      elevation: 30, // works on android
    },
    containerStyle: {
      borderColor: '#FFFFFF',
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      width:300,
      marginBottom:20,
      zIndex: 300, // works on ios
      elevation: 300, // works on android
    },
    dropDownContainerStyle: {
      borderColor: '#1fa1cf',
      zIndex: 300, // works on ios
      elevation: 300, // works on android
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
export default HKACountriesSelect;
