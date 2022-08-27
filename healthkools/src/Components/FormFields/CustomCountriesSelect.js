import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {get_contries_select_options} from "../../utils/countries_list";
import PropTypes from 'prop-types';
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
      type_select: props.type_select,
      test_id: props.test_id,
      value: props.value,
    }
  }
  // static get propTypes() {
  //   return {
  //     current_language: PropTypes.string,
  //     disabled: PropTypes.string,
  //     icon_url: PropTypes.object,
  //     iconStyle: PropTypes.object,
  //     onSelect: PropTypes.fun,
  //     placeholder: PropTypes.string,
  //     test_id: PropTypes.string,
  //     type_select: PropTypes.string,
  //     value: PropTypes.string,
  //   };
  // }
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
      new_state.value = (props.onSelect ? props : state).value;
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
        countries_options: get_contries_select_options(this.state.current_language),
      });
    }
  }
  setOpen = (open)=> {
    this.setState({
      open: open,
    });
  }

  setValue =(callback) => {
    var new_val = callback()
    if(this.props.onSelect){
      this.props.onSelect(new_val);
    }
    else{
      this.setState({value: new_val}, () => console.log(this.state.value));
    }
  }
  render() {
    const {current_language, icon_url, disabled, open, placeholder,
      countries_options, test_id, value} = this.state;
    return(
      <View style={[styles.selectContainer]}>
        <DropDownPicker
          containerStyle={[styles.containerStyle]}
          dropDownContainerStyle={styles.dropDownContainerStyle}
          items={countries_options}
          language={current_language}
          listMode="MODAL"
          open={open}
          disabled={disabled}
          testID={test_id}
          searchable={true}
          placeholder={placeholder}
          placeholderStyle={styles.placeholder}
          selectedItemLabelStyle={styles.selectedItemLabelStyle}
          selectedItemContainerStyle={styles.selectedItemContainerStyle}
          setOpen={this.setOpen}
          style={styles.style}
          value={value}
          setValue={this.setValue}
        />
        <Image style={[styles.inputIcon, this.props.iconStyle]} source={icon_url}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    // iconStyle: {
    //   width: 36,
    //   height: 20,
    // },
    selectContainer: {
      alignItems:'center',
      backgroundColor: '#FFFFFF',
      borderRadius: 30,
      height: 50,
      marginBottom: 20,
      display: 'flex',
      flexDirection: 'row',
      width:300,
      justifyContent: 'space-between',
      elevation: 300, // works on android
      zIndex: 300, // works on ios
    },
    style: {
      elevation: 30, // works on android
      borderColor: '#FFFFFF',
      borderRadius:30,
      zIndex: 30, // works on ios
      shadowOffset:{  width: 0,  height: 0,  },
      shadowColor: 'transparent',
      shadowOpacity: 0,
    },
    containerStyle: {
      backgroundColor: '#FFFFFF',
      borderColor: '#FFFFFF',
      borderBottomColor: '#F5FCFF',
      borderRadius: 30,
      elevation: 300, // works on android
      marginRight: 0,
      zIndex: 300, // works on ios
      width: 255,
      shadowOffset:{  width: 0,  height: 0,  },
      shadowColor: 'transparent',
      shadowOpacity: 0,
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
    inputIcon:{
      height:30,
      justifyContent: 'center',
      marginRight:15,
      width:30,
    },
    placeholder: {
      color: "grey",
      opacity: 0.8,
    },
});
export default CustomCountriesSelect;
