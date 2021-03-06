import React from 'react';
import { StyleSheet, View, TextInput, Button, Image } from 'react-native';
import {logos} from '../../images';

class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <Image style={styles.logo} source={logos.logo}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header: {
      flex: 1,
      alignItems: 'center',
      borderBottomWidth: 3,
      borderColor: "#fff"
    },
    logo: {
      maxHeight: '90%',
      maxWidth: 150,
    }
});
export default Header;
