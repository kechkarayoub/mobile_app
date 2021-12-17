import React from 'react';
import { StyleSheet, View, TextInput, Button, Image } from 'react-native';
import {logos} from '../../images';

class Footer extends React.Component {
    render() {
        return (
            <View style={styles.footer}>
                <Image style={styles.logo} source={logos.logo}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    footer: {
      flex: 1,
      alignItems: 'center',
      borderTopWidth: 3,
      borderColor: "#fff"
    },
    logo: {
      marginTop: 5,
      maxHeight: '90%',
      maxWidth: 150,
    }
});
export default Footer;
