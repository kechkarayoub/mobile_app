import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import HomeStackNavigator from './Navigation/HomeStackNavigator';
import LanguagePicker from '../Common/LanguagePicker';
import {COLORS} from "../../variables/colors";

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
      backgroundColor: COLORS.default_color,
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
});
export default Home;
