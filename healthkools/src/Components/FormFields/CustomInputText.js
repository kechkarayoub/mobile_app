import React from 'react';
import { StyleSheet, View, TextInput, Image, Alert } from 'react-native';

class CustomInputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_language: props.current_language,
      icon_url: props.icon_url,
      keyboardType: props.keyboardType,
      multiline: props.multiline,
      numberOfLines: props.numberOfLines,
      placeholder: props.placeholder,
      secureTextEntry: props.secureTextEntry,
      test_id: props.test_id,
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
    const {current_language, icon_url, keyboardType, placeholder, secureTextEntry, test_id, underlineColorAndroid, value, multiline, numberOfLines} = this.state;
    return (
      <View style={styles.inputContainer}>
        <TextInput 
          keyboardType={keyboardType}
          multiline={multiline}
          numberOfLines={numberOfLines}
          onChangeText={(value) => {
            if(this.props.onChangeText){
              this.props.onChangeText(value);
            }
            else{
              this.setState({value: value})
            }
          }}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          style={[styles.inputs, this.props.style || {}]}
          testID={test_id}
          value={value}
          underlineColorAndroid={underlineColorAndroid}
        />
        <Image style={styles.inputIcon} source={{uri: icon_url}}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  inputContainer: {
    alignItems:'center',
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#F5FCFF',
    borderBottomWidth: 1,
    borderRadius:30,
    display: 'flex',
    elevation: 5, // works on android
    flexDirection: 'row',
    height:45,
    marginBottom:20,
    shadowColor: "#808080",
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width:300,
  },
  inputs:{
    flex:1,
    borderBottomColor: '#FFFFFF',
    height:45,
    marginLeft:16,
  },
  inputIcon:{
    height:30,
    justifyContent: 'center',
    marginRight:15,
    width:30,
  },
});
export default CustomInputText;
