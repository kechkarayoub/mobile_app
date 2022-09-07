import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import PhoneInput from "react-native-phone-number-input";
import PropTypes from 'prop-types';
import {get_local_number_from_international} from "../../utils";
import {PhoneNumberFormat, PhoneNumberUtil} from 'google-libphonenumber';
const phoneUtil = PhoneNumberUtil.getInstance();
class CustomPhoneNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_language: props.current_language,
      country_code: props.country_code,
      disabled: props.disabled,
      formatted_text: props.formatted_text,
      icon_url: props.icon_url,
      is_valid_phone_number: props.is_valid_phone_number,
      placeholder: props.placeholder,
      test_id: props.test_id,
      type_phone_number: props.type_phone_number,
      underlineColorAndroid: props.underlineColorAndroid,
      value: props.value,
    }
  }
  // static get propTypes() {
  //   return {
  //     current_language: PropTypes.string,
  //     country_code: PropTypes.string,
  //     disabled: PropTypes.boolean,
  //     is_valid_phone_number: PropTypes.boolean,
  //     formatted_text: PropTypes.string,
  //     icon_url: PropTypes.object,
  //     iconStyle: PropTypes.object,
  //     onChangeText: PropTypes.fun,
  //     placeholder: PropTypes.string,
  //     style: PropTypes.object,
  //     test_id: PropTypes.string,
  //     type_phone_number: PropTypes.string,
  //     underlineColorAndroid: PropTypes.string,
  //     value: PropTypes.string,
  //   };
  // }
  static getDerivedStateFromProps(props, state) {
    var new_state = {};
    var return_new_state = false;
    if (props.current_language !== state.current_language) {
      new_state.current_language = props.current_language;
      return_new_state = true;
    }
    if (props.value !== state.value) {
      new_state.value = (props.onChangeText ? props : state).value;
      new_state.formatted_text = (props.onChangeText ? props : state).formatted_text;
      return_new_state = true;
    }
    if (!new_state.value && !state.value && props.country_code !== state.country_code) {
      new_state.country_code = props.country_code;
      return_new_state = true;
    }
    if (props.disabled !== state.disabled) {
      new_state.disabled = props.disabled;
      return_new_state = true;
    }
    if (props.is_valid_phone_number !== state.is_valid_phone_number) {
      new_state.is_valid_phone_number = props.is_valid_phone_number;
      return_new_state = true;
    }
    if (props.placeholder !== state.placeholder) {
      new_state.placeholder = props.placeholder;
      return_new_state = true;
    }
    return return_new_state ? new_state : null;
  }
  render() {
    const {country_code, disabled, formatted_text, icon_url, is_valid_phone_number, placeholder, test_id, underlineColorAndroid, value} = this.state;
    return (
      <View style={styles.phoneNumberContainer}>
        <PhoneInput key={country_code}
          defaultCode={country_code}
          disabled={disabled}
          layout="second"
          onChangeText={(value) => {
            setTimeout(() => {
              if(this.props.onChangeText){
                this.props.onChangeText(value, this.state.formatted_text);
              }
              else{
                this.setState({value: value});
              }
              // console.log("value: ", value)
              // console.log("state_formatted_text: ", this.state.formatted_text)
              //console.log("valid: ", phoneUtil.isValidNumber(phoneUtil.parse(this.state.formatted_text)))
              //var pp = phoneUtil.parse(this.state.formatted_text);
              // console.log("getted_value: ", get_local_number_from_international(this.state.formatted_text))
            }, 25);
          }}
          onChangeFormattedText={(text) => {
            // console.log("formatted_text: ", text)
            setTimeout(() => {
              var value_ = this.state.value;
              if(value_ && value_.charAt(0) === '0'){
                var new_val = value_.replace("0", "");
                text = text.replace(value_, new_val);
              }
              this.setState({formatted_text: text});
              // console.log("new_formatted_text: ", text)
            }, 1);
          }}
          placeholder={placeholder}
          containerStyle={styles.phoneNumberInputContainer}
          textContainerStyle={styles.inputTextContainerStyle}
          textInputStyle={[styles.inputs, this.props.style || {}]}
          countryPickerButtonStyle={styles.countryPicker}
          codeTextStyle={styles.codeTextStyle}
          testID={test_id}
          value={value}
          underlineColorAndroid={underlineColorAndroid}
        />
        {icon_url &&
          <Image style={[styles.inputIcon, this.props.iconStyle]} source={icon_url}/>
        }
      </View>
    )
  }
}
const styles = StyleSheet.create({
  phoneNumberContainer: {
    alignItems:'center',
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#F5FCFF',
    borderBottomWidth: 0,
    borderRadius:30,
    display: 'flex',
    elevation: 5, // works on android
    flexDirection: 'row',
    height:45,
    marginBottom:20,
    shadowColor: "#808080",
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width:300,
  },
  phoneNumberInputContainer: {
    alignItems:'center',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    height:45,
    width:260,
    marginRight: 2,
  },
  inputTextContainerStyle: {
    backgroundColor: '#00ff00',
    borderBottomColor: '#FFFFFF',
    height:45,
    width: 10,
    padding: 0,
  },
  inputs:{
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#FFFFFF',
    height:45,
    padding: 0,
    marginLeft: -16,
    marginRight: -16,
    paddingLeft: 5,
  },
  inputIcon:{
    height:25,
    justifyContent: 'center',
    marginRight:15,
    width:20,
  },
  countryPicker:{
    height:30,
    width:70,
    paddingLeft: 15,
  },
  codeTextStyle: {
    padding: 0,
    marginRight: 0,
  },
});
export default CustomPhoneNumber;
