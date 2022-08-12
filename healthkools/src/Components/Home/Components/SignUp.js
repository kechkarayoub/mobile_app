import React from 'react';
import { ScrollView, StyleSheet, View, Alert, ImageBackground, I18nManager as RNI18nManager, } from 'react-native';
import CustomInputText from '../../FormFields/CustomInputText';
import CustomTextArea from '../../FormFields/CustomTextArea';
import CustomCountriesSelect from '../../FormFields/CustomCountriesSelect';
import CustomTouchableOpacity from '../../FormFields/CustomTouchableOpacity';
// import {set_locale, t} from '../../../i18n'
import { connect } from 'react-redux'
import { Updates } from 'expo';
import {logos} from '../../images';
import {t} from '../../../i18n';
import moment from 'moment';
import {COLORS} from "../../../variables/colors";
import {images} from "../_ressources";
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      birthday: moment().add(-30, "years").toDate(),
      country_code: "",
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
  componentDidUpdate(prevProps, prevState){
    if(prevState.current_language !== this.state.current_language){
      this.setState({current_language: this.state.current_languag})
    }
  }
  onClickListener = (viewId) => {
    var current_language = "en";
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
  render() {
    const {address, birthday, country_code, current_language, email, error_messages, first_name, gender, invalid_messages,
      is_valid_phone_number, last_name, network_error, password, password_confirmation, phone_number, registration_messages,
      username, valid_messages} = this.state;

    return (
        <View style={styles.body}>
          <ImageBackground source={logos.logo} style={styles.background}/>
          <ScrollView contentContainerStyle={styles.scrollView}>
              <CustomInputText placeholder={t("First name")} underlineColorAndroid='transparent'
                onChangeText={first_name => this.setState({first_name: first_name})}
                icon_url={images.nameIcon} value={first_name} current_language={current_language}
                test_id={"first_name"} type_input="first_name" iconStyle={{height:20}}
              />
              <CustomInputText placeholder={t("Last name")} underlineColorAndroid='transparent'
                onChangeText={last_name => this.setState({last_name: last_name})}
                icon_url={images.nameIcon} value={last_name} current_language={current_language}
                test_id={"last_name"} type_input="last_name" iconStyle={{height:20}}
              />
              <CustomInputText placeholder={t("Email")} underlineColorAndroid='transparent'
                onChangeText={email => this.setState({email: email})} value={email}
                icon_url={images.emailIcon}  iconStyle={{height:26, width: 25, marginRight: 18}}
                current_language={current_language} test_id={"email"}  type_input="email"
              />
              <CustomInputText placeholder={t("Username")} underlineColorAndroid='transparent'
                onChangeText={username => this.setState({username: username})} value={username}
                icon_url={images.usernameIcon}
                current_language={current_language} test_id={"username"} type_input="username"
              />
              <CustomInputText placeholder={t("Password")} underlineColorAndroid='transparent' secureTextEntry={true}
                onChangeText={password => this.setState({password: password})}
                icon_url={images.passwordIcon} value={password} current_language={current_language}
                test_id={"password"} type_input="password"  iconStyle={{height:28, width: 24, marginRight: 18}}
              />
              <CustomInputText placeholder={t("Confirm password")} underlineColorAndroid='transparent' secureTextEntry={true}
                onChangeText={password_confirmation => this.setState({password_confirmation: password_confirmation})}
                icon_url={images.passwordIcon} value={password_confirmation} current_language={current_language}
                test_id={"password_confirmation"} type_input="password" iconStyle={{height:28, width: 24, marginRight: 18}}
              />
              <CustomCountriesSelect placeholder={t("Country")} underlineColorAndroid='transparent'
                onSelect={country_code => this.setState({country_code: country_code})} value={country_code}
                icon_url={images.countryIcon} iconStyle={{width: 24, marginRight: 18}}
                current_language={current_language} test_id={"country"} type_select="country"
              />
              <CustomTextArea placeholder={t("Address")} underlineColorAndroid='transparent'
                onChangeText={address => this.setState({address: address})} value={address}
                icon_url={images.addressIcon} multiline={true}
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
