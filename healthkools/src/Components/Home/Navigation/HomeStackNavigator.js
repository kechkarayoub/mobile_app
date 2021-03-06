import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../Components/SignIn';
import SignUp from '../Components/SignUp';
import React from 'react';
import { connect } from 'react-redux'

import {t} from '../../../i18n';
import { StyleSheet, View, ImageBackground } from 'react-native';
const Stack = createNativeStackNavigator();
class HomeStackNavigator extends React.Component  {
    constructor(props) {
      super(props);
      this.state = {
        current_language: props.current_language,
      };
      if(!t("Arabic")){
        setTimeout(() => {
          this.setState({current_language: this.state.current_language});
        }, 10);
      }
    }
    // static getDerivedStateFromProps(props, state) {
    //  var new_state = {};
    //  var return_new_state = false;
    //  if () {
    //  }
    //  return return_new_state ? new_state : null;
    // }
    // componentDidUpdate(prevProps, prevState){
    // }
    render() {
      return (
            <NavigationContainer>
              <Stack.Navigator initialRouteName={"SignIn"} screenOptions={{headerTitleAlign: 'center'}}>
                <Stack.Screen name="SignIn" options={{title: t("Sign in")}}>
                  {props => <SignIn {...props} t={t}/>}
                </Stack.Screen>
                <Stack.Screen name="SignUp" options={{title: t("Sign up")}}>
                  {props => <SignUp {...props} t={t} />}
                </Stack.Screen>
              </Stack.Navigator>
            </NavigationContainer>
      )
    }
}
const mapStateToProps = (state) => {
  return {
    current_language: state.current_language,
  }
}
export default connect(mapStateToProps)(HomeStackNavigator);
