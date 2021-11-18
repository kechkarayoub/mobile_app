import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import HKAInputText from './form_fields/HKAInputText';
import HKATouchableOpacity from './form_fields/HKATouchableOpacity';
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email_or_username: '',
      password: '',
    }
  }
  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }
  render() {
    const email_or_username = this.state.email_or_username, password = this.state.password;
    return (
        <View style={styles.body}>
          <HKAInputText placeholder={"Email or username"} underlineColorAndroid='transparent'
            onChangeText={email_or_username => this.setState({email_or_username: email_or_username})}
            icon_url="https://img.icons8.com/nolan/40/000000/email.png" value={email_or_username}
          />
          <HKAInputText placeholder={"Password"} underlineColorAndroid='transparent' secureTextEntry={true}
            onChangeText={password => this.setState({password: password})}
            icon_url="https://img.icons8.com/nolan/40/000000/key.png" value={password}
          />
          <HKATouchableOpacity is_not_button={true} onPress={() => this.onClickListener('restore_password')}
            text={'Forgot your password?'} style={{marginBottom: 25}}
          />
          <HKATouchableOpacity onPress={() => this.onClickListener('login')}
            text={'Login'} style={styles.loginButton}
          />
          <HKATouchableOpacity onPress={() => this.onClickListener('register')}
            text={'Register'} style={styles.loginButton}
          />
        </View>
    )
  }
}
const styles = StyleSheet.create({
    body: {
      flex: 1,
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
});
export default SignIn;
