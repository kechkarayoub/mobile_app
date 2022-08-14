import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

class CustomTouchableOpacity extends React.Component {
  constructor(props) {
    super(props);
  }
  static get propTypes() {
    return {
      is_not_button: PropTypes.boolean,
      onPress: PropTypes.fun,
      style: PropTypes.object,
      text: PropTypes.string,
      textStyle: PropTypes.object,
    };
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
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 30,
    flexDirection: 'row',
    height: 45,
    justifyContent: 'center',
    marginBottom: 20,
    width: 300,
  },
  notButtonCotainer: {
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    height: 15,
    justifyContent: 'flex-end',
    marginBottom: 10,
    width: 300,
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
export default CustomTouchableOpacity;
