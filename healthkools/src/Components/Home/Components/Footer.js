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
      alignItems: 'center',
      borderColor: "#fff",
      borderTopWidth: 3,
      flex: 1,
    },
    logo: {
      marginTop: 5,
      maxHeight: '90%',
      maxWidth: 150,
    }
});
export default Footer;
