import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../Components/SignIn';
import SignUp from '../Components/SignUp';
import React from 'react';
import { connect } from 'react-redux'

import { StyleSheet, View, ImageBackground } from 'react-native';
const Stack = createNativeStackNavigator();
class HomeStackNavigator extends React.Component  {
    constructor(props) {
      super(props);
      this.state = { initial_route_name: props.initial_route_name };
    }
    //static getDerivedStateFromProps(props, state) {
    //  var new_state = {};
    //  var return_new_state = false;
    //  if (props.initial_route_name !== state.initial_route_name) {
    //    new_state.initial_route_name = props.initial_route_name;
    //    return_new_state = true;
    //  }
    //  return return_new_state ? new_state : null;
    //}
    //componentDidUpdate(prevProps, prevState){
    //}
    render() {
      const t = this.props.t;
      //const initialRouteName = this.state.initial_route_name || 'SignUp';
      //console.log("initialRouteName: ", initialRouteName)
      return (
            <NavigationContainer>
              <Stack.Navigator initialRouteName={'SignIn' || initialRouteName} screenOptions={{headerTitleAlign: 'center'}}>
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
    initial_route_name: state.initial_route_name
  }
}
export default connect(mapStateToProps)(HomeStackNavigator);
