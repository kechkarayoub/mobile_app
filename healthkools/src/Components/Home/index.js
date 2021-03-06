import React from 'react';
import { StyleSheet, View } from 'react-native';
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import HomeStackNavigator from './Navigation/HomeStackNavigator';
import LanguagePicker from '../Common/LanguagePicker';

import {logos} from '../images';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_view: 'sign_in',
    };
  }
  render() {
    const selected_view = this.state.selected_view;
      return (
          <View style={styles.home}>
            <LanguagePicker />
            <HomeStackNavigator t={this.props.t}/>
          </View>
      )
  }
}
const styles = StyleSheet.create({
    home: {
      flex: 1,
      backgroundColor: '#1fa1cf',
      paddingTop: 25
    },
});
export default Home;
