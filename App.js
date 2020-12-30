import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';



export default function App() {
  return (
 <View style={styles.container}>

    <Text>Welcome to my hybrid app, it works in both iOS and Android.</Text>
    <TextInput
      style={{ width:200, height: 40, borderColor: 'gray', borderWidth: 1 }}/>
      
    

    <StatusBar style="auto" />
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
});
