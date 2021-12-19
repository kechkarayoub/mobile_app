import React from 'react';
import { StyleSheet, View, TextInput, Image, Alert } from 'react-native';

class HKATextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_language: props.current_language,
      icon_url: props.icon_url,
      keyboardType: props.keyboardType,
      placeholder: props.placeholder,
      secureTextEntry: props.secureTextEntry,
      test_id: props.test_id,
      underlineColorAndroid: props.underlineColorAndroid,
      value: props.value,
      multiline: props.multiline,
      numberOfLines: props.numberOfLines,
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
      <View style={styles.textAreaContainer}>
        <TextInput style={[styles.textArea, this.props.style || {}]}
          value={value}
          multiline={multiline}
          numberOfLines={numberOfLines}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          underlineColorAndroid={underlineColorAndroid}
          testID={test_id}
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
  textAreaContainer: {
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
  textArea:{
    height:45,
    marginLeft:16,
    flex:1,
    padding: 5,
  },
  inputIcon:{
    width:30,
    height:30,
    marginRight:15,
    justifyContent: 'center',
  },
});
export default HKATextArea;
