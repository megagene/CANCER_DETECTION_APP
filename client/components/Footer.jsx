import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Linking } from 'react-native';

function Footer() {
  return (
    <View style={styles.footerContainer}>
        <View style={styles.flexContainer}>
          <Text style={styles.textStyle}>Made by Adofo Michael</Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/michael-adofo-657b62230/')}>
            <AntDesign name="linkedin-square" size={24} color="white" />
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#4a90e2',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  flexContainer: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  textStyle: {
    color: 'white',
    marginRight: 10,
  },
});

export default Footer;
