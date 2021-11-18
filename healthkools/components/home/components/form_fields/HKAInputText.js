import React from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';

class HKAInputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon_url: props.icon_url,
      keyboardType: props.keyboardType,
      placeholder: props.placeholder,
      secureTextEntry: props.secureTextEntry,
      underlineColorAndroid: props.underlineColorAndroid,
      value: props.value,
    }
  }
  render() {
    const {icon_url, keyboardType, placeholder, secureTextEntry, underlineColorAndroid, value} = this.state;
    return (
      <View style={styles.inputContainer}>
        <TextInput style={[styles.inputs, this.props.style || {}]}
          default_value={value}
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
    justifyContent: 'center'
  },
});
export default HKAInputText;
