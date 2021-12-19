import React from 'react';
import { StyleSheet, View, TextInput, Image, Alert } from 'react-native';
import Select from "react-select-native";
class HKACountriesSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_language: props.current_language,
      icon_url: props.icon_url,
      placeholder: props.placeholder,
      test_id: props.test_id,
      value: props.value,
      countries_options: props.countries_options,
      disabled: props.disabled,
    }
  }
  static getDerivedStateFromProps(props, state) {
    var new_state = {};
    var return_new_state = false;
    if (props.current_language !== state.current_language) {
      new_state.current_language = props.current_language;
      new_state.countries_options = props.countries_options;
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
    if (props.disabled !== state.disabled) {
      new_state.disabled = props.disabled;
      return_new_state = true;
    }
    return return_new_state ? new_state : null;
  }
  render() {
    const {current_language, icon_url, disabled, placeholder, countries_options, test_id, value} = this.state;
    var selected_country_option = value ? countries_options.filter(c_o => c_o.value === value)[0] : null;
    console.log("countries_options: ", countries_options)
    console.log("selected_country_option: ", selected_country_option)
    return (
      <View style={styles.selectContainer}>
        {/*<Select
          onChange={value => {
            if(this.props.onSelect){
              this.props.onSelect(value);
            }
            else{
              this.setState({value: value})
            }
          }}
          options={countries_options}
          value={selected_country_option}
          defaultValue={countries_options[0].value}
        />*/}
        <Image style={styles.selectIcon} source={{uri: icon_url}}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  selectContainer: {
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
  select:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  selectIcon:{
    width:30,
    height:30,
    marginRight:15,
    justifyContent: 'center',
  },
});
export default HKACountriesSelect;
