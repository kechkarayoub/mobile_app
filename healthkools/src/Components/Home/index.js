import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import HomeStackNavigator from './Navigation/HomeStackNavigator';
import LanguagePicker from '../Common/LanguagePicker';
import PropTypes from 'prop-types';
import {COLORS} from "../../variables/colors";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_view: 'sign_in',
    };
  }
  static get propTypes() {
    return {
        t: PropTypes.func
    };
  }
  render() {
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
