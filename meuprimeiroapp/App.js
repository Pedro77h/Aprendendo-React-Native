import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.outtitle}>Meu Primeiro App</Text>
        <View style={styles.card}>
      <Text style={styles.title}>Hello World!</Text>
        <Text style={styles.subtitle}>Minha primeira experiencia com React native</Text>
      </View>
      <StatusBar style="inverted" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    Color: '#fff' ,
    flex: 1,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },

  outtitle:{
    fontSize: 22 , 
    color: '#fff'
  },

  card:{
    backgroundColor: '#fff' ,
    padding: 12 ,
    borderRadius: 15
  },
  title: {
    fontSize: 22 ,
    fontWeight: 'bold'
  } ,
  subtitle:{
    color: '#999' ,
    fontSize: 15
  }

});
