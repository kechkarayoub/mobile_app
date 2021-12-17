import React from 'react';
import { StyleSheet, View, Alert, ImageBackground, I18nManager as RNI18nManager, } from 'react-native';
import HKAInputText from '../../FormFields/HKAInputText';
import HKATouchableOpacity from '../../FormFields/HKATouchableOpacity';
// import {set_locale, t} from '../../../i18n'
import { connect } from 'react-redux'
import { Updates } from 'expo';
import {logos} from '../../images';
import {t} from '../../../i18n';
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      current_language: "en",
      username_or_email: '',
      password: '',
    }
    if(!t("Arabic")){
      setTimeout(() => {
        this.setState({current_language: this.state.current_language});
      }, 10);
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
    const username_or_email = this.state.username_or_email, password = this.state.password, current_language = this.state.current_language;
    const {first_name, last_name} = this.state;

    return (
        <View style={styles.body}>
          <ImageBackground source={logos.logo} style={styles.background}/>
          <HKAInputText placeholder={t("Last name")} underlineColorAndroid='transparent'
            onChangeText={last_name => this.setState({last_name: last_name})}
            icon_url="https://img.icons8.com/nolan/40/000000/email.png" value={last_name} current_language={current_language}
          />
          <HKAInputText placeholder={t("First name")} underlineColorAndroid='transparent'
            onChangeText={first_name => this.setState({first_name: first_name})}
            icon_url="https://img.icons8.com/nolan/40/000000/email.png" value={first_name} current_language={current_language}
          />
          <HKAInputText placeholder={t("Username or email")} underlineColorAndroid='transparent'
            onChangeText={username_or_email => this.setState({username_or_email: username_or_email})}
            icon_url="https://img.icons8.com/nolan/40/000000/email.png" value={username_or_email} current_language={current_language}
          />
          <HKAInputText placeholder={t("Password")} underlineColorAndroid='transparent' secureTextEntry={true}
            onChangeText={password => this.setState({password: password})}
            icon_url="https://img.icons8.com/nolan/40/000000/key.png" value={password} current_language={current_language}
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
export default connect(mapStateToProps)(SignUp);
