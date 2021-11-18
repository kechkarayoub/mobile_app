import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import SignIn from "./components/sign_in";

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
            <ImageBackground source={logos.logo} style={styles.background}/>
            {selected_view === "sign_in" ?
              <SignIn/>
            :
              <>
              </>
            }
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
    background: {
      top: 25,
      position: 'absolute',
      width: '100%',
      height: '100%',
      opacity: 0.2
    },
});
export default Home;
