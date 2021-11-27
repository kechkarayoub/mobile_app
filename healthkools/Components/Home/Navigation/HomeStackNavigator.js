import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../Components/SignIn';
import SignUp from '../Components/SignUp';
import React from 'react';

import { StyleSheet, View, ImageBackground } from 'react-native';
const Stack = createNativeStackNavigator();
class HomeStackNavigator extends React.Component  {

    render() {
      const t = this.props.t;
      return (
            <NavigationContainer>
              <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
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
export default HomeStackNavigator;
