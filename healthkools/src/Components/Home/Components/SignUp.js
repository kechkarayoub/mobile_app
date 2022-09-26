import React from 'react';
import { ScrollView, StyleSheet, View, Alert, ImageBackground, } from 'react-native';
import CustomInputText from '../../FormFields/CustomInputText';
import CustomTextArea from '../../FormFields/CustomTextArea';
import CustomPhoneNumber from '../../FormFields/CustomPhoneNumber';
import CustomCountriesSelect from '../../FormFields/CustomCountriesSelect';
import CustomTouchableOpacity from '../../FormFields/CustomTouchableOpacity';
import {get_contry_by_code} from "../../../utils/countries_list";
// import {set_locale, t} from '../../../i18n'
import { connect } from 'react-redux'
import {t} from '../../../i18n';
import PropTypes from 'prop-types';
import moment from 'moment';
import {COLORS} from "../../../variables/colors";
import {icons, logos} from "../../../_ressources";
import {PhoneNumberFormat, PhoneNumberUtil} from 'google-libphonenumber';
const phoneUtil = PhoneNumberUtil.getInstance();
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      birthday: moment().add(-30, "years").toDate(),
      country_code: "",
      country_phone_code: "",
      current_language: props.current_language,
      country_name: "",
      email: "",
      error_messages: {},
      first_name: "",
      gender: "",
      invalid_messages: {},
      is_valid_phone_number: false,
      last_name: "",
      password: "",
      password_sign_in: "",
      password_confirmation: "",
      phone_number: "",
      formatted_phone_number: "",
      username: "",
      valid_messages: {},
    }
    this.geo_info_api_done = true;
    if(!t("Arabic")){
      // Initialize t translation function) if it is not initistialised
      setTimeout(() => {
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
  // static get propTypes() {
  //   return {
  //     birthday: PropTypes.date,
  //     current_language: PropTypes.string,
  //     error_messages: PropTypes.object,
  //     gender: PropTypes.string,
  //     invalid_messages: PropTypes.object,
  //     is_valid_phone_number: PropTypes.boolean,
  //     navigation: PropTypes.object,
  //     phone_number: PropTypes.string,
  //     formatted_phone_number: PropTypes.string,
  //   };
  // }
  componentDidUpdate(prevProps, prevState){
    if(prevState.current_language !== this.state.current_language){
      this.setState({current_language: this.state.current_languag})
    }
  }
  onClickListener = (viewId) => {
    // if("restore_password" == viewId){
    //   set_locale("ar");
    //   current_language = "ar";
    // }
    // else{
    //   set_locale("fr");
    //   current_language = "fr";
    // }
    // this.setState({"current_language": current_language})
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  handleRegister = () => {
    var {formatted_phone_number, phone_number} = this.state;
    var phone_number_valid = false;
    if(formatted_phone_number){
      try {phone_number_valid = phoneUtil.isValidNumber(phoneUtil.parse(formatted_phone_number));}catch (error){}
    }
  }

  render() {
    const {address, country_code, country_phone_code, current_language, email, first_name,
      last_name, password, password_confirmation, phone_number, formatted_phone_number,
      username, is_valid_phone_number} = this.state;

    return (
        <View style={styles.body}>
          <ImageBackground source={logos.logo} style={styles.background}/>
          <ScrollView contentContainerStyle={styles.scrollView}>
              <CustomInputText placeholder={t("First name")} underlineColorAndroid='transparent'
                onChangeText={first_name => this.setState({first_name: first_name})}
                icon_url={icons.nameIcon} value={first_name} current_language={current_language}
                test_id={"first_name"} type_input="first_name" iconStyle={{height:20}}
              />
              <CustomInputText placeholder={t("Last name")} underlineColorAndroid='transparent'
                onChangeText={last_name => this.setState({last_name: last_name})}
                icon_url={icons.nameIcon} value={last_name} current_language={current_language}
                test_id={"last_name"} type_input="last_name" iconStyle={{height:20}}
              />
              <CustomInputText placeholder={t("Email")} underlineColorAndroid='transparent'
                onChangeText={email => this.setState({email: email})} value={email}
                icon_url={icons.emailIcon}  iconStyle={{height:26, width: 25, marginRight: 18}}
                current_language={current_language} test_id={"email"}  type_input="email"
              />
              <CustomInputText placeholder={t("Username")} underlineColorAndroid='transparent'
                onChangeText={username => this.setState({username: username})} value={username}
                icon_url={icons.usernameIcon}
                current_language={current_language} test_id={"username"} type_input="username"
              />
              <CustomInputText placeholder={t("Password")} underlineColorAndroid='transparent' secureTextEntry={true}
                onChangeText={password => this.setState({password: password})}
                icon_url={icons.passwordIcon} value={password} current_language={current_language}
                test_id={"password"} type_input="password"  iconStyle={{height:28, width: 24, marginRight: 18}}
              />
              <CustomInputText placeholder={t("Confirm password")} underlineColorAndroid='transparent' secureTextEntry={true}
                onChangeText={password_confirmation => this.setState({password_confirmation: password_confirmation})}
                icon_url={icons.passwordIcon} value={password_confirmation} current_language={current_language}
                test_id={"password_confirmation"} type_input="password" iconStyle={{height:28, width: 24, marginRight: 18}}
              />
              <CustomCountriesSelect placeholder={t("Country")} underlineColorAndroid='transparent'
                onSelect={(country_code) => {
                  var new_state = {country_code: country_code};
                  if(country_code && !this.state.phone_number){
                    var selected_country = country_code && get_contry_by_code(country_code);
                    if(selected_country){
                      new_state.country_phone_code = selected_country.phone_code_str;
                    }
                  }
                  this.setState(new_state);
                }} value={country_code}
                icon_url={icons.countryIcon} iconStyle={{width: 24, marginRight: 18}}
                current_language={current_language} test_id={"country"} type_select="country"
              />
              <CustomPhoneNumber country_search_place_holder={t("Search by country or by code")} placeholder={t("Phone number")} underlineColorAndroid='transparent'
                onChangeText={(phone_number, country_phone_code) => this.setState({phone_number: phone_number, country_phone_code: country_phone_code})} value={phone_number}
                icon_url={icons.phoneIcon} iconStyle={{width: 25, marginRight: 10}} disabled={false} country_phone_code={country_phone_code}
                current_language={current_language} test_id={"phone_number"} type_phone_number="phone" is_valid_phone_number={is_valid_phone_number}
              />
              <CustomTextArea placeholder={t("Address")} underlineColorAndroid='transparent'
                onChangeText={address => this.setState({address: address})} value={address}
                icon_url={icons.addressIcon} multiline={true}
                current_language={current_language} test_id={"address"} numberOfLines={2} type_textares="address"
              />
              <CustomTouchableOpacity onPress={() => this.onClickListener('register')}
                text={t("Sign up")} style={styles.loginButton}
              />
              <CustomTouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}
                text={t("Sign in")} style={styles.loginButton}
              />
          </ScrollView>
        </View>
    )
  }
}
const styles = StyleSheet.create({
    body: {
      backgroundColor: COLORS.default_color,
      flex: 1,
      justifyContent: 'center',
    },
    scrollView: {
      alignItems: 'center',
      flexGrow: 1,
      width: '100%',
      paddingTop: 10,
    },
    loginButton: {
      backgroundColor: "#00b5ec",
      elevation: 19, // works on android
      shadowColor: "#808080",
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.50,
      shadowRadius: 12.35,
    },
    background: {
      height: '100%',
      opacity: 0.2,
      position: 'absolute',
      top: 0,
      width: '100%',
    },
});
const mapStateToProps = (state) => {
  return {
    current_language: state.current_language
  }
}
export default connect(mapStateToProps)(SignUp);
