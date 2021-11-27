import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

class HKATouchableOpacity extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity style={[this.props.is_not_button ? styles.notButtonCotainer : styles.buttonContainer, this.props.style || {}]}
        onPress={this.props.onPress}
      >
        <Text style={[this.props.is_not_button ? styles.notButtonText : styles.buttonText, this.props.textStyle || {}]}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:300,
    borderRadius:30,
    backgroundColor:'transparent'
  },
  notButtonCotainer: {
    height:15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom:10,
    width:300,
    backgroundColor:'transparent'
  },
  buttonText: {
    color: 'white',
  },
  notButtonText:{
    color:"white",
    fontWeight:'bold',
    height: 20,
  }
});
export default HKATouchableOpacity;
