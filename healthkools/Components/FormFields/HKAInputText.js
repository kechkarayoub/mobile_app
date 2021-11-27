import React from 'react';
import { StyleSheet, View, TextInput, Image, Alert } from 'react-native';

class HKAInputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_language: props.current_language,
      icon_url: props.icon_url,
      keyboardType: props.keyboardType,
      placeholder: props.placeholder,
      secureTextEntry: props.secureTextEntry,
      underlineColorAndroid: props.underlineColorAndroid,
      value: props.value,
    }
  }
  static getDerivedStateFromProps(props, state) {
    var new_state = {};
    var return_new_state = false;
    if (props.current_language !== state.current_language) {
      new_state.current_language = props.current_language;
      return_new_state = true;
    }
    if (props.placeholder !== state.placeholder) {
      new_state.placeholder = props.placeholder;
      return_new_state = true;
    }
    if (props.value !== state.value) {
      new_state.value = props.value;
      return_new_state = true;
    }
    return return_new_state ? new_state : null;
  }
  render() {
    const {current_language, icon_url, keyboardType, placeholder, secureTextEntry, underlineColorAndroid, value} = this.state;
    return (
      <View style={styles.inputContainer}>
        <TextInput style={[styles.inputs, this.props.style || {}]}
          value={value}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          underlineColorAndroid={underlineColorAndroid}
          onChangeText={(value) => {
            if(this.props.onChangeText){
              this.props.onChangeText(value);
            }
            else{
              this.setState({value: value})
            }
          }}/>
        <Image style={styles.inputIcon} source={{uri: icon_url}}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:300,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center',
    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    display: 'flex',
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginRight:15,
    justifyContent: 'center',
  },
});
export default HKAInputText;
