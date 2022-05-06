import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/logo.png';
export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}/>
      <Text style={styles.message}>Assistant Trainer. Quelle séance voulez vous faire aujourd'hui ?</Text>
      <Text style ={styles.buttonMenu}>Push</Text>
      <Text style ={styles.buttonMenu}>Pull</Text>
      <Text style ={styles.buttonMenu}>Leg</Text>
      <Text style ={styles.buttonMenu}>Haut</Text>
      <Text style ={styles.buttonMenu}>Bas</Text>
      <Text style ={styles.buttonMenu}>FullBody</Text>
      <Text style ={styles.buttonMenu}>Personnalisé</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 0,
  },
  message: {
    color: '#888',
    fontSize: 19,
    textAlign: 'center',
    margin: 20,
    padding: 15,
    borderWidth: 1,
    borderColor:'#aaa',
    borderRadius: 20
  },
  buttonMenu: {
    color: '#888',
    paddingVertical: 8,
    paddingHorizontal: 29,
    fontSize: 18,
    marginTop: 30,
    borderWidth: 1,
    borderColor:'#aaa',
    borderRadius: 20
  }
});
