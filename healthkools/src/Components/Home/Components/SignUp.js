import React from 'react';
import { StyleSheet, View, Alert, ImageBackground, I18nManager as RNI18nManager, } from 'react-native';
import HKAInputText from '../../FormFields/HKAInputText';
import HKATextArea from '../../FormFields/HKATextArea';
import HKACountriesSelect from '../../FormFields/HKACountriesSelect';
import HKATouchableOpacity from '../../FormFields/HKATouchableOpacity';
// import {set_locale, t} from '../../../i18n'
import { connect } from 'react-redux'
import { Updates } from 'expo';
import {logos} from '../../images';
import {t} from '../../../i18n';
import moment from 'moment';
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      birthday: moment().add(-30, "years").toDate(),
      country_code: "",
      country_name: "",
      current_language: props.current_language,
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
          <HKAInputText placeholder={t("First name")} underlineColorAndroid='transparent'
            onChangeText={first_name => this.setState({first_name: first_name})}
            icon_url="https://img.icons8.com/nolan/40/000000/email.png" value={first_name} current_language={current_language}
            test_id={"first_name"}
          />
          <HKAInputText placeholder={t("Last name")} underlineColorAndroid='transparent'
            onChangeText={last_name => this.setState({last_name: last_name})}
            icon_url="https://img.icons8.com/nolan/40/000000/email.png" value={last_name} current_language={current_language}
            test_id={"last_name"}
          />
          <HKAInputText placeholder={t("Email")} underlineColorAndroid='transparent'
            onChangeText={email => this.setState({email: email})} value={email}
            icon_url="https://img.icons8.com/nolan/40/000000/email.png"
            current_language={current_language} test_id={"email"}
          />
          <HKAInputText placeholder={t("Username")} underlineColorAndroid='transparent'
            onChangeText={username => this.setState({username: username})} value={username}
            icon_url="https://img.icons8.com/nolan/40/000000/email.png"
            current_language={current_language} test_id={"username"}
          />
          <HKAInputText placeholder={t("Password")} underlineColorAndroid='transparent' secureTextEntry={true}
            onChangeText={password => this.setState({password: password})}
            icon_url="https://img.icons8.com/nolan/40/000000/key.png" value={password} current_language={current_language}
            test_id={"password"}
          />
          <HKAInputText placeholder={t("Confirm password")} underlineColorAndroid='transparent' secureTextEntry={true}
            onChangeText={password_confirmation => this.setState({password_confirmation: password_confirmation})}
            icon_url="https://img.icons8.com/nolan/40/000000/key.png" value={password_confirmation} current_language={current_language}
            test_id={"password_confirmation"}
          />
          <HKACountriesSelect placeholder={t("Country")} underlineColorAndroid='transparent'
            onSelect={country_code => this.setState({country_code: country_code})} value={country_code}
            icon_url="https://img.icons8.com/nolan/40/000000/email.png"
            current_language={current_language} test_id={"country"}
          />
          <HKATextArea placeholder={t("Address")} underlineColorAndroid='transparent'
            onChangeText={address => this.setState({address: address})} value={address}
            icon_url="https://img.icons8.com/nolan/40/000000/email.png" multiline={true}
            current_language={current_language} test_id={"address"} numberOfLines={2}
          />
          <HKATouchableOpacity onPress={() => this.onClickListener('register')}
            text={t("Sign up")} style={styles.loginButton}
          />
          <HKATouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}
            text={t("Sign in")} style={styles.loginButton}
          />
        </View>
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
      top: 0,
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
export default connect(mapStateToProps)(SignUp);
