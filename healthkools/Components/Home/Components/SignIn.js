import React from 'react';
import { StyleSheet, View, Alert, ImageBackground, I18nManager as RNI18nManager, } from 'react-native';
import HKAInputText from '../../FormFields/HKAInputText';
import HKATouchableOpacity from '../../FormFields/HKATouchableOpacity';
// import {set_locale, t} from '../../../i18n'
import { connect } from 'react-redux'
import { Updates } from 'expo';
import {logos} from '../../images';
import {set, get} from '../../../Store/locale';
import {t} from '../../../i18n';
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    if("restore_password" == viewId){
      current_language = "ar"
    }
    Alert.alert("Alert", "current_language "+this.props.current_language);
    set("currentlanguage", current_language);
    const action = { type: "CHANGE_LANGUAGE", value: current_language }
    this.props.dispatch(action);
  }
  render() {
    const username_or_email = this.state.username_or_email, password = this.state.password, current_language = this.state.current_language;
    return (
        <View style={styles.body}>
          <ImageBackground source={logos.logo} style={styles.background}/>
          <HKAInputText placeholder={t("Username or email")} underlineColorAndroid='transparent'
            onChangeText={username_or_email => this.setState({username_or_email: username_or_email})}
            icon_url="https://img.icons8.com/nolan/40/000000/email.png" value={username_or_email} current_language={current_language}
          />
          <HKAInputText placeholder={t("Password")} underlineColorAndroid='transparent' secureTextEntry={true}
            onChangeText={password => this.setState({password: password})}
            icon_url="https://img.icons8.com/nolan/40/000000/key.png" value={password} current_language={current_language}
          />
          <HKATouchableOpacity is_not_button={true} onPress={() => this.onClickListener('restore_password')}
            text={t("Forgot your password?")} style={{marginBottom: 25}}
          />
          <HKATouchableOpacity onPress={() => this.onClickListener('login')}
            text={t("Sign in")} style={styles.loginButton}
          />
          <HKATouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}
            text={t("Sign up")} style={styles.loginButton}
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
export default connect(mapStateToProps)(SignIn);
