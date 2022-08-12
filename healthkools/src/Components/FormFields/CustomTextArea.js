import React from 'react';
import { StyleSheet, View, TextInput, Image, Alert } from 'react-native';

class CustomTextArea extends React.Component {
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
      type_textarea: props.type_textarea,
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
    const {current_language, icon_url, keyboardType, placeholder, secureTextEntry, test_id, type_textarea, underlineColorAndroid, value, multiline, numberOfLines} = this.state;
    return (
      <View style={styles.textAreaContainer}>
        <TextInput
          keyboardType={keyboardType}
          multiline={multiline}
          numberOfLines={numberOfLines}
          placeholder={placeholder}
          onChangeText={(value) => {
            if(this.props.onChangeText){
              this.props.onChangeText(value);
            }
            else{
              this.setState({value: value})
            }
          }}
          secureTextEntry={secureTextEntry}
          style={[styles.textArea, this.props.style || {}]}
          testID={test_id}
          underlineColorAndroid={underlineColorAndroid}
          value={value}
        />
        <Image style={styles.inputIcon} source={icon_url}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  textAreaContainer: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#F5FCFF',
    borderBottomWidth: 1,
    borderRadius: 30,
    elevation: 5, // works on android
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
    height: 45,
    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: 300,
  },
  textArea:{
    flex: 1,
    height: 45,
    marginLeft: 16,
    padding: 5,
  },
  inputIcon:{
    height: 30,
    justifyContent: 'center',
    marginRight: 15,
    width: 30,
  },
});
export default CustomTextArea;
